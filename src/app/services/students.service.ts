import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Estudiantes } from "../estudiantes";

@Injectable()
export class StudentsService {

    
  private urlSlytherin: string = 'http://hp-api.herokuapp.com/api/characters/house/Slytherin';
  private urlGryffindor: string = 'http://hp-api.herokuapp.com/api/characters/house/Gryffindor'
  private urlRavenclaw: string = 'http://hp-api.herokuapp.com/api/characters/house/Ravenclaw';
  private urlHufflepuff: string = 'http://hp-api.herokuapp.com/api/characters/house/Hufflepuff';
  private urlStudent: string = 'https://hp-api.herokuapp.com/api/characters/students';
  private urlCharacters: string = 'http://hp-api.herokuapp.com/api/characters';

  constructor(private http :HttpClient) {}

  
  getSlytherin(): Observable<Estudiantes[]> {
      return this.http.get<Estudiantes[]>(this.urlSlytherin);
  }

  getGryffindor(): Observable<Estudiantes[]> {
      return this.http.get<Estudiantes[]>(this.urlGryffindor);
  }

  getRavenclaw(): Observable<Estudiantes[]> {
      return this.http.get<Estudiantes[]>(this.urlRavenclaw);
  }

  getHufflepuff(): Observable<Estudiantes[]> {
    return this.http.get<Estudiantes[]>(this.urlHufflepuff);
}

  getStudents(): Observable<Estudiantes[]> {
    return this.http.get<Estudiantes[]>(this.urlStudent);
}

getCharacters(): Observable<Estudiantes[]> {
    return this.http.get<Estudiantes[]>(this.urlCharacters);
}
}
