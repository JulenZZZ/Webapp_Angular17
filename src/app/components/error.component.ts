import { Component } from "@angular/core";

@Component({
    selector: "error",
    templateUrl: "../views/error.html",
    standalone: true
})

export class ErrorComponent {

    public title:string;

    constructor() { 
        this.title = "Error 404: Página no encontrada";
    }

    ngOnInit() {
        console.log("error.component cargado");
    }
}