import { Component, OnInit } from '@angular/core';
import { ToggleService } from "../../../../../../services/toggle.service";

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

    constructor(private toggleService: ToggleService) {
    }

    ngOnInit() {
        this.toggleService.setToFalseToggle();
    }
}
