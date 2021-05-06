import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'product';
  product = {
    title: 'Product Title Goes Here',
    description: 'Product Description Goes Here',
    price: 25.5,
    discountPrice: 20.5,
    imgSRC: "../assets/catafast.png"
  };
}
