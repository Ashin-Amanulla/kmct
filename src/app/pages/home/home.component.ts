import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { CardsComponent } from "../../cards/cards.component";

@Component({
  selector: 'app-home',
  imports: [CardsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private api: ApiService) { }



  products: any = [];

  ngOnInit(): void {
    this.api.getProducts().subscribe((data: any) => {
      this.products = data;
     

    })

  }
}