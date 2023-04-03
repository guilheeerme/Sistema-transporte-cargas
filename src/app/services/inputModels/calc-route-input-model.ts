export class CalcRouteInputModel {
  firstCity: string;
  lastCity: string;
  truckType: string;

  constructor(firstCity: string, lastCity: string, truckType: string) {
    this.firstCity = firstCity,
    this.lastCity = lastCity,
    this.truckType = truckType
  }
}