/**
 * interface used to store an event
 */
export interface Event {
  id: string;
  title: string;
  location: string;
  date: Date;
  description: string;
  addedBy: string;
}
