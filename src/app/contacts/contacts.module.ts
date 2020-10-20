import { ContactsComponent } from './contacts.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SharedModule } from '@shared';
import { MaterialModule } from '@app/material.module';
import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactCreateComponent } from './components/contact-create/contact-create.component';
import { ContactEditComponent } from './components/contact-edit/contact-edit.component';

@NgModule({
  declarations: [ContactsComponent, ContactListComponent, ContactCreateComponent, ContactEditComponent],
  imports: [CommonModule, TranslateModule, SharedModule, FlexLayoutModule, MaterialModule, ContactsRoutingModule],
})
export class ContactsModule {}
