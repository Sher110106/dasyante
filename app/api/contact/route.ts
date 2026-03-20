import { NextResponse } from 'next/server'

const JSONBIN_API = 'https://api.jsonbin.io/v3/b'
const ACCESS_KEY = process.env.JSONBIN_ACCESS_KEY!
const BIN_ID = process.env.JSONBIN_BIN_ID!

interface ContactMessage {
  name: string
  email: string
  topic: string
  message: string
  submittedAt: string
}

interface BinData {
  emails: unknown[]
  messages: ContactMessage[]
}

async function getBin(): Promise<BinData> {
  const res = await fetch(`${JSONBIN_API}/${BIN_ID}/latest`, {
    headers: { 'X-Master-Key': ACCESS_KEY },
  })
  if (!res.ok) throw new Error(`Failed to read bin: ${res.status}`)
  const json = await res.json()
  const record = json.record as BinData
  if (!record.messages) record.messages = []
  return record
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
    const { name, email, topic, message } = body

    if (!name || !email || !topic || !message) {
      return NextResponse.json({ error: 'All required fields must be filled.' }, { status: 400 })
    }

    const data = await getBin()
    data.messages.push({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      topic,
      message: message.trim(),
      submittedAt: new Date().toISOString(),
    })
    await updateBin(data)

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error('[Contact] Error:', err)
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}
