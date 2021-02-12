import { Controller } from "stimulus"

export default class extends Controller {
  connect() {
    console.log("hello devon", this.element)
  }
  saveForm() {

  }
  openMenu() {
    window.document.getElementById("overlay-menu").style.display = "block";
  }

  closeMenu() {
   window.document.getElementById("overlay-menu").style.display = "none";
  }
}
