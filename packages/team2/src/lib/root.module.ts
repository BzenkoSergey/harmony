import { NgModule } from '@angular/core';

import { LibModule } from '@harmony102/foo';

import { Team2RoutingModule } from './root-routing.module';
import { Team2Component } from './root.component';

@NgModule({
	imports: [
		LibModule,

		Team2RoutingModule
	],
	declarations: [
		Team2Component
	]
})

export class Team2Module { }
