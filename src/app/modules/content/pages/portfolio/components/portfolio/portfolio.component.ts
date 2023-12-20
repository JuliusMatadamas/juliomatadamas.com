import { Component } from '@angular/core';
import { faHandPointer } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
    imgSicoi: string = 'assets/images/portfolio/sicoi_thumbnail.png';
    imgVNotes: string = 'assets/images/portfolio/v-notes_thumbnail.png';
    faHandPointer = faHandPointer;
}
