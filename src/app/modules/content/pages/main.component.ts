import { Component } from '@angular/core';
import { ToggleService } from "../../../services/toggle.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent {
    isOpen:boolean = false;
    private toggleSubscription:Subscription;

    constructor(private toggleService:ToggleService) {
        this.toggleSubscription = this.toggleService.isOpen$.subscribe((isOpen:boolean) => {
            this.isOpen = isOpen;
        });
    }
}
