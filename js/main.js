/*
* INFO/CS 1300
* Fall 2016
* Carrie Huang
*/

/* establish global variables */
/*global window, document*/

var index = 0; 
var portfolio_images = ["Carrie_Huang_01.jpg", "Carrie_Huang_02.JPG", "Carrie_Huang_04.jpg", "Carrie_Huang_05.jpg", "Carrie_Huang_06.JPG", "Carrie_Huang_08.JPG", "Carrie_Huang_10.jpg", "Carrie_Huang_11.JPG", "Carrie_Huang_12.JPG", "Carrie_Huang_13.jpg", "Carrie_Huang_14.jpg", "Carrie_Huang_15.jpg", "Carrie_Huang_23.JPG", "Carrie_Huang_24.JPG", "Carrie_Huang_27.JPG", "IMG_0075.JPG", "IMG_0076 copy.jpg", "IMG_0173.JPG"];
//image credit of all photos: Carrie Huang
var image_captions = ["Taken at Shanghai, China 2015", "Taken at the beaches of Qingdao, China 2015", "A boat at the beaches of Qingdao, China 2015", "Taken at Yi He Yuan at Beijing, China 2015"]

window.onload = function date_and_season() {
    "use strict";
    // variables
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        // get pieces of date
        full_date = new Date(),
        this_month_text = monthNames[full_date.getMonth()],
        // this_month_text = "March",
        today = full_date.getDate(),
        this_year = full_date.getFullYear(),
        // set information up for insertion into DOM tree
        new_span = document.createElement('span'),
        new_text = document.createTextNode(today  + ', ' + this_month_text + ' ' + this_year),
        position = document.getElementsByTagName('footer')[0];
    // append date to footer
    new_span.appendChild(new_text);
    position.appendChild(new_span);
};

//Function for the Next Button
function image_forward(){
    "use strict";
	var main_image = document.getElementById('port');

	if(index == (portfolio_images.length - 1)){
		index = 0;
		main_image.src = 'images/' + portfolio_images[index];
		main_caption = image_captions[index];
	}
	
	else{ 
		index += 1;
		main_image.src = 'images/' + portfolio_images[index]; 
		main_caption = image_captions[index];
	}
}

//Function for the Previous Button
function image_previous(){
    "use strict";
	var main_image = document.getElementById('port');
	
	if(index == 0){
		index = portfolio_images.length-1;
		main_image.src = 'images/' + portfolio_images[index];	
		main_caption = image_captions[index];
	}
	
	else{ 
		index -= 1; 
		main_image.src = 'images/' + portfolio_images[index]; 
		main_caption = image_captions[index];
	}
}
	
