/*
This file contains all the main things that control
the real project. all this will be shown effectively
on this link...
https://www.github.io/Mrkebsi/sizillion/src/
*/


///////////////////////////VARIABLES/////////////////////////////


//calling the top loading line
let topLine =
document.getElementsByClassName("topLine")[0];

//iframe
let frame = 
document.getElementById("theFrame");

//the frame container
let frameContainer = 
document.getElementsByClassName("frameContainer")[0];

//text bars for the iframe 
let widthNum =
document.getElementById("width");
let heightNum =
document.getElementById("height");

//text bars for the container itself
let cWidthNum =
document.getElementById("cWidth");
let cHeightNum =
document.getElementById("cHeight");

//sliders
let widthSlid =
document.getElementById("widthSlider");
let heightSlid =
document.getElementById("heightSlider");

//the panels
let firstP =
document.getElementById("firstPanel");
let devicesP =
document.getElementById("devicesPanel");
let convertP =
document.getElementById("converterPanel");
let advancedP =
document.getElementById("advancedInfoPanel");

//the first URL for the page needed to test
let url =
document.getElementById("URL");

//the others panel
let othersP =
document.getElementById("othersPanel");

//the view type variable (e.g. Phone, Tablet, Desktop, ...etc)
let view = 
document.getElementById("viewType");
//the interval that updates the function "ViewType()" evere one millisecond
let updateViewFun = setInterval(ViewType, 1);

//the text inputs in the converter
let inches = 
document.getElementById("inches");
let pixels =
document.getElementById("pixels");
let cMeters =
document.getElementById("cm");


//////////////////////////FUNCTIONS/////////////////////////////


// Start function
function Start()
{
	//for the top line
	topLine.style.display = "none";
	
	//the first panel force pop-up
	firstP.style.transform = "translate(0,0)";
	
	//connecting the width & height of the iframe to its container
	frame.width = 100 + "%";
	frame.height = 100 + "%";
	
	//calling the advanced Information function
	AInfo();
}

// Setting Widths
function SetWidth()
{
	frame.width = widthSlid.value - 8;
	frameContainer.style.width = widthSlid.value;
	widthNum.value = widthSlid.value;
	cWidthNum.value = widthSlid.value;
}
function SetNumWidth()
{
	frame.width = widthNum.value;
}
function SetNumCWidth()
{
	frameContainer.style.width = Number(cWidthNum.value) + 8;
}

// Setting Height
function SetHeight()
{
	frame.height = heightSlid.value - 8;
	frameContainer.style.height = heightSlid.value;
	heightNum.value = heightSlid.value;
	cHeightNum.value = heightSlid.value;
}
function SetNumHeight()
{
	frame.height = heightNum.value;
}
function SetNumCHeight()
{
	frameContainer.style.height = Number(cHeightNum.value) + 8;
}

//managing to open the panels
function PanelsOpeningMgr(x)
{
	switch(x)
	{
		//for the first panel (The Page URL and Info)
		case 1:
		firstP.style.transform = "translate(0,0)";
		break;
		
		//for the devices panel
		case 2:
		devicesP.style.transform = "translate(0,0)";
		break;
		
		//for the advanced options panel
		case 3:
		advancedP.style.transform = "translate(0,0)";
		break;
		
		//for the converter panel
		case 4:
		convertP.style.transform = "translate(0,0)";
		break;
		
		//if none of them was excuted
		default:
		// DO NOTHING!, but
		PanelsClosingMgr();
		break;
	}
	//closing the "others" panel
	ButtonsPanelMgr();
}

//managing to close the panels
function PanelsClosingMgr()
{
	firstP.style.transform = "translate(-100%,0)";
	devicesP.style.transform = "translate(-100%,0)";
	advancedP.style.transform = "translate(-100%,0)";
	convertP.style.transform = "translate(-100%,0)";
}

//the link to the page that you test
function PageLink()
{
	location.href = frame.src;
}

//the URL manager
function PageLinkMgr()
{
	frame.src = url.value;
	PanelsClosingMgr();
}

//managing the on Enter click
let doneBool = true;
function OnEnter(x, event)
{
	let urlEnter = event.key;
	if (x == 1)
	{
		if (doneBool)
		{
			if (urlEnter == "Enter")
			{
				PageLinkMgr();
			}
		}
	}
}

//the other buttin manager
let opBool = true;
function ButtonsPanelMgr()
{
	if (opBool)
	{
		othersP.style.left = "0";
		opBool = false;
	}
	else
	{
		othersP.style.left = "-100%";
		opBool = true;
	}
}

//the viewport type (e.g. Phone, Tablet, Desktop, ...etc)
function ViewType()
{
	if(frame.width <= 170)
		{
			viewType.innerHTML = "Too Small Screen";
		}
	else if(frame.width > 169 && frame.width < 241)
		{
			viewType.innerHTML = "Smart Watches View";
		}
	else if(frame.width > 240 && frame.width < 429)
		{
			viewType.innerHTML = "Smart Mobiles View";
		}
	else if(frame.width > 428 && frame.width < 1281)
		{
			viewType.innerHTML = "Tablets View";
		}
	else if(frame.width > 1280 && frame.width < 1537)
		{
			viewType.innerHTML = "Laptops View";
		}
	else if(frame.width > 1536)
		{
			viewType.innerHTML = "Monitors View";
		}
	else
		{
			viewType.innerHTML = "My Device Width";
			//"There is some thing wrong with the values you entered";
		}
}

//the function that change the widthxheight according to the device
function ChangeDevice(c)
{
	PanelsClosingMgr();
	location.href = "#top";
	
	let wi;
	let hi;
	
	switch(c)
	{
		//watches
		case 1:
		wi = 224;
		hi = 184;
		break;
		
		case 2:
		wi = 197;
		hi = 162;
		break;
		
		case 3:
		wi = 240;
		hi = 240;
		break;
		
		case 4:
		wi = 227;
		hi = 227;
		break;
		
		case 5:
		wi = 267;
		hi = 267;
		break;
		
		case 6:
		wi = 213;
		hi = 213;
		break;
		
		//phones or mobiles
		case 7:
		wi = 384;
		hi = 854;
		break;
		
		case 8:
		wi = 428;
		hi = 926;
		break;
		
		case 9:
		wi = 412;
		hi = 883;
		break;
		
		case 10:
		wi = 412;
		hi = 915;
		break;
		
		case 11:
		wi = 393;
		hi = 851;
		break;
		
		case 12:
		wi = 393;
		hi = 873;
		break;
		
		case 13:
		wi = 360;
		hi = 770;
		break;
		
		case 14:
		wi = 412;
		hi = 906;
		break;
		
		case 15:
		wi = 375;
		hi = 812;
		break;
		
		case 16:
		wi = 392;
		hi = 800;
		break;
		
		//tablets
		case 17:
		wi = 1194;
		hi = 834;
		break;
		
		case 18:
		wi = 1280;
		hi = 900;
		break;
		
		case 19:
		wi = 1024;
		hi = 768;
		break;
		
		case 20:
		wi = 1104;
		hi = 884;
		break;
		
		case 21:
		wi = 1112;
		hi = 834;
		break;
		
		//laptops
		case 22:
		wi = 921;
		hi = 518;
		break;
		
		case 23:
		wi = 979;
		hi = 643;
		break;
		
		case 24:
		wi = 1084;
		hi = 681;
		break;
		
		case 25:
		wi = 1257;
		hi = 787;
		break;
		
		case 26:
		wi = 1344;
		hi = 758;
		break;
		
		case 27:
		wi = 1382;
		hi = 864;
		break;
	}
	
	//setting the data to the frame, text inputs, and sliders
	frameContainer.style.height = hi + 8;
	frame.height = hi;
	frameContainer.style.width = wi + 8;
	frame.width = wi;
	
	heightNum.value = hi;
	widthNum.value = wi;
	cHeightNum.value = hi;
	cWidthNum.value = wi;
	heightSlid.value = hi;
	widthSlid.value = wi;
}

// the converters functionality 
function In2PxConvert(owner)
{
	if(owner == 1)
		{
			pixels.value = inches.value * 96;
			cMeters.value = inches.value * 2.54;
		}
	else if(owner == 2)
		{
			inches.value = pixels.value / 96;
			cMeters.value = inches.value * 2.54;
		}
	else if(owner == 3)
		{
			inches.value = cMeters.value / 2.54;
			pixels.value = inches.value * 96;
		}
}

//the advanced informations variables and tags
function AInfo()
{
	//some needed function level variables 
	//for handling the Information in the info table 
	let tw =
	document.getElementById("toW");
	let th =
	document.getElementById("toH");
	let aw =
	document.getElementById("avilW");
	let ah =
	document.getElementById("avilH");
	let pr =
	document.getElementById("pixRat");
	let rw =
	document.getElementById("resW");
	let rh =
	document.getElementById("resH");
	let cr =
	document.getElementById("colR");
	let cd =
	document.getElementById("colD");
	let bcn =
	document.getElementById("bCodeN");
	let bn =
	document.getElementById("bName");
	let bv =
	document.getElementById("bVersion");
	let nct =
	document.getElementById("bOnline");
	let ua =
	document.getElementById("uAgent");
	
	ratio = ('devicePixelRatio'in window)?devicePixelRatio:'unsupported';
	
	//displaying the needed info in the table
	tw.innerHTML = screen.width + "px";
	th.innerHTML = screen.height + "px";
	aw.innerHTML = window.outerWidth + "px";
	ah.innerHTML = window.outerHeight + "px";
	pr.innerHTML = ratio;
	rw.innerHTML = screen.width * ratio + "px";
	rh.innerHTML = screen.height * ratio + "px";
	cr.innerHTML = screen.pixelDepth + " bits pre pixel";
	cd.innerHTML = screen.colorDepth + " bits pre pixel";
	bcn.innerHTML = navigator.appCodeName;
	bn.innerHTML = navigator.appName;
	bv.innerHTML = navigator.appVersion;
	//the online is down in the if condition 
	ua.innerHTML = navigator.userAgent;
	
	if(navigator.onLine == true)
		{
			nct.innerHTML = "Online";
		}
		else
		{
			nct.innerHTML = "Offline";
		}
}