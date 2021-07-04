import { Component } from "@angular/core";
import { CartService } from "../services/cart.service";

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
    public cartVisible: boolean = false;
    constructor(public service: CartService) {

    }
}
