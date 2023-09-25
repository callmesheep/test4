import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginUserComponent } from './login/login-user/login-user.component';
import { LoginEmployersComponent } from './login/login-employers/login-employers.component';
import { RegisterEmployersComponent } from './register/register-employers/register-employers.component';
import { RegisterRecruitmentsComponent } from './register-recruitments/register-recruitments.component';
import { SearchComponent } from './search/search.component';
import { RecruitmentDetailsComponent } from './recruitment-details/recruitment-details.component';
import { RecruitmentEmployersComponent } from './recruitment-employers/recruitment-employers.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterUserComponent } from './register/register-user/register-user.component';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProfileComponent,
    LoginUserComponent,
    LoginEmployersComponent,
    RegisterUserComponent,
    RegisterEmployersComponent,
    RegisterRecruitmentsComponent,
    SearchComponent,
    RecruitmentDetailsComponent,
    RecruitmentEmployersComponent,
    OrderDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
