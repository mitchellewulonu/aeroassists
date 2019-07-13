import { Component, OnInit, Input } from '@angular/core';
import {SearchService} from '../../services/search/search.service'
import  {search} from '../../../search';
import  {LandingComponent} from '../landing/landing.component';
import { ActivatedRoute,Event,Router,NavigationStart,NavigationEnd, NavigationCancel,NavigationError} from '@angular/router';


import * as $ from 'jquery';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit{

  sq: any;
  country: any;
  private sub: any;
  dataFlag:boolean =true;
  results:search[];
  showLoadingIndicator=false;

  constructor(private searchService:SearchService,private route: ActivatedRoute) {}



  ngOnInit(){

       this.sub = this.route.params.subscribe(params => {
       this.sq = params['sq']; // (+) converts string 'id' to a number
       this.country = params['country'];
       // In a real app: dispatch action to load the details here.
        this.executeSearch();


        /*$(document).ready(function() {
        var x = document.getElementById("myDIV");
        var y= document.getElementById("loader");
        if ( $('#myDIV').length<0 ) {
          console.log("mydiv is hidden");
          y.style.visibility = "visible";
          }
      });*/ //will use this for spinner later on 


    });
}
  	
  
    


executeSearch(){

    this.searchService.search(this.sq.trim().replace(/ /g, '%20'), this.country.trim().replace(/ /g, '%20'),(data)=>{

      if(data.length>0){
        this.results=this.searchService.result;
        this.dataFlag=true;
      }


      else{

        this.dataFlag=false;
      }

    }
    )

    /*.subscribe(results => 
    {
      this.searchService.result=results;
        console.log(this.searchService.result)
        console.log(this.searchQuery + "query in landing")
      })*/;

}

  ngOnDestroy() {
    this.sub.unsubscribe();
  }




}
