import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';
import { FormEquipeComponent } from './form-equipe/form-equipe.component';
import { ListEquipeComponent } from './list-equipe/list-equipe.component';
import { EquipeRoutes } from './equipe.routing';
import { SearchComponent } from './search/search.component';
import { CardsEquipeComponent } from './cards-equipe/cards-equipe.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(EquipeRoutes),
    FormsModule,
    MaterialModule
  ],
  declarations: [
      ListEquipeComponent,
      FormEquipeComponent,
      SearchComponent,
      CardsEquipeComponent,
      ]
})

export class EquipeModule {}
