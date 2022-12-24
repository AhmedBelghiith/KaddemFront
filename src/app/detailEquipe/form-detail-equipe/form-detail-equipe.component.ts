import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailEquipe } from 'src/app/core/models/detailEquipe';
import { DetailEquipeService } from 'src/app/core/services/detail-equipe.service';


@Component({
  selector: 'app-form-detail-equipe',
  templateUrl: './form-detail-equipe.component.html',
})


export class FormDetailEquipeComponent implements OnInit {

  constructor(
    private detailEquipeService: DetailEquipeService,
    private route: Router,
    private currentRoute: ActivatedRoute,
    private formBuilder: FormBuilder

  ) { }
 

  detailEquipe: DetailEquipe;
  action: string;
  listEquipe: DetailEquipe[];

  ngOnInit(): void {
    let idDetailEquipe = this.currentRoute.snapshot.params['idDetailEquipe'];
    if (idDetailEquipe != null) {
      //update Equipe
      this.action = 'update';
      this.detailEquipeService.getDetailEquipeById(idDetailEquipe).subscribe((data: DetailEquipe) => {
        this.detailEquipe = data;
      });
      console.log('=================>' + this.detailEquipe);
    } else {
      //add Equipe
      this.action = 'add';
      this.detailEquipe = new DetailEquipe();
    }

    //get
    this.detailEquipeService.getAllDetailEquipe().subscribe((data: DetailEquipe[]) => {
      this.listEquipe = data;
    });
  }

    //add|update
    add() {
      if (this.action == 'update') {
        this.detailEquipeService
          .updateDetailEquipe(this.detailEquipe)
          .subscribe(() => console.log('complete'));
      } else {
        console.log('this.detailEquipe:', this.detailEquipe);
        this.detailEquipeService.addDetailEquipe(this.detailEquipe).subscribe((result) => {
          if (result) {
            this.listEquipe = [this.detailEquipe, ...this.listEquipe];
            location.reload();
          }
        });
      }
    }
  
    //delete
    delete() {
      this.detailEquipeService.deleteDetailEquipe(this.detailEquipe.idDetailEquipe);
    }
    //navigate
    goToDetailEquipeList() {
      this.route.navigate(['/detail-equipe/list-detail-equipe']);
    }
}
