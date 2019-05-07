import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ActivatedRoute, Router, RouterModule, Routes} from '@angular/router';  //important
import {HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';




import { AppComponent } from './app.component';
import { LandingComponent } from './component/landing/landing.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ResultsComponent } from './component/results/results.component';



import {SearchService}  from "./services/search/search.service";
import {ProfileService}  from "./services/profile/profile.service";


import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './component/profile/profile.component';


const appRoutes: Routes = [
  {path:'', component:LandingComponent},  //important
  //{path:'results', component:ResultsComponent}
  {path: 'results/:sq/:country', component: ResultsComponent },
  {path: 'profile/:name', component: ProfileComponent }    

];



@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
    ResultsComponent,
    FooterComponent,
    ProfileComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)  //importantt    

  ],
  providers: [SearchService,LandingComponent,ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
