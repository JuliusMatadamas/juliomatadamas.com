import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ToggleService {
    private isOpenSubject = new BehaviorSubject<boolean>(false);

    isOpen$ = this.isOpenSubject.asObservable();

    toggle() {
        this.isOpenSubject.next(!this.isOpenSubject.value);
    }

    setToFalseToggle() {
        this.isOpenSubject.next(false);
    }
}
