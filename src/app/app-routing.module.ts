import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyIngredientsComponent } from './my-ingredients/my-ingredients.component';
import { RecipesComponent } from './recipes/recipes.component';
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
    path: 'recipes',
    component: RecipesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
