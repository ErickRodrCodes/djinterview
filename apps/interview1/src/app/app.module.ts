import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountDownFieldComponent } from './components/count-down-field/count-down-field.component';
import { CurrentDateFieldComponent } from './components/current-date-field/current-date-field.component';

@NgModule({
  declarations: [
    AppComponent,
    CountDownFieldComponent,
    CurrentDateFieldComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
