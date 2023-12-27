import { Component, OnInit } from '@angular/core';
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { ToggleService } from "../../../../../../services/toggle.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
    faCalendar = faCalendar;

    constructor(private toggleService: ToggleService) {
    }

    ngOnInit() {
        this.toggleService.setToFalseToggle();
    }
}
