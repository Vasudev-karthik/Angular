import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private service:SharedService) { }
StudentsList:any=[]
  ngOnInit(): void {
    this.refreshStudentList();
  }

  refreshStudentList(){
    this.service.getStudentsList().subscribe(data =>{
      this.StudentsList=data;
    })
  }

}
