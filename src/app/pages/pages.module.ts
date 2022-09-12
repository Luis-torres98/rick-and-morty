import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { LocationComponent } from './location/location.component';

const LIST = [HomeComponent, CharacterDetailComponent, LocationComponent];

@NgModule({
	declarations: [LIST],
	exports: [LIST],
	imports: [CommonModule]
})
export class PagesModule {}
