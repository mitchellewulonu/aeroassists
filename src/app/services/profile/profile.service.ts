import { Injectable } from '@angular/core';
import  {Http, Headers} from '@angular/http';
import  'rxjs/add/operator/map'; 
import  {search} from '../../../search';



@Injectable()
export class ProfileService {
	result:search[];	

  constructor(private http:Http) { 

  	console.log('Profile Service Initialized....')}




  profileFind(profileName:string, callback:(data:Array<object>)=> void){

  	 this.http.get('https://aeroassists.herokuapp.com/api/profile/' + profileName )
  		.map(res => res.json()).subscribe(results => 
    {
      this.result=results;
        console.log(this.result)
        console.log(profileName +  " query has been retrieved from search service")
         callback(this.result)
      });




  }

}
