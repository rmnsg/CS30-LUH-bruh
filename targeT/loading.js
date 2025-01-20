
function preload(){
    backimage = loadImage("assets/background.png")
    backimagereport = loadImage("assets/backgroundReport.png")
    barrelimage = loadImage("assets/barrel.png")
    baseimage = loadImage("assets/base.png")
    cannonballimage = loadImage("assets/cannonball.png")
    targetimage = loadImage("assets/target.png")
  
    for (let i = 0; i < 6; i++){
      explosionimages[i] = loadImage("assets/ex"+i+".png")
    }
  
    for (let i = 0; i < 21; i++){
      shotsremainingimages[i] = loadImage("assets/shots"+i+".png")
    }
  
    for (let i = 0; i < 21; i++){
      targethitimages[i] = loadImage("assets/target"+i+".png")
    }
  
    
  }