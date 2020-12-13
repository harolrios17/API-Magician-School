import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../services/students.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html'
})
export class StudentsComponent implements OnInit {

    student: any[] = [];

  constructor( private _studentsService:StudentsService,
               private router:Router ) {    
  }

  ngOnInit(): void {
    this._studentsService.getStudents().subscribe(
      data => {this.student = data});   
  }

  verEstudiante(idx:number){
    this.router.navigate( ['/estudiante',idx] )
  }

}
