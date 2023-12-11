import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PortfolioItemComponent } from './components/portfolio-item/portfolio-item.component';



@NgModule({
  declarations: [
    PortfolioComponent,
    PortfolioItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PortfolioModule { }
