import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    ngOnInit() {
        const options = {
            strings: ['Analista de Datos', 'Desarrollador Fullstack', 'Desarrollador Frontend', 'Desarrollador Backend', 'Programador de aplicaciones', 'Administrador de Bases de Datos'],
            typeSpeed: 50,
            loop: true,
            fadeOut: true,
        };

        const typed = new Typed('.typing', options);
    }
}
