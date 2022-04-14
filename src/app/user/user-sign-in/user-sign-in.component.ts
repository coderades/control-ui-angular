import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-sign-in',
  templateUrl: './user-sign-in.component.html',
  styleUrls: ['./user-sign-in.component.scss'],
})
export class UserSignInComponent implements OnInit {
  signInForm: FormGroup;

  hide = true;

  constructor(formBuilder: FormBuilder) {
    this.signInForm = formBuilder.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  doLogin() {
    if (this.signInForm.invalid) {
      return;
    }

    console.log(this.signInForm.value);
    console.log(this.signInForm.get('user')?.value);
    console.log(this.signInForm.get('password')?.value);
  }
}
