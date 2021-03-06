﻿var myWindow = new Window ("dialog", "Engraving Layout"); //pop up dialog box

var row1 = myWindow.add ("group"); //create row 1

var row1column1 = row1.add("panel");
row1column1.add ("statictext", undefined, "Name 1:"); //name text
var myText1 = row1column1.add ("edittext", undefined, "John Doe"); //name te
myText1.characters = 15;
myText1.active = true;
row1column1.add ("radiobutton", undefined, "Cherokee");
row1column1.add ("radiobutton", undefined, "Narkisim");
row1column1.add ("radiobutton", undefined, "Segoe");
row1column1.add ("checkbox", undefined, "Laser Cut Board?");
// set dialog defaults
row1column1.children[2].value = true;

var row1column2 = row1.add("panel");
row1column2.add ("statictext", undefined, "Name 2:");
var myText2 = row1column2.add ("edittext", undefined, "Anthony Diaz");
myText2.characters = 15;
row1column2.add ("radiobutton", undefined, "Cherokee");
row1column2.add ("radiobutton", undefined, "Narkisim");
row1column2.add ("radiobutton", undefined, "Segoe");
row1column2.add ("checkbox", undefined, "Laser Cut Board?");
// set dialog defaults
row1column2.children[2].value = true;

var row1column3 = row1.add("panel");
row1column3.add ("statictext", undefined, "Name 3:");
var myText3 = row1column3.add ("edittext", undefined, "Desi Penington");
myText3.characters = 15;
row1column3.add ("radiobutton", undefined, "Cherokee");
row1column3.add ("radiobutton", undefined, "Narkisim");
row1column3.add ("radiobutton", undefined, "Segoe");
row1column3.add ("checkbox", undefined, "Laser Cut Board?");
// set dialog defaults
row1column3.children[2].value = true;

var row2 = myWindow.add ("group"); //create row 2

var row2column1 = row2.add("panel");
row2column1.add ("statictext", undefined, "Name 4:");
var myText4 = row2column1.add ("edittext", undefined, "Asim Zaidi");
myText4.characters = 15;
row2column1.add ("radiobutton", undefined, "Cherokee");
row2column1.add ("radiobutton", undefined, "Narkisim");
row2column1.add ("radiobutton", undefined, "Segoe");
row2column1.add ("checkbox", undefined, "Laser Cut Board?");
// set dialog defaults
row2column1.children[2].value = true;

var row2column2 = row2.add("panel");
row2column2.add ("statictext", undefined, "Name 5:");
var myText5 = row2column2.add ("edittext", undefined, "David Faller");
myText5.characters = 15;
row2column2.add ("radiobutton", undefined, "Cherokee");
row2column2.add ("radiobutton", undefined, "Narkisim");
row2column2.add ("radiobutton", undefined, "Segoe");
row2column2.add ("checkbox", undefined, "Laser Cut Board?");
// set dialog defaults
row2column2.children[2].value = true;

var row2column3 = row2.add("panel");
row2column3.add ("statictext", undefined, "Name 6:");
var myText6 = row2column3.add ("edittext", undefined, "Katie Thomas");
myText6.characters = 15;
row2column3.add ("radiobutton", undefined, "Cherokee");
row2column3.add ("radiobutton", undefined, "Narkisim");
row2column3.add ("radiobutton", undefined, "Segoe");
row2column3.add ("checkbox", undefined, "Laser Cut Board?");
// set dialog defaults
row2column3.children[2].value = true;

var row3 = myWindow.add ("group"); //create row 3

var row3column1 = row3.add("panel");
row3column1.add ("statictext", undefined, "Name 7:");
var myText7 = row3column1.add ("edittext", undefined, "Ashley Kalvoda");
myText7.characters = 15;
row3column1.add ("radiobutton", undefined, "Cherokee");
row3column1.add ("radiobutton", undefined, "Narkisim");
row3column1.add ("radiobutton", undefined, "Segoe");
row3column1.add ("checkbox", undefined, "Laser Cut Board?");
// set dialog defaults
row3column1.children[2].value = true;

var row3column2 = row3.add("panel");
row3column2.add ("statictext", undefined, "Name 8:");
var myText8 = row3column2.add ("edittext", undefined, "Zach Thomas");
myText8.characters = 15;
row3column2.add ("radiobutton", undefined, "Cherokee");
row3column2.add ("radiobutton", undefined, "Narkisim");
row3column2.add ("radiobutton", undefined, "Segoe");
row3column2.add ("checkbox", undefined, "Laser Cut Board?");
// set dialog defaults
row3column2.children[2].value = true;

var row3column3 = row3.add("panel");
row3column3.add ("statictext", undefined, "Name 9:");
var myText9 = row3column3.add ("edittext", undefined, "Sierra Viner");
myText9.characters = 15;
row3column3.add ("radiobutton", undefined, "Cherokee");
row3column3.add ("radiobutton", undefined, "Narkisim");
row3column3.add ("radiobutton", undefined, "Segoe");
row3column3.add ("checkbox", undefined, "Laser Cut Board?");
// set dialog defaults
row3column3.children[2].value = true;

myWindow.add ("button", undefined, "Create Layout", {name: "ok"});

myWindow.show ();

//$.writeln(row1column1.children[0].text);

 //gather selected font data
var font = [selected_rbutton (row1column1), selected_rbutton (row1column2), selected_rbutton (row1column3), selected_rbutton (row2column1), selected_rbutton (row2column2), selected_rbutton (row2column3), selected_rbutton (row3column1), selected_rbutton (row3column2), selected_rbutton (row3column3)];

//gather which are laser cut boards
var lasercut =  [selected_check (row1column1), selected_check (row1column2), selected_check (row1column3), selected_check (row2column1), selected_check (row2column2), selected_check (row2column3), selected_check (row3column1), selected_check (row3column2), selected_check (row3column3)];

 //gather engraving text  data
var text = [myText1.text, myText2.text, myText3.text, myText4.text, myText5.text, myText6.text, myText7.text, myText8.text, myText9.text];

var myFolderTemplates = Folder("/c/Users/David/desktop/Engraving/Template");
var myFolderCompiled = Folder("/c/Users/David/desktop/Engraving/Compiled"); 

var dimension=[0,0,0,0,0,0,0,0,0];

//get original spacing from template file
var link = app.open(File(myFolderTemplates + "/EngraverClipboardTemplate.ai")); 

for (i = 0; i < 9; i++) {  //for loop to get spacing
     var reverse = 8-i;
    app.activeDocument.selection = app.activeDocument.pageItems[reverse];
    var selected  =  app.activeDocument.selection;
    dimension[i] = selected[0].left;
  }

app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

copyFolder(new Folder(myFolderTemplates), new Folder(myFolderCompiled)); //create copy of templates file for modification

for (i = 0; i < 9; i++) {  //for loop to set up each engraving

    setupEngravings(text[i],font[i],i);

  }

var link = app.open(File(myFolderCompiled + "/EngraverClipboardTemplate.ai")); 

//set spacing to original values
for (i = 0; i < 9; i++) {  //for loop to get spacing
    reverse = 8-i;
    app.activeDocument.selection = app.activeDocument.pageItems[reverse];
    selected  =  app.activeDocument.selection;
    selected[0].left = dimension[i];
  }


for (i = 0; i < 9; i++) {  //for loop to  move lasercut boards 1mm right

    if (lasercut[i] ==1){ 
     reverse = 8-i;
    app.activeDocument.selection = app.activeDocument.pageItems[reverse];
    selected  =  app.activeDocument.selection;
    //$.writeln(selected[0].left);
    selected[0].left=selected[0].left+2.83465;
    }

  }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////functions


function setupEngravings(text,font,i){   //function to set up each individual engraving file
i=i+1;
var link = app.open(File(myFolderCompiled + "/Engraving" + i + ".ai")); //open first engravingfile

var engraving = link.textFrames.pointText( [0,0] );

engraving.contents = text;


var fontStyle1 = engraving.textRange.characterAttributes;
if (font == "Cherokee"){
fontStyle1.textFont = app.textFonts.getByName("PlantagenetCherokee");
}
if (font == "Narkisim"){
fontStyle1.textFont = app.textFonts.getByName("Narkisim");
}
if (font == "Segoe"){
fontStyle1.textFont = app.textFonts.getByName("SegoeScript");
fontStyle1.connectionForms = true;
}


if (i==1||i==4||i==7){
fontStyle1.fillColor = makeColor(0,255,0);
}
if (i==2||i==5||i==8){
fontStyle1.fillColor = makeColor(255,0,0);
}
if (i==3||i==6||i==9){
fontStyle1.fillColor = makeColor(0,0,255);
}

engraving.createOutline(  );


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// align text to artboard and size correctly

app.activeDocument.selectObjectsOnActiveArtboard(); 

var activeDoc = app.activeDocument,
    selection = activeDoc.selection;

if (selection.length > 0) {
    var item       = selection[0];


  // Cache current values:
  var oldWidth  = item.width; // alert(oldWidth);
  var oldHeight = item.height; // alert(oldHeight);
  var itemAspectRatio = item.width/item.height;
  // Wide or tall?
  if (itemAspectRatio<4.4023347925786950177194079633104) {
    // alert('tall');
    item.height = 47.9699999999;

    // Scale width using ratio from height:
    var ratioH = item.height / oldHeight;
    item.width = oldWidth * ratioH;
    
  } else {
// alert('wide');
    item.width = 211.18;

    // Scale height using ratio from width:
    var ratioW  = item.width / oldWidth;
    item.height = oldHeight * ratioW;

  }

  // Center:
  item.top  = 0 - ((47.969999999 / 2) - (item.height / 2));
  item.left = (211.18 / 2) - (item.width / 2);

  // Deselect:
  //item.selected = false;
  
  //Save and Close
  }
    app.activeDocument.save();
    app.activeDocument.close();
    
    }
  

function makeColor(r,g,b){
    var c = new RGBColor();
    c.red   = r;
    c.green = g;
    c.blue  = b;
    return c;
}

function selected_rbutton (rbuttons)
{
for (var i = 2; i < 5; i++)
if (rbuttons.children[i].value == true)
return rbuttons.children[i].text;
}

function selected_check (check)
{
if (check.children[5].value == true)
return 1;
}

function copyFolder(sourceFolder, destinationFolder) {  
    var sourceChildrenArr = sourceFolder.getFiles();  
    for (var i = 0; i < sourceChildrenArr.length; i++) {  
        var sourceChild = sourceChildrenArr[i];  
        var destinationChildStr = destinationFolder.fsName + "/" + sourceChild.name;  
        if (sourceChild instanceof File) {  
            copyFile(sourceChild, new File(destinationChildStr));  
        }  
        else {  
            copyFolder(sourceChild, new Folder(destinationChildStr));  
        }  
    }  
}  
  
  
function copyFile(sourceFile, destinationFile) {  
    createFolder(destinationFile.parent);  
    sourceFile.copy(destinationFile);  
}  
  
  
function createFolder(folder) {  
    if (folder.parent !== null && !folder.parent.exists) {  
        createFolder(folder.parent);  
    }  
    folder.create();  
}  