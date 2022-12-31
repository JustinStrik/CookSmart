import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MyIngredientsComponent } from './my-ingredients/my-ingredients.component';
import { SearchRecipesComponent } from './search-recipes/search-recipes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyIngredientsComponent,
    SearchRecipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
