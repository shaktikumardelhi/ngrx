import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NameListComponent} from '../components/name-list/name-list.component';
import {NameFormComponent} from '../components/name-form/name-form.component';
import {NamesService} from '../services/names.service';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {ToolbarComponent} from '../components/toolbar/toolbar.component';
import {TitleResolver} from '../resolvers/title.resolver';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [
    NameListComponent,
    NameFormComponent,
    ToolbarComponent
  ],
  exports: [
    NameListComponent,
    NameFormComponent,
    RouterModule,
    ToolbarComponent
  ],
  providers: [NamesService, TitleResolver]
})
export class SharedModule { }
