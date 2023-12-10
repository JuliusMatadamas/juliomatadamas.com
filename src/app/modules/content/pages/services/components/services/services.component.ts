import { Component } from '@angular/core';
import { faChartBar, faDatabase, faDesktop, faLaptop, faMobile, faServer } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
    faChartBar = faChartBar;
    faDatabase = faDatabase;
    faDesktop = faDesktop;
    faLaptop = faLaptop;
    faMobile = faMobile;
    faServer = faServer;
}
