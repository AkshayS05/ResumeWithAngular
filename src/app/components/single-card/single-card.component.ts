import { Component,EventEmitter,Input,Output } from '@angular/core';
import { PortfolioCard } from 'src/app/model/portfolioModel/portfolio.model';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.css']
})
export class SingleCardComponent {
  @Input() card!: PortfolioCard;
  @Output() onCardSelect = new EventEmitter<PortfolioCard>();

  handleClick() {
    console.log("Reached here...");
    this.onCardSelect.emit(this.card);
  }
}
