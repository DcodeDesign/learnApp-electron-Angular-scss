// bootstrap
import { AppComponent } from './app.component';

// imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// declarations
import { EssentialComponent } from './essential/essential.component';
import { VariableComponent } from './essential/variable/variable.component';
import { EvenementsComponent } from './essential/evenements/evenements.component';
import { StyleComponent } from './essential/style/style.component';
import { DirectivesComponent } from './essential/directives/directives.component';
import { PipesComponent } from './essential/pipes/pipes.component';
import { NavigationComponent } from './essential/navigation/navigation.component';
import { FormulaireComponent } from './essential/formulaire/formulaire.component';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DateComponent } from './essential/date/date.component';
import { TransportAPIComponent } from './essential/transport-api/transport-api.component';
import { TemplateComponent } from './template/template.component';

@NgModule({
  declarations: [
    AppComponent,
    EssentialComponent,
    VariableComponent,
    EvenementsComponent,
    StyleComponent,
    DirectivesComponent,
    PipesComponent,
    NavigationComponent,
    FormulaireComponent,
    DateComponent,
    TransportAPIComponent,
    TemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
