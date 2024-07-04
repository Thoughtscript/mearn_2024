import { Component, OnInit } from "@angular/core"
import { EventService } from '../../services/event.service'

interface EventResponse {
    status: string
    data: string
}

interface Event {
    _id: string
    name: string
    msg: string
}

@Component({
    selector: "event",
    template: `
    <main>
        <div id="flex-wrapper">
        <table>
            <tr>
                <th>_ID</th>
                <th>Name</th>
                <th>Message</th>
            </tr>
            <tr *ngFor="let event of events">
                <td>{{event._id}}</td>
                <td>{{event.name}}</td>
                <td>{{event.msg}}</td>
            </tr>
        </table>
        </div>
    </main>
  `,
    styles: []
})

export class EventComponent implements OnInit {
    //Make array to hold data
    public events: Event[] = [];

    //Inject the relevant service here
    constructor(private _eventService: EventService) {  }

    ngOnInit() { this.getEvents(); }
    
    getEvents() {
        // Casting response Objects
        this._eventService.getEvents().subscribe((res: Object) => {
            const E_R = res as EventResponse
            const ALL_EVENTS = JSON.parse(E_R.data) as Event[]
            const SLICED_EVENTS = ALL_EVENTS.slice(0, 5);
            this.events = SLICED_EVENTS;
            console.log(this.events);
        });
    }
}