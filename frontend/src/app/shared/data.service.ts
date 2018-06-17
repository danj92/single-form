import { Injectable } from '@angular/core';



@Injectable()
export class DataService {

    getFormValue(value) {
        console.log('service alue', value);
    }
}
