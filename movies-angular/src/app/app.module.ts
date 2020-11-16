import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MovieAddComponent } from './components/movie-add/movie-add.component';
import { MoviesListItemComponent } from './components/movies-list-item/movies-list-item.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MoviesSearchComponent } from './components/movies-search/movies-search.component';
import { RegisterComponent } from './components/register/register.component';
import { MoviesService } from './services/movies.service';
import { storageServiceProvider } from './services/storage.service';
import { UserService } from './services/user.service';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { LoaderComponent } from './components/loader/loader.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    MoviesListComponent,
    MovieAddComponent,
    MoviesSearchComponent,
    MoviesListItemComponent,
    MovieDetailsComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    UserService,
    storageServiceProvider,
    MoviesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
