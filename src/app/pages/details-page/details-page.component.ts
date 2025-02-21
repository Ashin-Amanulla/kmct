import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-details-page',
  imports: [],
  templateUrl: './details-page.component.html',
  styleUrl: './details-page.component.css'
})
export class DetailsPageComponent {

  product: any;
  constructor(private api: ApiService, private url: ActivatedRoute) { }

  ngOnInit() {

    let id = this.url.snapshot.params['id'];

    this.api.getProductById(id).subscribe((data) => {
      this.product = data;

    })



  }

}
