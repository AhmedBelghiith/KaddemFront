import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipe } from 'src/app/core/models/equipe';
import { EquipeService } from 'src/app/core/services/equipe.service';


@Component({
  selector: 'app-form-equipe',
  templateUrl: './form-equipe.component.html',
  styleUrls: ['./form-equipe.component.css'],

})
export class FormEquipeComponent implements OnInit {

  constructor(
    private equipeService: EquipeService,
    private route: Router,
    private currentRoute: ActivatedRoute
  ) { }

  equipe: Equipe;
  action: string;
  listEquipe: Equipe[];

  ngOnInit(): void {
    let idEquipe = this.currentRoute.snapshot.params['idEquipe'];
    if (idEquipe != null) {
      //update Equipe
      this.action = 'update';
      this.equipeService.findEquipeByIdEquipe(idEquipe).subscribe((data: Equipe) => {
        this.equipe = data;
      });
      console.log('=================>' + this.equipe);
    } else {
      //add Equipe
      this.action = 'add';
      this.equipe = new Equipe();
    }

    //get
    this.equipeService.getAllEquipe().subscribe((data: Equipe[]) => {
      this.listEquipe = data;
    });
  }

    //add|update
    add() {
      if (this.action == 'update') {
        this.equipeService
          .updateEquipe(this.equipe)
          .subscribe(() => console.log('complete'));
      } else {
        console.log('this.Equipe:', this.equipe);
        this.equipeService.addEquipe(this.equipe).subscribe((result) => {
          if (result) {
            this.listEquipe = [this.equipe, ...this.listEquipe];
            location.reload();
          }
        });
      }
    }
  
    //delete
    delete() {
      this.equipeService.deleteEquipe(this.equipe.idEquipe);
    }
    //navigate
    goToEquipeList() {
      this.route.navigate(['/equipe']);
    }

}
