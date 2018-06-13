import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { RadioGroupComponent } from './radio-group/radio-group.component';
import { RadioOptionComponent } from './radio-group/radio-option/radio-option.component';



@NgModule({
    declarations: [
        RadioGroupComponent,
        RadioOptionComponent
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
    ],
})
export class ArtFormsModule { }
