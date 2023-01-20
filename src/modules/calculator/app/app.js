import { LightningElement } from "lwc";
import fc from "fraction-calculator";

export default class WoodCalc extends LightningElement {
  currentResult = 0;
  // https://github.com/dennis-jiang/fraction-calculator#readme
  get currentValue() {
    this.currentResult = fc("1/2").minus("1/4").toFraction();
    return this.currentResult;
  }
}
