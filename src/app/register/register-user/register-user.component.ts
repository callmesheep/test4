import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { registeruser } from 'src/app/register-user';
import Swal from 'sweetalert2';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent   {

  registeruser!:registeruser;
  show: boolean = false;
  registeruserForm!: FormGroup;

  
  constructor(private http: HttpClient,
    private toastr: ToastrService,
    private authService:AuthService)
  {this.registeruserForm = new FormGroup({
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
    'name': new FormControl(null, [Validators.required, Validators.minLength(6)]),
    'status': new FormControl(true),
    'gender': new FormControl(true),
    'address': new FormControl(null, [Validators.required]),
    'phone': new FormControl(null, [Validators.required, Validators.minLength(10), Validators.pattern('(0)[0-9]{9}')]),
    'registerDate': new FormControl(new Date()),
  });}
    saveuser() {
      if (this.registeruserForm.invalid) {
        this.toastr.error('Hãy nhập đầy đủ thông tin!', 'Hệ thống');
        return;}
        this.registeruser = this.registeruserForm.value;
        this.authService.registeruser(this.registeruser).subscribe(data => {
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

function save() {
  throw new Error('Function not implemented.');
}

