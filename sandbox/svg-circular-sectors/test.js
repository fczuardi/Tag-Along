function newWedge(){
  var start_deg = parseFloat(document.getElementById('start').value, 10),
      teta_deg = parseFloat(document.getElementById('size').value, 10),
      radius = parseFloat(document.getElementById('radius').value, 10),
      center = document.getElementById('center').value.split(','),
      large_arc_flag = 0,
      sweep_flag = 0,
      digits = 4,
      start_rad,
      teta_rad,
      x,
      y,
      pointA,
      pointB,
      arc;
      center[0]=parseFloat(center[0],10);
      center[1]=parseFloat(center[1],10);
      console.log(center);

  if (teta_deg >= 360) {teta_deg = 359.99;}
  if (teta_deg <= -360) {teta_deg = -359.99;}

  start_rad = start_deg * Math.PI/180;
  teta_rad = teta_deg * Math.PI/180;
  
  //calculate point A
  x = Math.cos(start_rad) * radius;
  y = Math.sin(start_rad) * radius;
  pointA = [x+center[0], center[1]-y];
  //calculate point B
  x = Math.cos(start_rad+teta_rad) * radius;
  y = Math.sin(start_rad+teta_rad) * radius;
  pointB = [x+center[0], center[1]-y];

  if (teta_deg > 180) {large_arc_flag = 1;}
  if (teta_deg < 0) {large_arc_flag = 0;sweep_flag = 1;}
  if (teta_deg < -180) {large_arc_flag = 1;sweep_flag = 1;}
  arc =  'M '+center[0]+' '+center[1]+' '
        +'L '+pointA[0].toFixed(digits)+' '+pointA[1].toFixed(digits)+' '
        +'A '+radius+' '+radius+' '+start_rad.toFixed(digits)+' '
        + large_arc_flag+' '+sweep_flag+' '
        + pointB[0].toFixed(digits)+' '+pointB[1].toFixed(digits)+' '
        +'Z';


  document.getElementById('sector').setAttribute('d', arc);
  document.getElementById('result').innerHTML = htmlEntities(document.getElementById('svg-container').innerHTML);
}
function windowHeightUpdated(){
  var ww = window.innerWidth,
      wh = window.innerHeight,
      minScale = Math.min(ww,wh)/100,
      svg_stage = document.getElementById('svg-stage');

  //update svg content scale
  svg_stage.setAttribute('transform', 
                          'scale('+minScale+') '
                          +'translate(0,0)'
                          );
  
}
function htmlEntities(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function init(){
  document.getElementById('generate-btn').addEventListener('click', newWedge, true);
  windowHeightUpdated();
}
window.addEventListener('load', init, true);
window.addEventListener('resize', windowHeightUpdated, true);
