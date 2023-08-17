import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketRoutingModule } from './ticket-routing.module';
import { TicketsComponent } from './tickets/tickets.component';
import { SharedModule } from '../shared.module';


@NgModule({
  declarations: [
    TicketsComponent,
  ],
  imports: [
    CommonModule,
    TicketRoutingModule,
    SharedModule,
  ]
})
export class TicketModule { }
