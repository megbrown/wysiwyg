// Style your person elements however you like.
// For every even numbered element, have a light yellow background.
// For every odd numbered element, have a light blue background.
// Each element's DOM structure should be as shown below.
// When you click on one of the person elements, a dotted border should appear around it.
// When you click on one of the person elements,
// the text input should immediately gain focus so that you can start typing.
// When there is a highlighted person element, and you begin typing in the input box,
// the person's biography should be immediately bound to what you are typing, letter by letter.
// When you press the enter/return key when typing in the input field,
// then the content of the input field should immediately be blank.

// Create an array of objects that represents famous people
var USreps = [
	{
	  title: "U.S. House of Representatives",
	  name: "Diane Black",
	  bio: "Diane Lynn Black is an American politician who has been the U.S. Representative for Tennessee's 6th congressional district since 2011.",
	  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/RepBlack_OfficialPhoto.jpg/220px-RepBlack_OfficialPhoto.jpg",
	  lifespan: {
	    birth: 1951,
	    death: "current"
	  }
	},
	{
	  title: "U.S. House of Representatives",
	  name: "David Kustoff",
	  bio: "David Frank Kustoff is an American politician and attorney from the state of Tennessee.",
	  image: "https://www.google.com/imgres?imgurl=https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Kustoff_Official_Headshot.jpg/220px-Kustoff_Official_Headshot.jpg&imgrefurl=https://en.wikipedia.org/wiki/David_Kustoff&h=330&w=220&tbnid=ks4iSTQ4Ye_kUM:&tbnh=186&tbnw=124&usg=__C1fxboIxMM11UqcJWMS0_r99X9w=&vet=10ahUKEwiVrv-L9c_UAhUKTSYKHfHuCVAQ_B0ImQEwCg..i&docid=nX7abvyxUsvoaM&itg=1&sa=X&ved=0ahUKEwiVrv-L9c_UAhUKTSYKHfHuCVAQ_B0ImQEwCg&ei=gelKWdXpDIqamQHx3aeABQ",
	  lifespan: {
	    birth: 1966,
	    death: "current"
	  }
	},
	{
	  title: "U.S. House of Representatives",
	  name: "Scott DesJarlais",
	  bio: "Scott Eugene DesJarlais is an American politician and physician currently serving as U.S. Representative for Tennessee's 4th congressional district.",
	  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Scott_DesJarlais%2C_Official_Portrait%2C_112th_Congress.jpg/220px-Scott_DesJarlais%2C_Official_Portrait%2C_112th_Congress.jpg",
	  lifespan: {
	    birth: 1964,
	    death: "current"
	  }
	}
]

console.log(USreps);




