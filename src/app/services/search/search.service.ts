import { Injectable } from '@angular/core';
import  {Http, Headers} from '@angular/http';
import  'rxjs/add/operator/map'; 


@Injectable()
export class SearchService {

  constructor(private http:Http) { 
  	console.log('Task Service Initialized....');

  }


  search(){

  	return this.http.get('https://aeroassists.herokuapp.com/api/search')
  		.map(res => res.json());


  }
}
