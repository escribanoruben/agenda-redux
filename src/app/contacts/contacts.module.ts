import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MaterialModule } from '@app/material.module';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@shared';
import { ContactCreateComponent } from './components/contact-create/contact-create.component';
import { ContactEditComponent } from './components/contact-edit/contact-edit.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactTableComponent } from './components/contact-table/contact-table.component';
import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';

@NgModule({
  declarations: [
    ContactsComponent,
    ContactListComponent,
    ContactCreateComponent,
    ContactEditComponent,
    ContactTableComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    SharedModule,
    FlexLayoutModule,
    MaterialModule,
    ContactsRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,

    TranslateModule,
  ],
})
export class ContactsModule {}
