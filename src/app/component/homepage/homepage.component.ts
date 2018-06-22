import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

 fname:'';
 email:'';
 checkInDate:'';
 checkInTime:'';
 checkOutDate:'';
 checkOutTime:'';
 adults:'';
 children:'';
 rooms:'';



  constructor( private router: Router) {
    
   }

  ngOnInit() {
  }

  bookingForm(){

    console.log('fname' + this.fname)
    console.log('email' + this.email)
    console.log('checkInDate' + this.checkInDate)
    console.log('checkInTime' + this.checkInDate)
    console.log('checkOutDate' + this.checkOutDate)
    console.log('checkOutTime' + this.checkOutTime)
    console.log('adults' + this.adults)
    console.log('children' + this.children)
    console.log('rooms' + this.rooms)

    this.router.navigate (['booking'], {queryParams: {fname: this.fname, email: this.email, checkInDate: this.checkInDate, checkInTime: this.checkInTime, checkOutDate: this.checkOutDate, checkOutTime: this.checkOutTime, adults: this.adults, children: this.children, rooms: this.rooms }});

  }
    
  }
  


