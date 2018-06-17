import { Injectable } from '@angular/core';

@Injectable()
export class DataFormService {

    listDataForm = {
        companyName: '',
        street: '',
    };

    setDataForm(companyName: string, street: string) {
        this.listDataForm.companyName = companyName;
        this.listDataForm.street = street;
    }

}
