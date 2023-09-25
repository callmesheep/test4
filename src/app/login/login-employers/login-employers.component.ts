import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Employers } from 'src/app/Employers';
import { Loginemployers } from 'src/app/Loginemployers';
import { AuthService } from 'src/app/services/auth.service';
import { CustomerService } from 'src/app/services/customer.service';
import { SessionService } from 'src/app/services/session.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-employers',
  templateUrl: './login-employers.component.html',
  styleUrls: ['./login-employers.component.css']
})
export class LoginEmployersComponent {
  loginemployers!: Loginemployers;
  show: boolean = false;
  loginemployersForm: FormGroup;
  isLoggedIn = false;
  isLoginFailed = false;
  constructor(private router: Router,private authService: AuthService,
    private sessionService: SessionService, private userService: CustomerService,
     private toastr: ToastrService,
 ) {
   this.loginemployersForm = new FormGroup({
     'email': new FormControl(null),
     'password': new FormControl(null)
   });
}
Login() {
  this.loginemployers = this.loginemployersForm.value;

  this.authService.Loginemployers(this.loginemployers).subscribe(
    data => {

      this.sessionService.saveToken(data.token);
      this.isLoginFailed = false;
      this.isLoggedIn = true;

      let userTemp: Employers;
      this.userService.getByEmail(String(this.sessionService.getUser())).subscribe(data => {
        userTemp = data as Employers;
        if (userTemp.roles[0].name == 'ROLE_ADMIN') {

          Swal.fire({
            icon: 'error',
            title: 'Đăng nhập thất bại!',
            showConfirmButton: false,
            timer: 1500
          })
          this.toastr.error('Sai Thông Tin Đăng Nhập', 'Hệ thống');

          this.isLoginFailed = true;
          this.sessionService.signOut();
          return;
        } else {
          Swal.fire({
            icon: 'success',
            title: 'Đăng nhập thành công!',
            showConfirmButton: false,
            timer: 1500
          })

          this.router.navigate(['/home']);

          setTimeout(() => {
            window.location.href = ('/');
          },
            500);
        }
      })
    },
    error => {
      this.toastr.error('Sai Thông Tin Đăng Nhập', 'Hệ thống');
      Swal.fire({
        icon: 'error',
        title: 'Đăng nhập thất bại!',
        showConfirmButton: false,
        timer: 1500
      })
      this.isLoginFailed = true;
    }
  );
}
login(_login: any) {
  throw new Error('Method not implemented.');
}
}
