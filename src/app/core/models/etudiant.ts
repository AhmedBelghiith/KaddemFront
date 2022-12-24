import { Contrat } from "./contrat";
import { Departement } from "./departement";
import { Equipe } from "./equipe";
import { Option } from "./option";

export class Etudiant{
    idEtudiant: number;
    prenomE: string;
    nomE: string;
    option: Option;
    contrats: Array<Contrat>;
    departement: Departement;
    equipes: Array<Equipe>;
}