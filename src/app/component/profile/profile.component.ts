import { Component, OnInit, Input } from '@angular/core';
import {ProfileService} from '../../services/profile/profile.service'
import  {search} from '../../../search';
import  {LandingComponent} from '../landing/landing.component';
import { ActivatedRoute,Event,Router,NavigationStart,NavigationEnd, NavigationCancel,NavigationError} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

	name:string;
	private sub: any;
	results:search[];
	 dataFlag:boolean =true;

  constructor(private profileService:ProfileService, private route: ActivatedRoute) { }

  ngOnInit() {

  	   this.sub = this.route.params.subscribe(params => {
       this.name = params['name']; // (+) converts string 'id' to a number
       // In a real app: dispatch action to load the details here.
       this.getProfile();
    });
  }


  getProfile(){

    this.profileService.profileFind(this.name.trim().replace(/ /g, '%20'),(data)=>{

      if(data.length>0){
        this.results=this.profileService.result;
        this.dataFlag=true;
      }


      else{

        this.dataFlag=false;
      } */

    }

    )

    /*.subscribe(results => 
    {
      this.searchService.result=results;
        console.log(this.searchService.result)
        console.log(this.searchQuery + "query in landing")
      })*/;

}

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
