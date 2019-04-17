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

	searchresult:search[];

  constructor(private searchService: SearchService) { 

  		this.searchService.search().subscribe(results => 
		{
			this.searchresult=results
  			console.log(results)
  		});

  }

  ngOnInit() {
  }



}
