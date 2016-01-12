var wordBack = function(string) {
	var wordBackStart = string.split(/(\W)/);
	var wordBackArray = [];
	for (i = 0; i < wordBackStart.length; i++){
		if(wordBackStart[i].search(/[^a-zA-Z]+/) === -1) {
			wordBackArray.push(wordBackStart[i].split("").reverse().join(""));
				} else {
					wordBackArray.push(wordBackStart[i]);
			}
	};
var wordBackDone = wordBackArray.join("");
console.log(wordBackDone);
};
console.log(wordBack("Here, is a BASIC... String?!?@#asdf qwer"))
