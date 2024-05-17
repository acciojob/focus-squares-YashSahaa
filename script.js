//your JS code here. If required.
let squares = document.querySelectorAll(".square")

for (let i = 0; i < squares.length; i++) {
	squares[i].addEventListener("mouseover",()=>{
		squares[i].style.backgroundColor = "#6F4E37"
	})
	squares[i].addEventListener("mouseout",()=>{
		squares[i].style.backgroundColor = " #E6E6FA"
	})
}