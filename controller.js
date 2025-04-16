var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	document.getElementById('butRect').onclick =(_) => this.currEditingMode = editingMode.rect;
	document.getElementById('butLine').onclick =(_) => this.currEditingMode = editingMode.line;
	document.getElementById('colour').onchange = (e) => this.currColour = e.target.value;
	document.getElementById('spinnerWidth').onchange = (e) => this.currLineWidth = e.target.value;
	
	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd

	// Developper les 3 fonctions gérant les événements
	this.onInteractionStart = function (dnd) {
		this.currentShape = new Rectangle();
	  }.bind(this);
	  
	this.onInteractionUpdate = function (dnd){
		//console.log('update');
		if (this.currEditingMode == editingMode.rect) {
			this.currentShape = new Rectangle(dnd.xInit, dnd.yInit, dnd.yFinal - dnd.yInit, dnd.xFinal - dnd.xInit, this.currLineWidth, this.currColour);
					}
		else if (this.currEditingMode == editingMode.line) {
			this.currentShape = new Line(dnd.xInit, dnd.yInit, dnd.xFinal, dnd.yFinal, this.currLineWidth, this.currColour);
		}
		
		drawing.paint(ctx, canvas);
			this.currentShape.paint(ctx);
	  }.bind(this);
	
	this.onInteractionEnd = function (dnd) {
		drawing.shapeArray.set(this.currentShape, this.currentShape);
		drawing.paint(ctx, canvas);
		this.currentShape.paint(ctx);
	  }.bind(this)
};

// Fonction pour générer un UUID unique @see https://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript
function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}


