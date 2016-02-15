
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

//Drawning class
function Drawing(){
  this.shapes = [];

  this.addShape = function(shape){
    this.shapes.push(shape);
  }

  this.showShapes = function(){
    var length = this.shapes.length;
    for (var i = 0; i < length; ++i) {
      console.log(this.shapes[i]);
    }
  }
}

//Shape Super class
function Shape(thickness, color){
  this.thickness = thickness;
  this.color = color;
}

//Rectangle class
function Rectangle(startX, startY, width, height, thickness, color){
  this.startX = startX;
  this.startY = startY;
  this.width = width;
  this.height = height;
  Shape.call(this, thickness, color);

}
Rectangle.prototype = new Shape();

//Line class
function Line(startX, startY, endX, endY, thickness, color){
  this.startX = startX;
  this.startY = startY;
  this.endX = endX;
  this.endY = endY;
  Shape.call(this, thickness, color);
}
Line.prototype = new Shape();
