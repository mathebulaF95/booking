import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {

  @Input() name;
  @Input() page;

  @Input() fname;
  @Input() email;
  @Input() checkInDate;
  @Input() checkInTime;
  @Input() checkOutDate;
  @Input() checkOutTime;
  @Input() adults;
  @Input() children;
  @Input() rooms;
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

navigator() {

  if (name === 'view'){

    this.router.navigate (['booking/view'], {queryParams: {fname: this.fname, email: this.email, checkInDate: this.checkInDate, checkInTime: this.checkInTime, checkOutDate: this.checkOutDate, checkOutTime: this.checkOutTime, adults: this.adults, children: this.children, rooms: this.rooms }});
  }
}
}
