import { Component, ViewEncapsulation } from "@angular/core";
import { Validators, FormGroup, FormControl } from "@angular/forms";
import { TextBoxComponent } from "@progress/kendo-angular-inputs";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DateInputsModule } from "@progress/kendo-angular-dateinputs";
import { LabelModule } from "@progress/kendo-angular-label";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { LayoutModule } from "@progress/kendo-angular-layout";
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { provideAnimations } from "@angular/platform-browser/animations";
import { CommonModule } from "@angular/common";


@Component({
    selector: "new-acc-component",
    templateUrl: "../views/new-acc.html",
    standalone: true,
    imports:[FormsModule, ReactiveFormsModule,DateInputsModule,LabelModule,InputsModule,LayoutModule,ButtonsModule,
    FormsModule],
    providers: [
      provideAnimations() // Add this line to enable animations
    ],
    encapsulation: ViewEncapsulation.None
})

export class NewAccountComponent {
    public phoneNumberValue: string = "";
    public phoneNumberMask: string = "(999) 000-00-00-00";
  
    public form: FormGroup;
  
    public data: any = {
      fullName: "",
      email: "",
      phoneNumber: this.phoneNumberValue,
      arrivalDate: null,
      numberOfNights: null,
      numberOfGuests: null,
      terms: false,
      comments: "",
    };
  
    constructor() {
      this.form = new FormGroup({
        fullName: new FormControl(this.data.fullName, [Validators.required]),
        email: new FormControl(this.data.email, [
          Validators.required,
          Validators.email,
        ]),
        phoneNumber: new FormControl(this.data.phoneNumber, [
          Validators.required,
        ]),
        arrivalDate: new FormControl(this.data.arrivalDate, [
          Validators.required,
        ]),
        numberOfNights: new FormControl(this.data.numberOfNights, [
          Validators.required,
        ]),
        numberOfGuests: new FormControl(this.data.numberOfGuests, [
          Validators.required,
          Validators.max(5),
        ]),
        terms: new FormControl(this.data.terms, [Validators.requiredTrue]),
        comments: new FormControl(this.data.comments),
      });
    }
  
    public submitForm(): void {
      this.form.markAllAsTouched();
    }
  
    public clearForm(): void {
      this.form.reset();
    }
}