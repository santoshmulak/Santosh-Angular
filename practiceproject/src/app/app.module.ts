import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PopupComponent } from './popup/popup.component';
import { Popup1Component } from './popup/popup1/popup1.component';
import { TestComponent } from './test/test.component';
import { UserModule } from './user/user.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    PopupComponent,
    Popup1Component,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
