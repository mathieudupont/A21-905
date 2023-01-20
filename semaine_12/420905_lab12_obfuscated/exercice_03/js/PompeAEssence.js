// Classe PompeAEssence
/* Propriétés :
*  prixDuLitre : Prix en dollar pour 1 litre d'essence.
*  litresRestants : Nombre de litres restants dans le réservoir.
*  horsService : Si la pompe est vide, doit devenir true.
*
*/
class PompeAEssence{
    constructor(prixDuLitre, litresRestants, horsService){
        this.prixDuLitre = prixDuLitre;
        this.litresRestants = litresRestants;
        this.horsService = horsService;
    }
}