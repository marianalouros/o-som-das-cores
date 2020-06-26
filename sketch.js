let size = 1;
let myFont1;
let myFont2;
let caneta;
let preencher;
let child;
let childraw = 0;
let r = 10; //raio do circulo
let paint = 0;
let slider;
let inDrawingMode = false;
let button1;
let button2;
let button3;
let button4;
let button5;
let cor = [255, 255, 255]; //cor função bucket
let desenho = [];
let corDesenho = [255, 255, 255]; //cor da caneta
let desenhoComecou = 0;
let eDesenho = false;
let black;
let blue;
let brown;
let green;
let grey;
let orange;
let pink;
let purple;
let red;
let white;
let yellow;
let childblack;
let childblue;
let childbrown;
let childgreen;
let childgrey;
let childorange;
let childpink;
let childpurple;
let childred;
let childwhite;
let childyellow;
let amarelo1;
let amarelo2;
let amarelo3;
let amarelo4;
let amarelo5;
let azul1;
let azul2;
let azul3;
let azul4;
let branco1;
let branco2;
let branco3;
let branco4;
let castanho1;
let castanho2;
let castanho3;
let castanho4;
let castanho5;
let castanho6;
let cinzento1;
let cinzento2;
let cinzento3;
let cinzento4;
let cinzento5;
let laranja1;
let laranja2;
let laranja3;
let laranja4;
let preto1;
let preto2;
let preto3;
let rosa1;
let rosa2;
let rosa3;
let rosa4;
let rosa5;
let roxo1;
let roxo2;
let roxo3;
let roxo4;
let verde1;
let verde2;
let verde3;
let verde4;
let verde5;
let verde6;
let vermelho1;
let vermelho2;
let vermelho3;
let vermelho4;
let vermelho5;
let vermelho6;

function preload() {
  console.log("preload")
  myFont1 = loadFont('assets/homeschool.otf');
  myFont2 = loadFont('assets/bebasbook.otf');
  caneta = loadImage('assets/caneta.png');
  preencher = loadImage('assets/preencher.png');
  child = loadImage('assets/desenho.png');
    
    soundFormats('wav');
    //fundo adultos
    black = loadSound('bucket/black');
    blue = loadSound('bucket/blue');
    brown = loadSound('bucket/brown');
    green = loadSound('bucket/green');
    grey = loadSound('bucket/grey');
    orange = loadSound('bucket/orange');
    pink = loadSound('bucket/pink');
    purple = loadSound('bucket/purple');
    red = loadSound('bucket/red');
    white = loadSound('bucket/white');
    yellow = loadSound('bucket/yellow');
    
    //fundo crianças
    childblack = loadSound('bucket/child_black');
    childblue = loadSound('bucket/child_blue');
    childbrown = loadSound('bucket/child_brown');
    childgreen = loadSound('bucket/child_green');
    childgrey = loadSound('bucket/child_grey');
    childorange = loadSound('bucket/child_orange');
    childpink = loadSound('bucket/child_pink');
    childpurple = loadSound('bucket/child_purple');
    childred = loadSound('bucket/child_red');
    childwhite = loadSound('bucket/child_white');
    childyellow = loadSound('bucket/child_yellow');
    
    //sons
    amarelo1 = loadSound('samples/amarelo1');
    amarelo2 = loadSound('samples/amarelo2');
    amarelo3 = loadSound('samples/amarelo3');
    amarelo4 = loadSound('samples/amarelo4');
    amarelo5 = loadSound('samples/amarelo5');
    azul1 = loadSound('samples/azul1');
    azul2 = loadSound('samples/azul2');
    azul3 = loadSound('samples/azul3');
    azul4 = loadSound('samples/azul4');
    branco1 = loadSound('samples/branco1');
    branco2 = loadSound('samples/branco2');
    branco3 = loadSound('samples/branco3');
    branco4 = loadSound('samples/branco4');
    castanho1 = loadSound('samples/castanho1');
    castanho2 = loadSound('samples/castanho2');
    castanho3 = loadSound('samples/castanho3');
    castanho4 = loadSound('samples/castanho4');
    castanho5 = loadSound('samples/castanho5');
    castanho6 = loadSound('samples/castanho6');
    cinzento1 = loadSound('samples/cinzento1');
    cinzento2 = loadSound('samples/cinzento2');
    cinzento3 = loadSound('samples/cinzento3');
    cinzento4 = loadSound('samples/cinzento4');
    cinzento5 = loadSound('samples/cinzento5');
    laranja1 = loadSound('samples/laranja1');
    laranja2 = loadSound('samples/laranja2');
    laranja3 = loadSound('samples/laranja3');
    laranja4 = loadSound('samples/laranja4');
    preto1 = loadSound('samples/preto1');
    preto2 = loadSound('samples/preto2');
    preto3 = loadSound('samples/preto3');
    rosa1 = loadSound('samples/rosa1');
    rosa2 = loadSound('samples/rosa2');
    rosa3 = loadSound('samples/rosa3');
    rosa4 = loadSound('samples/rosa4');
    rosa5 = loadSound('samples/rosa5');
    roxo1 = loadSound('samples/roxo1');
    roxo2 = loadSound('samples/roxo2');
    roxo3 = loadSound('samples/roxo3');
    roxo4 = loadSound('samples/roxo4');
    verde1 = loadSound('samples/verde1');
    verde2 = loadSound('samples/verde2');
    verde3 = loadSound('samples/verde3');
    verde4 = loadSound('samples/verde4');
    verde5 = loadSound('samples/verde5');
    verde6 = loadSound('samples/verde6');
    vermelho1 = loadSound('samples/vermelho1');
    vermelho2 = loadSound('samples/vermelho2');
    vermelho3 = loadSound('samples/vermelho3');
    vermelho4 = loadSound('samples/vermelho4');
    vermelho5 = loadSound('samples/vermelho5');
    vermelho6 = loadSound('samples/vermelho6');
}

function setup() {  
  console.log("setup")
  let myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.parent('myContainer');
    
  if((windowWidth/windowHeight) < 1.6) {
    size = windowWidth / 1280;
  }
  else {
    size = windowHeight / 800;
  }
    
  background(240, 227, 204);
  drawColors();
  drawControls();
    
    
    getAudioContext().suspend(); //suspende o audio
    
    let resetSlider = (r = 10*size);
    slider = createSlider((r = 5*size), (r = 50*size), resetSlider);
    slider.position(40*size, 60*size);
    slider.size(150*size);
    
    button1 = createImg('assets/child.png');
    button1.position(1130*size, 512.5*size);
    button1.style('width', '70px');
    button1.mousePressed(childMode);

    button2 = createImg('assets/clear.png');
    button2.position(1130*size, 650*size);
    button2.style('width', '60px');
    button2.mousePressed(clearAll);
    
    button3 = createImg('assets/erase.png');
    button3.position(1130*size, 100*size);
    button3.style('width', '50px');
    button3.mousePressed(eraseMode);
    
    button4 = createImg('assets/audio.png');
    button4.position(1130*size, 375*size);
    button4.style('width', '70px');
    button4.mousePressed(playSounds);
    
    button5 = createImg('assets/save.png');
    button5.position(1130*size, 237*size);
    button5.style('width', '70px');
    button5.mousePressed(saveMode);
}

function windowResized() {
  let myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.parent('myContainer');
    
  if((windowWidth/windowHeight) < 1.6) {
    size = windowWidth / 1280;
  }
  else {
    size = windowHeight / 800;
  }
  
  background(240, 227, 204);
  drawColors();
  drawControls();
    
    slider.size(150*size);
    slider.position(40*size, 60*size);
    button1.position(1130*size, 512.5*size);
    button2.position(1130*size, 650*size);
    button3.position(1130*size, 100*size);
    button4.position(1130*size, 375*size);
    button5.position(1130*size, 237*size);
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
}

function draw() {
    fill(cor[0], cor[1], cor[2]);
    noStroke();
    rect (200 * size,100* size, 880 * size, 650 * size);
  
    for(let i = 0; i < desenho.length; i++) {
        noStroke();
        fill(desenho[i].R, desenho[i].G, desenho[i].B);
        circle(desenho[i].x, desenho[i].y, desenho[i].d);
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
                  corDesenho[0] = 255;
                  corDesenho[1] = 255;
                  corDesenho[2] = 255;
            } 
        break;
        case 2:
            if (200*size < mouseX - r*size && mouseX + r*size < 1080*size && 100*size < mouseY - r*size && mouseY < 750*size - r*size) {
                corDesenho[0] = 255;
                corDesenho[1] = 238;
                corDesenho[2] = 0;
            }
        break;
        case 3:
            if (200*size < mouseX - r*size && mouseX + r*size < 1080*size && 100*size < mouseY - r*size && mouseY < 750*size - r*size) {
                 corDesenho[0] = 255;
                 corDesenho[1] = 170;
                 corDesenho[2] = 0;
             }
        break;
        case 4:
            if (200*size < mouseX - r*size && mouseX + r*size < 1080*size && 100*size < mouseY - r*size && mouseY < 750*size - r*size) {
                corDesenho[0] = 255;
                corDesenho[1] = 0;
                corDesenho[2] = 0;
             }
        break;
        case 5:
            if (200*size < mouseX - r*size && mouseX + r*size < 1080*size && 100*size < mouseY - r*size && mouseY < 750*size - r*size) {
                corDesenho[0] = 255;
                corDesenho[1] = 191;
                corDesenho[2] = 222;
            }
        break;
        case 6:
            if (200*size < mouseX - r*size && mouseX + r*size < 1080*size && 100*size < mouseY - r*size && mouseY < 750*size - r*size) {
                corDesenho[0] = 174;
                corDesenho[1] = 0;
                corDesenho[2] = 255;
            }
        break;
        case 7:
            if (200*size < mouseX - r*size && mouseX + r*size < 1080*size && 100*size < mouseY - r*size && mouseY < 750*size - r*size) {
                corDesenho[0] = 0;
                corDesenho[1] = 72;
                corDesenho[2] = 255;
            }
        break;
        case 8:
            if (200*size < mouseX - r*size && mouseX + r*size < 1080*size && 100*size < mouseY - r*size && mouseY < 750*size - r*size) {
                corDesenho[0] = 57;
                corDesenho[1] = 163;
                corDesenho[2] = 24;
            }
        break;
        case 9:
            if (200*size < mouseX - r*size && mouseX + r*size < 1080*size && 100*size < mouseY - r*size && mouseY < 750*size - r*size) {
                corDesenho[0] = 117;
                corDesenho[1] = 69;
                corDesenho[2] = 42;
            }
        break;
        case 10:
            if (200*size < mouseX - r*size && mouseX + r*size < 1080*size && 100*size < mouseY - r*size && mouseY < 750*size - r*size) {
                corDesenho[0] = 184;
                corDesenho[1] = 184;
                corDesenho[2] = 184;
            }
        break;
        case 11:
            if (200*size < mouseX - r*size && mouseX + r*size < 1080*size && 100*size < mouseY - r*size && mouseY < 750*size - r*size) {
                corDesenho[0] = 0;
                corDesenho[1] = 0;
                corDesenho[2] = 0;
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

if (120*size < mouseX && mouseX < 170*size && 591*size < mouseY && mouseY < 641*size) {
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
    
    if (200*size < mouseX - r*size && mouseX + r*size < 1080*size && 100*size < mouseY - r*size && mouseY < 750*size - r*size) {
        let posicao = {x: mouseX, y: mouseY, R: corDesenho[0], G: corDesenho[1], B: corDesenho[2], d:r};
        desenho.push(posicao);
        // se estou a desenhar:
      eDesenho = true;
      desenhoComecou = millis();
    }
    userStartAudio();
    inDrawingMode = true;
}

function mouseDragged() {
   if (200*size < mouseX - r*size && mouseX + r*size < 1080*size && 100*size < mouseY - r*size && mouseY < 750*size - r*size) {
    let posicao = {x: mouseX, y: mouseY, R: corDesenho[0], G: corDesenho[1], B: corDesenho[2], d:r};
       desenho.push(posicao);
   }
}

function mouseReleased() {
    if(eDesenho) {
    console.log("tempo de desenho = " + (millis() - desenhoComecou));
    eDesenho = false;
  }
    inDrawingMode = false;
}

function clearAll() {
     cor[0] = 255;
     cor[1] = 255;
     cor[2] = 255;
     corDesenho[0] = 255;
     corDesenho[1] = 255;
     corDesenho[2] = 255;
     desenho = [];
     childraw = 0;
     paint = 0;
     key = 0;
    black.stop();
    blue.stop();
    brown.stop();
    green.stop();
    grey.stop();
    orange.stop();
    pink.stop();
    purple.stop();
    red.stop();
    white.stop();
    yellow.stop();
    childblack.stop();
    childblue.stop();
    childbrown.stop();
    childgreen.stop();
    childgrey.stop();
    childorange.stop();
    childpink.stop();
    childpurple.stop();
    childred.stop();
    childwhite.stop();
    childyellow.stop();
}

function childMode() {
    childraw = 1;
}

function eraseMode() {
    paint = 1;
}

function keyPressed() {
    switch (key) {
        case 'B':
            cor[0] = 255;
            cor[1] = 255;
            cor[2] = 255;

            desenho = [];
        break;
        case 'A':
            cor[0] = 255;
            cor[1] = 238;
            cor[2] = 0;

            desenho = [];
        break;
        case 'L':
            cor[0] = 255;
            cor[1] = 170;
            cor[2] = 0;

            desenho = [];
        break;
        case 'V':
            cor[0] = 255;
            cor[1] = 0;
            cor[2] = 0;

            desenho = [];
        break;
        case 'R':
            cor[0] = 255;
            cor[1] = 191;
            cor[2] = 222;

            desenho = [];
        break;
        case 'X':
            cor[0] = 174;
            cor[1] = 0;
            cor[2] = 255;

            desenho = [];
        break;
        case 'Z':
            cor[0] = 0;
            cor[1] = 72;
            cor[2] = 255;

            desenho = [];
        break;
        case 'E':
            cor[0] = 57;
            cor[1] = 163;
            cor[2] = 24;

            desenho = [];
        break;
        case 'C':
            cor[0] = 117;
            cor[1] = 69;
            cor[2] = 42;

            desenho = [];
        break;
        case 'I':
            cor[0] = 184;
            cor[1] = 184;
            cor[2] = 184;

            desenho = [];
        break;
        case 'P':
            cor[0] = 0;
            cor[1] = 0;
            cor[2] = 0;

            desenho = [];
        break;          
    }
}


function saveMode() { //guarda info para função play sounds - tempo de uso da caneta

}


function playSounds() {
   if(childraw === 1) {
       switch (key) {
        case 'B':
            childwhite.play();
        break;
        case 'A':
            childyellow.play();
        break;
        case 'L':
            childorange.play();
        break;
        case 'V':
            childred.play();
        break;
        case 'R':
            childpink.play();
        break;
        case 'X':
            childpurple.play();
        break;
        case 'Z':
            childblue.play();
        break;
        case 'E':
            childgreen.play();
        break;
        case 'C':
            childbrown.play();
        break;
        case 'I':
            childgrey.play();
        break;
        case 'P':
            childblack.play();
        break;
        }
    } else {
        switch (key) {
            case 'B':
                white.play();
            break;
            case 'A':
                yellow.play();
            break;
            case 'L':
                orange.play();
            break;
            case 'V':
                red.play();
            break;
            case 'R':
                pink.play();
            break;
            case 'X':
                purple.play();
            break;
            case 'Z':
                blue.play();
            break;
            case 'E':
                green.play();
            break;
            case 'C':
                brown.play();
            break;
            case 'I':
                grey.play();
            break;
            case 'P':
                black.play();
            break;
        }
   }
        
    // cores usadas da caneta = sons tocados dessa cor
    
    
}

