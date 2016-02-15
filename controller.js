
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.
	var pencil = this;
	document.getElementById('butRect').onclick = function(){
		pencil.currEditingMode = editingMode.rect;
	}

	document.getElementById('butLine').onclick = function(){
		pencil.currEditingMode = editingMode.line;
	}

	document.getElementById('spinnerWidth').onchange = function(){
		pencil.currLineWidth = this.value;
	}

	document.getElementById('colour').onchange = function(){
		pencil.currColour = this.value;
	}


	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	this.onInteractionStart = function(DnD){
		switch (this.currEditingMode) {
			case 0:
				this.currentShape = new Rectangle(DnD.startX, DnD.startY, 0, 0, this.currLineWidth, this.currColour);
				break;
			case 1:
				this.currentShape = new Line(DnD.startX, DnD.startY, DnD.startX, DnD.startY, this.currLineWidth, this.currColour);
				break;
		}
		drawing.paint(ctx);
		this.currentShape.paint(ctx);
	}

	this.onInteractionUpdate = function(DnD){
		switch (this.currEditingMode) {
			case 0:
				this.currentShape.width = DnD.endX - this.currentShape.startX;
				this.currentShape.height = DnD.endY - this.currentShape.startY;
				break;
			case 1:
				this.currentShape.endX = DnD.endX;
				this.currentShape.endY = DnD.endY;
				break;
		}
		drawing.paint(ctx);
		this.currentShape.paint(ctx);
	}

	this.onInteractionEnd = function(DnD){
		switch (this.currEditingMode) {
			case 0:
				this.currentShape.width = DnD.endX - this.currentShape.startX;
				this.currentShape.height = DnD.endY - this.currentShape.startY;
				break;
			case 1:
				this.currentShape.endX = DnD.endX;
				this.currentShape.endY = DnD.endY;
				break;
		}
		drawing.addShape(this.currentShape);
		var b = updateShapeList(this.currEditingMode, this.currColour, drawing.getIndex(this.currentShape));
		b.onclick = function() {
			var id = this.parentNode.id;
			delete drawing.shapes[id];
			drawing.paint(ctx);
			var element = document.getElementById(id);
			element.outerHTML = "";
			delete element;
	    };
		drawing.paint(ctx);
	}
};
