import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICharacter } from '../../interfaces/ICharacter';

@Component({
	selector: 'app-favorites',
	templateUrl: './favorites.component.html',
	styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
	listCharacters: ICharacter[] = [];
	constructor(private _router: Router) {}

	ngOnInit(): void {
		this.getListFavorites();
	}

	getListFavorites() {
		let favorites = localStorage.getItem('character');
		this.listCharacters = JSON.parse(favorites!) || [];
	}

	getLastEp(episode: string[]) {
		let ep = episode[episode.length - 1].split('/');

		return ep[ep.length - 1];
	}
	getIdLocation(location: string) {
		let loc = location.split('/');

		let idLoc = loc[loc.length - 1];

		this.navigate(`/location/${idLoc}`);
	}

	navigate(path: any) {
		this._router.navigateByUrl(path);
	}

	deleteAllFav() {
		localStorage.removeItem('character');
		this.getListFavorites();
	}
}
