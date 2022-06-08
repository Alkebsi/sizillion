//////////////////////The Top Loading Line//////////////////////
let topLine =
document.getElementsByClassName("topLine")[0];

//this is the start function for the site(e.i. Activates when the page load)
function Start()
{
	topLine.style.display = "none";
}

///////////////////Handling the Top Nav Bar///////////////////
//the dashes
let dashes = 
document.getElementsByClassName("dashes")[0];
let dash1 =
document.getElementById("dash1");
let dash2 =
document.getElementById("dash2");
let dash3 =
document.getElementById("dash3");

//the right panel
let rpOver =
document.getElementById("rpOver");
let rp =
document.getElementById("rPanel");

//the toggle boolean
opened = false;

//the functions that will open the panel and animate the dashes
function RightPanel()
{
	if(opened == false)
		{
			//the dashes animation
			dashes.style.transform += "rotate(360deg)";
			dash1.style.transform = "translate(-11px, 9px) rotate(90deg)";
			dash1.style.background = "var(--lp2)";
			dash2.style.transform = "translate(0, -7px) rotate(210deg)";
			dash3.style.transform = "translate(0, -3px) rotate(-210deg)";
			
			rotCall = 1;
			
			//the panels themselves 
			rpOver.style.right = "0";
			rp.style.right = "0";
			
			//the toggle boolean
			opened = true;
		}
		else
		{
			dashes.style.transform += "rotate(-360deg)";
			dash1.style.transform = "translate(0, 0) rotate(0)";
			dash1.style.background = "linear-gradient(45deg, var(--aq2) 30%, var(--lp2) 90%)";
			dash2.style.transform = "translate(0, 0) rotate(0)";
			dash3.style.transform = "translate(0, 0) rotate(0)";
			
			//to rotate the circles in the right panel
			rotCall = 0;
			
			//the panels themselves 
			rpOver.style.right = "-100vw";
			rp.style.right = "-100vw";
			
			//the toggle boolean
			opened = false;
		}
}

///////////Animating the Right Panel Background///////////
/*
NOTE: This may look unfriendly for some, but it also
looks really weird for me, too since I made it once I
was still learning(long ago). The effect still looks good,
but I recommend you to modify what you know...
*/
let cirB =
document.getElementById("circlesBack");
let bigC = 
document.getElementById("bigC");
let c1 =
document.getElementById("sc1");
let c2 =
document.getElementById("sc2");
let c3 =
document.getElementById("sc3");
let c4 =
document.getElementById("sc4");

//big circle
let bigCx = 125;
let bigCy = 250;
let x;
let y;
let rot = 200;
let rotCall = 0;
let bigCScale = 1;
let bcsCall = 0;

//Lim = limitation
//the small circles
let scx = 0;
let scy = 0;
let scxLim = 30;
let scyLim = 30;
let scx2 = 0;
let scy2 = 0;
let scxLim2 = 30;
let scyLim2 = 30;
let lastCS = 0.4;


//sets the interval for the function(e.i. sets the timer)
let circlesTimer1 = setInterval(UpdateCircles, 1);
let circlesTimer2 = setInterval(UpdateCircles2, 2000);
function UpdateCircles()
{
	//the biggest 
	if(bigCx > x)
		{
			bigCx -= 0.02;
		}
		else
		{
			bigCx += 0.02;
		}
		if(bigCy > y)
		{
			bigCy -= 0.02;
		}
		else
		{
			bigCy += 0.02;
		}
		
		//small circles
		if(scx < scxLim)
			{
				scx += 0.02;
			}
			else
			{
				scx -= 0.02;
			}
		if(scy < scyLim)
			{
				scy += 0.02;
			}
			else
			{
				scy -= 0.02;
			}
			if(scx2 < scxLim2)
			{
				scx2 += 0.02;
			}
			else
			{
				scx2 -= 0.02;
			}
		if(scy2 < scyLim2)
			{
				scy2 += 0.02;
			}
			else
			{
				scy2 -= 0.02;
			}
			
		
		//calling rotation
		if(rotCall == 1 && rot > 0)
			{
				rot -= 2;
			}
		else if(rotCall == 0 && rot < 200)
			{
				rot += 2;
			}
			
			//calling the scale
			if(bcsCall == 0 && bigCScale > 0.9)
			{
				bigCScale -= 0.01;
			}
		else if(bcsCall == 1 && bigCScale < 1.3)
			{
				bigCScale += 0.01;
			}
			
	cirB.setAttribute("transform", "translate(" + bigCx + ", " + bigCy + ") rotate(" + rot + ")");
	bigC.setAttribute("transform", "scale(" + bigCScale + ")");
	c1.setAttribute("transform", "translate(" + scx + ", " + scy + ")");
	c2.setAttribute("transform", "translate(" + scx2 + ", " + scy2 + ")");
	c3.setAttribute("transform", "translate(" + scx + ", " + scy2 + ") scale(" + bigCScale + ")");
	c4.setAttribute("transform", "translate(" + scx2 + ", " + scy + ") scale(" + bigCScale + ")");
}
function UpdateCircles2()
{
	x = Math.floor(Math.random() * (140 - 110)) + 110;
	y = Math.floor(Math.random() * (270 - 220)) + 220;
	scxLim = Math.floor(Math.random() * (20 - -20) + -20);
	scyLim = Math.floor(Math.random() * (30 - -30) + -30);
	scxLim2 = Math.floor(Math.random() * (20 - -20) + -20);
	scyLim2 = Math.floor(Math.random() * (30 - -30) + -30);
}

//the interactivity of the circles
function CMoveAnim(){bcsCall = 1;}
function CAnimEnd(){bcsCall = 0;}