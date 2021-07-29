import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item.component';
import {FavoriteDirective} from './favorite.directive';
import {CategoryListPip} from './category-list.pip';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MediaItemFormComponent} from './media-item-form.component';
import {MediaItemReactiveFormComponent} from './media-item-reactive-form.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    MediaItemComponent,
    FavoriteDirective,
    CategoryListPip,
    MediaItemFormComponent,
    MediaItemReactiveFormComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
