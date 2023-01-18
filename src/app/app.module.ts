import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { LoginComponent } from './login/login.component';
import { RepeatDirective } from './repeat.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    HelloComponent,
    RepeatDirective 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [LoginComponent,AppComponent,HelloComponent]
})
export class AppModule { }
