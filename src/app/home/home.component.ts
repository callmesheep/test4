import { Component, OnInit } from '@angular/core';
import { recruitment } from '../recruitment';
import { RecruitmentService } from '../services/recruitment.service';
import { Router, NavigationEnd } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  recruitment!:recruitment[];
  isLoading = true;
 
 
  constructor(
    private RecruitmentService:RecruitmentService,
    private Router:Router,
    private toastr: ToastrService
    ){}

  ngOnInit(): void {
    this.Router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
   this.getRecruitment();
  }
  getRecruitment(){
    this.RecruitmentService.getRecruitment().subscribe( data=>{
      this.recruitment = data as recruitment[];
      this.isLoading = false;
    }, error=>{
      this.toastr.error('Lỗi server!', 'Hệ thống')   
      console.log(error);   
    })

  }
}
