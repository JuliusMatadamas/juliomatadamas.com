import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { faHandPointer, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
    imgSicoi: string = 'assets/images/portfolio/sicoi_thumbnail.png';
    imgVNotes: string = 'assets/images/portfolio/v-notes_thumbnail.png';
    faHandPointer = faHandPointer;
    faCircleXmark = faCircleXmark;

    showModal: boolean = false;

    constructor(private location: Location) {
    }

    handleModalClick() {
        this.toggleModal();
    }

    handleModalContainerClick(event: Event) {
        event.stopPropagation();
    }

    toggleModal() {
        this.showModal = !this.showModal;
        this.cambiarURL();
    }

    cambiarURL() {
        const nuevaURL = '/portfolio';
        this.location.replaceState(nuevaURL);
    }
}
