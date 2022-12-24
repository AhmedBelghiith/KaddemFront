import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Equipe } from 'src/app/core/models/equipe';
import { EquipeService } from 'src/app/core/services/equipe.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-cards-equipe',
  templateUrl: './cards-equipe.component.html',
  styleUrls: ['./cards-equipe.component.css']
})
export class CardsEquipeComponent implements OnInit {
  @ViewChild('content', {static: false}) el!: ElementRef;
  currentRoute: any;

  constructor(private equipeService : EquipeService) { }
  Moyenne: any;
  equipe: Equipe;
  listEquipe: Equipe[];
  ngOnInit(): void {
    console.log("OnInit ...");   
    this.equipe = new Equipe();
    this.equipeService.getAllEquipe().subscribe((datas: Equipe[])=>{this.listEquipe = datas; console.log(this.listEquipe)});
  }

  
  getMoyenneEquipe(idEquipe: number){
    this.equipeService.getMoyenneEquipe(idEquipe).subscribe((data)=>{
      console.log(data);
      this.Moyenne = data;
      swal.fire({
        title: "La moyenne est:",
        text: this.Moyenne,
        buttonsStyling: false,
        customClass:{
          confirmButton: "btn btn-info"
        }
    });
    });
  }

  getEquipeDetailEquipe(idEquipe: number){
    this.equipeService.findEquipeByIdEquipe(idEquipe).subscribe((data)=>{
      console.log(data);
      this.equipe = data;
      swal.fire({
        title: "L'id est: "+ this.equipe.detailEquipe.idDetailEquipe,
        text:"Salle: "+ this.equipe.detailEquipe.salle + " and Thematique: "+this.equipe.detailEquipe.thematique,
        buttonsStyling: false,
        customClass:{
          confirmButton: "btn btn-info"
        }
    });
    });
  }



  searchText: string='';
  onSearchTextEntered(searchValue: string){
    this.searchText = searchValue;
    console.log(this.searchText);
  }
}
