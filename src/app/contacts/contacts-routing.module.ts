import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { ContactsComponent } from './contacts.component';
import { Shell } from '@app/shell/shell.service';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactCreateComponent } from './components/contact-create/contact-create.component';
import { ContactEditComponent } from './components/contact-edit/contact-edit.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'contacts', redirectTo: '/contacts/list', pathMatch: 'full' },
    // { path: 'contacts', component: ContactsComponent, data: { title: marker('Contacts') } },
    { path: 'contacts/list', component: ContactListComponent, data: { title: marker('Contact List') } },
    { path: 'contacts/create', component: ContactCreateComponent, data: { title: marker('Contact Create') } },
    { path: 'contacts/edit/:contactId', component: ContactEditComponent, data: { title: marker('Contact Edit') } },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class ContactsRoutingModule {}
