import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { ReservationModule } from './reservation/reservation.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    RouterModule,
    HomeModule,
    ReservationModule,
    AppRoutingModule,
    ReactiveFormsModule
  ]
})
export class AppModule { }
