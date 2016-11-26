import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'; 

import { tBodyRoutingModule } from './tBody-routing.module'; 

import { GymModule } from './gym/gym.module';
import { AppComponent } from './app.component';

import { IndexComponent } from './index/index.component';





@NgModule({
  declarations: [
    AppComponent,

    IndexComponent,

   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    tBodyRoutingModule,
    GymModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
