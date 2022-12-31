import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyIngredientsComponent } from './my-ingredients/my-ingredients.component';
import { SearchRecipesComponent } from './search-recipes/search-recipes.component';

const routes: Routes = [
  {
    // default path
    path: '',
    component: HomeComponent,
  },
  {
    path: 'my-ingredients',
    component: MyIngredientsComponent,
  },
  {
    path: 'search-recipes',
    component: SearchRecipesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
