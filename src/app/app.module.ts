import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { initialState, reducers, effects } from './app.state'
import { RotService } from '/rot.service';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { BananaComponent } from './banana/banana.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    RouterModule.forRoot(AppRoutes),
    EffectsModule.forRoot(effects),
    StoreModule.forRoot(reducers, {initialState}),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ],
  declarations: [ 
    AppComponent, 
    BananaComponent 
  ],
  bootstrap: [ 
    AppComponent 
  ]
})
export class AppModule { }
