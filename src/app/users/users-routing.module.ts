import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeroComponent} from "./pages/hero/hero.component";
import {ValidarTokenGuard} from "../guards/validar-token.guard";
import {SearchComponent} from "./pages/search/search.component";
import {NavBarComponent} from "./components/nav-bar/nav-bar.component";
import {RecursosComponent} from "./pages/recursos/recursos.component";
import {AboutComponent} from "./pages/about/about.component";
import {MainComponent} from "./pages/main/main.component";
import {ContactComponent} from "./pages/contact/contact.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canLoad: [ValidarTokenGuard],
    canActivate: [ValidarTokenGuard],
    children: [
      {path: 'hero', component: HeroComponent},
      {path: 'search', component: SearchComponent},
      {path: 'about', component: AboutComponent},
      {path: 'resources', component: RecursosComponent},
      { path: 'contact', component: ContactComponent },
      {path: '**', redirectTo: 'hero'
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes),],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
