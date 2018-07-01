import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { RadioGroupComponent } from './radio-group/radio-group.component';
import { RadioOptionComponent } from './radio-group/radio-option/radio-option.component';
import { FormErrorsComponent } from './form-errors/form-errors.component';
import { InputComponent } from './input/input.component';
import { CheckboxComponent } from './checkbox/checkbox.component';



@NgModule({
    declarations: [
        RadioGroupComponent,
        RadioOptionComponent,
        FormErrorsComponent,
        InputComponent,
        CheckboxComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [

    ],
    exports: [
        RadioGroupComponent,
        RadioOptionComponent,
        FormErrorsComponent,
        InputComponent,
        CheckboxComponent,
    ],
})
export class ArtFormsModule { }
