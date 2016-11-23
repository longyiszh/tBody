import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';

export const routingComponents = [
	IndexComponent
]

const routes: Routes = [
    {path: 'index', component: IndexComponent},
];



@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	]
})
export class tBodyRoutingModule{}

