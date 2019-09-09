import { Component, OnInit, Input } from '@angular/core';
import {ProfileService} from '../../services/profile/profile.service'
import  {Profile} from '../../profile.model';
import  {LandingComponent} from '../landing/landing.component';
import { ActivatedRoute,Event,Router,NavigationStart,NavigationEnd, NavigationCancel,NavigationError} from '@angular/router';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

	name:string;
	private sub: any;
	profile:Profile[];
	 dataFlag:boolean =true;
   services:any;
   GMAP_API:string=environment.GOOGLEMAP_APIKEY;

  constructor(private profileService:ProfileService, private route: ActivatedRoute) { }

  ngOnInit() {

  	   this.sub = this.route.params.subscribe(params => {
       this.name = params['name']; // (+) converts string 'id' to a number
       // In a real app: dispatch action to load the details here.
       this.getProfile();
       console.log(this.GMAP_API);
       
       
    });
  }


  getProfile(){

    this.profileService.profileFind(this.name.trim().replace(/ /g, '%20'),(data)=>{

      if(data.length>0){
        this.profile=this.profileService.profile;
        console.log()
        this.dataFlag=true;
      }


      else{

        this.dataFlag=false;
      } 

      //console.log(`I'm ${Pro} years old!`)

    }

    )

}

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
