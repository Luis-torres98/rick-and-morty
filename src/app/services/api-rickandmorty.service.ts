import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICharacter } from '../interfaces/ICharacter';
import { IEpisode } from '../interfaces/IEpisode';

@Injectable({
	providedIn: 'root'
})
export class ApiRickandmortyService {
	constructor(private _http: HttpClient) {}

	private baseUrl: string = 'https://rickandmortyapi.com/api';

	getCharater(): Observable<ICharacter[]> {
		return this._http.get<ICharacter[]>(`${this.baseUrl}/character`);
	}
	getCharaterById(id: string): Observable<any> {
		return this._http.get(`${this.baseUrl}/character/${id}`);
	}
	getLocationById(id: string): Observable<any> {
		return this._http.get(`${this.baseUrl}/location/${id}`);
	}

	getLastEpisode(episode: string): Observable<IEpisode> {
		return this._http.get<IEpisode>(episode);
	}
}
