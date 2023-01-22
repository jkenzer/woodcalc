import { LightningElement } from "lwc";
import fc from "fraction-calculator";

export default class WoodCalc extends LightningElement {
  currentResult = 0;
  currentOperations = [];
  // https://github.com/dennis-jiang/fraction-calculator#readme

  get currentValue() {
    // this.currentResult = fc("1/2").minus("1/4").toFraction();
    return this.currentResult;
  }

  clear() {
    this.currentResult = 0;
    this.currentOperations = [];
  }

  sign() {
    this.currentResult = fc(this.currentResult).times("-1").toNumber();
  }

  integer(event) {
    let value = event.currentTarget.dataset.value;
    this.currentOperations.push(value);
    this.currentResult = value;
  }
}
