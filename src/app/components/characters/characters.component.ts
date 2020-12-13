import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { StudentsService } from "../../services/students.service";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html'
})
export class CharactersComponent implements OnInit {

  student: any[] = [];

  constructor( private activatedRoute:ActivatedRoute,
               private _studentService:StudentsService ) {
  }

  ngOnInit(): void {        
      this.activatedRoute.params.subscribe( params => {
        if (params['id'] == "Slytherin") {
          this._studentService.getSlytherin().subscribe(
            data => {this.student = data});            
        }
        if (params['id'] == "Gryffindor") {
          this._studentService.getGryffindor().subscribe(
            data => {this.student = data});            
        }
        if (params['id'] == "Ravenclaw") {
          this._studentService.getRavenclaw().subscribe(
            data => {this.student = data});            
        }

        if (params['id'] == "Hufflepuff") {
          this._studentService.getHufflepuff().subscribe(
            data => {this.student = data});            
        }
        
      });
    
  }

  
}
