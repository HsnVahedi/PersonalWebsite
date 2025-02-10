'use client'

import { useQuery } from '@tanstack/react-query'
import MyCalendar from '@/components/Calendar'

// Define the async function for fetching and transforming events
async function fetchEvents() {
  const res = await fetch('/api/events')
  if (!res.ok) {
    throw new Error('Network response was not ok')
  }
  const data = await res.json()
  // Transform each event to ensure that start and end are Date objects
  return data.map((event: any) => ({
    ...event,
    start: new Date(event.start),
    end: new Date(event.end),
  }))
}

export default function CalendarClient() {
  // Use react-query to fetch the events data and re-fetch every 30 seconds
  const { data: events = [], isLoading, error } = useQuery({
    queryKey: ['events'],
    queryFn: fetchEvents,
    refetchInterval: 30000, // re-fetch events every 30 seconds
  })

  const handleSelectSlot = (slotInfo: any) => {
    // slotInfo.start and slotInfo.end contain the selected time slot
    console.log('Selected slot:', slotInfo)
  }

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading events</div>

  return (
    <MyCalendar events={events} onSelectSlot={handleSelectSlot} />
  )
} 