import { NextResponse } from 'next/server'

const JSONBIN_API = 'https://api.jsonbin.io/v3/b'
const ACCESS_KEY = process.env.JSONBIN_ACCESS_KEY!
const BIN_ID = process.env.JSONBIN_BIN_ID!

interface WaitlistEntry {
  email: string
  joinedAt: string
}

interface BinData {
  emails: WaitlistEntry[]
}

async function getBin(): Promise<BinData> {
  const res = await fetch(`${JSONBIN_API}/${BIN_ID}/latest`, {
    headers: {
      'X-Master-Key': ACCESS_KEY,
    },
  })

  if (!res.ok) {
    throw new Error(`Failed to read bin: ${res.status}`)
  }

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

  if (!res.ok) {
    throw new Error(`Failed to update bin: ${res.status}`)
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email } = body

    // Validate email
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      )
    }

    const normalizedEmail = email.trim().toLowerCase()

    // Read current bin data
    const data = await getBin()

    // Check for duplicate
    const alreadyExists = data.emails.some(
      (entry) => entry.email === normalizedEmail
    )

    if (alreadyExists) {
      return NextResponse.json(
        { success: true, message: 'You\'re already on the list.' },
        { status: 200 }
      )
    }

    // Append new entry
    data.emails.push({
      email: normalizedEmail,
      joinedAt: new Date().toISOString(),
    })

    // Write back to bin
    await updateBin(data)

    console.log(`[Waitlist] New signup: ${normalizedEmail} (total: ${data.emails.length})`)

    return NextResponse.json(
      { success: true, message: 'Successfully joined the waitlist' },
      { status: 200 }
    )
  } catch (err) {
    console.error('[Waitlist] Error:', err)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
