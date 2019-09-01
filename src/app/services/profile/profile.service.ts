import { Injectable } from '@angular/core';
import  {Http, Headers} from '@angular/http';
import  'rxjs/add/operator/map'; 
import  {Profile} from '../../profile.model';
import {Observable} from 'rxjs/Rx';



@Injectable()
export class ProfileService {
	profile:Profile[];	
  finaldata:any;

  constructor(private http:Http) { 

  	console.log('Profile Service Initialized....')}




  profileFind(profileName:string, callback:(data:Array<object>)=> void){

  	 this.http.get((('http://localhost:8080/api/profile/' + profileName) ||  ('https://aeroassists.herokuapp.com/api/profile/' + profileName)  ))
  		.map(res => res.json()).subscribe(profile => 
    {
      this.profile=profile;
        console.log(this.profile)
        console.log(profileName +  " query has been retrieved from search service")
         callback(this.profile)
      });




  } //this is the original

/*profileFind(profileName:string, callback:(data:Array<object>)=> void) :Observable<Profile[]> {
     this.finaldata =this.http.get('https://aeroassists.herokuapp.com/api/profile/' + profileName )
 
     .map(res => res.json().response.map((profile: Profile) => new Profile().deserialize(profile)));

     console.log(this.finaldata.name + 'data');
     return this.finaldata;




  }*/

}
