import { Component, OnInit, Input } from '@angular/core';
import {SearchService} from '../../services/search/search.service'
import  {search} from '../../../search';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

	@Input() results:search[];

  constructor(private searchService:SearchService) { }

  ngOnInit() {

  	console.log('here are results: '+ this.results);

  }

}
