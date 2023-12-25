import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

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

    // Se define el formulario
    contactForm: FormGroup;

    // Variable para manejar la respuesta del servidor
    serverResponse: any;

    constructor(private fb: FormBuilder, private http: HttpClient) {
        // Inicializa el formulario y sus validaciones
        this.contactForm = this.fb.group({
            name: ['', [Validators.required, Validators.pattern(/^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ. ]{3,}$/)]],
            email: ['', [Validators.required, Validators.email]],
            phone: ['', [Validators.required, Validators.pattern(/^[1-9]\d{9}$/)]],
            subject: ['', [Validators.required, Validators.minLength(5)]],
            message: ['', [Validators.required, Validators.minLength(10)]]
        });
    }

    // Función para enviar el formulario
    submitForm() {
        // Verifica si el formulario es válido
        if (this.contactForm.valid) {
            // Desactiva los campos y el botón de submit
            this.contactForm.disable();

            // Realiza la petición HTTP
            this.http.post('https://juliomatadamas.com/message.php', this.contactForm.value)
                .subscribe(
                    response => {
                        // Al recibir la respuesta, habilita los campos y muestra la respuesta en consola
                        this.contactForm.enable();
                        this.serverResponse = response;
                        console.log('Respuesta del servidor:', this.serverResponse);
                    },
                    error => {
                        // En caso de error, habilita los campos y muestra el error en consola
                        this.contactForm.enable();
                        console.error('Error en la petición:', error);
                    }
                );
        }
    }
}
