import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {VariableComponent} from "./essential/variable/variable.component";
import {EvenementsComponent} from "./essential/evenements/evenements.component";
import {StyleComponent} from "./essential/style/style.component";
import {DirectivesComponent} from "./essential/directives/directives.component";
import {EssentialComponent} from "./essential/essential.component";
import {PipesComponent} from "./essential/pipes/pipes.component";
import {FormulaireComponent} from "./essential/formulaire/formulaire.component";
import {DateComponent} from "./essential/date/date.component";
import {TransportAPIComponent} from "./essential/transport-api/transport-api.component";
import {TemplateComponent} from "./template/template.component";

const routes: Routes = [
  { path: '', component: EssentialComponent },
  { path: 'essential', component: EssentialComponent },
  { path: 'essential/variable', component: VariableComponent },
  { path: 'essential/evenements', component: EvenementsComponent },
  { path: 'essential/style', component: StyleComponent },
  { path: 'essential/directives', component: DirectivesComponent },
  { path: 'essential/pipes', component: PipesComponent },
  { path: 'essential/formulaire', component: FormulaireComponent },
  { path: 'essential/date', component: DateComponent },
  { path: 'essential/transport-api', component: TransportAPIComponent },
  { path: 'template', component: TemplateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
