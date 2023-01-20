/* Objet de type Yoshi
   Propriétés :
   - couleur : Doit être "rose", "vert" ou "bleu".
   - taille : Doit être un nombre entre 30 et 400.
   (Assurez-vous qu'il soit impossible d'avoir une taille sous 30 et par-dessus 400 !)
   - visible : Doit être true ou false. (true rend visible, false rend invisible)
*/
class Yoshi{
    constructor(couleur, taille, visible){
        this.couleur = couleur;
        this.taille = taille;
        this.visible = visible;
    }
}