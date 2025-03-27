
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {

	// Définir ici les attributs de la 'classe'
    this.xInit = 0;
    this.yInit = 0;
    this.xFinal = 0;
    this.yFinal = 0;


	// Developper les 3 fonctions gérant les événements
  this.mouseclick = function maFctGerantLaPression (event) {
    let pos = getMousePosition(canvas,event);
    this.xInit = pos.x;
    this.yInit = pos.y;
    console.log("Click"+pos);
  }.bind(this);
  
  this.mousemove = function maFctGerantLeDeplacement (event){
    //console.log(event);
    let pos = getMousePosition(canvas,event);
    this.xInit = pos.x;
    this.yInit = pos.y;
    console.log("Bouger "+pos);
  }.bind(this);

  this.mouseup = function maFctGerantLeRelachement (event) {
  //console.log(event);
  }.bind(this)

	// Associer les fonctions précédentes aux évènements du canvas.
  canvas.addEventListener('mousedown', this.mouseclick, false);
  canvas.addEventListener('mousemove', this.mousemove, false);
  canvas.addEventListener('mouseup', this.mouseup, false);

};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



