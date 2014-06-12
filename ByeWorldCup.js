function ByeWorldCup(){
	
	var elements = document.querySelectorAll(".js-tweet-text.tweet-text");

	for(var i = 0; i < elements.length; i++){

		if(elements[i].innerHTML.match(/world\s*cup/i)){
			var tweet = elements[i].parentNode.parentNode.parentNode;
			tweet.parentNode.removeChild(tweet); 
		}

	}

	setTimeout(ByeWorldCup, 5000);

}

ByeWorldCup();