let sized = 1;
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

//músicas de fundo - bucket
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

//sons da caneta
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

let aUsed = false;
let zUsed = false;
let bUsed = false;
let cUsed = false;
let izUsed = false;
let lUsed = false;
let pUsed = false;
let raUsed = false;
let xUsed = false;
let eUsed = false;
let vUsed = false;

let a = 0;
let z = 0;
let b = 0;
let c = 0;
let iz = 0;
let l = 0;
let p = 0;
let ra = 0;
let x = 0;
let e = 0;
let v = 0;

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
    sized = windowWidth / 1280;
    }
    else {
    sized = windowHeight / 800;
    }

    background(240, 227, 204);
    drawColors();
    drawControls();
    
    getAudioContext().suspend(); //suspende o audio
    
    let resetSlider = (r = 10*sized);
    slider = createSlider((r = 5*sized), (r = 50*sized), resetSlider);
    slider.position(40*sized, 60*sized);
    slider.style('width', '70px');
    
    button1 = createImg('assets/child.png');
    button1.position(1130*sized, 512.5*sized);
    button1.style('width', '70px');
    button1.mousePressed(childMode);

    button2 = createImg('assets/clear.png');
    button2.position(1130*sized, 650*sized);
    button2.style('width', '60px');
    button2.mousePressed(clearAll);
    
    button3 = createImg('assets/erase.png');
    button3.position(1130*sized, 100*sized);
    button3.style('width', '50px');
    button3.mousePressed(eraseMode);
    
    button4 = createImg('assets/audio.png');
    button4.position(1130*sized, 375*sized);
    button4.style('width', '70px');
    button4.mousePressed(playSounds);
    
    button5 = createImg('assets/save.png');
    button5.position(1130*sized, 237*sized);
    button5.style('width', '70px');
    button5.mousePressed(saveMode);
}

function windowResized() {
  let myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.parent('myContainer');
    
  if((windowWidth/windowHeight) < 1.6) {
    sized = windowWidth / 1280;
  }
  else {
    sized = windowHeight / 800;
  }
  
  background(240, 227, 204);
  drawColors();
  drawControls();
    
    slider.position(40*sized, 60*sized);
    button1.position(1130*sized, 512.5*sized);
    button2.position(1130*sized, 650*sized);
    button3.position(1130*sized, 100*sized);
    button4.position(1130*sized, 375*sized);
    button5.position(1130*sized, 237*sized);
}

function drawColors() {
  noFill();
  image(caneta, 120* sized, 100* sized, 50* sized, 50* sized);
  image(preencher, 40* sized, 100* sized, 50* sized, 50* sized);
     
  noStroke();
  //cor 1 branco
  fill(255);
  rect(120* sized, 155* sized, 50* sized, 50* sized);
  rect(40* sized, 155* sized, 50* sized, 50* sized);
  
  //cor 2 amarelo
  fill(255, 238, 0);
  rect(120* sized, 209.5* sized, 50* sized, 50* sized);
  rect(40* sized, 209.5* sized, 50* sized, 50* sized);
  
  //cor 3 laranja
  fill (255, 170, 0);
  rect(120* sized, 264* sized, 50* sized, 50* sized);
  rect(40* sized, 264* sized, 50* sized, 50* sized);
  
  //cor 4 vermelho
  fill (255,0,0);
  rect(120* sized, 318.5* sized, 50* sized, 50* sized);
  rect(40* sized, 318.5* sized, 50* sized, 50* sized);
  
  //cor 5 rosa
  fill (255, 191, 222);
  rect(120* sized, 373* sized, 50* sized, 50* sized);
  rect(40* sized, 373* sized, 50* sized, 50* sized);
  
  //cor 6 roxo
  fill (174, 0, 255);
  rect(120* sized, 427.5* sized, 50* sized, 50* sized);
  rect(40* sized, 427.5* sized, 50* sized, 50* sized);
  
  //cor 7 azul
  fill (0, 72, 255);
  rect(120* sized, 482* sized, 50* sized, 50* sized);
  rect(40* sized, 482* sized, 50* sized, 50* sized);
  
  //cor 8 verde
  fill (57, 163, 24);
  rect(120* sized, 536.5* sized, 50* sized, 50* sized);
  rect(40* sized, 536.5* sized, 50* sized, 50* sized);
  
  //cor 9 castanho
  fill (117, 69, 42);
  rect(120* sized, 591* sized, 50* sized, 50* sized);
  rect(40* sized, 591* sized, 50* sized, 50* sized);
  
  //cor 10 cinzento
  fill (184, 184, 184);
  rect(120* sized, 645.5* sized, 50* sized, 50* sized);
  rect(40* sized, 645.5* sized, 50* sized, 50* sized);
  
  //cor 11 preto
  fill (0);
  rect(120* sized, 700* sized, 50* sized, 50* sized);
  rect(40* sized, 700* sized, 50* sized, 50* sized);
    
  fill('black');
  textFont(myFont2);
  textSize(50* sized );
  text('B', 55* sized, 197* sized);
  text('A', 55* sized, 252* sized);
  text('L', 55* sized, 307* sized);
  text('V', 55* sized, 362* sized);
  text('R', 55* sized, 417* sized);
  text('X', 55* sized, 471* sized); 
  text('Z', 55* sized, 525* sized);
  text('E', 55* sized, 580* sized);
  text('C', 55* sized, 635* sized); 
  text('I', 60* sized, 690* sized);
  fill('white');
  text('P', 55* sized, 745* sized);
}

function drawControls() {
   //titulo
  fill('black');
  textFont(myFont1);
  textSize(100* sized );
  text('O Som das Cores', 300* sized, 90* sized);
  //rodapé
  textFont(myFont2);
  textSize(30* sized);
  text('© 2020 Mariana Louros', 540* sized, 785* sized);
}

function draw() {
    fill(cor[0], cor[1], cor[2]);
    noStroke();
    rect (200 * sized,100* sized, 880 * sized, 650 * sized);

    for(let i = 0; i < desenho.length; i++) {
        noStroke();
        fill(desenho[i].R, desenho[i].G, desenho[i].B);
        circle(desenho[i].x, desenho[i].y, desenho[i].d);
    }
        
    r = slider.value();

     switch (childraw) {
        case 1:
            image(child, 200 * sized, 100* sized, 880 * sized, 650 * sized);
        break;      
    }
    
           
    if(inDrawingMode) {
        switch (paint) {
        case 1: //caneta branca
            if (200*sized < mouseX - r*sized && mouseX + r*sized < 1080*sized && 100*sized < mouseY - r*sized && mouseY < 750*sized - r*sized) {
                corDesenho[0] = 255;
                corDesenho[1] = 255;
                corDesenho[2] = 255;
                bUsed = true;
            } 
        break;
        case 2: //caneta amarela
            if (200*sized < mouseX - r*sized && mouseX + r*sized < 1080*sized && 100*sized < mouseY - r*sized && mouseY < 750*sized - r*sized) {
                corDesenho[0] = 255;
                corDesenho[1] = 238;
                corDesenho[2] = 0;
                aUsed = true;
            }
        break;
        case 3:  //caneta laranja
            if (200*sized < mouseX - r*sized && mouseX + r*sized < 1080*sized && 100*sized < mouseY - r*sized && mouseY < 750*sized - r*sized) {
                 corDesenho[0] = 255;
                 corDesenho[1] = 170;
                 corDesenho[2] = 0;
                 lUsed = true;
             }
        break;
        case 4:  //caneta vermelha
            if (200*sized < mouseX - r*sized && mouseX + r*sized < 1080*sized && 100*sized < mouseY - r*sized && mouseY < 750*sized - r*sized) {
                corDesenho[0] = 255;
                corDesenho[1] = 0;
                corDesenho[2] = 0;
                vUsed = true;
             }
        break;
        case 5:  //caneta rosa
            if (200*sized < mouseX - r*sized && mouseX + r*sized < 1080*sized && 100*sized < mouseY - r*sized && mouseY < 750*sized - r*sized) {
                corDesenho[0] = 255;
                corDesenho[1] = 191;
                corDesenho[2] = 222;
                raUsed = true;
            }
        break;
        case 6:  //caneta roxa
            if (200*sized < mouseX - r*sized && mouseX + r*sized < 1080*sized && 100*sized < mouseY - r*sized && mouseY < 750*sized - r*sized) {
                corDesenho[0] = 174;
                corDesenho[1] = 0;
                corDesenho[2] = 255;
                xUsed = true;
            }
        break;
        case 7: //caneta azul
            if (200*sized < mouseX - r*sized && mouseX + r*sized < 1080*sized && 100*sized < mouseY - r*sized && mouseY < 750*sized - r*sized) {
                corDesenho[0] = 0;
                corDesenho[1] = 72;
                corDesenho[2] = 255;
                zUsed = true;
            }
        break;
        case 8: //caneta verde
            if (200*sized < mouseX - r*sized && mouseX + r*sized < 1080*sized && 100*sized < mouseY - r*sized && mouseY < 750*sized - r*sized) {
                corDesenho[0] = 57;
                corDesenho[1] = 163;
                corDesenho[2] = 24;
                eUsed = true;
            }
        break;
        case 9: //caneta castanha
            if (200*sized < mouseX - r*sized && mouseX + r*sized < 1080*sized && 100*sized < mouseY - r*sized && mouseY < 750*sized - r*sized) {
                corDesenho[0] = 117;
                corDesenho[1] = 69;
                corDesenho[2] = 42;
                cUsed = true;
            }
        break;
        case 10: //caneta cinzenta
            if (200*sized < mouseX - r*sized && mouseX + r*sized < 1080*sized && 100*sized < mouseY - r*sized && mouseY < 750*sized - r*sized) {
                corDesenho[0] = 184;
                corDesenho[1] = 184;
                corDesenho[2] = 184;
                izUsed = true;
            }
        break;
        case 11: //caneta preta
            if (200*sized < mouseX - r*sized && mouseX + r*sized < 1080*sized && 100*sized < mouseY - r*sized && mouseY < 750*sized - r*sized) {
                corDesenho[0] = 0;
                corDesenho[1] = 0;
                corDesenho[2] = 0;
                pUsed = true;
            }
        break;
        }
    }
}

function mouseClicked() { //ativar cores da caneta   
if (120*sized < mouseX && mouseX < 170*sized && 155*sized < mouseY && mouseY < 205*sized) {
    paint = 1;
  }
    
if (120*sized < mouseX && mouseX < 170*sized && 209.5*sized < mouseY && mouseY < 259.5*sized) {
    paint = 2;
  }
    
if (120*sized < mouseX && mouseX < 170*sized && 264*sized < mouseY && mouseY < 314*sized) {
    paint = 3;
  }

if (120*sized < mouseX && mouseX < 170*sized && 318.5*sized < mouseY && mouseY < 368.5*sized) {
    paint = 4;
  } 
    
if (120*sized < mouseX && mouseX < 170*sized && 373*sized < mouseY && mouseY < 423*sized) {
    paint = 5;
  }

if (120*sized < mouseX && mouseX < 170*sized && 427.5*sized < mouseY && mouseY < 477.7*sized) {
    paint = 6;
  }
  
if (120*sized < mouseX && mouseX < 170*sized && 482*sized < mouseY && mouseY < 532*sized) {
    paint = 7;
  }
    
if (120*sized < mouseX && mouseX < 170*sized && 536.5*sized < mouseY && mouseY < 586.5*sized) {
    paint = 8;
  }

if (120*sized < mouseX && mouseX < 170*sized && 591*sized < mouseY && mouseY < 641*sized) {
    paint = 9;
  }
    
if (120*sized < mouseX && mouseX < 170*sized && 645.5*sized < mouseY && mouseY < 695.5*sized) {
    paint = 10;
  }

if (120*sized < mouseX && mouseX < 170*sized && 700*sized < mouseY && mouseY < 750*sized) {
    paint = 11;
  }  
}

function mousePressed() {
    userStartAudio();
    inDrawingMode = true;
    
    if (200*sized < mouseX - r*sized && mouseX + r*sized < 1080*sized && 100*sized < mouseY - r*sized && mouseY < 750*sized - r*sized) {
        let posicao = {x: mouseX, y: mouseY, R: corDesenho[0], G: corDesenho[1], B: corDesenho[2], d:r};
        desenho.push(posicao);
    }
}

function mouseDragged() {
   if (200*sized < mouseX - r*sized && mouseX + r*sized < 1080*sized && 100*sized < mouseY - r*sized && mouseY < 750*sized - r*sized) {
    let posicao = {x: mouseX, y: mouseY, R: corDesenho[0], G: corDesenho[1], B: corDesenho[2], d: r};
       desenho.push(posicao);
   }
}

function mouseReleased() {
    inDrawingMode = false;
}

function clearAll() { //reset
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
    a = 0;
    z = 0;
    b = 0;
    c = 0;
    iz = 0;
    l = 0;
    p = 0;
    ra = 0;
    x = 0;
    e = 0;
    v = 0;
    aUsed = false;
    zUsed = false;
    bUsed = false;
    cUsed = false;
    izUsed = false;
    lUsed = false;
    pUsed = false;
    raUsed = false;
    xUsed = false;
    eUsed = false;
    vUsed = false;
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
    amarelo1.stop();
    amarelo2.stop();
    amarelo3.stop();
    amarelo4.stop();
    amarelo5.stop();
    azul1.stop();
    azul2.stop();
    azul3.stop();
    azul4.stop();
    branco1.stop();
    branco2.stop();
    branco3.stop();
    branco4.stop();
    castanho1.stop();
    castanho2.stop();
    castanho3.stop();
    castanho4.stop();
    castanho5.stop();
    castanho6.stop();
    cinzento1.stop();
    cinzento2.stop();
    cinzento3.stop();
    cinzento4.stop();
    cinzento5.stop();
    laranja1.stop();
    laranja2.stop();
    laranja3.stop();
    laranja4.stop();
    preto1.stop();
    preto2.stop();
    preto3.stop();
    rosa1.stop();
    rosa2.stop();
    rosa3.stop();
    rosa4.stop();
    rosa5.stop();
    roxo1.stop();
    roxo2.stop();
    roxo3.stop();
    roxo4.stop();
    verde1.stop();
    verde2.stop();
    verde3.stop();
    verde4.stop();
    verde5.stop();
    verde6.stop();
    vermelho1.stop();
    vermelho2.stop();
    vermelho3.stop();
    vermelho4.stop();
    vermelho5.stop();
    vermelho6.stop();
}

function childMode() { //versão infantil
    childraw = 1;
}

function eraseMode() { //borracha
    paint = 1;
}

function keyPressed() { //muda cor de fundo
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

function saveMode() { //gera random para escolha de samples por cor

    if (aUsed) {
       a = Math.floor((Math.random() * 5) + 1);
        console.log(a); 
    }

    if (zUsed) {
       z = Math.floor((Math.random() * 4) + 1);
        console.log(z); 
    }

    if (bUsed) {
       b = Math.floor((Math.random() * 4) + 1);
        console.log(b); 
    }

    if (cUsed) {
       c = Math.floor((Math.random() * 6) + 1);
        console.log(c); 
    }
    
    if (izUsed) {
       iz = Math.floor((Math.random() * 5) + 1);
        console.log(iz); 
    }
    
    if (lUsed) {
       l = Math.floor((Math.random() * 4) + 1);
        console.log(l); 
    }
    
    if (pUsed) {
       p = Math.floor((Math.random() * 3) + 1);
        console.log(p); 
    }
    
    if (raUsed) {
       ra = Math.floor((Math.random() * 5) + 1);
        console.log(ra); 
    }
    
    if (xUsed) {
       x = Math.floor((Math.random() * 4) + 1);
        console.log(x); 
    }
    
    if (eUsed) {
       e = Math.floor((Math.random() * 6) + 1);
        console.log(e); 
    }
    
    if (vUsed) {
       v = Math.floor((Math.random() * 6) + 1);
        console.log(v); 
    }
}


function playSounds() { //toca os audios
    
if(childraw === 1) {
   switch (key) {
    case 'B':
        childwhite.play();
        branco();
    break;
    case 'A':
        childyellow.play();
        branco();
    break;
    case 'L':
        childorange.play();
        branco();
    break;
    case 'V':
        childred.play();
        branco();
    break;
    case 'R':
        childpink.play();
        branco();
    break;
    case 'X':
        childpurple.play();
        branco();
    break;
    case 'Z':
        childblue.play();
        branco();
    break;
    case 'E':
        childgreen.play();
        branco();
    break;
    case 'C':
        childbrown.play();
        branco();
    break;
    case 'I':
        childgrey.play();
        branco();
    break;
    case 'P':
        childblack.play();
        branco();
    break;
    }
} else {
    switch (key) {
        case 'B':
            white.play();
            branco();
        break;
        case 'A':
            yellow.play();
            branco();
        break;
        case 'L':
            orange.play();
            branco();
        break;
        case 'V':
            red.play();
            branco();
        break;
        case 'R':
            pink.play();
            branco();
        break;
        case 'X':
            purple.play();
            branco();
        break;
        case 'Z':
            blue.play();
            branco();
        break;
        case 'E':
            green.play();
            branco();
        break;
        case 'C':
            brown.play();
            branco();
        break;
        case 'I':
            grey.play();
            branco();
        break;
        case 'P':
            black.play();
            branco();
        break;
        }
   }   
}

function branco() {
    if (b === 1) {
        branco1.play();
        branco1.onended(amarelo);
        branco2.stop();
        branco3.stop();
        branco4.stop();
    } 
    if (b === 2) {
        branco1.stop();
        branco2.play();
        branco2.onended(amarelo);
        branco3.stop();
        branco4.stop();
    } 
    if (b === 3) {
        branco1.stop();
        branco2.stop();
        branco3.play();
        branco3.onended(amarelo);
        branco4.stop();
    } 
    if (b === 4) {
        branco1.stop();
        branco2.stop();
        branco3.stop();
        branco4.play();
        branco4.onended(amarelo);
    } 
    if(!b) {
        amarelo();
    }
}

function amarelo() {
    if (a === 1) {
        amarelo1.play();
        amarelo1.onended(laranja);
        amarelo2.stop();
        amarelo3.stop();
        amarelo4.stop();
        amarelo5.stop();
    }  
    if (a === 2) {
        amarelo1.stop();
        amarelo2.play();
        amarelo2.onended(laranja);
        amarelo3.stop();
        amarelo4.stop();
        amarelo5.stop();
    }
    if (a === 3) {
        amarelo1.stop();
        amarelo2.stop();
        amarelo3.play();
        amarelo3.onended(laranja);
        amarelo4.stop();
        amarelo5.stop();
    }  
    if (a === 4) {
        amarelo1.stop();
        amarelo2.stop();
        amarelo3.stop();
        amarelo4.play();
        amarelo4.onended(laranja);
        amarelo5.stop();
    }
    if (a === 5) {
        amarelo1.stop();
        amarelo2.stop();
        amarelo3.stop();
        amarelo4.stop();
        amarelo5.play();
        amarelo5.onended(laranja);
    }
    if(!a) {
        laranja();
    }
}

function laranja() {
    if (l === 1) {
        laranja1.play();
        laranja1.onended(vermelho);
        laranja2.stop();
        laranja3.stop();
        laranja4.stop();
    } 
    if (l === 2) {
        laranja1.stop();
        laranja2.play();
        laranja2.onended(vermelho);
        laranja3.stop();
        laranja4.stop();
    }
    if (l === 3) {
        laranja1.stop();
        laranja2.stop();
        laranja3.play();
        laranja3.onended(vermelho);
        laranja4.stop();
    }
    if (l === 4) {
        laranja1.stop();
        laranja2.stop();
        laranja3.stop();
        laranja4.play();
        laranja4.onended(vermelho);
    }
    if(!l) {
        vermelho();
    }
}

function vermelho() {
    if (v === 1) {
        vermelho1.play();
        vermelho1.onended(rosa);
        vermelho2.stop();
        vermelho3.stop();
        vermelho4.stop();
        vermelho5.stop();
        vermelho6.stop();
    } 
    if (v === 2) {
        vermelho1.stop();
        vermelho2.play();
        vermelho2.onended(rosa);
        vermelho3.stop();
        vermelho4.stop();
        vermelho5.stop();
        vermelho6.stop();
    }
    if (v === 3) {
        vermelho1.stop();
        vermelho2.stop();
        vermelho3.play();
        vermelho3.onended(rosa);
        vermelho4.stop();
        vermelho5.stop();
        vermelho6.stop();
    }
    if (e === 4) {
        vermelho1.stop();
        vermelho2.stop();
        vermelho3.stop();
        vermelho4.play();
        vermelho4.onended(rosa);
        vermelho5.stop();
        vermelho6.stop();
    }
    if (v === 5) {
        vermelho1.stop();
        vermelho2.stop();
        vermelho3.stop();
        vermelho4.stop();
        vermelho5.play();
        vermelho5.onended(rosa);
        vermelho6.stop();
    }
    if (v === 6) {
        vermelho1.stop();
        vermelho2.stop();
        vermelho3.stop();
        vermelho4.stop();
        vermelho5.stop();
        vermelho6.play();
        vermelho6.onended(rosa);
    }
    if(!v) {
        rosa();
    }
}

function rosa() {
    if (ra === 1) {
        rosa1.play();
        rosa1.onended(roxo);
        rosa2.stop();
        rosa3.stop();
        rosa4.stop();
        rosa5.stop();
    } 
    if (ra === 2) {
        rosa1.stop();
        rosa2.play();
        rosa2.onended(roxo);
        rosa3.stop();
        rosa4.stop();
        rosa5.stop();
    }
    if (ra === 3) {
        rosa1.stop();
        rosa2.stop();
        rosa3.play();
        rosa3.onended(roxo);
        rosa4.stop();
        rosa5.stop();
    }
    if (ra === 4) {
        rosa1.stop();
        rosa2.stop();
        rosa3.stop();
        rosa4.play();
        rosa4.onended(roxo);
        rosa5.stop();
    }
    if (ra === 5) {
        rosa1.stop();
        rosa2.stop();
        rosa3.stop();
        rosa4.stop();
        rosa5.play();
        rosa5.onended(roxo);
    }
    if(!ra) {
        roxo();
    }
}

function roxo() {
    if (x === 1) {
        roxo1.play();
        roxo2.stop();
        roxo3.stop();
        roxo4.stop();
    } 
    if (x === 2) {
        roxo1.stop();
        roxo2.play();
        roxo3.stop();
        roxo4.stop();
    }
    if (x === 3) {
        roxo1.stop();
        roxo2.stop();
        roxo3.play();
        roxo4.stop();
    }
    if (x === 4) {
        roxo1.stop();
        roxo2.stop();
        roxo3.stop();
        roxo4.play();
    }
    if(!x) {
        azul();
    }
}

function azul() {
    if (z === 1) {
        azul1.play();
        azul1.onended(verde);
        azul2.stop();
        azul3.stop();
        azul4.stop();
    } 
    if (z === 2) {
        azul1.stop();
        azul2.play();
        azul2.onended(verde);
        azul3.stop();
        azul4.stop();
    }
    if (z === 3) {
        azul1.stop();
        azul2.stop();
        azul3.play();
        azul3.onended(verde);
        azul4.stop();
    }
    if (z === 4) {
        azul1.stop();
        azul2.stop();
        azul3.stop();
        azul4.play();
        azul4.onended(verde);
    }
    if(!z) {
        verde();
    }    
}

function verde() {
    if (e === 1) {
        verde1.play();
        verde1.onended(castanho);
        verde2.stop();
        verde3.stop();
        verde4.stop();
        verde5.stop();
        verde6.stop();
    } 
    if (e === 2) {
        verde1.stop();
        verde2.play();
        verde2.onended(castanho);
        verde3.stop();
        verde4.stop();
        verde5.stop();
        verde6.stop();
    }
    if (e === 3) {
        verde1.stop();
        verde2.stop();
        verde3.play();
        verde3.onended(castanho);
        verde4.stop();
        verde5.stop();
        verde6.stop();
    }
    if (e === 4) {
        verde1.stop();
        verde2.stop();
        verde3.stop();
        verde4.play();
        verde4.onended(castanho);
        verde5.stop();
        verde6.stop();
    }
    if (e === 5) {
        verde1.stop();
        verde2.stop();
        verde3.stop();
        verde4.stop();
        verde5.play();
        verde5.onended(castanho);
        verde6.stop();
    }
    if (e === 6) {
        verde1.stop();
        verde2.stop();
        verde3.stop();
        verde4.stop();
        verde5.stop();
        verde6.play();
        verde6.onended(castanho);
    }
    if(!e) {
        castanho();
    } 
}

function castanho() {
    if (c === 1) {
        castanho1.play();
        castanho1.onended(cinzento);
        castanho2.stop();
        castanho3.stop();
        castanho4.stop();
        castanho5.stop();
        castanho6.stop();
    } 
    if (c === 2) {
        castanho1.stop();
        castanho2.play();
        castanho2.onended(cinzento);
        castanho3.stop();
        castanho4.stop();
        castanho5.stop();
        castanho6.stop();
    }
    if (c === 3) {
        castanho1.stop();
        castanho2.stop();
        castanho3.play();
        castanho3.onended(cinzento);
        castanho4.stop();
        castanho5.stop();
        castanho6.stop();
    }
    if (c === 4) {
        castanho1.stop();
        castanho2.stop();
        castanho3.stop();
        castanho4.play();
        castanho4.onended(cinzento);
        castanho5.stop();
        castanho6.stop();
    }
    if (c === 5) {
        castanho1.stop();
        castanho2.stop();
        castanho3.stop();
        castanho4.stop();
        castanho5.play();
        castanho5.onended(cinzento);
        castanho6.stop();
    }
    if (c === 6) {
        castanho1.stop();
        castanho2.stop();
        castanho3.stop();
        castanho4.stop();
        castanho5.stop();
        castanho6.play();
        castanho6.onended(cinzento);
    }
    if(!c) {
        cinzento();
    }   
}

function cinzento() {
    if (iz === 1) {
        cinzento1.play();
        cinzento1.onended(preto);
        cinzento2.stop();
        cinzento3.stop();
        cinzento4.stop();
        cinzento5.stop();
    } 
    if (iz === 2) {
        cinzento1.stop();
        cinzento2.play();
        cinzento2.onended(preto);
        cinzento3.stop();
        cinzento4.stop();
        cinzento5.stop();
    }
    if (iz === 3) {
        cinzento1.stop();
        cinzento2.stop();
        cinzento3.play();
        cinzento3.onended(preto);
        cinzento4.stop();
        cinzento5.stop();
    }
    if (iz === 4) {
        cinzento1.stop();
        cinzento2.stop();
        cinzento3.stop();
        cinzento4.play();
        cinzento4.onended(preto);
        cinzento5.stop();
    }
    if (iz === 5) {
        cinzento1.stop();
        cinzento2.stop();
        cinzento3.stop();
        cinzento4.stop();
        cinzento5.play();
        cinzento5.onended(preto);
    }
    if(!iz) {
        preto();
    }  
}

function preto() {
    if (p === 1) {
        preto1.play();
        preto2.stop();
        preto3.stop();
    } 
    if (p === 2) {
        preto1.stop();
        preto2.play();
        preto3.stop();
    }
    if (p === 3) {
        preto1.stop();
        preto2.stop();
        preto3.play();
    }
}