export interface Ticket {
    _id: string,
    ticket_type: string,
    event_type: string,
    date: number,
    price: number,
    tags: string[];
    }