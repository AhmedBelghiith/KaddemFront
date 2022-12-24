import { Etudiant } from "./etudiant";
import { Specialite } from "./specialite";

export class Contrat{
    idContrat: number;
    dateDebutContrat: Date;
    dateFinContrat: Date;
    archive: boolean;
    specialite: Specialite;
    etudiants: Array<Etudiant>;
}