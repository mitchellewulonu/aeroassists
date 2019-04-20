import { Component, OnInit } from '@angular/core';

import { Router} from '@angular/router';
import {SearchService} from '../../services/search/search.service';
import  {search} from '../../../search';




@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

	searchResult:search[];
  searchQuery:string;
  country:string;

  constructor(private searchService: SearchService) { 

 

  }

  ngOnInit() {


}

executeSearch(){

    this.searchService.search(this.searchQuery, this.country).subscribe(results => 
    {
      this.searchResult=results
        console.log(results)
      });

}
