import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes} from '@angular/router';  //important
import {HttpModule} from '@angular/http';




import { AppComponent } from './app.component';
import { LandingComponent } from './component/landing/landing.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ResultsComponent } from './component/results/results.component';



import {SearchService}  from "./services/search/search.service";

const appRoutes: Routes = [
  {path:'', component:LandingComponent},  //important
  {path:'results', component:ResultsComponent}  

];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
    ResultsComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)  //importantt    

  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
