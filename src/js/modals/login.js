import $ from "jquery";
import { Input } from "../elements/input";
import { Button } from "../elements/button";

export class Login {
  show() {
    this.render();
    $("#mainModal").modal("show");
  }

  hide() {
    $("#mainModal").modal("hide");
  }

  render() {
    const emailInput = new Input({
      name: "email",
      type: "text",
      value: "username@user.co",
      classList: ["form-control"],
      placeholder: "user login",
      ariaLabel: "Recipient's username",
      ariaDescribedby: "basic-addon2",
    });

    const passwordInput = new Input({
      name: "password",
      type: "password",
      value: "user12345",
      classList: ["form-control"],
      placeholder: "user password",
      ariaLabel: "Recipient's username",
      ariaDescribedby: "basic-addon2",
    });

    const closeTopBtn = new Button({
      type: "button",
      classList: ["btn-close", "m-0"],
      dataDismiss: "modal",
      ariaLabel: "Close",
    });

    const closeBottomBtn = new Button({
      type: "button",
      classList: ["btn", "btn-secondary"],
      dataDismiss: "modal",
      text: "Close",
    });

    const loginBtn = new Button({
      type: "button",
      classList: ["btn", "btn-primary", "js-login"],
      text: "Log in",
    });

    document.getElementById("mainModal").innerHTML = `<div class="modal-dialog">
    <div class="modal-content bg-info text-white">
      <div class="modal-header">
        <h5 class="modal-title text-uppercase fs-4 fw-bold mx-auto" id="exampleModalLabel">Registration</h5>
        ${closeTopBtn.render()}
      </div>
      <div class="modal-body">
        <div class="input-group mb-3">
          ${emailInput.render()}
        </div>
        <div class="input-group mb-3">
          ${passwordInput.render()}
        </div>
      </div>
      <div class="modal-footer mx-auto">
      ${closeBottomBtn.render()}
      ${loginBtn.render()} 
      </div>
    </div>
    </div>`;
  }
}
