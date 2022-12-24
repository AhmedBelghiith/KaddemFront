import { Routes } from '@angular/router';
import { AddFormComponent } from './add-form/add-form.component';
import { FormDetailEquipeComponent } from './form-detail-equipe/form-detail-equipe.component';
import { ListDetailEquipeComponent } from './list-detail-equipe/list-detail-equipe.component';



export const DetailEquipeRoutes: Routes = [
    {
      path: '',
      children: [ 
  {path:'',component: ListDetailEquipeComponent},
  {path:'list-detail-equipe',component: ListDetailEquipeComponent},
  {path: 'form-detail-equipe', component: FormDetailEquipeComponent},
  {path: 'add-form', component: AddFormComponent},
  {path:'update/:idDetailEquipe', component: FormDetailEquipeComponent}
  ]
    },
];
