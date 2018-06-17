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

  constructor(private dataForm: DataFormService) { }

  ngOnInit() {
    this.companyName = this.dataForm.listDataForm.companyName;
    this.street = this.dataForm.listDataForm.street;
  }




}
