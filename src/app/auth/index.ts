import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SignInComponent } from './components/sign-in.component';
import { AuthService } from './services/auth-service';


@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    AuthService,
  ]
})

export class AuthModule {}
export { AuthService, SignInComponent };
