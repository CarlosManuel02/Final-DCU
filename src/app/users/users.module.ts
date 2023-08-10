import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { HeroComponent } from './pages/hero/hero.component';
import { SearchComponent } from './pages/search/search.component';
import {FormsModule} from "@angular/forms";
import { AboutComponent } from './pages/about/about.component';
import { RecursosComponent } from './pages/recursos/recursos.component';
import {NavBarComponent} from "./components/nav-bar/nav-bar.component";
import { MainComponent } from './pages/main/main.component';
import { ContactComponent } from './pages/contact/contact.component';


@NgModule({
  declarations: [
    HeroComponent,
    SearchComponent,
    NavBarComponent,
    AboutComponent,
    RecursosComponent,
    MainComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule
  ]
})
export class UsersModule { }
