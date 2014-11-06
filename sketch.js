function setup() 
{
   createCanvas(800,800);
}

function draw() 
{
	background(255);
	noStroke();
	fill(249,42,8);
    ellipse(400,400,150,150);

//earth
	var duration = 3000;
	var timing = (new Date()%duration)/duration;

   fill(27,105,109);
   ellipse(400 + Math.cos(timing*2*PI)*200,           // x좌표
        400 + Math.sin(timing*2*PI)*200, // y좌표
        100,                                  // width
        100);            

//moon
	var duration = 1000;
	var timing2 = (new Date()%duration)/duration;

   fill(255,206,0);
   ellipse(400 + Math.cos(timing*2*PI)*200+ Math.cos(timing2*2*PI)*70,           // x좌표
        400 + Math.sin(timing*2*PI)*200+ Math.sin(timing2*2*PI)*70, // y좌표
        30,                                  // width
        30);   
                                      // height

    var duration = 3000;
	var timing = (new Date()%duration)/duration;

   fill(190,240,8);
   ellipse(400 + Math.cos(timing*2*PI)*300+ Math.cos(timing*2*PI)*70,           // x좌표
        400 + Math.sin(timing*2*PI)*300+ Math.cos(timing*2*PI)*70, // y좌표
        60,                                  // width
        60);   

	var bg;
	var y = 0;

	function setup() {
	  // The background image must be the same size as the parameters
	  // into the size() method. In this program, the size of the image
	  // is 710x400 pixels.
	  bg = loadImage("galaxy.jpg");
	  createCanvas(720, 400);
	}

	function draw() {
	  background(bg);
	  
	  stroke(226, 204, 0);
	  line(0, y, width, y);
	  
	  y++;
	  if (y > height) {
	    y = 0; 
	  }                         
}


