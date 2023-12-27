import { Component, HostListener } from '@angular/core';
import { ToggleService } from "./services/toggle.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title:string = 'juliomatadamas';

    constructor(private toggleService:ToggleService) {
    }

    @HostListener('window:resize', ['$event'])
    onResize() {
        this.toggleService.setToFalseToggle();
    }
}
