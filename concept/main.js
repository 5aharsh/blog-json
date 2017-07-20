/***********************************************************************
*
* Saharsh Anand
* Source - github.com/guywhogeek
* Created - 17 May, 2017; 00:07 AM
*
* I was stubborn enough to not to use jQuery, and this is the result.
* I know code is a bit redundant, but its working very well.
*
************************************************************************/


function post(){
	document.getElementById("posts").style.display="block";
	document.getElementById("stuffs").style.display="none";
	document.getElementById("mores").style.display="none";
	document.getElementById("searches").style.display="none";
	document.getElementById("front").style.display="none";
}

function stuffs(){
	document.getElementById("posts").style.display="none";
	document.getElementById("stuffs").style.display="block";
	document.getElementById("mores").style.display="none";
	document.getElementById("searches").style.display="none";
	document.getElementById("front").style.display="none";
}

function more(){
	document.getElementById("posts").style.display="none";
	document.getElementById("stuffs").style.display="none";
	document.getElementById("mores").style.display="block";
	document.getElementById("searches").style.display="none";
	document.getElementById("front").style.display="none";
}

function searched(){
	document.getElementById("posts").style.display="none";
	document.getElementById("stuffs").style.display="none";
	document.getElementById("mores").style.display="none";
	document.getElementById("searches").style.display="block";
	document.getElementById("front").style.display="none";
}

function clearpage(){
	document.getElementById("posts").style.display="none";
	document.getElementById("stuffs").style.display="none";
	document.getElementById("mores").style.display="none";
	document.getElementById("searches").style.display="none";
	document.getElementById("front").style.display="block";
}

function findpost(code){
	if(code==13){
		document.getElementById("search-pane").innerHTML="";
		var j=0;
		for(var i=0; i < posts.length; i++){
			var tag = document.getElementById("tag").value;
			if(tag.toLowerCase()==posts[i]['tag']||posts[i]['content'].toLowerCase().includes(tag.toLowerCase())||posts[i]['title'].toLowerCase().includes(tag.toLowerCase())){
				document.getElementById("search-pane").innerHTML+= "<h2 class='title'>"+posts[i]['title']+"</h2><span class='info'>"+posts[i]['date']+" | Tag: "+posts[i]['tag']+"</span><div class='post'>"+posts[i]['content']+"</div><hr class='divider'>";
				j++;
			}
		}
		if(j==0){
			document.getElementById("search-pane").innerHTML="<h3 class='alert'>nothing found 😕</h3>";
		}
	}
}
