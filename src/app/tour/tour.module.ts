import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TourListComponent } from './tour-list/tour-list.component';
import { TourService } from './tour.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TourListComponent],
  exports:[TourListComponent],
  providers:[TourService]
})
export class TourModule { }
