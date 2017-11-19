var myWindow = new Window ("dialog", "Engraving Layout"); //pop up dialog box

var row1 = myWindow.add ("group"); //create row 1

var row1column1 = row1.add("panel");
row1column1.add ("statictext", undefined, "Name 1:"); //name text
var myText1 = row1column1.add ("edittext", undefined, "Diaz"); //name te
myText1.characters = 15;
myText1.active = true;
// set dialog defaults


var row1column2 = row1.add("panel");
row1column2.add ("statictext", undefined, "Name 2:");
var myText2 = row1column2.add ("edittext", undefined, "Heather");
myText2.characters = 15;
// set dialog defaults


var row1column3 = row1.add("panel");
row1column3.add ("statictext", undefined, "Name 3:");
var myText3 = row1column3.add ("edittext", undefined, "Desi");
myText3.characters = 15;
// set dialog defaults


var row2 = myWindow.add ("group"); //create row 2

var row2column1 = row2.add("panel");
row2column1.add ("statictext", undefined, "Name 4:");
var myText4 = row2column1.add ("edittext", undefined, "Katie");
myText4.characters = 15;
// set dialog defaults


var row2column2 = row2.add("panel");
row2column2.add ("statictext", undefined, "Name 5:");
var myText5 = row2column2.add ("edittext", undefined, "Andrew");
myText5.characters = 15;
// set dialog defaults


var row2column3 = row2.add("panel");
row2column3.add ("statictext", undefined, "Name 6:");
var myText6 = row2column3.add ("edittext", undefined, "Anna");
myText6.characters = 15;
// set dialog defaults


var row3 = myWindow.add ("group"); //create row 3

var row3column1 = row3.add("panel");
row3column1.add ("statictext", undefined, "Name 7:");
var myText7 = row3column1.add ("edittext", undefined, "Stephen");
myText7.characters = 15;
// set dialog defaults


var row3column2 = row3.add("panel");
row3column2.add ("statictext", undefined, "Name 8:");
var myText8 = row3column2.add ("edittext", undefined, "Amanda");
myText8.characters = 15;
// set dialog defaults


var row3column3 = row3.add("panel");
row3column3.add ("statictext", undefined, "Name 9:");
var myText9 = row3column3.add ("edittext", undefined, "Stephenie");
myText9.characters = 15;
// set dialog defaults


myWindow.add ("button", undefined, "Create Layout", {name: "ok"});

myWindow.show ();

//$.writeln(row1column1.children[0].text);


 //gather engraving text  data
var text = [myText1.text, myText2.text, myText3.text, myText4.text, myText5.text, myText6.text, myText7.text, myText8.text, myText9.text];

var myFolderTemplates = Folder("/c/Users/David/desktop/Engraving/Tags/Template");
var myFolderCompiled = Folder("/c/Users/David/desktop/Engraving/Tags/Template/Compiled"); 



//copyFolder(new Folder(myFolderTemplates), new Folder(myFolderCompiled)); //create copy of templates file for modification

for (i = 0; i < 9; i++) {  //for loop to set up each engraving

    setupEngravings(text[i]);
    createCard(text[i],i);
    

  }





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////functions
function createCard(text,i){
    var link = app.open(File(myFolderTemplates + "/CardTemplate.ai"));
    app.activeDocument.selectObjectsOnActiveArtboard(); 

var activeDoc = app.activeDocument,
    selection = activeDoc.selection;
    

var link = File(myFolderCompiled + "/"+text+".ai");

selection[0].file=link;

    var saveName= new File(myFolderCompiled+"/card"+i+".ai")
    app.activeDocument.saveAs(saveName);
    app.activeDocument.close();
    
}

function setupEngravings(text){   //function to set up each individual engraving file

var link = app.open(File(myFolderTemplates + "/NameTemplate.ai")); //open first engravingfile

var engraving = link.textFrames.pointText( [50,-10] );

engraving.contents = text;


var fontStyle1 = engraving.textRange.characterAttributes;

fontStyle1.textFont = app.textFonts.getByName("Austtin");


fontStyle1.fillColor = makeColor(253,182,20);


engraving.createOutline();


////// align text to artboard and size correctly


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
  if (itemAspectRatio<2.66667) {
    // alert('tall');
    item.height = 54;

    // Scale width using ratio from height:
    var ratioH = item.height / oldHeight;
    item.width = oldWidth * ratioH;
    
  } else {
// alert('wide');
    item.width = 144;

    // Scale height using ratio from width:
    var ratioW  = item.width / oldWidth;
    item.height = oldHeight * ratioW;

  }

  // Center:
  // $.writeln(item.top + "  "+item.left);
   item.top  = 0 - ((54 / 2) - (item.height / 2)) + ' pts';
  item.left = (144 / 2) - (item.width / 2) + ' pts';
  //$.writeln(item.top + "  "+item.left);
}
    var saveName= new File(myFolderCompiled+"/"+text+".ai")
    app.activeDocument.saveAs(saveName);
    app.activeDocument.close();
    
}
  

function makeColor(r,g,b){
    var c = new RGBColor();
    c.red   = r;
    c.green = g;
    c.blue  = b;
    return c;
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