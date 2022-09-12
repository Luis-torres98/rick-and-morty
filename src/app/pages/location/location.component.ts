import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiRickandmortyService } from '../../services/api-rickandmorty.service';

@Component({
	selector: 'app-location',
	templateUrl: './location.component.html',
	styleUrls: ['./location.component.scss']
})
export class LocationComponent {
	location: any = [];
	constructor(
		private _httpSrv: ApiRickandmortyService,
		private _routerAct: ActivatedRoute,
		private _router: Router
	) {
		_routerAct.params.subscribe((resp: any) => {
			this._httpSrv
				.getLocationById(resp.id)
				.subscribe(charter => (this.location = charter));
		});
	}

	navigate(path: any) {
		this._router.navigateByUrl(path);
	}
}
