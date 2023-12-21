import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PortfolioItemComponent } from './components/portfolio-item/portfolio-item.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SicoiComponent } from './components/sicoi/sicoi.component';
import { VNotesComponent } from './components/v-notes/v-notes.component';
import { RouterLink, RouterOutlet } from "@angular/router";



@NgModule({
    declarations: [
        PortfolioComponent,
        PortfolioItemComponent,
        SicoiComponent,
        VNotesComponent
    ],
    imports: [
        CommonModule,
        FontAwesomeModule,
        RouterOutlet,
        RouterLink
    ]
})
export class PortfolioModule { }
