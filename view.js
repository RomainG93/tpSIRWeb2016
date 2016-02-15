// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.
Shape.prototype.paint = function(ctx){
  ctx.lineWidth = this.thickness;
  ctx.strokeStyle = this.color;
}

Rectangle.prototype.paint = function(ctx) {
    Shape.prototype.paint.call(this, ctx);
    //console.log(ctx.lineWidth + " --- " + ctx.strokeStyle);
    ctx.strokeRect(this.startX, this.startY, this.width, this.height);
    //ctx.stroke();
};

Line.prototype.paint = function(ctx) {
    Shape.prototype.paint.call(this, ctx);
    ctx.beginPath();
    ctx.moveTo(this.startX, this.startY);
    ctx.lineTo(this.endX, this.endY);
    ctx.stroke();

};


Drawing.prototype.paint = function(ctx) {
    //console.log(this.getForms());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.getForms().forEach(function(eltDuTableau) {
        // now fill the canvas
        eltDuTableau.paint(ctx);
    });
};

function updateShapeList(shape, color, id){
  var node = document.createElement("li");
  node.setAttribute("id", id);
  var textnode;

  var button = document.createElement("button");
  button.className = "btn btn-default shape-list-button";
  var span = document.createElement("span");
  span.className = "glyphicon glyphicon-remove-sign";
  /*button.onclick = function() {
        var id = this.parentNode.id;
        console.log(id);
    };*/
  button.appendChild(span);
  node.appendChild(button);

  switch (shape) {
    case 0:
      textnode = document.createTextNode("Rectangle");
      break;
    case 1:
      textnode = document.createTextNode("Line");
      break;
  }
  node.appendChild(textnode);
  node.style.color = color;
  document.getElementById('shapeList').appendChild(node);
  return button;
}
