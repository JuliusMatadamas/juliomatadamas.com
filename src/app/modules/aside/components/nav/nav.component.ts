import { Component } from '@angular/core';
import { faHouse } from "@fortawesome/free-solid-svg-icons"
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import { faPenRuler } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent {
    faHouse = faHouse;
    faUserTie = faUserTie;
    faPenRuler = faPenRuler;
    faBriefcase = faBriefcase;
    faEnvelope = faEnvelope;
}
