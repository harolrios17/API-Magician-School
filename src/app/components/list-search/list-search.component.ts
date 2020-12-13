import { getParseErrors, stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { StudentsService } from "../../services/students.service";

@Component({
  selector: 'app-list-search',
  templateUrl: './list-search.component.html'
})
export class ListSearchComponent implements OnInit {

  person: any[] = [];
  id:string;

  constructor(private activatedRoute:ActivatedRoute,
              private _studentsService:StudentsService ) { 
      
  }

  ngOnInit(): void {    
    this.activatedRoute.params.subscribe ( params => {
      this.id = params['termino'];
      this.getP(this.id);   
    })
  }

  getP(index:string){   
    this._studentsService.getCharacters().subscribe(
      data => {
        this.person = data.filter(x=>x.name.toLowerCase().includes(index));
      },
      error=>{
        console.log(error);
      });
  }
}
