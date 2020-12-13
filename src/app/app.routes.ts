import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StudentsComponent } from './components/students/students.component';
import { CharactersComponent } from "./components/characters/characters.component";
import { ListSearchComponent } from "./components/list-search/list-search.component";

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'estudiantes', component: StudentsComponent },
    { path: 'estudiante/:id', component: CharactersComponent },
    { path: 'buscar/:termino', component: ListSearchComponent },
    { path: '**', pathMatch: 'full',  redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);