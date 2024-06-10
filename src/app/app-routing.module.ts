import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { title } from 'process';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    data:{
      title: "Joe's::Portfolio",
      metaTags:[
        {
          name: 'keywords',
          content: 'portfolio'
        }
      ]
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
