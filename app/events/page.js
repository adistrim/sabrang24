import EventsPage from "@/components/EventsPage";
import eventsData from '@/data/events.json';

export default function Events() {
    return <EventsPage events={eventsData} />;
}
