import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  fname:'';
 email:'';
 checkInDate:'';
 checkInTime:'';
 checkOutDate:'';
 checkOutTime:'';
 adults:'';
 children:'';
 rooms:'';

 page=[
  {name:'view', page:'view'}
 ]

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.queryParams.subscribe(params =>{
      this.fname = params['fname'];
      this.email = params['email'];
      this.checkInDate = params['checkInDate'];
      this.checkInTime = params['checkInTime'];
      this.checkOutDate = params['checkOutDate'];
      this.checkOutTime = params['checkOutTime'];
      this.adults = params['adults'];
      this.children = params['children']; 
      this.rooms = params['rooms']

      console.log(this.fname);
      console.log(this.email);
      console.log(this.checkInDate);
      console.log(this.checkInTime);
      console.log(this.checkOutDate);
      console.log(this.checkOutTime);
      console.log(this.adults);
      console.log(this.children);
      console.log(this.rooms);
     
    }
  ) 
  }

}
