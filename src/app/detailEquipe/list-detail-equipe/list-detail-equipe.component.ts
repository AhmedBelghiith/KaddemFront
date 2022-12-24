import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DetailEquipe } from 'src/app/core/models/detailEquipe';
import { DetailEquipeService } from 'src/app/core/services/detail-equipe.service';


@Component({
  selector: 'app-list-detail-equipe',
  templateUrl: './list-detail-equipe.component.html',
  styleUrls: ['./list-detail-equipe.component.css']
})
export class ListDetailEquipeComponent implements OnInit {
  @ViewChild('content', {static: false}) el!: ElementRef;

  constructor(private detailEquipeService : DetailEquipeService) { }
  detailEquipe: DetailEquipe;
  listDetailEquipe: DetailEquipe[];
  ngOnInit(): void {
    console.log("OnInit ...");   
    this.detailEquipe = new DetailEquipe();
    this.detailEquipeService.getAllDetailEquipe().subscribe((datas: DetailEquipe[])=>{this.listDetailEquipe = datas});
  }

  //Delete equipe
  delete(idDetailEquipe: number) {
    this.detailEquipeService.deleteDetailEquipe(idDetailEquipe).subscribe((data) => {
      console.log(data);
      this.detailEquipeService.getAllDetailEquipe();
      location.reload();
    });
  }

  searchText: string='';
  onSearchTextEntered(searchValue: string){
    this.searchText = searchValue;
    console.log(this.searchText);
  }

  triASC(){
    this.listDetailEquipe.sort((a, b) => a.thematique < b.thematique ? -1 : a.thematique > b.thematique ? 1 : 0)

  
  }
  triDESC(){
    this.listDetailEquipe.sort((a, b) => a.thematique > b.thematique ? -1 : a.thematique < b.thematique ? 1 : 0)
  }
  

}
