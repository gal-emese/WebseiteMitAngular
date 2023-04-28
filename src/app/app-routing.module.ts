import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaintingpageComponent } from './paintingpage/paintingpage.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MenuComponent } from './menu/menu.component';
import { FirstComponent } from './first/first.component';

const routes: Routes = [
  {path: '', component: FirstComponent},
  {path: 'Painting/:Id', component: PaintingpageComponent},
  {path: 'not-found', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
