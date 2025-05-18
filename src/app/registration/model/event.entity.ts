export class Event {
  id: number;
  name: string;
  description: string;
  scheduledAt: string;

  constructor(event:{id?: number, name?:string, description?:string, scheduledAt?:string}) {
    this.id = event.id || 0;
    this.name = event.name || '';
    this.description = event.description || '';
    this.scheduledAt = event.scheduledAt || '';
  }
}
