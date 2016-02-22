#Compte rendu TP Web : Javascript et HTML5

###Utilisation :
Ouvrir le fichier canvas.html via un navigateur web. 
Dessiner autant de rectangles et de lignes que l'on veut, avec la couleur que l'on souhaite. 
On peut choisir la couleur du trait, ainsi que son épaisseur. On peut supprimer le dernier "dessin" fait, mais cette suppression s'effectue selon l'ordre chronologique de la création du dessin.

###Fichiers :
<ul>
  <li><b>canvas.html :</b></li>
    <ul>
      <li>page web qui sert d'interface à l'utilisateur</li>
    </ul>
  <li><b>controller.js :</b> Partie interactive du patron. Il a pour but transformer les interactions réalisées par l'utilisateur en commandes allant modifier le modèle.</li>
  <ul>
    <li>Implémentations de 3 fonctions : onInteractionStart, onInteractionUpdate et onInteractionEnd</li>
      <ul>
        <li>onInteractionStart : Vérifie si c'est un rectange ou une ligne</li>
      </ul>
       <ul>
        <li>onInteractionUpdate : remets à jour la forme du dessin choisi par l'utilisateur</li>
      </ul>
       <ul>
        <li>onInteractionEnd : ajoute la forme choisie au dessin de l'utilisateur. Mise en place de l'héritage </li>
      </ul>
  </ul>
  <li><b>interaction.js :</b></li>
    <ul>
      <li>création d'un drag en drop (DnD) : Création d'une classe DnD qui gère les mouvements de la souris</li>
    </ul>
    <ul>
      <li>Ajout des évènements au Canvas</li>
    </ul>
  <li><b>jquery-2.1.3.min.js</b></li>
  <li><b>main.js</b></li>
  <li><b>model.js : </b> Définir les concepts du dessin et ses propriétés (couleur, etc.). Le modèle ne doit pas dépendre d'une quelconque librairie graphique, il est indépendant de ces possibles représentations graphiques. </li>
  <ul>
    <li>Implémentation des 4 classes du modèle : Rectangle, Line, Drawing et Shapes</li>
  </ul>
  <li><b>view.js :</b> Représentation graphique possible du modèle. On peut évidemment avoir plusieurs vues d'un même modèle. Ici, la vue va consister à peindre dans un canvas HTML5 les formes du modèle</li>
   <ul>
    <li>Implémentation des fonctions paint à ajouter au modèle choisi</li>
    <li>Ajout d'une fonction qui met à jour la liste des formes prenant en paramètres la forme, le couleur et l'id (attribut du fichier HTML)</li>
  </ul>
</ul>
