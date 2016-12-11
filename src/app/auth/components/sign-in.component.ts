import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-service';


@Component({
    selector: 'sign-in',
    styles: [],
    template: `
        <div class="g-row sign-in">
        <div class="g-col">
            <h1 class="sign-in__heading">Sign in</h1>
            <button class="sign-in__button" (click)="signInAnonymously()" type="button">Anonymously</button>
            <button class="sign-in__button" (click)="signInWithGithub()" type="button">GitHub</button>
            <button class="sign-in__button" (click)="signInWithGoogle()" type="button">Google</button>
            <button class="sign-in__button" (click)="signInWithTwitter()" type="button">Twitter</button>
        </div>
        </div>
    `
})

export class SignInComponent {
  constructor(private auth: AuthService) {}

  signInAnonymously(): void {
    this.auth.signInAnonymously()
      .then(() => this.postSignIn());
  }

  signInWithGithub(): void {
    this.auth.signInWithGithub()
      .then(() => this.postSignIn());
  }

  signInWithGoogle(): void {
    this.auth.signInWithGoogle()
      .then(() => this.postSignIn());
  }

  signInWithTwitter(): void {
    this.auth.signInWithTwitter()
      .then(() => this.postSignIn());
  }

  private postSignIn(): void {
    
  }
}