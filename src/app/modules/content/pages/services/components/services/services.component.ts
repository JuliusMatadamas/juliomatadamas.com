import { Component, OnInit } from '@angular/core';
import { faChartBar, faDatabase, faDesktop, faLaptop, faMobile, faServer } from "@fortawesome/free-solid-svg-icons";
import { ToggleService } from "../../../../../../services/toggle.service";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit{
    faChartBar = faChartBar;
    faDatabase = faDatabase;
    faDesktop = faDesktop;
    faLaptop = faLaptop;
    faMobile = faMobile;
    faServer = faServer;

    constructor(private toggleService: ToggleService) {
    }

    ngOnInit() {
        this.toggleService.setToFalseToggle();
    }
}
