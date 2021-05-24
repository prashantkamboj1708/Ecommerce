import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './admin.guard';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { UserGuard } from './user.guard';
import { LandingpageComponent } from './user/landingpage/landingpage.component';
import { UserloginComponent } from './user/userlogin/userlogin.component';
import { VerifyComponent } from './user/verify/verify.component';
import{HomepageComponent} from 'src/app/home/homepage/homepage.component';

const routes: Routes = [
  {
    path:'',
    component:LandingpageComponent
  }
  ,{
    path:'userlogin',
    component:UserloginComponent
  },
  {
    path:'homepage',
    component:HomepageComponent
  },
  {
    path:'admindashboard',
    component:AdmindashboardComponent,canActivate:[AdminGuard]
  },{
    path:'verify',
    component:VerifyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
