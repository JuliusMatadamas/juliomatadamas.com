import { Component } from '@angular/core';
import { ToggleService } from "../../../../services/toggle.service";

@Component({
    selector: 'app-toggler',
    templateUrl: './toggler.component.html',
    styleUrls: ['./toggler.component.css']
})

export class TogglerComponent {
    isOpen: boolean = false;

    constructor(private toggleService: ToggleService) {
    }

    toggle() {
        this.toggleService.toggle();
        this.toggleService.isOpen$.subscribe((isOpen:boolean) => {
            this.isOpen = isOpen;
        });
    }
}
