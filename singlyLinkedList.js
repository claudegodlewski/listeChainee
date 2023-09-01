class Node {
  constructor(valeur) {
    this.valeur = valeur;
    this.next = null;
  }
}

class singlyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  ajouterUnNoeud(valeur) {

    const noeud = new Node(valeur);

    if (!this.head) {
      this.head = noeud;
      this.tail = noeud;
    } else {
      this.tail.next = noeud;
      this.tail = noeud;
    }

    this.length++;

    return this;

  }

  afficherUnNoeud(index) {

    if (index >= this.length || index < 0) return true;

    let counter = 0;
    let noeudActuel = this.head;

    while (counter !== index){
      noeudActuel = noeudActuel.next;
      counter++;
    }

    return noeudActuel;

  }

  modifierUnNoeud(index, valeur) {

    const noeudCible = this.afficherUnNoeud(index);

    if (noeudCible !== null) { noeudCible.valeur = valeur; return true } else { return false; }

  }

  supprimerUnNoeud(index) {

    if (index >= this.length || index < 0) return false;
    if (this.length === 1) { this.tail = null; }
    if (index === 0) { this.head = this.head.next; } else
    {
      let counter = 0;
      let noeudActuel = this.head;
      let noeudPrecedent = null;

      while (counter !== index) {
        noeudPrecedent = noeudActuel;
        noeudActuel = noeudActuel.next;
        counter++;
      }

      noeudPrecedent.next = noeudActuel.next;

      if (index === this.length - 1) {
        this.tail = noeudPrecedent;
      }
    }

    this.length--;

    return true;

  }

}

const liste = new singlyLinkedList();

liste.ajouterUnNoeud(42);
liste.ajouterUnNoeud(90);
liste.ajouterUnNoeud(25);

console.log(liste.afficherUnNoeud(0));
// Node {
//   valeur: 42,
//   next: Node { valeur: 90, next: Node { valeur: 25, next: null } }
// }