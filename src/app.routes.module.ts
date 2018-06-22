import { ViewComponent } from "./app/component/view/view.component";
import { HomepageComponent } from "./app/component/homepage/homepage.component";
import { BookingComponent } from "./app/component/booking/booking.component";





export const AppRoutes = [
    {path:'', component: HomepageComponent},
    {path: 'view', component: ViewComponent},
    {path: 'booking', component: BookingComponent}
    

    ]
        
    

