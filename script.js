////////1
let footer = document.getElementsByTagName('footer')[0];    
let count = 0;
footer.addEventListener('click', function() {   
  count += 1///comptage
  console.log(`clique ${count}`); ///affichage du comptage

});
////////2
let navbarHeader = document.getElementById('navbarHeader'); //emplacement du menu
let hamburgerMenu = document.querySelector('div div button.navbar-toggler'); 
hamburgerMenu.addEventListener('click', function() {   //reaction au clic
  navbarHeader.classList.toggle("collapse"); ///menu qui s'ouvre
});
///////3
let card1 = document.querySelectorAll('div.col-md-4')[0]; 
let editCard1 = document.querySelector('div.col-md-4 button.btn-outline-secondary'); 
editCard1.addEventListener('click', function() {     
  card1.style.color = "red";
});

///////4

let card2 = document.querySelectorAll('div.col-md-4')[1]; 
let editCard2 = document.querySelectorAll('div.col-md-4 button.btn-outline-secondary')[1]; 
editCard2.addEventListener('click', function() {     
  if (card2.style.color === "green") {
    card2.style.color = "black";
  } else {
    card2.style.color = "green";
  }
});

/////5
let navbar = document.querySelector('div.navbar'); 
let bootstrap = document.querySelector('head link'); 
let main = document.querySelector('main'); 

navbar.addEventListener('dblclick', function() {     
  bootstrap.setAttribute('disabled', 'disabled');
}); 

main.addEventListener('dblclick', function() {     
  bootstrap.removeAttribute("disabled");
}); ////clic bien sur la ligne avec le bienvenue pour revenir en arrière

/////6

let cardElmts = document.getElementsByClassName("card");
for (let count = 0; count < cardElmts.length; count++) {
	let cardText = cardElmts[count].getElementsByClassName("card-text")[0];
	let cardImage = cardElmts[count].getElementsByClassName("card-img-top")[0];
	let cardButtonView = cardElmts[count].getElementsByTagName("button")[0];
	function tinyCard() {
		if (cardImage.style.width === "20%") {
			cardImage.style = ""; /// sans ce style la carte resterai toute petite xD
			cardText.classList.toggle("collapse");
		}
		else {
			cardImage.style.width = "20%";
			cardText.classList.toggle("collapse");//// même système que collapse que pour le menu
		}
	}
	cardButtonView.addEventListener("mouseover", tinyCard); ///// si on passe la souris dessus la taille change
}
