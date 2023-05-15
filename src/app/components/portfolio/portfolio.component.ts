import { Component,Input,OnInit } from '@angular/core';
import { PortfolioCard } from 'src/app/model/portfolioModel/portfolio.model';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit{
  portfolioCards:PortfolioCard[]=[];

constructor(private projectSerivce: ProjectService){

}
ngOnInit(): void {
    this.portfolioCards = this.projectSerivce.getcardData();
}
  handleCardSelect(portfolioCard:PortfolioCard){
    console.log("clicked", portfolioCard);
  }
}

