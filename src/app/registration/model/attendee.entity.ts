export class Attendee {
  id: number;
  firstName: string;
  lastName: string;
  eventId: number;
  ticketIdentifier: string;
  checkedInAt: string | null;

  constructor(attendee:{id?: number, firstName?:string, lastName?:string, eventId?:number, ticketIdentifier?:string, checkedInAt?: string | null}) {
    this.id = attendee.id || 0;
    this.firstName = attendee.firstName || '';
    this.lastName = attendee.lastName || '';
    this.eventId = attendee.eventId || 0;
    this.ticketIdentifier = attendee.ticketIdentifier || '';
    this.checkedInAt = attendee.checkedInAt || null;
  }
}
