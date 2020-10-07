import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  latest;
  total;
  value;

  constructor(private store: StoreService) { }

  ngOnInit(): void {
    this.latest = this.store.getLatest();
    this.value = this.store.getStockValue();
    this.total = this.store.getStockTotal();
  }

}
