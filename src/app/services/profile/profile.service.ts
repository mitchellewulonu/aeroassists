import { Injectable } from '@angular/core';
import  {Http, Headers} from '@angular/http';
import  'rxjs/add/operator/map'; 
import  {Profile} from '../../../profile';



@Injectable()
export class ProfileService {
	profile:Profile[];	

  constructor(private http:Http) { 

  	console.log('Profile Service Initialized....')}




  profileFind(profileName:string, callback:(data:Array<object>)=> void){

  	 this.http.get('https://aeroassists.herokuapp.com/api/profile/' + profileName )
  		.map(res => res.json()).subscribe(profile => 
    {
      this.profile=profile;
        console.log(this.profile)
        console.log(profileName +  " query has been retrieved from search service")
         callback(this.profile)
      });




  }

}
