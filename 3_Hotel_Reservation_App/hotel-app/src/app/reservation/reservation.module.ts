import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationFormComponent } from '../reservation-form/reservation-form.component';
import { ReservationListComponent } from '../reservation-list/reservation-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeModule } from '../home/home.module';

@NgModule({
  declarations: [    
  ],
  imports: [
    CommonModule,
    ReservationFormComponent,
    ReservationListComponent,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    RouterModule,
    HomeModule

  ]
})
export class ReservationModule { }
