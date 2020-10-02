class Admin{
    constructor(){
       
       //this.title = createElement('h2');
       
    //   this.password = createInput("Apartment Password")

        //-------------------------------------------------------------------------------------------------

        this.peoplev1 = createElement('h2');
        this.numberv1 = createInput("6");
       this.slotv1 = createInput("Basketball") 
       this.timingsv1 = createElement('h2');
       this.slot1v1 = createInput("10:30-11:30")
       this.slot1v2 = createInput("11:30-12:30")
       this.slot1v3 = createInput("4:30-5:30")
       this.slot1v4 = createInput("5:30-6:30")
       this.slot1v5 = createInput("6:30-7:30")

        //------------------------------------------------------------------------------------------------
       
        this.peoplev2 = createElement('h2');
        this.numberv2 = createInput("6");
       this.slotv2 = createInput("Cricket")
       this.timingsv2 = createElement('h2'); 
       this.slot2v1 = createInput("10:30-11:30")
       this.slot2v2 = createInput("11:30-12:30")
       this.slot2v3 = createInput("4:30-5:30")
       this.slot2v4 = createInput("5:30-6:30")
       this.slot2v5 = createInput("6:30-7:30")

        //------------------------------------------------------------------------------------------------
       
        this.peoplev3= createElement('h2');
        this.numberv3= createInput("4");
       this.slotv3= createInput("Tennis")
       this.timingsv3= createElement('h2'); 
       this.slot3v1 = createInput("10:30-11:30")
       this.slot3v2 = createInput("11:30-12:30")
       this.slot3v3 = createInput("4:30-5:303")
       this.slot3v4 = createInput("5:30-6:30")
       this.slot3v5 = createInput("6:30-7:30")

       //------------------------------------------------------------------------------------------------
       
       this.peoplev4= createElement('h2');
       this.numberv4= createInput("4");
      this.slotv4= createInput("Badminton")
      this.timingsv4= createElement('h2'); 
      this.slot4v1 = createInput("10:30-11:30")
      this.slot4v2 = createInput("11:30-12:30")
      this.slot4v3 = createInput("4:30-5:30")
      this.slot4v4 = createInput("5:30-6:30")
      this.slot4v5 = createInput("6:30-7:30")
       
      //------------------------------------------------------------------------------------------------
       
      this.peoplev5= createElement('h2');
      this.numberv5= createInput("4");
     this.slotv5= createInput("Skating")
     this.timingsv5= createElement('h2'); 
     this.slot5v1 = createInput("10:30-11:30")
     this.slot5v2 = createInput("11:30-12:30")
     this.slot5v3 = createInput("4:30-5:30")
     this.slot5v4 = createInput("5:30-6:30")
     this.slot5v5 = createInput("6:30-7:30")

     //------------------------------------------------------------------------------------------------
       
     this.peoplev6= createElement('h2');
     this.numberv6= createInput("3");
    this.slotv6= createInput("Robotics hobby club")
    this.timingsv6= createElement('h2'); 
    this.slot6v1 = createInput("10:30-11:30")
    this.slot6v2 = createInput("11:30-12:30")
    this.slot6v3 = createInput("4:30-5:30")
    this.slot6v4 = createInput("5:30-6:30")
    this.slot6v5 = createInput("6:30-7:30")

    }
    
    display() {
      /*  this.title.html("Admin Page");
        this.title.position(displayWidth/2,150);
        this.title.style('font-size', '25px');
        this.title.style('color', 'goldenrod');

        this.password.position(300,370);
        this.password.style('width', '270px');
        this.password.style('height', '20px');
        this.password.style('background', 'lavender');
*/
//-----------------------------------------------------------------------------------------------------------

        this.peoplev1.html("No of people per slot :");
        this.peoplev1.position(300,575);
        this.peoplev1.style('font-size', '25px');
        this.peoplev1.style('color', 'goldenrod');


        this.numberv1.position(550,600);
        this.numberv1.style('width', '85px');
        this.numberv1.style('height', '20px');
        this.numberv1.style('background', 'lavender');

        this.timingsv1.html("Timings :");
        this.timingsv1.position(300,525);
        this.timingsv1.style('font-size', '25px');
        this.timingsv1.style('color', 'goldenrod');

        this.slotv1.position(300,500);
        this.slotv1.style('width', '85px');
        this.slotv1.style('height', '20px');
        this.slotv1.style('background', 'lavender');

        this.slot1v1.position(400,750);
        this.slot1v1.style('width', '70px');
        this.slot1v1.style('height', '20px');
        this.slot1v1.style('background', 'lavender');

        this.slot1v2.position(470,750);
        this.slot1v2.style('width', '70px');
        this.slot1v2.style('height', '20px');
        this.slot1v2.style('background', 'lavender');

        this.slot1v3.position(540,750);
        this.slot1v3.style('width', '70px');
        this.slot1v3.style('height', '20px');
        this.slot1v3.style('background', 'lavender');

        this.slot1v4.position(610,750);
        this.slot1v4.style('width', '70px');
        this.slot1v4.style('height', '20px');
        this.slot1v4.style('background', 'lavender');

        this.slot1v5.position(680,750);
        this.slot1v5.style('width', '70px');
        this.slot1v5.style('height', '20px');
        this.slot1v5.style('background', 'lavender');

        //-------------------------------------------------------------------------------------------------

        this.peoplev2.html("No of people per slot :");
        this.peoplev2.position(300,775);
        this.peoplev2.style('font-size', '25px');
        this.peoplev2.style('color', 'goldenrod');


        this.numberv2.position(550,800);
        this.numberv2.style('width', '85px');
        this.numberv2.style('height', '20px');
        this.numberv2.style('background', 'lavender');

        this.timingsv2.html("Timings :");
        this.timingsv2.position(300,725);
        this.timingsv2.style('font-size', '25px');
        this.timingsv2.style('color', 'goldenrod');

        this.slotv2.position(300,700);
        this.slotv2.style('width', '85px');
        this.slotv2.style('height', '20px');
        this.slotv2.style('background', 'lavender');
        this.slotv1.position(300,500);
        this.slotv1.style('width', '85px');
        this.slotv1.style('height', '20px');
        this.slotv1.style('background', 'lavender');

        this.slot2v1.position(400,550);
        this.slot2v1.style('width', '70px');
        this.slot2v1.style('height', '20px');
        this.slot2v1.style('background', 'lavender');

        this.slot2v2.position(470,550);
        this.slot2v2.style('width', '70px');
        this.slot2v2.style('height', '20px');
        this.slot2v2.style('background', 'lavender');

        this.slot2v3.position(540,550);
        this.slot2v3.style('width', '70px');
        this.slot2v3.style('height', '20px');
        this.slot2v3.style('background', 'lavender');

        this.slot2v4.position(610,550);
        this.slot2v4.style('width', '70px');
        this.slot2v4.style('height', '20px');
        this.slot2v4.style('background', 'lavender');

        this.slot2v5.position(680,550);
        this.slot2v5.style('width', '70px');
        this.slot2v5.style('height', '20px');
        this.slot2v5.style('background', 'lavender')


        //-------------------------------------------------------------------------------------------------

        this.peoplev3.html("No of people per slot :");
        this.peoplev3.position(300,975);
        this.peoplev3.style('font-size', '25px');
        this.peoplev3.style('color', 'goldenrod');


        this.numberv3.position(550,1000);
        this.numberv3.style('width', '85px');
        this.numberv3.style('height', '20px');
        this.numberv3.style('background', 'lavender');

        this.timingsv3.html("Timings :");
        this.timingsv3.position(300,925);
        this.timingsv3.style('font-size', '25px');
        this.timingsv3.style('color', 'goldenrod');

        this.slotv3.position(300,900);
        this.slotv3.style('width', '85px');
        this.slotv3.style('height', '20px');
        this.slotv3.style('background', 'lavender');

        this.slot3v1.position(400,950);
        this.slot3v1.style('width', '70px');
        this.slot3v1.style('height', '20px');
        this.slot3v1.style('background', 'lavender');

        this.slot3v2.position(470,950);
        this.slot3v2.style('width', '70px');
        this.slot3v2.style('height', '20px');
        this.slot3v2.style('background', 'lavender');

        this.slot3v3.position(540,950);
        this.slot3v3.style('width', '70px');
        this.slot3v3.style('height', '20px');
        this.slot3v3.style('background', 'lavender');

        this.slot3v4.position(610,950);
        this.slot3v4.style('width', '70px');
        this.slot3v4.style('height', '20px');
        this.slot3v4.style('background', 'lavender');

        this.slot3v5.position(680,950);
        this.slot3v5.style('width', '70px');
        this.slot3v5.style('height', '20px');
        this.slot3v5.style('background', 'lavender');

        //-------------------------------------------------------------------------------------------------

        this.peoplev4.html("No of people per slot :");
        this.peoplev4.position(1000,575);
        this.peoplev4.style('font-size', '25px');
        this.peoplev4.style('color', 'goldenrod');


        this.numberv4.position(1250,600);
        this.numberv4.style('width', '85px');
        this.numberv4.style('height', '20px');
        this.numberv4.style('background', 'lavender');

        this.timingsv4.html("Timings :");
        this.timingsv4.position(1000,525);
        this.timingsv4.style('font-size', '25px');
        this.timingsv4.style('color', 'goldenrod');

        this.slotv4.position(1000,500);
        this.slotv4.style('width', '85px');
        this.slotv4.style('height', '20px');
        this.slotv4.style('background', 'lavender');

        this.slot4v1.position(1100,550);
        this.slot4v1.style('width', '70px');
        this.slot4v1.style('height', '20px');
        this.slot4v1.style('background', 'lavender');

        this.slot4v2.position(1170,550);
        this.slot4v2.style('width', '70px');
        this.slot4v2.style('height', '20px');
        this.slot4v2.style('background', 'lavender');

        this.slot4v3.position(1240,550);
        this.slot4v3.style('width', '70px');
        this.slot4v3.style('height', '20px');
        this.slot4v3.style('background', 'lavender');

        this.slot4v4.position(1310,550);
        this.slot4v4.style('width', '70px');
        this.slot4v4.style('height', '20px');
        this.slot4v4.style('background', 'lavender');

        this.slot4v5.position(1380,550);
        this.slot4v5.style('width', '70px');
        this.slot4v5.style('height', '20px');
        this.slot4v5.style('background', 'lavender');

        //-------------------------------------------------------------------------------------------------

        this.peoplev5.html("No of people per slot :");
        this.peoplev5.position(1000,775);
        this.peoplev5.style('font-size', '25px');
        this.peoplev5.style('color', 'goldenrod');


        this.numberv5.position(1250,800);
        this.numberv5.style('width', '85px');
        this.numberv5.style('height', '20px');
        this.numberv5.style('background', 'lavender');

        this.timingsv5.html("Timings :");
        this.timingsv5.position(1000,725);
        this.timingsv5.style('font-size', '25px');
        this.timingsv5.style('color', 'goldenrod');

        this.slotv5.position(1000,700);
        this.slotv5.style('width', '85px');
        this.slotv5.style('height', '20px');
        this.slotv5.style('background', 'lavender');

        this.slot5v1.position(1100,750);
        this.slot5v1.style('width', '70px');
        this.slot5v1.style('height', '20px');
        this.slot5v1.style('background', 'lavender');

        this.slot5v2.position(1170,750);
        this.slot5v2.style('width', '70px');
        this.slot5v2.style('height', '20px');
        this.slot5v2.style('background', 'lavender');

        this.slot5v3.position(1240,750);
        this.slot5v3.style('width', '70px');
        this.slot5v3.style('height', '20px');
        this.slot5v3.style('background', 'lavender');

        this.slot5v4.position(1310,750);
        this.slot5v4.style('width', '70px');
        this.slot5v4.style('height', '20px');
        this.slot5v4.style('background', 'lavender');

        this.slot5v5.position(1380,750);
        this.slot5v5.style('width', '70px');
        this.slot5v5.style('height', '20px');
        this.slot5v5.style('background', 'lavender');

        //-------------------------------------------------------------------------------------------------

        this.peoplev6.html("No of people per slot :");
        this.peoplev6.position(1000,975);
        this.peoplev6.style('font-size', '25px');
        this.peoplev6.style('color', 'goldenrod');


        this.numberv6.position(1250,1000);
        this.numberv6.style('width', '85px');
        this.numberv6.style('height', '20px');
        this.numberv6.style('background', 'lavender');

        this.timingsv6.html("Timings :");
        this.timingsv6.position(1000,925);
        this.timingsv6.style('font-size', '25px');
        this.timingsv6.style('color', 'goldenrod');

        this.slotv6.position(1000,900);
        this.slotv6.style('width', '85px');
        this.slotv6.style('height', '20px');
        this.slotv6.style('background', 'lavender');

        this.slot6v1.position(1100,950);
        this.slot6v1.style('width', '70px');
        this.slot6v1.style('height', '20px');
        this.slot6v1.style('background', 'lavender');

        this.slot6v2.position(1170,950);
        this.slot6v2.style('width', '70px');
        this.slot6v2.style('height', '20px');
        this.slot6v2.style('background', 'lavender');

        this.slot6v3.position(1240,950);
        this.slot6v3.style('width', '70px');
        this.slot6v3.style('height', '20px');
        this.slot6v3.style('background', 'lavender');

        this.slot6v4.position(1310,950);
        this.slot6v4.style('width', '70px');
        this.slot6v4.style('height', '20px');
        this.slot6v4.style('background', 'lavender');

        this.slot6v5.position(1380,950);
        this.slot6v5.style('width', '70px');
        this.slot6v5.style('height', '20px');
        this.slot6v5.style('background', 'lavender');

        //-------------------------------------------------------------------------------------------------



    }
    
}