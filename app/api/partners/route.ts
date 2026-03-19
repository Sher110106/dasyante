import { NextResponse } from 'next/server'

// Uses the same JSONBin as the waitlist (JSONBIN_BIN_ID) but stores
// partner applications under a separate "applications" key.
const JSONBIN_API = 'https://api.jsonbin.io/v3/b'
const ACCESS_KEY = process.env.JSONBIN_ACCESS_KEY!
const BIN_ID = process.env.JSONBIN_BIN_ID!

interface PartnerApplication {
  brandName: string
  contactName: string
  email: string
  website: string
  description: string
  submittedAt: string
}

interface BinData {
  emails?: { email: string; joinedAt: string }[]
  applications?: PartnerApplication[]
}

async function getBin(): Promise<BinData> {
  const res = await fetch(`${JSONBIN_API}/${BIN_ID}/latest`, {
    headers: { 'X-Master-Key': ACCESS_KEY },
  })
  if (!res.ok) throw new Error(`Failed to read bin: ${res.status}`)
  const json = await res.json()
  return json.record as BinData
}

async function updateBin(data: BinData): Promise<void> {
  const res = await fetch(`${JSONBIN_API}/${BIN_ID}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'X-Master-Key': ACCESS_KEY,
    },
    body: JSON.stringify(data),
  })
  if (!res.ok) throw new Error(`Failed to update bin: ${res.status}`)
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { brandName, contactName, email, website, description } = body

    if (!brandName || !contactName || !email || !description) {
      return NextResponse.json({ error: 'All required fields must be filled.' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
    }

    const data = await getBin()
    const applications = data.applications ?? []

    const alreadyApplied = applications.some(
      (app) => app.email.toLowerCase() === email.trim().toLowerCase()
    )
    if (alreadyApplied) {
      return NextResponse.json(
        { success: true, message: "We already have your application on file. We'll be in touch." },
        { status: 200 }
      )
    }

    applications.push({
      brandName: brandName.trim(),
      contactName: contactName.trim(),
      email: email.trim().toLowerCase(),
      website: website?.trim() || '',
      description: description.trim(),
      submittedAt: new Date().toISOString(),
    })

    await updateBin({ ...data, applications })

    console.log(`[Partners] New application: ${brandName} (${email})`)

    return NextResponse.json(
      { success: true, message: "Application received. We'll be in touch within 5–7 business days." },
      { status: 200 }
    )
  } catch (err) {
    console.error('[Partners] Error:', err)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
