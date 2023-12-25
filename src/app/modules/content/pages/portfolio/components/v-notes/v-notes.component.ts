import { Component } from '@angular/core';
import { faBootstrap, faCss3Alt, faHtml5, faVuejs } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-v-notes',
  templateUrl: './v-notes.component.html',
  styleUrls: ['./v-notes.component.css']
})
export class VNotesComponent {
    faBootstrap = faBootstrap;
    faCss3Alt = faCss3Alt;
    faHtml5 = faHtml5;
    faVuejs = faVuejs;
    faGlobe = faGlobe;
}
