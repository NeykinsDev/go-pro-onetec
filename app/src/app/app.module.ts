import { DataService } from './services/data.services';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FinishComponent } from './finish/finish.component';
import { ValidationComponent } from './validation/validation.component';
import { StartComponent } from './start/start.component';
import { CountdownComponent } from './countdown/countdown.component';

const routes: Routes = [

  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: 'start', component:  StartComponent},
  { path: 'countdown', component:  CountdownComponent},
  { path: 'validation', component:  ValidationComponent},
  { path: 'finish', component:  FinishComponent},
  { path : '**', redirectTo: '/start', pathMatch: 'full' },

]

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    CountdownComponent,
    ValidationComponent,
    FinishComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
