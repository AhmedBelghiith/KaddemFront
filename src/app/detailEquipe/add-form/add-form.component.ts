import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailEquipe } from 'src/app/core/models/detailEquipe';
import { Equipe } from 'src/app/core/models/equipe';
import { DetailEquipeService } from 'src/app/core/services/detail-equipe.service';
import { EquipeService } from 'src/app/core/services/equipe.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
})
export class AddFormComponent implements OnInit {

  
  constructor(
    private detailEquipeService: DetailEquipeService,
    private route: Router,
    private currentRoute: ActivatedRoute,
    private equipeService: EquipeService
  ) {}
 
  detailEquipe: DetailEquipe;
  action: string;
  listDetailEquipe: DetailEquipe[];
  isUnchanged = false;
  equipe: Equipe;
  listEquipe: Equipe[];
  idEquipe: any;
  ngOnInit(): void {
    this.equipe = new Equipe();
    this.detailEquipe = new DetailEquipe();
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

    //getAllDetailEquipe
    this.detailEquipeService.getAllDetailEquipe().subscribe((data: DetailEquipe[]) => {
      this.listDetailEquipe = data;
    });
    //getAllEquipes
    this.equipeService.getAllEquipe().subscribe((data: Equipe[]) => {
      this.listEquipe = data;
    });
  }

  //add khw
  addAndAffectContract(form: NgForm) {
    let obj: any = {};
    obj.salle = form.value.salle;
    obj.thematique = form.value.thematique;
    this.detailEquipeService
      .addAndAssignDetailEquipeToEquipe(this.idEquipe, obj)
      .subscribe((res: any) => {
        console.log('Done');
      });
    this.route.navigate(['/equipe/list-equipe']);
  }

  //changeId
  ChangeIdDetailEquipe(input: any) {
    this.idEquipe = input.target.value;
  }
  //delete
}

