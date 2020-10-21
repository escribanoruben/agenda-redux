import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { ContactFormComponent } from './pages/contact-form/contact-form.component';
import { ContactListComponent } from './pages/contact-list/contact-list.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: '/contacts', pathMatch: 'full' },
    { path: 'contacts', component: ContactListComponent, data: { title: marker('Contact List') } },
    { path: 'contacts/create', component: ContactFormComponent, data: { title: marker('Contact Create') } },
    { path: 'contacts/edit/:contactId', component: ContactFormComponent, data: { title: marker('Contact Edit') } },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class ContactsRoutingModule {}
