import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NamesComponent} from './names.component';
import {NameNewComponent} from './name-new/name-new.component';
import {NamesIndexComponent} from './names-index/names-index.component';
import {NameEditComponent} from './name-edit/name-edit.component';
import {TitleResolver} from '@app-core/resolvers/title.resolver';

const routes: Routes = [
  {
    path: '',
    component: NamesComponent,
    children: [
      {
        path: '',
        component: NamesIndexComponent,
        data: {title: 'Names index'},
        pathMatch: 'full',
        resolve: {title: TitleResolver}
      },
      {
        path: 'new',
        component: NameNewComponent,
        data: {title: 'New name'},
        pathMatch: 'full',
        resolve: {title: TitleResolver}
      },
      {
        path: ':nameId',
        component: NamesIndexComponent,
        data: {title: 'Name details'},
        pathMatch: 'full',
        resolve: {title: TitleResolver}
      },
      {
        path: ':nameId/edit',
        component: NameEditComponent,
        data: {title: 'Edit name'},
        pathMatch: 'full',
        resolve: {title: TitleResolver}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NamesRoutingModule { }
