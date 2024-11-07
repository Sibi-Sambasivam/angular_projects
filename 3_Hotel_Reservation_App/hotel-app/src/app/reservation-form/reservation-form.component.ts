import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { Reservation } from '../models/reservation';
import { Router, ActivatedRoute } from '@angular/router';
import { ReservationService } from '../reservation/reservation.service';
import { HomeComponent } from "../home/home.component";

@Component({
  selector: 'app-reservation-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HomeComponent],
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css'
})
export class ReservationFormComponent implements OnInit {

  reservationForm: FormGroup = new FormGroup({});
  

  constructor(    private formBuilder: FormBuilder,
    private reservationService: ReservationService,
    private router: Router,
    private activatedRoute: ActivatedRoute){

  }

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      checkinDate: ['', Validators.required],
      checkOnDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: ['', Validators.required]
    })


    let id = this.activatedRoute.snapshot.paramMap.get('id')

    if(id){
      let reservation = this.reservationService.getReservation(id)

      if(reservation)
        this.reservationForm.patchValue(reservation)
    }


  }



  onSubmit(){
    if(this.reservationForm.valid){
      
      let reservation: Reservation = this.reservationForm.value;
      this.reservationService.addReservation(reservation)

      let id = this.activatedRoute.snapshot.paramMap.get('id')

      if(id){
          //update
          this.reservationService.updateReservation(id, reservation)
      } else {
        //New
        this.reservationService.addReservation(reservation)
      }


      this.router.navigate(['/list'])

    }  
  }
}
