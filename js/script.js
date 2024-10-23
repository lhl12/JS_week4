/*Name this external file gallery.js*/

function upDate(previewPic){
  /* In this function you should 
  1) change the url for the background image of the div with the id = "image" 
  to the source file of the preview image
   
  2) Change the text  of the div with the id = "image" 
  to the alt text of the preview image 
  */
  
  console.log("previewPic function called:");
  console.log(previewPic.src);
  console.log(previewPic.alt);
  
  var objChange = document.querySelector('#image');
  objChange.innerHTML = previewPic.alt;
  var newUrl = previewPic.src;
  objChange.style.backgroundImage = "url(" + newUrl + ")";
  objChange.style.backgroundSize = "cover";
  
	}

function unDo(){
  /* In this function you should 
  1) Update the url for the background image of the div with the id = "image" 
  back to the orginal-image.  You can use the css code to see what that original URL was
  
  2) Change the text  of the div with the id = "image" 
  back to the original text.  You can use the html code to see what that original text was
  */
  
  console.log("unDo function called");
  var objChange = document.querySelector('#image');
  objChange.innerHTML = "Hover over an image below to display here.";
  objChange.style.backgroundImage = "url('')"
}

function setupFocus() {
  /* add tabindex attribute to all images */
  
  console.log("setupFocus function called")
  var allImg = document.querySelectorAll(".preview");
  for (let ii = 0; ii < allImg.length; ii++) {
    allImg[ii].setAttribute("tabindex", "0");
  }
}