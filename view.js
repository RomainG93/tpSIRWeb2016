// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.
Shape.prototype.paint = function(ctx){
  ctx.lineWidth = this.thickness;
  ctx.strokeStyle = this.color;
}

Rectangle.prototype.paint = function(ctx) {
    console.log(ctx.lineWidth + " --- " + ctx.strokeStyle);
    Shape.prototype.paint.call(this, ctx);
    console.log(ctx.lineWidth + " --- " + ctx.strokeStyle);
    ctx.rect(this.startX, this.startY, this.width, this.height);
    ctx.stroke();
};

Line.prototype.paint = function(ctx) {
//TODO Manager color
    Shape.prototype.paint.call(this, ctx);
    ctx.beginPath();
    ctx.moveTo(this.startX, this.startY);
    ctx.lineTo(this.endX, this.endY);
    ctx.stroke();

};


Drawing.prototype.paint = function(ctx) {
    console.log(this.getForms());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.getForms().forEach(function(eltDuTableau) {
        // now fill the canvas
        eltDuTableau.paint(ctx);
    });
};
