import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketService } from './ticket.service';
import { TicketListComponent } from './ticket-list/ticket-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TicketListComponent],
  exports:[TicketListComponent],
  providers:[TicketService]
})
export class TicketModule { }
