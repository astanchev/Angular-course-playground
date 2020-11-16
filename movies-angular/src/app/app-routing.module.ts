import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MovieAddComponent } from './components/movie-add/movie-add.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieEditComponent } from './components/movie-edit/movie-edit.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent },
  { path: 'movie/add', component: MovieAddComponent },
  { path: 'movie/details/:id', component: MovieDetailsComponent },
  { path: 'movie/edit/:id', component: MovieEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
