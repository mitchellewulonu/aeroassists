import { Component, OnInit } from '@angular/core';

import { Router} from '@angular/router';
import {SearchService} from '../../services/search/search.service';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private searchService: SearchService) { 

  		this.searchService.search().subscribe(results => console.log(results));

  }

  ngOnInit() {
  }



}
