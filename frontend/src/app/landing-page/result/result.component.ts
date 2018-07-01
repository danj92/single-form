import { Component, OnInit } from '@angular/core';
import { DataFormService } from '../../shared/data-form.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  companyName: string;
  street: string;
  country: string;
  nip: string;
  contact: string;
  telephone: string;
  telephone24: string;
  manager: string;
  email: string;
  krs: string;
  checkbox1: string;

  constructor(private dataForm: DataFormService) { }

  ngOnInit() {
    this.companyName = this.dataForm.listDataForm.companyName;
    this.street = this.dataForm.listDataForm.street;
    this.country = this.dataForm.listDataForm.country;
    this.nip = this.dataForm.listDataForm.nip;
    this.contact = this.dataForm.listDataForm.contact;
    this.telephone = this.dataForm.listDataForm.telephone;
    this.telephone24 = this.dataForm.listDataForm.telephone24;
    this.manager = this.dataForm.listDataForm.manager;
    this.email = this.dataForm.listDataForm.email;
    this.krs = this.dataForm.listDataForm.krs;
    this.krs = this.dataForm.listDataForm.checkbox1;
  }




}
