import { Component, HostListener } from '@angular/core';
import { ToggleService } from "../../../services/toggle.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent {
    isOpen:boolean = false;
    isMobile:boolean = window.innerWidth <= 767;
    private toggleSubscription:Subscription;

    constructor(private toggleService:ToggleService) {
        this.toggleSubscription = this.toggleService.isOpen$.subscribe((isOpen:boolean) => {
            this.isOpen = isOpen;
        });
    }

    @HostListener('window:resize', ['$event'])
    onResize(event:any) {
        this.isMobile = event.target.innerWidth <= 767;

        if (!this.isMobile) {
            this.removeOpenClass();
        }
    }

    private removeOpenClass() {
        const mainElement = document.querySelector('main');

        if (mainElement) {
            mainElement.classList.remove('open');
        }
    }
}
