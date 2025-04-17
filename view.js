
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.


Rectangle.prototype.paint = function(ctx) {
  ctx.strokeStyle = this.color;
  ctx.lineWidth = this.thickness;
  ctx.strokeRect(this.xInit, this.yInit, this.width, this.height);
};

Line.prototype.paint = function(ctx) {
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.thickness;
    ctx.beginPath();
    ctx.moveTo(this.xInit, this.yInit);
    ctx.lineTo(this.xFinal, this.yFinal);
    ctx.stroke();
  };

  Drawing.prototype.paint = function(ctx) {
    //console.log(this.getForms());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.shapeArray.forEach(element => element.paint(ctx));
  };

function updateShapeList(index, shape) {
    let list = document.getElementById('shapeList');
    list.insertAdjacentHTML('beforeend',toDom(shape, index));
}

function toDom(shape, index) {
    if(shape && typeof shape === 'object') {
        let li = `<li id="liRemove${index}">`;
        if(shape.constructor === Rectangle)
          li += '<span style="color:' + shape.color + '">Rect </span>Rectangle';
        else if(shape.constructor === Line)
          li += '<span style="color:' + shape.color + '">/</span> Line';
        li += `<button type="button" class="btn btn-default remove" id="remove${index}">
        <span class="glyphicon glyphicon-remove-sign"></span>
        </button>`;
        li += `</li>`;
        return li;
    }
}