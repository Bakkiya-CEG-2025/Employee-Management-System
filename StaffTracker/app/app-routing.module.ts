import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpcreateComponent } from './empcreate/empcreate.component';
import { EmplistComponent } from './emplist/emplist.component';
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import { EmpeditComponent } from './empedit/empedit.component';

const routes: Routes = [
  {path:"new",component:EmpcreateComponent},
  {path:"list",component:EmplistComponent},
  {path:"detail/:id",component:EmpdetailsComponent},
  {path:"edit/:id",component:EmpeditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
