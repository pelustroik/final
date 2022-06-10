var hydra = new Hydra({
  canvas: document.getElementById("myCanvas"),
  makeGlobal: false
}).synth

/////////////////////////

let slider;
var pg;
let hNoise;

let bt1, bt2, bt3, bt4, bt5, bt6, bt7;

let colores;
let data;
let numero = 0;

let sonidos;

let video = [];

Tone.start();
let checkbox;

function preload(){

  data = loadJSON('data.json'); //

}

function setup() {

  createCanvas(400, 400);
  checkbox = createCheckbox('hydra', false);
  checkbox.position(10, 430);

  slider = createSlider(0, 10, 0);
  slider.position(10, 410);
  slider.style('width', '400px');
  // inicializar el audi
  video[0] = createVideo( data.videos.p1 ); // string
  video[1] = createVideo( data.videos.p1 ); // string
  video[2] = createVideo( data.videos.p1 ); // string
  video[3] = createVideo( data.videos.p1 ); // string
  video[4] = createVideo( data.videos.p1 ); // string
  video[5] = createVideo( data.videos.p1 ); // string
  video[6] = createVideo( data.videos.p1 ); // string

  bt1 = createButton('iniciar');
  bt2 = createButton('camino 1');
  bt3 = createButton('camino 2');
  bt4 = createButton('camino 1-1');
  bt5 = createButton('camino 1-2');
  bt6 = createButton('camino 2-1');
  bt7 = createButton('camino 2-2');

  bt1.mousePressed(funcbt1);
  bt2.mousePressed(funcbt2);
  bt3.mousePressed(funcbt3);
  bt4.mousePressed(funcbt4);
  bt5.mousePressed(funcbt5);
  bt6.mousePressed(funcbt6);
  bt7.mousePressed(funcbt7);

  bt2.hide();
  bt3.hide();
  bt4.hide();
  bt5.hide();
  bt6.hide();
  bt7.hide();

  bt1.position(410,10);

  colores = [
    color(data.colores.p1),
    color(data.colores.p2),
    color(data.colores.p3),
    color(data.colores.p4),
    color(data.colores.p5),
    color(data.colores.p6),
    color(data.colores.p7)
  ];

  // colores[6]miOtroArchivo

  for(let i = 0; i < 7; i++ ){ // 0, 1, 2, 3, 4, 5, 6
    video[i].hide();
  }

  sonidos = new Tone.Players(data.audios).toDestination(); //
  hc = select("#myCanvas")

  pg = createGraphics(width, height);
  hc.hide();
}

function draw() {

  background(0);
  // image(video[numero], 0, 0);
  // image(video[aleatoria], 0, 0);

  pg.image(hc, 0, 0);
  noStroke();
  image(pg, 0, 0);

  hNoise = slider.value();

}

function funcbt1(){

  bt1.hide();
  bt4.hide();
  bt5.hide();
  bt6.hide();
  bt7.hide();

  bt2.show();
  bt3.show();

  bt2.position(410,30);

  bt3.position(410,50);

  //-------------------

  numero = 1;

  // video[3].loop();

  hydra.s0.initVideo(data.videos.p1);

  if(checkbox.checked()){
    hydra.src(hydra.s0).modulateKaleid(hydra.noise(hNoise)).out(hydra.o0);
  } else {
    hydra.src(hydra.s0).out(hydra.o0);
  }//

  // detener la reproducción de todos los audios

  for(let i = 0; i < 7; i++ ){ // 0, 1, 2, 3, 4, 5, 6
    sonidos.player(("p"+(i+1)).toString()).stop();
  }

  sonidos.player(("p"+numero).toString()).start();

  //-------------------
  console.log(colores[0])

}

function funcbt2(){

  bt2.hide();
  bt3.hide();

  bt4.show();
  bt5.show();
  bt1.show();

  bt1.position(410, 10);
  bt4.position(410, 70);
  bt5.position(410, 90);
  //-------------------

  numero = 2;

  for(let i = 0; i < 7; i++ ){ // 0, 1, 2, 3, 4, 5, 6
    video[i].stop();
  }

  // video[numero].loop();
  hydra.s0.initVideo(data.videos.p2);


  if(checkbox.checked()){
    hydra.src(hydra.s0).modulateKaleid(hydra.noise(hNoise)).out(hydra.o0);
  } else {
    hydra.src(hydra.s0).out(hydra.o0);
  }//
  for(let i = 0; i < 7; i++ ){ // 0, 1, 2, 3, 4, 5, 6
    sonidos.player(("p"+(i+1)).toString()).stop();
  }

  sonidos.player(("p"+numero).toString()).start();


  //-------------------

}

function funcbt3(){

  bt2.hide();
  bt3.hide();

  bt6.show();
  bt7.show();
  bt1.show();

  bt6.position(410,110);

  bt7.position(410, 130);

  bt1.position(410, 10);

  //-------------------

  numero = 3;

  for(let i = 0; i < 7; i++ ){ // 0, 1, 2, 3, 4, 5, 6
    video[i].stop();
  }

  // video[numero].loop();
  hydra.s0.initVideo(data.videos.p3);

  if(checkbox.checked()){
    hydra.src(hydra.s0).modulateKaleid(hydra.noise(hNoise)).out(hydra.o0);
  } else {
    hydra.src(hydra.s0).out(hydra.o0);
  }//
  //-------------------

  for(let i = 0; i < 7; i++ ){ // 0, 1, 2, 3, 4, 5, 6
    sonidos.player(("p"+(i+1)).toString()).stop();
  }

  sonidos.player(("p"+numero).toString()).start();


}

function funcbt4(){

  bt4.hide();
  bt5.hide();
  bt6.hide();
  bt7.hide();

  bt1.show();

  bt1.position(410, 10);

  //-------------------

  numero = 4;

  for(let i = 0; i < 7; i++ ){ // 0, 1, 2, 3, 4, 5, 6
    video[i].stop();
  }

  hydra.s0.initVideo(data.videos.p4);

  if(checkbox.checked()){
    hydra.src(hydra.s0).modulateKaleid(hydra.noise(hNoise)).out(hydra.o0);
  } else {
    hydra.src(hydra.s0).out(hydra.o0);
  }//
  for(let i = 0; i < 7; i++ ){ // 0, 1, 2, 3, 4, 5, 6
    sonidos.player(("p"+(i+1)).toString()).stop();
  }

  sonidos.player(("p"+numero).toString()).start();

  //-------------------

}

function funcbt5(){

  bt4.hide();
  bt5.hide();
  bt6.hide();
  bt7.hide();

  bt1.show();

  bt1.position(410, 10);


  //-------------------

  numero = 5;

  for(let i = 0; i < 7; i++ ){ // 0, 1, 2, 3, 4, 5, 6
    video[i].stop();
  }

  // video[numero].loop();
  hydra.s0.initVideo(data.videos.p5);

  if(checkbox.checked()){
    hydra.src(hydra.s0).modulateKaleid(hydra.noise(hNoise)).out(hydra.o0);
  } else {
    hydra.src(hydra.s0).out(hydra.o0);
  }//
  for(let i = 0; i < 7; i++ ){ // 0, 1, 2, 3, 4, 5, 6
    sonidos.player(("p"+(i+1)).toString()).stop();
  }

  sonidos.player(("p"+numero).toString()).start();

  //-------------------

}

function funcbt6(){

  bt4.hide();
  bt5.hide();
  bt6.hide();
  bt7.hide();

  bt1.show();

  bt1.position(410, 10);


  //-------------------

  numero = 6;

  for(let i = 0; i < 7; i++ ){ // 0, 1, 2, 3, 4, 5, 6
    video[i].stop();
  }

  hydra.s0.initVideo(data.videos.p6);

  if(checkbox.checked()){
    hydra.src(hydra.s0).modulateKaleid(hydra.noise(hNoise)).out(hydra.o0);
  } else {
    hydra.src(hydra.s0).out(hydra.o0);
  }//

  for(let i = 0; i < 7; i++ ){ // 0, 1, 2, 3, 4, 5, 6
    sonidos.player(("p"+(i+1)).toString()).stop();
  }

  sonidos.player(("p"+numero).toString()).start();


  //-------------------

}

function funcbt7(){

  bt4.hide();
  bt5.hide();
  bt6.hide();
  bt7.hide();

  bt1.show();

  bt1.position(410, 10);

//
  //-------------------

  numero = 7; // audio o video

  for(let i = 0; i < 7; i++ ){ // 0, 1, 2, 3, 4, 5, 6
    video[i].stop();
  }

  // video[numero].loop();
  hydra.s0.initVideo(data.videos.p7);

  if(checkbox.checked()){
    hydra.src(hydra.s0).modulateKaleid(hydra.noise(hNoise)).out(hydra.o0);
  } else {
    hydra.src(hydra.s0).out(hydra.o0);
  }//

  for(let i = 0; i < 7; i++ ){ // 0, 1, 2, 3, 4, 5, 6
    sonidos.player(("p"+(i+1)).toString()).stop();
  }

  sonidos.player(("p"+numero).toString()).start();


  //-------------------

}
