import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { PagesModule } from './pages/pages.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ComponentsModule,
		HttpClientModule,
		CommonModule,
		PagesModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
