import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiRickandmortyService } from '../../services/api-rickandmorty.service';

@Component({
	selector: 'app-character-detail',
	templateUrl: './character-detail.component.html',
	styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {
	character: any;
	constructor(
		private _httpSrv: ApiRickandmortyService,
		private _routerAct: ActivatedRoute,
		private _router: Router
	) {
		_routerAct.params.subscribe((resp: any) => {
			this._httpSrv
				.getCharaterById(resp.id)
				.subscribe(charter => (this.character = charter));
		});
	}

	ngOnInit() {}
	getLastEp(episode: string) {
		let ep = episode.split('/');

		return ep[ep.length - 1];
	}

	navigate() {
		this._router.navigateByUrl('');
	}
}
