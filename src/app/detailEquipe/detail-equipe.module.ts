import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';
import { ListDetailEquipeComponent } from './list-detail-equipe/list-detail-equipe.component';
import { FormDetailEquipeComponent } from './form-detail-equipe/form-detail-equipe.component';
import { DetailEquipeRoutes } from './detail-equipe.routing';
import { NouisliderModule } from 'ng2-nouislider';
import { TagInputModule } from 'ngx-chips';
import { AddFormComponent } from './add-form/add-form.component';
import { SearchDeqComponent } from './search-deq/search-deq.component';



@NgModule({
    declarations: [
        ListDetailEquipeComponent,
        FormDetailEquipeComponent,
        AddFormComponent,
        SearchDeqComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(DetailEquipeRoutes),
        FormsModule,
        ReactiveFormsModule,
        NouisliderModule,
        TagInputModule,
        MaterialModule,
    ]
})

export class DetailEquipeModule {}
