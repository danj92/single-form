import { Injectable } from '@angular/core';

@Injectable()
export class DataFormService {

    listDataForm = {
        // companyName: '',
        // street: '',
        // country: '',
        // nip: '',
        // contact: '',
        // telephone: '',
        // telephone24: '',
        // manager: '',
        // email: '',
        // krs: '',
        // checkbox1: '',
        company1: '',
        company2: '',
    };

    setDataForm(
        // companyName: string,
        // street: string,
        // country: string,
        // nip: string,
        // contact: string,
        // telephone: string,
        // telephone24: string,
        // manager: string,
        // email: string,
        // krs: string,
        // checkbox1: string,
        company1: string,
        company2: string,
    ) {
        // this.listDataForm.companyName = companyName;
        // this.listDataForm.street = street;
        // this.listDataForm.country = country;
        // this.listDataForm.nip = nip;
        // this.listDataForm.contact = contact;
        // this.listDataForm.telephone = telephone;
        // this.listDataForm.telephone24 = telephone24;
        // this.listDataForm.manager = manager;
        // this.listDataForm.email = email;
        // this.listDataForm.krs = krs;
        // this.listDataForm.checkbox1 = checkbox1;
        this.listDataForm.company1 = company1;
        this.listDataForm.company2 = company2;
    }

}
