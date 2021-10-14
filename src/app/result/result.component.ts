import { Component, OnInit } from '@angular/core';
import { Result } from '../result.model';
import { Student } from '../student.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  stud:any;
  total:number=0;
  percentage:number=0;
  message:string="";
  studentList:Student[]= [
    new Student("Leena",1, new Result(80,75,89,90,80,95)),
    new Student("Seema",2, new Result(81,70,90,90,50,100)),
    new Student("Jai",3, new Result(81,70,90,90,50,100)),
    new Student("Ramesh",4, new Result(50,75,70,80,95,95)),
    new Student("Meena",5, new Result(81,70,100,76,50,100)),
    new Student("Mahesh",6, new Result(65,70,55,70,50,75)),
  ]
  constructor() { }

  ngOnInit(): void {
  }

  getDetails(id:HTMLInputElement){
    console.log("ID: ",id.value);
    this.stud = this.studentList.find(record=> record.examId== parseInt(id.value))
    if (!this.stud)
    {
      this.message ="Record not found";
    }
    this.total=0;
    for(let i in this.stud.result)
      this.total = this.total + this.stud.result[i];
    this.percentage = (this.total)/600;
  }
}
