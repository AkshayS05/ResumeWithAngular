import { Injectable } from "@angular/core";
import { portfolioData } from "../components/portfolio/portfolio.data";

@Injectable({
  //autoregistration
  providedIn :"root"
})

export class ProjectService {
  private projectCardData = portfolioData;

  constructor(){

  }
  
  getcardData(){
    return this.projectCardData;
  }
}
