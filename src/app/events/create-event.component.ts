import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    templateUrl: './create-event.component.html'
})
export class createEventComponent{
    isDirty:boolean = true;

    constructor(private router: Router){
        
    }

    cancel(){
        this.router.navigate(['/events']);
    }

}