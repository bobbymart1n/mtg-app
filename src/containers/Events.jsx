import { Container } from 'unstated';
import { data } from './../utils/data';

class Events extends Container {
  state = {
    events: [...data.events]
  }
}

export default Events;
