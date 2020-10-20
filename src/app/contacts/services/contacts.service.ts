import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  constructor(private http: HttpClient) {}

  getAllContacts(): Observable<Contact[]> {
    const url = `${environment.baseUrl}/contacts`;

    return this.http.get<Contact[]>(url);
  }

  createContact(contact: Contact): Observable<Contact> {
    const url = `${environment.baseUrl}/contacts`;

    return this.http.post<Contact>(url, contact);
  }

  updateContact(contact: Contact): Observable<Contact> {
    const url = `${environment.baseUrl}/contacts/${contact.id}`;

    return this.http.put<Contact>(url, contact);
  }
}
