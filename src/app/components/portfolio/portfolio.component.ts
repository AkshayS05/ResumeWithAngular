import { Component,Input } from '@angular/core';
import { portfolioData } from './portfolio.data';
import { PortfolioCard } from 'src/app/model/portfolioModel/portfolio.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  portfolioCards:PortfolioCard[]=portfolioData;

  handleCardSelect(portfolioCard:PortfolioCard){
    console.log("clicked", portfolioCard);
  }
}

