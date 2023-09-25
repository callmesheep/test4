import { Component, OnInit } from '@angular/core';
import { RecruitmentService } from '../services/recruitment.service';
import { recruitment } from '../recruitment';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Toast, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register-recruitments',
  templateUrl: './register-recruitments.component.html',
  styleUrls: ['./register-recruitments.component.css']
})
export class RegisterRecruitmentsComponent implements OnInit {
  recruitment!: recruitment;

  selectFile!: File;
  url: string = 'https://res.cloudinary.com/veggie-shop/image/upload/v1633434089/products/jq4drid7ttqsxwd15xn9.jpg';
  image: string = this.url;

  postForm: FormGroup;
  recruitments:any;
  constructor(private recruiment: RecruitmentService,
    toastr :ToastrService, private modalService: NgbModal,) {
    this.postForm = new FormGroup({
      'Id': new FormControl(0),
      'position': new FormControl(null, [Validators.minLength(5), Validators.required]),
      'career': new FormControl(null,  Validators.required),
      'salary': new FormControl(null, Validators.required),
      'interst': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'deadline': new FormControl( Date()),
      'company': new FormControl(null, Validators.required),
      'address': new FormControl(null, Validators.required),
     'img':new FormControl(Image),
    })
  }
ngOnInit():void {
  this.recruiment.getRecruitment().subscribe(res =>{
    this.recruitments= res.valueOf;
    console.log(this.recruitments)
    
})
  }
  save() {
    if (this.postForm.valid) {
      this.recruiment= this.postForm.value;
     
      this.recruiment.img = this.image;

      this.RecruitmentService.save(this.recruiment).subscribe(data => {
        this.toastr.success('Thêm thành công!', 'Hệ thống');
        this.saveFinish.emit('done');
      })

    } else {
      this.toastr.error('Thêm thất bại!', 'Hệ thống');
    }
    this.postForm = new FormGroup({
      'Id': new FormControl(0),
      'position': new FormControl(null, [Validators.minLength(5), Validators.required]),
      'career': new FormControl(null,  Validators.required),
      'salary': new FormControl(null, Validators.required),
      'interst': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'deadline': new FormControl( Date()),
      'company': new FormControl(null, Validators.required),
      'address': new FormControl(null, Validators.required),
     'img':new FormControl(Image),
    })
    this.image = this.url;
    this.modalService.dismissAll();
  }


}
