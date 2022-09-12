import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICharacter } from '../../interfaces/ICharacter';
import { ApiRickandmortyService } from '../../services/api-rickandmorty.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent {
	listCharacters: ICharacter[] = [];
	constructor(
		private _rickAndMortySrv: ApiRickandmortyService,
		private _router: Router
	) {}

	ngOnInit() {
		this._rickAndMortySrv
			.getCharater()
			.subscribe((resp: any) => (this.listCharacters = resp.results));
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
}
