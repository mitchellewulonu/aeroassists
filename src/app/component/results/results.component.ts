import { Component, OnInit, Input } from '@angular/core';
import {SearchService} from '../../services/search/search.service'
import  {search} from '../../../search';
import { Router} from '@angular/router';
import  {LandingComponent} from '../landing/landing.component';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

results:search[];

  constructor(private searchService:SearchService, private LandingComponent:LandingComponent) { }

  ngOnInit() {



  	this.results=this.LandingComponent.searchResult

  }

}
