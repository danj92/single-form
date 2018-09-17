import { Injectable } from '@angular/core';

@Injectable()
export class DataFormService {

forms = { };

setDataForm(name, value) {
  this.forms[name] = value;
  console.log(this.forms);
}

}
