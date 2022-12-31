import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyIngredientsComponent } from './my-ingredients/my-ingredients.component';

const routes: Routes = [
  {
    // default path
    path: '',
    component: HomeComponent,
  },
  {
    path: 'my-ingredients',
    component: MyIngredientsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
