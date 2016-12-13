import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-service';


@Component({
    selector: 'sign-in',
    styleUrls: ['./sign-in.component.css'],
    template: `
    <div class="sign-in" *ngIf="!auth.authenticated">
        <h1 class="sign-in__heading">Sign in</h1>
        <button class="sign-in__button" (click)="signInAnonymously()" type="button">Anonymously</button>
        <button class="sign-in__button" (click)="signInWithGithub()" type="button">GitHub</button>
        <button class="sign-in__button" (click)="signInWithGoogle()" type="button">Google</button>
        <button class="sign-in__button" (click)="signInWithTwitter()" type="button">Twitter</button>
    </div>
    <div class="sign-out" *ngIf="auth.authenticated">
        <button class="sign-in__button" (click)="signOut()" type="button">Logout</button>
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

  signOut(): void {
      this.auth.signOut();
  }

  private postSignIn(): void {
    
  }
}