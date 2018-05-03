window.onscroll=scrollChange; 

console.log("runniing");
console.log("trying");	

function scrollChange()
{
var elem1=document.getElementById("para1content");

var position =elem1.offsetTop;
var postop=window.pageYOffset+350;


	console.log(postop);
	console.log(position);
	if(postop>=position)
		{
			console.log("running if");
			console.log("opacity");
			document.getElementById("para1content").style.opacity = 1;
			//document.getElementById("para1content").classList.add("stylechange");
			document.getElementById("para1content").classList.add("poschange");
			console.log("poschange worked");

		}
		else
		{
		document.getElementById("para1content").style.opacity=0;
		}
}

