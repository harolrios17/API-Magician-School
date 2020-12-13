import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  countStd: any[] = [];
  houseHp: string[] = ['Slytherin','Gryffindor','Ravenclaw','Hufflepuff'];
  
  constructor( private http: HttpClient,
               private router:Router ) { 
     this.http.get('http://hp-api.herokuapp.com/api/characters/house/Slytherin' ).subscribe( resp =>{
      this.countStd[0] = resp;
     });

     this.http.get('http://hp-api.herokuapp.com/api/characters/house/Gryffindor' ).subscribe( resp =>{
      this.countStd[1] = resp;
     });

     this.http.get('http://hp-api.herokuapp.com/api/characters/house/Ravenclaw' ).subscribe( resp =>{
      this.countStd[2] = resp;
     }); 
     
     this.http.get('http://hp-api.herokuapp.com/api/characters/house/Hufflepuff' ).subscribe( resp =>{
      this.countStd[3] = resp;
     }); 
    
  }

  ngOnInit(): void {
  }

  verEstudiante(idx:string){
    this.router.navigate( ['/estudiante',idx] )
  }

}
