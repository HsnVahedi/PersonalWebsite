import { NextResponse } from 'next/server'

// Sample events data
const sampleEvents = [
  {
    id: '1',
    title: 'Team Meeting',
    start: '2025-02-10T10:00:00Z',
    end: '2025-02-10T11:00:00Z',
  },
  {
    id: '2',
    title: 'Project Review',
    start: '2025-02-10T14:00:00Z',
    end: '2025-02-10T15:30:00Z',
  },
  {
    id: '3',
    title: 'Client Call',
    start: '2025-02-11T09:00:00Z',
    end: '2025-02-11T10:00:00Z',
  },
  {
    id: '4',
    title: 'Workshop',
    start: '2025-02-12T13:00:00Z',
    end: '2025-02-12T16:00:00Z',
  }
]

export async function GET() {
  try {
    // In a real application, you would fetch this data from a database
    // For now, we're using the sample data
    
    // Return the events with proper headers
    return NextResponse.json(sampleEvents, {
      status: 200,
      headers: {
        'Cache-Control': 'no-store, max-age=0',
      },
    })
  } catch (error) {
    console.error('Error fetching events:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
