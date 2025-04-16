
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {

	// Définir ici les attributs de la 'classe'
    this.xInit = 0;
    this.yInit = 0;
    this.xFinal = 0;
    this.yFinal = 0;
    this.isCliked = false;
    this.interactor = interactor;


	// Developper les 3 fonctions gérant les événements
  this.mouseclick = function (event) {
    let pos = getMousePosition(canvas,event);
    this.xInit = pos.x;
    this.yInit = pos.y;
    this.isCliked = true;
    //console.log("Click"+pos);
    this.interactor.onInteractionStart(this);
  }.bind(this);
  
  this.mousemove = function (event) {
    //console.log(event);
    if(this.isCliked){
    let pos = getMousePosition(canvas,event);
    this.xInit = pos.x;
    this.yInit = pos.y;
    this.isCliked = true;
   // console.log("Bouger "+pos);
    this.interactor.onInteractionUpdate(this);
    }
  }.bind(this);

  this.mouseup = function (event) {
  //console.log(event);
  let pos = getMousePosition(canvas,event);
    this.xFinal = pos.x;
    this.yFinal = pos.y;
    this.isCliked = false;
   // console.log("Bouger "+pos);
    this.interactor.onInteractionEnd(this);
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



