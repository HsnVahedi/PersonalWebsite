import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { parseISO } from 'date-fns'

// You can use date-fns or moment. Here we use date-fns with a custom localizer.
// (React Big Calendar does not provide an official date-fns localizer, so you may use a community solution or moment.)
import moment from 'moment'

const localizer = momentLocalizer(moment)

export default function MyCalendar({ events, onSelectSlot }: { events: any[], onSelectSlot: (slotInfo: any) => void }) {
    
  return (
    <Calendar
      localizer={localizer}
      events={events} // events should be an array of { title, start, end }
      selectable
      defaultView="week"
      style={{ height: 700 }}
      onSelectSlot={onSelectSlot} // Called when a user clicks an available slot.
    />
  )
}
