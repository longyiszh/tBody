import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { GymDetailComponent } from './gym/gym-detail/gym-detail.component';

// export const routingComponents = [
// 	IndexComponent,

// ]

const routes: Routes = [
	{path: '', redirectTo: '/index', pathMatch: 'full'},
    {path: 'index', component: IndexComponent},
    {
    	path: 'gym',
    	loadChildren: './gym/gym.module#GymModule'
 	},
 	{
	    path: 'gym/id/:id',
	    component: GymDetailComponent
	},
];


@NgModule({
	imports: [
		RouterModule.forRoot(routes,{ useHash: true })
	],
	exports: [
		RouterModule
	]
})
export class tBodyRoutingModule{}

