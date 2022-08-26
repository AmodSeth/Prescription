function saveTextAsFile(textToWrite, fileNameToSaveAs)
    {
    	var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'}); 
    	var downloadLink = document.createElement("a");
    	downloadLink.download = fileNameToSaveAs;
    	downloadLink.innerHTML = "Download File";
    	if (window.webkitURL != null)
    	{
    		// Chrome allows the link to be clicked
    		// without actually adding it to the DOM.
    		downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    	}
    	else
    	{
    		// Firefox requires the link to be added to the DOM
    		// before it can be clicked.
    		downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
    		downloadLink.onclick = destroyClickedElement;
    		downloadLink.style.display = "none";
    		document.body.appendChild(downloadLink);
    	}
    
    	downloadLink.click();
}
function sendEmail() {
	Email.send({
		Host: "smtp.gmail.com",
		Username: "amodseth02@gmail.com",
		Password: "atom@1917",
		To: 'amodseth2002@gmail.com',
		From: "amodseth02@gmail.com",
		Subject: "Sending Email using javascript",
		Body: "Well that was easy!!",
		Attachments: [
		{
			name: "File_Name_with_Extension",
			path: "Full Path of the file"
		}]
	})
		.then(function (message) {
		alert("Mail has been sent successfully")
		});
	}


