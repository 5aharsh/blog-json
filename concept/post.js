/****************************************************************************************************************************
*
* These are some example posts.
* HTML formatting is possible but may require little precuation like double quotes etc. Solution? Use escape sequences!
*
*****************************************************************************************************************************/

var posts = [
{
	"title": "Post JSON format",
	"date": "23 May, 2017",
	"tag": "technical",
	"content": "<p>Posts can be added in JSON file in order to display them in 'post' section. Here is the format - <br><code>{ \"title\" : \"write the title here\", <br> \"date\" :  \"here goes the date\",<br>\"tag\" : \"one word to describe the post\",<br>\"content\" : \"write your true post with all HTML formatting here\" }</code><br><br>Appending this to posts array in <code>post.js</code> will do.</p>"
},
{
	"title": "Rectified search bug",
	"date": "20 May, 2017",
	"tag": "update",
	"content": "<p>It's almost 11:15 PM and I have just finished this search thing here. Working fine till yet. Also, I noticed I kept my posts <code>div</code>'s <code>display:block</code> which was making it visible for a split millisecond when I used to refresh the page, in case other tabs were opened. Fixed this one too.</p>"
},
{
	"title": "What I am listening",
	"date": "19 May, 2017",
	"tag": "leisure",
	"content": "<p>Some songs I have been listening lately. <ul><li><a href='https://www.youtube.com/watch?v=3kaUvGSLMew'>One More Light</a><li><a href='https://www.youtube.com/watch?v=JiCHPjrlUzk'>Talking to Myself</a><li><a href='https://www.youtube.com/watch?v=ivSihne3rO8'>Halfway Right</a><li><a href='https://www.youtube.com/watch?v=M5Ni_LskhFc'>Sharp Edges</a></ul></p>Over and out!"
},
{
	"title": "Watching this bug'ere? The blue one",
	"date": "19 May, 2017",
	"tag": "update",
	"content": "<p>Can you see that bug on left? It took some time to make it do that. I guess its just to annoy the people. Click on it to make it disappear. And actually it's not a bug, but ghost from pacman.</p>"
},
{
	"title": "So, what the heck is this?",
	"date": "18 May, 2017",
	"tag": "release",
	"content": "<p>So, you might be wondering what on earth is happening in here? Well, this being the first post will most of the things.</p><blockquote>TL;DR - Exams over. Thought of doing something with JS. Here is some JSON stuff.</blockquote><p>Create a variable. Put some JSON stuffs in it. Iterate and add to document with <code>document.write</code> and tadaa! See there I told you everything.</p>"
},
{
	"title": "My first post",
	"date": "17 May, 2017",
	"tag": "first",
	"content": "<p>So this is the first post here just an example. Check out the format.</p>"
}
];
