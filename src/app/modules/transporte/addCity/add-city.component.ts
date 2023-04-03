import { Component, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { productModel } from 'src/app/models/transporte.model';
import { AddProductInputModel, CalcTransportValuesInputModel } from 'src/app/services/inputModels/calc-transport-values-input-model';

@Component({
  selector: 'add-city-component',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.css']
})
export class AddCityComponent implements OnInit {
  @Input() cities: string[];
  @Input() count: number;
  @Output() output = new Subject<CalcTransportValuesInputModel>()

  index: number;
  selectedCity: string = "";
  cityAndProducts: CalcTransportValuesInputModel;
  
  @Input() products: productModel[];
  selectedProduct: productModel;
  selectedProductQuantity: number = 0;

  constructor() { }
  
  ngOnInit(): void {
    this.index = this.count;
  }

  addStopCity(): void {
    this.cityAndProducts = new CalcTransportValuesInputModel(this.selectedCity);
    if (this.index == 0) {
      this.output.next(this.cityAndProducts);
    }
  }

  addCityProduct(): void {
    this.selectedProduct.quantity = this.selectedProductQuantity;
    this.cityAndProducts.products.push(new AddProductInputModel(this.selectedProduct));
    this.output.next(this.cityAndProducts);
    }
}