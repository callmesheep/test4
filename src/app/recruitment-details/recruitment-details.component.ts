import { Component, OnInit } from '@angular/core';
import { recruitment } from '../recruitment';
import { RecruitmentService } from '../services/recruitment.service';

@Component({
  selector: 'app-recruitment-details',
  templateUrl: './recruitment-details.component.html',
  styleUrls: ['./recruitment-details.component.css']
})
export class RecruitmentDetailsComponent implements OnInit {
  recruitments!:recruitment[];
  recruitment!:recruitment;
  id!: number;
  
  constructor(public RecruimentsService:RecruitmentService){

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  aplly(){
  }

}
