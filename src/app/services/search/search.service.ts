import { Injectable } from '@angular/core';
import  {Http, Headers} from '@angular/http';
import  'rxjs/add/operator/map'; 



@Injectable()
export class SearchService {

  constructor(private http:Http) { 
  	console.log('Search Service Initialized....');

  }


  search(searchQuery:string, country:string){

  	return this.http.get('https://aeroassists.herokuapp.com/api/search/' + searchQuery + '/' + country )
  		.map(res => res.json());


  }
}
