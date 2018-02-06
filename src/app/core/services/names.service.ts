import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Name } from '@app-core/models';
import {Http} from '@angular/http';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';



@Injectable()
export class NamesService {

  constructor(private http: HttpClient ) { }


  index(): Observable<Name[]> {
    return this.http
        .get<Name[]>(`${environment.appApi.baseUrl}/names`)

  }

  show(nameId: number): Observable<Name> {
    return this.http
        .get<Name>(`${environment.appApi.baseUrl}/names/${nameId}`)

  }

  create(name: Name): Observable<Name> {
    return this.http.post<Name>(`${environment.appApi.baseUrl}/names`, name)
  }

  update(name: Name): Observable<Name> {
    return this.http.patch<Name>(`${environment.appApi.baseUrl}/names/${name.id}`, name)
  }


  destroy(id: number): Observable<Name> {
    return this.http.delete<Name>(`${environment.appApi.baseUrl}/names/${id}`)
  }

}
