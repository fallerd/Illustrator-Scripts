/**********************************************************

ADOBE SYSTEMS INCORPORATED 
Copyright 2005-2010 Adobe Systems Incorporated 
All Rights Reserved 

NOTICE:  Adobe permits you to use, modify, and 
distribute this file in accordance with the terms
of the Adobe license agreement accompanying it.  
If you have received this file from a source 
other than Adobe, then your use, modification,
or distribution of it requires the prior 
written permission of Adobe. 

*********************************************************/

/**********************************************************
 
Save as PDFs.jsx

DESCRIPTION

This sample gets files specified by the user from the 
selected folder and batch processes them and saves them 
as PDFs in the user desired destination with the same 
file name.
 
**********************************************************/

// Main Code [Execution of script begins here]

// uncomment to suppress Illustrator warning dialogs
// app.userInteractionLevel = UserInteractionLevel.DONTDISPLAYALERTS;

var destFolder, sourceFolder, files, fileType, sourceDoc, targetFile, pdfSaveOpts, printFile;

// Select the source folder.
sourceFolder = Folder.selectDialog( 'Select the folder with links to be batched in print template', '~' );
printFile  = File.openDialog ("Select file to use as template" );

// If a valid folder is selected
if ( sourceFolder != null && printFile != null)
{
	files = new Array();
	fileType = prompt( 'Select type of Illustrator files to you want to process. Eg: *.ai', '*.ai' );
	
	// Get all files matching the pattern
	files = sourceFolder.getFiles( fileType );
	if ( files.length > 0 )
	{
		// Get the destination to save the files
		destFolder = Folder.selectDialog( 'Select the folder where you want to save the batched PDF files.', '~' );
		for ( i = 0; i < files.length; i++ )
		{
                sourceDoc = app.open(printFile);
                    for ( j = 0; j < sourceDoc.pageItems.length; j++ ) {  //  go through all items and replace PlacedItems
                        artItem = sourceDoc.pageItems[j];  
                        switch ( artItem.typename ) {  // check for type
                            case "PlacedItem":  // your Imported item
                            //alert ("PlacedItem: "+artItem.file.fsName+"\r"+artItem.name);
                                artItem.file=new File (files[i]); // replace by newfolder and same PSD name
                            break;  
                        } 
                    } 
									
			// Call function getNewName to get the name and file to save the pdf
			targetFile = getNewName(files[i].name);

			// Call function getPDFOptions get the PDFSaveOptions for the files
			pdfSaveOpts = getPDFOptions( );
            
			// Save as pdf
			sourceDoc.saveAs( targetFile, pdfSaveOpts);
			
			sourceDoc.close();
/////////              

            
            
            
            
		}
		alert( 'Files are saved as PDF in ' + destFolder );
	}
	else
	{
		alert( 'No matching files found' );
	}
}




/*********************************************************

getNewName: Function to get the new file name. The primary
name is the same as the source file.

**********************************************************/

function getNewName(docName)
{
	var ext, newName, saveInFile, docName, sourceDoc1;
	ext = '.pdf'; // new extension for pdf file
	newName = "";
		
	for ( var i = 0 ; docName[i] != "." ; i++ )
	{
		newName += docName[i];
	}
	newName += ext; // full pdf name of the file
	
	// Create a file object to save the pdf
	saveInFile = new File( destFolder + '/' + newName );
	

	return saveInFile;
}




/*********************************************************

getPDFOptions: Function to set the PDF saving options of the 
files using the PDFSaveOptions object.

**********************************************************/

function getPDFOptions()
{
	// Create the PDFSaveOptions object to set the PDF options
	var pdfSaveOpts = new PDFSaveOptions();
	
	// Setting PDFSaveOptions properties. Please see the JavaScript Reference
	// for a description of these properties.
	// Add more properties here if you like
	pdfSaveOpts.acrobatLayers = false;
	pdfSaveOpts.colorBars = false;
	pdfSaveOpts.colorCompression = CompressionQuality.AUTOMATICJPEGHIGH;
	pdfSaveOpts.compressArt = true; //default
	pdfSaveOpts.embedICCProfile = true;
	pdfSaveOpts.enablePlainText = false;
	pdfSaveOpts.generateThumbnails = true; // default
	pdfSaveOpts.optimization = false;
	pdfSaveOpts.pageInformation = false;
	
	// uncomment to view the pdfs after conversion.
	// pdfSaveOpts.viewAfterSaving = true;
	

	return pdfSaveOpts;
}