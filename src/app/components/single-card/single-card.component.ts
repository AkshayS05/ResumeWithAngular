import { Component,Input } from '@angular/core';
import { PortfolioCard } from 'src/app/model/portfolioModel/portfolio.model';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.css']
})
export class SingleCardComponent {
  @Input() card!: PortfolioCard;

}
