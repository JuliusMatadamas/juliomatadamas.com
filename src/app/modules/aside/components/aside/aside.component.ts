import { Component, HostListener } from '@angular/core';
import { ToggleService } from "../../../../services/toggle.service";
import { Subscription } from "rxjs";

@Component({
    selector: 'app-aside',
    templateUrl: './aside.component.html',
    styleUrls: ['./aside.component.css']
})
export class AsideComponent {
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
        const asideElement = document.querySelector('aside');

        if (asideElement) {
            asideElement.classList.remove('open');
        }
    }
}
