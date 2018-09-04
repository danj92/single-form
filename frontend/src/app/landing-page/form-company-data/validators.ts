import {FormControl, FormGroup } from '@angular/forms';

export function myValidator(control: FormControl) {
    if (control.value === 'moja') {
        return { mojawalidacja: false };
    }
    return {};
}
