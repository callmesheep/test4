import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { registeremployers } from '../../register-employers';
@Component({
  selector: 'app-register-employers',
  templateUrl: './register-employers.component.html',
  styleUrls: ['./register-employers.component.css']
})
export class RegisterEmployersComponent {
   registeremployers!:registeremployers;
  show: boolean = false;
  registeremployersForm!: FormGroup;

  constructor(private http: HttpClient,
    private toastr: ToastrService,
    private authService:AuthService)
    { this.registeremployersForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'name': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'companyname': new FormControl(null,[Validators.required,Validators.minLength(10)]),
      'city':new FormControl(null,[Validators.required]),
      'status': new FormControl(true),
      'gender': new FormControl(true),
      'address': new FormControl(null, [Validators.required]),
      'phone': new FormControl(null, [Validators.required, Validators.minLength(10), Validators.pattern('(0)[0-9]{9}')]),
      'registerDate': new FormControl(new Date()),
    });}
  save_employers() {
    if (this.registeremployersForm.invalid) {
      this.toastr.error('Hãy nhập đầy đủ thông tin!', 'Hệ thống');
      return;}
      this.registeremployers = this.registeremployersForm.value;
      this.authService.registeremployers(this.registeremployers).subscribe( data => {
        Swal.fire({
          icon: 'success',
          title: 'Đăng kí thành công!',
          showConfirmButton: false,
          timer: 1500
        })
        setTimeout(() => {
          window.location.href = ('/');
        },
          500);
      }, error => {
        this.toastr.error(error.message, 'Hệ thống');
      });
    }


}
