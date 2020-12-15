import {ChangeDetectionStrategy, Component, OnInit}      from '@angular/core';
import {SignupStore}                                     from "../../stores/views/signup.store";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector       : 'mem-sign-up',
  templateUrl    : './sign-up.component.html',
  styleUrls      : ['./sign-up.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup

  constructor(
    public sus: SignupStore,
    public fb: FormBuilder
  ) {
    window['signupForm'] = this;
  }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      email   : new FormControl('',
        [Validators.required,
         Validators.email]),
      name    : new FormControl('',
        [Validators.required]),
      password: new FormControl('',
        [Validators.required, Validators.minLength(6)])
    })

  }

  get email() {
    return this.signupForm.get('email')
  }

  get name() {
    return this.signupForm.get('name')
  }

  get password() {
    return this.signupForm.get('password')
  }


}
