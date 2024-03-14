import { Component } from "@angular/core";
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { SVGIcon, folderIcon } from "@progress/kendo-svg-icons";



@Component({
    selector: "kendo-component",
    standalone: true,
    imports: [DateInputsModule,ButtonsModule],
     templateUrl: "../views/kendoui.html"
    })

    export class KendoComponent {
        title = "Kendo UI";
    }