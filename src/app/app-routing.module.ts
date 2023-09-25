import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { RegisterEmployersComponent } from './register/register-employers/register-employers.component';
import { LoginUserComponent } from './login/login-user/login-user.component';
import { LoginEmployersComponent } from './login/login-employers/login-employers.component';
import { ProfileComponent } from './profile/profile.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { RegisterRecruitmentsComponent } from './register-recruitments/register-recruitments.component';
import { RecruitmentDetailsComponent } from './recruitment-details/recruitment-details.component';
import { SearchComponent } from './search/search.component';
import { RecruitmentEmployersComponent } from './recruitment-employers/recruitment-employers.component';
import { RegisterUserComponent } from './register/register-user/register-user.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'register-user',component:RegisterUserComponent},
  {path:'register-employers',component:RegisterEmployersComponent},
  {path:'login-user',component:LoginUserComponent},
  {path:'login-employers',component:LoginEmployersComponent},
  {path:'profile',component:ProfileComponent},
  {path:'order-detail',component:OrderDetailComponent},
  {path:'register-recruitments',component:RegisterRecruitmentsComponent},
  {path:'recruitment-details',component:RecruitmentDetailsComponent},
  {path:'search',component:SearchComponent},
  {path:'recruitment-employers',component:RecruitmentEmployersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
