import { Component } from "@angular/core";
import { CommonModule } from '@angular/common';


@Component({
    selector: "home",
    templateUrl: "../views/home.html", 
    standalone: true
})
export class HomeComponent {
    public title:string;

    constructor() {
        this.title = "Webapp de productos con Angular 17";
    }

    ngOnInit() {
        console.log("home.component cargado");
    }
}