import { productModel } from "src/app/models/transporte.model";

export class CalcTransportValuesInputModel {
  city: string;
  products: AddProductInputModel[];

  constructor(city: string) {
    this.city = city
    this.products = [];
  }
}

export class AddProductInputModel {
  id: number;
  name: string;
  quantity: number;
  weight: number;

  constructor(input: productModel) {
    this.id = input.id;
    this.name = input.name;
    this.quantity = input.quantity;
    this.weight = input.weight;
  }
}