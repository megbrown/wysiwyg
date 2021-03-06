let USreps = [
	{
	  title: "U.S. House of Representatives",
	  name: "Diane Black",
	  bio: "Diane Lynn Black is an American politician who has been the U.S. Representative for Tennessee's 6th congressional district since 2011.",
	  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/RepBlack_OfficialPhoto.jpg/220px-RepBlack_OfficialPhoto.jpg",
	  lifespan: {
	    birth: 1951,
	    death: "Current"
	  }
	},
	{
	  title: "U.S. House of Representatives",
	  name: "David Kustoff",
	  bio: "David Frank Kustoff is an American politician and attorney from the state of Tennessee.",
	  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Kustoff_Official_Headshot.jpg/220px-Kustoff_Official_Headshot.jpg",
	  lifespan: {
	    birth: 1966,
	    death: "Current"
	  }
	},
	{
	  title: "U.S. House of Representatives",
	  name: "Scott DesJarlais",
	  bio: "Scott Eugene DesJarlais is an American politician and physician currently serving as U.S. Representative for Tennessee's 4th congressional district.",
	  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Scott_DesJarlais%2C_Official_Portrait%2C_112th_Congress.jpg/220px-Scott_DesJarlais%2C_Official_Portrait%2C_112th_Congress.jpg",
	  lifespan: {
	    birth: 1964,
	    death: "Current"
	  }
	}
]

let container = document.getElementById("container");

for (counter = 0 ; counter < 3; counter++) {
	container.innerHTML +=
	`<div class="person-container" id="person${counter + 1}">
			<header class="header">
				<div class="name">
					<h1>${USreps[counter].name}</h1>
				</div>
				<div class="title">
					<h3>${USreps[counter].title}</h3>
				</div>
			</header>
			<section>
				<img src=${USreps[counter].image}>
				<div class="bio">
					<p id="bio">${USreps[counter].bio}</p>
				</div>
			</section>
			<footer class="lifespan">${USreps[counter].lifespan.birth} - ${USreps[counter].lifespan.death}</footer>
			</div>`;
}

let personEl = document.querySelectorAll(".person-container");
let inputField = document.getElementById("input");

function keyPress() {
	inputField.addEventListener("keyup", function() {
		if (event.key === "Enter") {
			inputField.value = "";
		} else {
			replaceBio();
		}
	})
}

function replaceBio() {
	let borderEl = document.querySelector(".dotted-border");
	borderEl.querySelector("#bio").innerHTML = inputField.value;

}

for (i=0; i<personEl.length; i++) {
	personEl[i].addEventListener("click", function(event) {
		for (j=0; j<personEl.length; j++) {
			personEl[j].classList.remove("dotted-border");
		}
		event.currentTarget.classList.add("dotted-border");
		inputField.focus();
			keyPress();
	})
}
