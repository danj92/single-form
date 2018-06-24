import {FormControl, FormGroup } from '@angular/forms';

export function myValidator(control: FormControl) {
    console.log(control.value);
    if (control.value === 'moja') {
        return { mojawalidacja: false };
    }
    return {};
}
