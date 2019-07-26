import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

/*page definitions*/
import {HomeComponent} from './pages/home/home.component';
import {LibraryComponent} from './pages/library/library.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'library',
    component: LibraryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
