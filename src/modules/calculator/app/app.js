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
    if (this.currentResult === 0) {
      this.currentResult = value;
    } else {
      if (/\//g.test(this.currentResult)) {
        // grab the integer part of the fraction
        let [string, integer, fraction] =
          this.currentResult.match(/(\d+) (.*)/);
        this.currentResult = `${integer}${value} ${fraction}`;
      } else {
        this.currentResult += `${value}`;
      }
    }
  }

  fraction(event) {
    let value = event.currentTarget.dataset.value;
    if (this.currentResult === 0) {
      this.currentResult = value;
    } else {
      if (/\//g.test(this.currentResult)) {
        let [string, integer, fraction] =
          this.currentResult.match(/(\d+) (.*)/);
        this.currentResult = `${integer} ${value}`;
      } else {
        this.currentResult += ` ${value}`;
      }
    }
  }
}
