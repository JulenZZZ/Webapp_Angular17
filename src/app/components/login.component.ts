import { Component, ViewChild, ViewEncapsulation } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { TextBoxComponent } from "@progress/kendo-angular-inputs";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AvatarComponent } from "@progress/kendo-angular-layout";
import { DateInputsModule } from "@progress/kendo-angular-dateinputs";
import { LabelModule } from "@progress/kendo-angular-label";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { LayoutModule } from "@progress/kendo-angular-layout";
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { IconsModule } from '@progress/kendo-angular-icons';
import { eyeIcon,eyeSlashIcon, SVGIcon } from '@progress/kendo-svg-icons';
import { RouterModule } from "@angular/router";


@Component({
    selector: "login-component",
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule,DateInputsModule,LabelModule,InputsModule,LayoutModule,ButtonsModule,
      IconsModule,RouterModule],
    templateUrl: "../views/login.html",
    encapsulation: ViewEncapsulation.None,
    })

export class LoginComponent {
    @ViewChild("password") public textbox: TextBoxComponent | undefined;

    public eyeIcon: SVGIcon = eyeIcon;
    public eyeSlashIcon: SVGIcon = eyeSlashIcon;
    public isPasswordVisible: boolean = false;

    public ngAfterViewInit(): void {
        if (this.textbox) {
            this.textbox.input.nativeElement.type = "password";
        }
    }

    public toggleVisibility(): void {
        if (this.textbox) {
            const inputEl = this.textbox.input.nativeElement;
            inputEl.type = inputEl.type === "password" ? "text" : "password";
            this.isPasswordVisible = !this.isPasswordVisible;
        }
    }

    public get currentIcon(): SVGIcon {
      return this.isPasswordVisible ? this.eyeSlashIcon : this.eyeIcon;
  }
  
    public form: FormGroup = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
      loggedin: new FormControl(),
      
    });
  
    public login(): void {
      this.form.markAllAsTouched();
    }
  
    public clearForm(): void {
      this.form.reset();
    }
}