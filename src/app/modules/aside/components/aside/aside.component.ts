import { Component } from '@angular/core';
import { ToggleService } from "../../../../services/toggle.service";
import { Subscription } from "rxjs";

@Component({
    selector: 'app-aside',
    templateUrl: './aside.component.html',
    styleUrls: ['./aside.component.css']
})
export class AsideComponent {
    isOpen:boolean = false;
    private toggleSubscription:Subscription;

    constructor(private toggleService:ToggleService) {
        this.toggleSubscription = this.toggleService.isOpen$.subscribe((isOpen:boolean) => {
            this.isOpen = isOpen;
        });
    }
}
