import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { NotificationComponent } from './component/notification/notification.component';
import { BookingComponent } from './component/booking/booking.component';
import { NavigatorComponent } from './component/navigator/navigator.component';
import { ViewComponent } from './component/view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NotificationComponent,
    BookingComponent,
    NavigatorComponent,
    ViewComponent,
  
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
