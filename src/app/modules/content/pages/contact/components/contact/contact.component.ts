import { Component } from '@angular/core';
import { faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
    faPhone = faPhone;
    faEnvelope = faEnvelope;
    faLinkedin = faLinkedin;
    faGithub = faGithub;
}
