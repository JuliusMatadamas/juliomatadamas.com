import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { ToastrService } from 'ngx-toastr';
import { ToggleService } from "../../../../../../services/toggle.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
    faPhone = faPhone;
    faEnvelope = faEnvelope;
    faLinkedin = faLinkedin;
    faGithub = faGithub;
    // Se define el formulario
    contactForm: FormGroup;
    // Variable para manejar la respuesta del servidor
    serverResponse: any;
    // @ts-ignore
    nombre:HTMLElement = document.querySelector("#name");

    constructor(private toggleService: ToggleService,private fb: FormBuilder, private http: HttpClient, private toastr: ToastrService) {
        // Inicializa el formulario y sus validaciones
        this.contactForm = this.fb.group({
            name: ['', [Validators.required, Validators.pattern(/^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ. ]{3,}$/)]],
            email: ['', [Validators.required, Validators.email]],
            phone: ['', [Validators.required, Validators.pattern(/^[1-9]\d{9}$/)]],
            subject: ['', [Validators.required, Validators.minLength(5)]],
            message: ['', [Validators.required, Validators.minLength(10)]]
        });
    }

    ngOnInit() {
        this.toggleService.setToFalseToggle();
    }

    // Función para enviar el formulario
    submitForm() {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
        };

        // Verifica si el formulario es válido
        if (this.contactForm.valid) {
            // Desactiva los campos y el botón de submit
            this.contactForm.disable();

            // Realiza la petición HTTP
            this.http.post('https://juliomatadamas.com/message.php', this.contactForm.value, httpOptions)
                .subscribe(
                    response => {
                        // Al recibir la respuesta, habilita los campos y muestra la respuesta en consola
                        this.contactForm.enable();
                        this.contactForm.reset();
                        this.serverResponse = response;
                        if (this.serverResponse.error) {
                            this.mostrarError(this.serverResponse.message);
                        } else {
                            this.mostrarNotificacion(this.serverResponse.message);
                        }
                    },
                    error => {
                        // En caso de error, habilita los campos y muestra el error en consola
                        this.contactForm.enable();
                        this.serverResponse = error;
                        if (error.error.message) {
                            this.mostrarError(error.error.message);
                        } else {
                            this.mostrarError(this.serverResponse.message);
                        }
                    }
                );
        }
    }

    mostrarNotificacion(message:string) {
        this.toastr.success(message, 'Respuesta del servidor');
    }

    mostrarError(message:string) {
        this.toastr.error(message, "Respuesta del servidor");
    }

    onNameChange() {
        const name = document.getElementById('name') as HTMLInputElement;
        const feedback = document.getElementById('name-feedback') as HTMLInputElement;
        if (name.value.trim() === '') {
            name.classList.remove('is-invalid', 'is-valid');
            feedback.classList.remove('invalid-feedback', 'valid-feedback');
            feedback.innerHTML = '&nbsp;';
        } else {
            if (!/^[a-zA-ZáéíóúüÜÁÉÍÓÚ\s]+$/.test(name.value)) {
                name.classList.remove('is-valid');
                name.classList.add('is-invalid');
                feedback.classList.remove('valid-feedback');
                feedback.classList.add('invalid-feedback');
                feedback.innerHTML = 'El nombre debe componerse de letras y espacios únicamente.';
            } else {
                if (name.value.trim().length < 3) {
                    name.classList.remove('is-valid');
                    name.classList.add('is-invalid');
                    feedback.classList.remove('valid-feedback');
                    feedback.classList.add('invalid-feedback');
                    feedback.innerHTML = 'El nombre debe tener al menos 3 caracteres.';
                } else {
                    name.classList.remove('is-invalid');
                    name.classList.add('is-valid');
                    feedback.classList.remove('invalid-feedback');
                    feedback.classList.add('valid-feedback');
                    feedback.innerHTML = 'El nombre parece correcto.';
                }
            }
        }
    }

    onEmailChange() {
        const email = document.getElementById('email') as HTMLInputElement;
        const feedback = document.getElementById('email-feedback') as HTMLInputElement;
        if (email.value.trim() === '') {
            email.classList.remove('is-invalid', 'is-valid');
            feedback.classList.remove('invalid-feedback', 'valid-feedback');
            feedback.innerHTML = '&nbsp;';
        } else {
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
                email.classList.remove('is-valid');
                email.classList.add('is-invalid');
                feedback.classList.remove('valid-feedback');
                feedback.classList.add('invalid-feedback');
                feedback.innerHTML = 'Ingrese un email válido.';
            } else {
                email.classList.remove('is-invalid');
                email.classList.add('is-valid');
                feedback.classList.remove('invalid-feedback');
                feedback.classList.add('valid-feedback');
                feedback.innerHTML = 'El email parece correcto.';
            }
        }
    }

    onPhoneChange() {
        const phone = document.getElementById('phone') as HTMLInputElement;
        const feedback = document.getElementById('phone-feedback') as HTMLInputElement;
        if (phone.value.trim() === '') {
            phone.classList.remove('is-invalid', 'is-valid');
            feedback.classList.remove('invalid-feedback', 'valid-feedback');
            feedback.innerHTML = '&nbsp;';
        } else {
            if (!/^[1-9]\d{9}$/.test(phone.value)) {
                phone.classList.remove('is-valid');
                phone.classList.add('is-invalid');
                feedback.classList.remove('valid-feedback');
                feedback.classList.add('invalid-feedback');
                feedback.innerHTML = 'Ingrese un número de teléfono válido (10 dígitos).';
            } else {
                phone.classList.remove('is-invalid');
                phone.classList.add('is-valid');
                feedback.classList.remove('invalid-feedback');
                feedback.classList.add('valid-feedback');
                feedback.innerHTML = 'El teléfono parece correcto.';
            }
        }
    }

    onSubjectChange() {
        const subject = document.getElementById('subject') as HTMLInputElement;
        const feedback = document.getElementById('subject-feedback') as HTMLInputElement;
        if (subject.value.trim() === '') {
            subject.classList.remove('is-invalid', 'is-valid');
            feedback.classList.remove('invalid-feedback', 'valid-feedback');
            feedback.innerHTML = '&nbsp;';
        } else {
            if (subject.value.trim().length < 5) {
                subject.classList.remove('is-valid');
                subject.classList.add('is-invalid');
                feedback.classList.remove('valid-feedback');
                feedback.classList.add('invalid-feedback');
                feedback.innerHTML = 'El asunto debe tener al menos 5 caracteres.';
            } else {
                subject.classList.remove('is-invalid');
                subject.classList.add('is-valid');
                feedback.classList.remove('invalid-feedback');
                feedback.classList.add('valid-feedback');
                feedback.innerHTML = 'El asunto parece correcto.';
            }
        }
    }

    onMessageChange() {
        const message = document.getElementById('message') as HTMLInputElement;
        const feedback = document.getElementById('message-feedback') as HTMLInputElement;
        if (message.value.trim() === '') {
            message.classList.remove('is-invalid', 'is-valid');
            feedback.classList.remove('invalid-feedback', 'valid-feedback');
            feedback.innerHTML = '&nbsp;';
        } else {
            if (message.value.trim().length < 10) {
                message.classList.remove('is-valid');
                message.classList.add('is-invalid');
                feedback.classList.remove('valid-feedback');
                feedback.classList.add('invalid-feedback');
                feedback.innerHTML = 'El mensaje debe tener al menos 5 caracteres.';
            } else {
                message.classList.remove('is-invalid');
                message.classList.add('is-valid');
                feedback.classList.remove('invalid-feedback');
                feedback.classList.add('valid-feedback');
                feedback.innerHTML = 'El mensaje parece correcto.';
            }
        }
    }
}
