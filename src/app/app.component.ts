import { Component } from '@angular/core';
import { FormBuilder, Validators, NgForm } from '@angular/forms';
import { MustMatch } from './helpers/must-match.validator';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'registration-form';
  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) { }

  // Creating form controls for registration form
  registerForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
    lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
    mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
    email: ['', [Validators.required, Validators.email]],
    dob: ['', Validators.required],
    address: [''],
    city: [''],
    state: [''],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', Validators.required],
  }, {
    validator: MustMatch('password', 'confirmPassword')
  });

  // Getter function to get the form controls
  get registerFormControl(): any {
    return this.registerForm.controls;
  }

  // Function to execute on form submit
  onSubmit(form: any): any {
    if (this.registerForm.invalid) {
      return;
    }
    this.snackBar.open('Registered Successfully..', '', {
      horizontalPosition: 'right',
      verticalPosition: 'top',
      duration: 3000,
      panelClass: 'bg-success'
    } );
    form.resetForm();
  }


}
