import { AfterViewInit, Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';
import { Equipe } from 'src/app/core/models/equipe';
import { EquipeService } from 'src/app/core/services/equipe.service';
import swal from 'sweetalert2';
declare var $: any;
@Component({
  selector: 'app-list-equipe',
  templateUrl: './list-equipe.component.html',
  styleUrls: ['./list-equipe.component.css'],
})
export class ListEquipeComponent implements OnInit {
  @ViewChild('content', {static: false}) el!: ElementRef;

  constructor(private equipeService : EquipeService) { }

  equipe: Equipe;
  Moyenne: any;
  listEquipe: Equipe[];
  ngOnInit(): void {
    console.log("OnInit ...");   
    this.equipe = new Equipe();
    this.equipeService.getAllEquipe().subscribe((datas: Equipe[])=>{this.listEquipe = datas; console.log(this.listEquipe)});
  }



  //Delete equipe
  delete(idEquipe: number) {
    this.equipeService.deleteEquipe(idEquipe).subscribe((data) => {
      console.log(data);
      this.equipeService.getAllEquipe();
      location.reload();
    });
  }

  searchText: string='';
  onSearchTextEntered(searchValue: string){
    this.searchText = searchValue;
    console.log(this.searchText);
  }

  triASC(){
    this.listEquipe.sort((a, b) => a.nomEquipe < b.nomEquipe ? -1 : a.nomEquipe > b.nomEquipe ? 1 : 0)

  
  }
  triDESC(){
    this.listEquipe.sort((a, b) => a.nomEquipe > b.nomEquipe ? -1 : a.nomEquipe < b.nomEquipe ? 1 : 0)
  }


}
