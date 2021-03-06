import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map, timestamp } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Character } from '../core/character.model';
import { ContextService } from '../core/core.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
/*   PUBLIC_KEY = '';
  HASH = '';
  URL_API = `https:gateway.marvel.com/v1/public/characters?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`; */
  constructor(private http: HttpClient, private contextService: ContextService) {}

  getCharacters(term: string): Observable<Character[]> {
    const options = new HttpParams().set('nameStartsWith', term);
    console.log(options,environment)
    return this.http
      .get<Character[]>(`${environment.apiUrl}characters?ts=1&hash=${environment.hash}`)
      .pipe(
        map((response: any) => response.data.results),
        catchError(this.contextService.handleError)
      );
  }
}
