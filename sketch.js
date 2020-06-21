let size = 1;
let marginX = 0;
let marginY = 0;
let myFont1;
let myFont2;
let caneta;
let preencher;
let audio;
let save;
let child;
let modo = 0;
let childraw = 0;
let r = 10;
let paint = 0;
let slider;
let inDrawingMode = false;
let button1;
let button2;
let button3;
let button4;
let cor = [255, 255, 255];
let desenho = [];
let c = [255, 255, 255];

function preload() {
  console.log("preload")
  myFont1 = loadFont('assets/homeschool.otf');
  myFont2 = loadFont('assets/bebasbook.otf');
  caneta = loadImage('assets/caneta.png');
  preencher = loadImage('assets/preencher.png');
  audio = loadImage('assets/audio.png');
  save = loadImage('assets/save.png');
  child = loadImage('assets/desenho.png');
}

function setup() {
  console.log("setup")
  resizeCanvas(windowWidth, windowHeight);
  if((windowWidth/windowHeight) < 1.6) {
    size = windowWidth / 1280;
    marginY = (windowHeight - (800 * size)) / 2;
  }
  else {
    size = windowHeight / 800;
    marginX = (windowWidth - (1280 * size)) / 2;
  }
    
  background(240, 227, 204);
  drawColors();
  drawControls();  
    
  slider = createSlider(5*size, 50*size, 10*size);
  slider.position(40*size, 60*size);
  slider.style('width', '75px');
    button1 = createImg('assets/help.png');
    button1.position(1170*size, 20*size);
    button1.style('width', '30px');
    button1.mousePressed(helpMode);
    
    button2 = createImg('assets/child.png');
    button2.position(1130*size, 512.5*size);
    button2.style('width', '70px');
    button2.mousePressed(childMode);

    button3 = createImg('assets/clear.png');
    button3.position(1130*size, 650*size);
    button3.style('width', '60px');
    button3.mousePressed(clearAll);
    
    button4 = createImg('assets/erase.png');
    button4.position(1130*size, 100*size);
    button4.style('width', '50px');
    button4.mousePressed(eraseMode);

}

function windowResized() {
 resizeCanvas(windowWidth, windowHeight);
  if((windowWidth/windowHeight) < 1.6) {
    size = windowWidth / 1280;
    marginX = 0;
    marginY = (windowHeight - (800 * size)) / 2;
  }
  else {
    size = windowHeight / 800;
    marginX = (windowWidth - (1280 * size)) / 2;
    marginY = 0;
  }
  
  background(240, 227, 204);
  drawColors();
  drawControls();
    
    slider.position(40*size, 60*size);
    button1.position(1170*size, 20*size);
    button2.position(1130*size, 512.5*size);
    button3.position(1130*size, 650*size);
    button4.position(1130*size, 100*size);
    
}

function drawColors() {
  noFill();
  image(caneta, 120* size, 100* size, 50* size, 50* size);
  image(preencher, 40* size, 100* size, 50* size, 50* size);
    
  
  noStroke();
  //cor 1 branco
  fill(255);
  rect(120* size, 155* size, 50* size, 50* size);
  rect(40* size, 155* size, 50* size, 50* size);
  
  //cor 2 amarelo
  fill(255, 238, 0);
  rect(120* size, 209.5* size, 50* size, 50* size);
  rect(40* size, 209.5* size, 50* size, 50* size);
  
  //cor 3 laranja
  fill (255, 170, 0);
  rect(120* size, 264* size, 50* size, 50* size);
  rect(40* size, 264* size, 50* size, 50* size);
  
  //cor 4 vermelho
  fill (255,0,0);
  rect(120* size, 318.5* size, 50* size, 50* size);
  rect(40* size, 318.5* size, 50* size, 50* size);
  
  //cor 5 rosa
  fill (255, 191, 222);
  rect(120* size, 373* size, 50* size, 50* size);
  rect(40* size, 373* size, 50* size, 50* size);
  
  //cor 6 roxo
  fill (174, 0, 255);
  rect(120* size, 427.5* size, 50* size, 50* size);
  rect(40* size, 427.5* size, 50* size, 50* size);
  
  //cor 7 azul
  fill (0, 72, 255);
  rect(120* size, 482* size, 50* size, 50* size);
  rect(40* size, 482* size, 50* size, 50* size);
  
  //cor 8 verde
  fill (57, 163, 24);
  rect(120* size, 536.5* size, 50* size, 50* size);
  rect(40* size, 536.5* size, 50* size, 50* size);
  
  //cor 9 castanho
  fill (117, 69, 42);
  rect(120* size, 591* size, 50* size, 50* size);
  rect(40* size, 591* size, 50* size, 50* size);
  
  //cor 10 cinzento
  fill (184, 184, 184);
  rect(120* size, 645.5* size, 50* size, 50* size);
  rect(40* size, 645.5* size, 50* size, 50* size);
  
  //cor 11 preto
  fill (0);
  rect(120* size, 700* size, 50* size, 50* size);
  rect(40* size, 700* size, 50* size, 50* size);
    
  fill('black');
  textFont(myFont2);
  textSize(50* size );
  text('B', 55* size, 197* size);
  text('A', 55* size, 252* size);
  text('L', 55* size, 307* size);
  text('V', 55* size, 362* size);
  text('R', 55* size, 417* size);
  text('X', 55* size, 471* size); 
  text('Z', 55* size, 525* size);
  text('E', 55* size, 580* size);
  text('C', 55* size, 635* size); 
  text('I', 60* size, 690* size);
  fill('white');
  text('P', 55* size, 745* size);

}

function drawControls() {
   //titulo
  fill('black');
  textFont(myFont1);
  textSize(100* size );
  text('O Som das Cores', 300* size, 90* size);
  //rodapé
  textFont(myFont2);
  textSize(30* size);
  text('© 2020 Mariana Louros', 540* size, 785* size);
  
  noFill();
  image(save, 1130* size, 237.5* size, 90* size, 90* size);
  image(audio, 1130* size, 375* size, 100* size, 100* size);
}

function draw() {
    fill(cor[0], cor[1], cor[2]);
    noStroke();
    rect (200 * size,100* size, 880 * size, 650 * size);
    
   /* if (200*size < mouseX - r*size && mouseX + r*size < 1080*size && 100*size < mouseY - r*size && mouseY < 750*size - r*size) {
        let posicao = [mouseX, mouseY];
        desenho.push(posicao);
      }
         noStroke();
        fill(0);
        for(let i = 0; i < desenho.length; i++) {
        ellipse(desenho[i][0], desenho[i][1], 10, 10);
    } */
    if (mouseIsPressed && 200*size < mouseX - r*size && mouseX + r*size < 1080*size && 100*size < mouseY - r*size && mouseY < 750*size - r*size) {
        let posicao = [mouseX, mouseY];
        desenho.push(posicao);
    }
         noStroke();
        fill(0);
        for(let i = 0; i < desenho.length; i++) {
        ellipse(desenho[i][0], desenho[i][1], 10, 10);
    }
        
    r = slider.value();

     switch (childraw) {
        case 1:
            image(child, 200 * size, 100* size, 880 * size, 650 * size);
        break;      
    }

    if(inDrawingMode) {
         switch (paint) {
        case 1:
            if (200*size < mouseX - r*size && mouseX + r*size < 1080*size && 100*size < mouseY - r*size && mouseY < 750*size - r*size) {
                fill(255);
                noStroke();
                circle (mouseX, mouseY, r * 2 * size);
            } 
        break;
        case 2:
            if (200*size < mouseX - r*size && mouseX + r*size < 1080*size && 100*size < mouseY - r*size && mouseY < 750*size - r*size) {
                fill(255, 238, 0);
                noStroke();
                circle (mouseX, mouseY, r * 2 * size);
            }
        break;
        case 3:
            if (200*size < mouseX - r*size && mouseX + r*size < 1080*size && 100*size < mouseY - r*size && mouseY < 750*size - r*size) {
                fill(255, 170, 0);
                noStroke();
                circle (mouseX, mouseY, r * 2 * size);
             }
        break;
        case 4:
            if (200*size < mouseX - r*size && mouseX + r*size < 1080*size && 100*size < mouseY - r*size && mouseY < 750*size - r*size) {
                fill(255, 0, 0);
                noStroke();
                circle (mouseX, mouseY, r * 2 * size);
             }
        break;
        case 5:
            if (200*size < mouseX - r*size && mouseX + r*size < 1080*size && 100*size < mouseY - r*size && mouseY < 750*size - r*size) {
                fill(255, 191, 222);
                noStroke();
                circle (mouseX, mouseY, r * 2 * size);
            }
        break;
        case 6:
            if (200*size < mouseX - r*size && mouseX + r*size < 1080*size && 100*size < mouseY - r*size && mouseY < 750*size - r*size) {
                fill(174, 0, 255);
                noStroke();
                circle (mouseX, mouseY, r * 2 * size);
            }
        break;
        case 7:
            if (200*size < mouseX - r*size && mouseX + r*size < 1080*size && 100*size < mouseY - r*size && mouseY < 750*size - r*size) {
                fill(0, 72, 255);
                noStroke();
                circle (mouseX, mouseY, r * 2 * size);
            }
        break;
        case 8:
            if (200*size < mouseX - r*size && mouseX + r*size < 1080*size && 100*size < mouseY - r*size && mouseY < 750*size - r*size) {
                fill(57, 163, 24);
                noStroke();
                circle (mouseX, mouseY, r * 2 * size);
            }
        break;
        case 9:
            if (200*size < mouseX - r*size && mouseX + r*size < 1080*size && 100*size < mouseY - r*size && mouseY < 750*size - r*size) {
                fill(117, 69, 42);
                noStroke();
                circle (mouseX, mouseY, r * 2 * size);
            }
        break;
        case 10:
            if (200*size < mouseX - r*size && mouseX + r*size < 1080*size && 100*size < mouseY - r*size && mouseY < 750*size - r*size) {
                fill(184, 184, 184);
                noStroke();
                circle (mouseX, mouseY, r * 2 * size);
            }
        break;
        case 11:
            if (200*size < mouseX - r*size && mouseX + r*size < 1080*size && 100*size < mouseY - r*size && mouseY < 750*size - r*size) {
                fill(0);
                noStroke();
                circle (mouseX, mouseY, r * 2 * size);
            }
        break;
        }
    }
}

function mouseClicked() {    
//DrawMode    
    
if (120*size < mouseX && mouseX < 170*size && 155*size < mouseY && mouseY < 205*size) {
    paint = 1;
  }
    
if (120*size < mouseX && mouseX < 170*size && 209.5*size < mouseY && mouseY < 259.5*size) {
   paint = 2;
  }
    
if (120*size < mouseX && mouseX < 170*size && 264*size < mouseY && mouseY < 314*size) {
   paint = 3;
  }

if (120*size < mouseX && mouseX < 170*size && 318.5*size < mouseY && mouseY < 368.5*size) {
   paint = 4;
  } 
    
if (120*size < mouseX && mouseX < 170*size && 373*size < mouseY && mouseY < 423*size) {
    paint = 5;
  }

if (120*size < mouseX && mouseX < 170*size && 427.5*size < mouseY && mouseY < 477.7*size) {
    paint = 6;
  }
  
if (120*size < mouseX && mouseX < 170*size && 482*size < mouseY && mouseY < 532*size) {
    paint = 7;
  }
    
if (120*size < mouseX && mouseX < 170*size && 536.5*size < mouseY && mouseY < 586.5*size) {
    paint = 8;
  }

if (40*size < mouseX && mouseX < 90*size && 591*size < mouseY && mouseY < 641*size) {
    paint = 9;
  }
    
if (120*size < mouseX && mouseX < 170*size && 645.5*size < mouseY && mouseY < 695.5*size) {
    paint = 10;
  }

if (120*size < mouseX && mouseX < 170*size && 700*size < mouseY && mouseY < 750*size) {
    paint = 11;
  }  
}

 
function mousePressed() {
    inDrawingMode = true;
}

function mouseReleased() {
    inDrawingMode = false;
}

function clearAll() {
     cor[0] = 255;
     cor[1] = 255;
     cor[2] = 255;       
     desenho = [];
     childraw = 0;
     modo = 0;
     paint = 0;
}

function helpMode() {
    fill(200,200,200);
    rect(200,200,200,200);
}

function childMode() {
    childraw = 1;
}

function eraseMode() {
    paint = 1;
}

function keyPressed() {
    if (keyCode === 66) { //letra B c/ ou s/ CAPSLOCK
        cor[0] = 255;
        cor[1] = 255;
        cor[2] = 255;

        desenho = []; // apaga o desenho
    }
    
    if (keyCode === 65) { //letra A c/ ou s/ CAPSLOCK
        cor[0] = 255;
        cor[1] = 238;
        cor[2] = 0;
            
        desenho = [];
    }
    
    if (keyCode === 76) { //letra L c/ ou s/ CAPSLOCK
        cor[0] = 255;
        cor[1] = 170;
        cor[2] = 0;
            
        desenho = [];
    }
    
    if (keyCode === 86) { //letra V c/ ou s/ CAPSLOCK
        cor[0] = 255;
        cor[1] = 0;
        cor[2] = 0;
            
        desenho = [];
    }
        
    if (keyCode === 82) { //letra R c/ ou s/ CAPSLOCK
        cor[0] = 255;
        cor[1] = 191;
        cor[2] = 222;
            
        desenho = [];
    }
            
    if (keyCode === 88) { //letra X c/ ou s/ CAPSLOCK
        cor[0] = 174;
        cor[1] = 0;
        cor[2] = 255;
            
        desenho = [];
    }
    
    if (keyCode === 90) { //letra Z c/ ou s/ CAPSLOCK
        cor[0] = 0;
        cor[1] = 72;
        cor[2] = 255;

        desenho = [];
    }
    
    if (keyCode === 69) { //letra E c/ ou s/ CAPSLOCK
        cor[0] = 57;
        cor[1] = 163;
        cor[2] = 24;

        desenho = [];
    }
    
    if (keyCode === 67) { //letra C c/ ou s/ CAPSLOCK
        cor[0] = 117;
        cor[1] = 69;
        cor[2] = 42;

        desenho = [];
    }
    
    if (keyCode === 73) { //letra I c/ ou s/ CAPSLOCK
        cor[0] = 184;
        cor[1] = 184;
        cor[2] = 184;

        desenho = [];
    }
    
    if (keyCode === 80) { //letra P c/ ou s/ CAPSLOCK
        cor[0] = 0;
        cor[1] = 0;
        cor[2] = 0;

        desenho = [];
    }
}