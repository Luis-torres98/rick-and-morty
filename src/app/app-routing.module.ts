import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailComponent } from './pages/character-detail/character-detail.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { HomeComponent } from './pages/home/home.component';
import { LocationComponent } from './pages/location/location.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'character/:id',
		component: CharacterDetailComponent
	},
	{
		path: 'location/:id',
		component: LocationComponent
	},
	{
		path: 'favorites',
		component: FavoritesComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
