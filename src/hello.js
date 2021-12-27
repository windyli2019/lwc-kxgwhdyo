import { LightningElement , api } from "lwc";

export default class HelloWorld extends LightningElement {
  @api firstName = "World";
  greeting = "";

  handleChange(event) {
      this.greeting = event.target.value;
  }
}