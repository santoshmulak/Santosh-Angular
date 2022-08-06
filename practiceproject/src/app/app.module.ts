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
import { CustomDirective } from './directive/custom.directive';
import { HighLightDirective } from './directive/high-light.directive';
import { CharacterOnlyDirective } from './directive/character-only.directive';
import { CurrencyPipe } from './pipe/currency.pipe';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AdminModule } from './admin/admin.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentModule } from './student/student.module';
import { MatButtonModule } from "@angular/material/button";
import { ChildComponent } from './child/child.component';
import { HomeComponent } from './home/home.component';
import { DatatransferComponent } from './datatransfer/datatransfer.component';
import {HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    PopupComponent,
    Popup1Component,
    TestComponent,
    CustomDirective,
    HighLightDirective,
    // CharacterOnlyDirective,
    CurrencyPipe,
    PagenotfoundComponent,
    ChildComponent,
    HomeComponent,
    DatatransferComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    FormsModule,
    BrowserAnimationsModule,
    StudentModule,
    MatButtonModule,
    HttpClientModule,
    // AdminModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
