//Foncitonnalité 1.1
// var footer = document.getElementsByTagName('footer')[0];
// function sendMessageFooter(){
//     console.log("Click on Footer");
// }
// footer.addEventListener("click", sendMessageFooter);

//Foncitonnalité 1.2
var footer = document.getElementsByTagName('footer')[0];
var click_counter = 1;
function sendMessageFooter(){
    console.log("Click on Footer: " + click_counter);
    click_counter++;
}
footer.addEventListener("click", sendMessageFooter);

//Fonctionnalité 2
var btnMenu = document.querySelectorAll("button.navbar-toggler")[0];
var navMenu = document.getElementById('navbarHeader');

function toggleMenu(){
	navMenu.classList.toggle("collapse") 
}

btnMenu.addEventListener("click", toggleMenu);

//Fonctionnalité 3
var btnCard = document.querySelectorAll("button.btn.btn-sm.btn-outline-secondary")[0];
var textCard = document.querySelectorAll("p.card-text")[0];

var changeCardColor1 = function(){
	textCard.style.color = "red";
}

btnCard.addEventListener("click", changeCardColor1);

//Foncitonnalité 4
var btnCard2 = document.querySelectorAll("button.btn.btn-sm.btn-outline-secondary")[1];
var textCard2 = document.querySelectorAll("p.card-text")[1];

var changeCardColor2 = function(){
	if (textCard2.style.color === "green"){
		textCard2.style.color = ""
	}
	else textCard2.style.color = "green"
}

btnCard2.addEventListener("click", changeCardColor2);

//Fonctionnalité 5:
var header = document.getElementsByTagName('header')[0];
var CDN = document.getElementsByTagName("link")[0];
function toggleBootstrap(){
    if (CDN.href === "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"){
        CDN.href = ""
    } else {
        CDN.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    }
};
header.addEventListener("dblclick",toggleBootstrap);


//Fonctionnalité 6
var listeCards = document.querySelectorAll("div.card.mb-4.box-shadow");
var btnView = document.querySelectorAll("button.btn.btn-sm.btn-success");


for(let i = 0; i < btnView.length ; i++){
	let reduce = function (){
		if (listeCards[i].firstElementChild.style.width !== "20%"){
			listeCards[i].firstElementChild.style.width = "20%";
			}
		else {
			listeCards[i].firstElementChild.style.width = "";
			}
		}

	btnView[i].addEventListener("mousemove", reduce);
}

//Fonctionnalité 7
var greyBtn = document.querySelectorAll("a.btn.btn-secondary.my-2")[0];
var CardDeck = document.getElementsByClassName("row")[1];

var indirectRotateCard = function(){	
	CardDeck.insertBefore(CardDeck.lastElementChild, CardDeck.firstElementChild);
}

greyBtn.addEventListener("click", indirectRotateCard);

//Fonctionnalité 8
var blueBtn = document.querySelectorAll("a.btn.btn-primary.my-2")[0];
// var CardDeck = document.getElementsByClassName("row")[1]; => Already instanciate
blueBtn.removeAttribute("href");
var directRotateCard = function(){
    CardDeck.insertBefore(CardDeck.firstElementChild, CardDeck.lastElementChild.nextElementSibling);
}

blueBtn.addEventListener("click", directRotateCard);

//Fonctionnalité 9
var Logo = document.getElementsByTagName("a")[3];
var Page = document.getElementsByTagName("body")[0];

var changeLayout = function(key){
    var keyPressed = (key.key);
    console.log(keyPressed);
    switch(keyPressed){
        case "a":
            Page.removeAttribute("class");
            Page.classList.add("col-4");
            break;
        case "y":
            Page.removeAttribute("class");
            Page.classList.add("offset-md-4");
            Page.classList.add("col-4");
            break;
        case "p":
            Page.removeAttribute("class");
            Page.classList.add("offset-md-8");
            Page.classList.add("col-4");
            break;
        case "b":
            Page.removeAttribute("class");
            break;
    }
}

Logo.addEventListener("keypress", changeLayout);