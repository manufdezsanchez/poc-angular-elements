import { Injector } from '@angular/core';
import { NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { NgLoginFormComponent } from './ng-login-form/ng-login-form.component';

@NgModule({
  declarations: [NgLoginFormComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  entryComponents: [NgLoginFormComponent],
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    // using createCustomElement from angular package it will convert angular component to stander web component
    const el = createCustomElement(NgLoginFormComponent, {
      injector: this.injector,
    });
    // using built in the browser to create your own custome element name
    customElements.define('login-form', el);
  }
}
