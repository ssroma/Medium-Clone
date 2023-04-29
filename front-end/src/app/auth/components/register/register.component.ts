import { RegisterRequestInterface } from './../../interfaces/register-request.inteface';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { AppStateInterface } from 'src/app/shared/interfaces/app-state.interface';
import { isSubmittingSelector } from '../../store/selectors';
import { registerAction } from '../../store/actions/register.action';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  isSubmitting$: Observable<boolean>;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppStateInterface>
  ) {}

  ngOnInit(): void {
    this.initializedForm();
    this.initializeValues();
  }

  initializedForm(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
  }

  onSubmit(): void {
    console.log('On Submit', this.form.value);
    const request: RegisterRequestInterface = {
      user: { ...this.form.value },
    };
    this.store.dispatch(registerAction({ request }));
  }
}
