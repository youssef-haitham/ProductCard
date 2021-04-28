import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'product';
  product = {
    title: 'Novaldol',
    description: 'Pain Killer',
    price: 25.5,
    discountPrice: 20.5
  };
}
