import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { login } from '../login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginFormGroupService {

  constructor(public fb: FormBuilder) { }

  getFormGroup(): FormGroup {
      return new FormGroup({
          email: new FormControl(null,[Validators.required, Validators.email]),
          password: new FormControl(null,Validators.required),

      });
  }

  getValueFromFormGroup(fg: FormGroup):login {
      return {
          email: fg.controls['email'].value,
         password:fg.controls['password'].value,

      };
  }

}
