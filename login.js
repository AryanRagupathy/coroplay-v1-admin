class Login{
    constructor(){
       this.input = createInput("APARTMENT - FLAT NO");
      
       this.button = createButton("enter")
     
       this.title = createElement('h2');
       this.sel = createSelect();
     
       

    }
    hide() {
        this.greeting.hide();
        this.enter.hide();
        this.input.hide();
        this.title.hide();
    }
  mySelectEvent() {
        let item = sel.value();
        background(200);
        text('It is a ' + item + '!', 50, 50);
      }
   
    display() {
     
        this.title.html("Login Type");
        this.title.position(displayWidth/2+360,400);
        this.title.style('font-size', '25px');
        this.title.style('color', 'black');

        this.input.position(displayWidth/2+300,520);
        this.input.style('width', '250px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');

        this.button.position(displayWidth/2+300,560);
        this.button.style('width', '250px');
        this.button.style('height', '30px');
        this.button.style('background', 'chartreuse');

        this.sel.position(displayWidth/2+375,470);
        this.sel.style('width', '100px');
        this.sel.style('height','1000px');
        this.sel.option('admin');
        this.sel.option('user');
       
        
        console.log("hi")



  
        
            this.button.mousePressed(()=>{
              console.log("hi")
              this.input.hide();
              this.button.hide();
              this.sel.hide()
              this.title.hide()
              console.log("hi")
              user.name = this.input.value();
              user.type = this.sel.value()
          
              window.open("https://aryanragupathy.github.io/coroplay-v1-html/user.html")
           
             
              user.update();
              
            });

        
        
          }
        
    }
    
