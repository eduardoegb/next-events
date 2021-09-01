import EventList from '../../components/events/EventList';
import { getFeaturedEvents } from '../../data/dummy-data';

function EventsPage() {
  const items = getFeaturedEvents();

  return (
    <div>
      Events Page
      <EventList items={items} />
    </div>
  );
}

export default EventsPage;
