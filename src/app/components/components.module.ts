import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

const LIST = [NavbarComponent];

@NgModule({
	declarations: [LIST],
	exports: [LIST],
	imports: [CommonModule]
})
export class ComponentsModule {}
