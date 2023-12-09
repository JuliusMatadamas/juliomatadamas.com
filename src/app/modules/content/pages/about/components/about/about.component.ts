import { Component } from '@angular/core';
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
    faCalendar = faCalendar;
}
