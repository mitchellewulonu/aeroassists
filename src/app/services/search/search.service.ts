import { Injectable } from '@angular/core';
import  {Http, Headers} from '@angular/http';
import  'rxjs/add/operator/map'; 
import  {search} from '../../../search';



@Injectable()
export class SearchService {

	result:search[];
  countryQuery:string;


  constructor(private http:Http) { 
  	console.log('Search Service Initialized....');

  }


  search(searchQuery:string, country:string, callback:(data:Array<object>)=> void){

  	 this.http.get('https://aeroassists.herokuapp.com/api/search/' + country  + '/' + searchQuery )
  		.map(res => res.json()).subscribe(results => 
    {
      this.result=results;
        console.log(this.result)
        console.log(searchQuery + " in " + country + " query has been retrieved from search service")
         callback(this.result)
      });




  }
}
