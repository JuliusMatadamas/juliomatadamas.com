import { Component, HostListener } from '@angular/core';
import { ToggleService } from "../../../../services/toggle.service";

@Component({
    selector: 'app-toggler',
    templateUrl: './toggler.component.html',
    styleUrls: ['./toggler.component.css']
})

export class TogglerComponent {
    isOpen: boolean = false;
    isMobile:boolean = window.innerWidth <= 767;

    constructor(private toggleService: ToggleService) {
    }

    toggle() {
        this.toggleService.toggle();
        this.toggleService.isOpen$.subscribe((isOpen:boolean) => {
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
        const togglerElement = document.querySelector('.toggler');

        if (togglerElement) {
            togglerElement.classList.remove('open');
        }
    }
}
