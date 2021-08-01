import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
      path: '',
      redirectTo: '/about',
      pathMatch: 'full'
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./news/news.module').then(m => m.NewsModule)
  },
  {
    path: 'place',
    loadChildren: () => import('./place/place.module').then(m => m.PlaceModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
