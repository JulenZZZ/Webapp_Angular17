import { Component } from "@angular/core";
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute, Params, RouterModule } from "@angular/router";



@Component({
    selector: "home",
    templateUrl: "../views/home.html",
    imports: [CommonModule, RouterModule], 
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