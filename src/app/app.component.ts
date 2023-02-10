import { Component, OnInit } from '@angular/core';
import { ShoppingCartItemModel } from './shared/models/shopping-cart-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor() {}

  title = 'shopping-cart';

  items: ShoppingCartItemModel[] = [
    {
      id: 1,
      count: 1,
      image: 'assets/images/pixel.jpg',
      name: 'Pixel 7 128GB',
      price: 500,
    },
    {
      id: 2,
      count: 2,
      image: 'assets/images/pixel.jpg',
      name: 'Pixel 7 256GB',
      price: 650,
    },
    {
      id: 3,
      count: 5,
      image: 'assets/images/pixel.jpg',
      name: 'Pixel 7 Pro 512GB',
      price: 750,
    },
  ];

  refresh() {
    let sumPrice: number = 0;
    this.items.forEach((item) => {
      const price: number = item.price ?? 0;
      sumPrice += (price * (item.count ?? 0));
    });
    this.totalPrice = sumPrice;
  }

  ngOnInit(): void {
    this.initCart();
  }

  private initCart() {
    this.items = [
      {
        id: 1,
        count: 1,
        image: 'assets/images/pixel.jpg',
        name: 'Pixel 7 128GB',
        price: 500,
      },
      {
        id: 2,
        count: 2,
        image: 'assets/images/pixel.jpg',
        name: 'Pixel 7 256GB',
        price: 650,
      },
      {
        id: 3,
        count: 5,
        image: 'assets/images/pixel.jpg',
        name: 'Pixel 7 Pro 512GB',
        price: 750,
      },
    ];
    this.refresh();
  }

  totalPrice: number = 0;

  onDeleteEvent($cartItemId: number) {
    const index = this.items.findIndex((item) => item.id === $cartItemId);
    this.items.splice(index, 1);
  }

  onCountUdatedEvent($event: ShoppingCartItemModel) {
    const index = this.items.findIndex((item) => item.id === $event.id);
    this.items[index] = $event;
  }
}
