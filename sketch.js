var loginImg,login
var adminImg,admin
var user
var gameState = 0;
function preload(){
    loginImg = loadImage("loginbg.jpg")
    adminImg = loadImage("admin.png")
  }
function setup() {
    createCanvas(displayWidth, displayHeight);
  
    database = firebase.database();
    user = new User();
    login = new Login();
    //admin = new Admin();
   
    
  }
  
  function draw() {
   
    background(loginImg);
  // admin.display();
   login.display();
   login.mySelectEvent()
    
  }
  