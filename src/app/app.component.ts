import { Component } from '@angular/core';
import { portfolioData } from './components/portfolio/portfolio.data';
import { PortfolioCard } from './model/portfolioModel/portfolio.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'resume';
  portfolioCards:PortfolioCard[]=portfolioData;
  
}
