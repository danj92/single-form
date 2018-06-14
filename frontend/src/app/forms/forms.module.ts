import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { RadioGroupComponent } from './radio-group/radio-group.component';
import { RadioOptionComponent } from './radio-group/radio-option/radio-option.component';
import { FormErrorsComponent } from './form-errors/form-errors.component';



@NgModule({
    declarations: [
        RadioGroupComponent,
        RadioOptionComponent,
        FormErrorsComponent
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
    ],
})
export class ArtFormsModule { }
