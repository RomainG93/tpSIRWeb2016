
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
  this.startX = 0;
  this.startY = 0;
  this.endX = 0;
  this.endY = 0;
  this.click = false;
	// Developper les 3 fonctions gérant les événements
  this.onMouseDown = function(evt){
    var pos = getMousePosition(canvas, evt);
    this.startX = pos.x;
    this.startY = pos.y;
    //console.log("Start: " + this.startX + " --- " + this.startY);
    interactor.onInteractionStart(this);
    this.click = true;
  }.bind(this);

  this.onMouseUp = function(evt){
    if(this.click){
      var pos = getMousePosition(canvas, evt);
      this.endX = pos.x;
      this.endY = pos.y;
      //console.log("End: " + this.endX + " ---- " + this.endY);
      interactor.onInteractionEnd(this);
      this.click = false;
    }
  }.bind(this);

  this.onMouseMove = function(evt){
    if(this.click){
      var pos = getMousePosition(canvas, evt);
      this.endX = pos.x;
      this.endY = pos.y;
      //console.log("Move: " + evt.clientX + " " + evt.clientY);
      interactor.onInteractionUpdate(this);
    }
  }.bind(this);
	// Associer les fonctions précédentes aux évènements du canvas.
  canvas.addEventListener('mousedown', this.onMouseDown, false);
  canvas.addEventListener('mousemove', this.onMouseMove, false);
  canvas.addEventListener('mouseup', this.onMouseUp, false);
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};
