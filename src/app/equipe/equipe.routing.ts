import { Routes } from '@angular/router';
import { CardsEquipeComponent } from './cards-equipe/cards-equipe.component';
import { FormEquipeComponent } from './form-equipe/form-equipe.component';
import { ListEquipeComponent } from './list-equipe/list-equipe.component';


export const EquipeRoutes: Routes = [
    {
      path: '',
      children: [{
      path: '',
      children: [ 
  {path:'',component: ListEquipeComponent},
  {path:'list-equipe',component: ListEquipeComponent},
  {path: 'form-equipe', component: FormEquipeComponent},
  {path:'update/:idEquipe', component: FormEquipeComponent},
  {path: 'cards-equipe', component: CardsEquipeComponent},



  ]
    },]}
];
