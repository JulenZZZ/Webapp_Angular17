
import { Component, ViewEncapsulation } from "@angular/core";
import { Validators, FormGroup, FormControl } from "@angular/forms";
import { TextBoxComponent } from "@progress/kendo-angular-inputs";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DateInputsModule } from "@progress/kendo-angular-dateinputs";
import { LabelModule } from "@progress/kendo-angular-label";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { LayoutModule } from "@progress/kendo-angular-layout";
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { CommonModule } from "@angular/common";


@Component({
    selector: "new-acc-component",
    templateUrl: "../views/new-acc.html",
    standalone: true,
    imports:[FormsModule, ReactiveFormsModule,DateInputsModule,LabelModule,InputsModule,LayoutModule,ButtonsModule,
    FormsModule,CommonModule],
    providers: [],
    encapsulation: ViewEncapsulation.None
})

export class NewAccountComponent {
  public min: Date = new Date(1917, 0, 1);
  public max: Date = new Date(2020, 4, 31);

  public registerForm: FormGroup = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    birthDate: new FormControl(new Date(2000, 10, 10)),
    email: new FormControl("", Validators.email),
    acceptNews: new FormControl(),
  });

  public submitForm(): void {
    this.registerForm.markAllAsTouched();
  }

  public clearForm(): void {
    this.registerForm.reset();
  }
}
