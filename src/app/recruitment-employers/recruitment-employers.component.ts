import { Component, OnInit } from '@angular/core';
import { recruitment } from '../recruitment';
import { RecruitmentService } from '../services/recruitment.service';
import { NavigationEnd, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-recruitment-employers',
  templateUrl: './recruitment-employers.component.html',
  styleUrls: ['./recruitment-employers.component.css']
})
export class RecruitmentEmployersComponent implements OnInit {
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
