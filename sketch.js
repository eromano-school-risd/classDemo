let img

let size; 

let asciiChar = "$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\|()1{}[]?-_+~<>i!lI;:,^`'. "

function preload(){
  img = loadImage("images/02.jpg")
}


function setup() {
  createCanvas(400, 400);
  
  img.resize(80,0)
  
  size = width / img.width;
  
  // print(size)
  
  
}

function draw() {
  background(220);
  
  
  
  
  image(img,0,0)
  
  for (let i = 0; i< img.width; i++ ){
    for (j = 0; j< img.height; j++){
      let pixelVal = img.get(i,j);
      // print(pixelVal)
      // noLoop();
      let c = brightness(pixelVal);
      // print(c);
      // noLoop();
    
      let tIndex = floor(map(c ,0, 100, 0, asciiChar.length))
      // print(tIndex);
      // noLoop();
      
      let x = i *size + size/2;
      let y = j * size + size/2;
    
      t = asciiChar.charAt(tIndex)
      
      
      textSize(size)
      
      
      textAlign(CENTER, CENTER);
      text(t, x , y);
      
      
    }
  }
  
  
  
  
}