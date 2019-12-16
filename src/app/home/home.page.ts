import { Component } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";
import { NavController } from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { AuthenticateService } from "../services/authenticate.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class HomePage {
  validations_form: FormGroup;
  errorMessage: string = "";

  constructor(
    private navCtrl: NavController,
    private authService: AuthenticateService,
    private formBuilder: FormBuilder,
    private storage: Storage
  ) {
    this.validations_form = this.formBuilder.group({
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
        ])
      ),
    });
  }

  loginUser(value) {
    this.authService
      .loginUser(value)
      .catch(error => {
        this.errorMessage = error;
      });
  }


}
