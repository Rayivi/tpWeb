
// Implémenter ici les 4 classes du modèle.
function Drawing(canvas, interactor) {
    this.shapeArray = new Map ();
      
};

function Shape (xInit, yInit, thickness, color ) {
    this.xInit = xInit;
    this.yInit = yInit;
    this.thickness = thickness;
    this.color = color;
};

function Rectangle(xInit, yInit, height, width, thickness, color) {
    Shape.call(this, xInit, yInit, thickness, color);
    this.height = height;
    this.width = width;

    
      
};

function Line(xInit, yInit, xFinal, yFinal, thickness, color) {
    Shape.call(this, xInit, yInit, thickness, color);
    this.xFinal = xFinal;
    this.yFinal = yFinal;
      
};
// N'oubliez pas l'héritage !
