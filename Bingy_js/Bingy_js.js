document.getElementById("startButton").addEventListener("click", function() {helloWorld();});

/**
* Will eventually handle timeouts and changing the window after specific ones
*/
function bing_helper(url) {
  alert('Hello World');

  var pageWindow = window.open('http://www.google.com');
	pageWindow.window.location.assign('http://www.brown.edu');
  }

/**
* Will eventually change userAgent to mobile and call windowChanger()
*/ 
function bing_mobile(url) {
  navigator.__defineGetter__('userAgent',
  function() {
    return 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/603.1.23 (KHTML, like Gecko) Version/10.0 Mobile/14E5239e Safari/602.1'
  })
  var pageWindow = window.open('http://www.google.com');
  // bing_helper(url);
}

/**
* Currently functioning as proof-of-concept to get some windows working. Eventually
* will call windowCreator, windowChanger, and Bingy_main
*/ 
function main() {
	
	
	
//  bing_helper('http://www.cnn.com');
//  setTimeout(function() {alert('sleeping');}, 3000);
//  bing_mobile('http://www.nytimes.com');
//  // setTimeout(bing_helper('http://www.cnn.com'), 3000);
//  // setTimeout(bing_mobile('http://www.nytimes.com'), 3000);
}

/**
* Testing various window manipulation methods, will be removed later
*/
function helloWorld() {
//  this.myWindow = window.open("", "MyWindow");
//   myWindow.document.write("<p>This window's name is: " + myWindow.name + "</p>");
//	myWindow.location.assign("http://www.cnn.com");
////	setTimeout(function() {myWindow.location.assign("http://www.nytimes.com");}, 3000);
//	setTimeout(function() {alert("http://www.nytimes.com");}, 3000);
	
	
	wordGetter();
      
    

   
}

function wordArrayBuilder() {
	var wordArrayHolder = []; //so named to prevent conflicts with later var names
	

	this.addItem = function(v) { wordArrayHolder.push(v); };
	this.removeItem = function(index) { return wordArrayHolder.splice(index, 1); };
	this.getItem = function(index) { return wordArrayHolder[index]; };
	this.getArray = function() { return wordArrayHolder; };
		
	
}

function wordArrayTEST() {
	var arrayManager = new wordArrayBuilder();
	arrayManager.addItem("yes");
//	alert("system returned " + arrayManager.getItem(0) + " at index 0 (should be 'yes')");
//	alert("system removed " + arrayManager.removeItem(0) + " from index 0 (should be 'yes')");
//	alert("array is " + arrayManager.getArray());
}


function wordGetter() {
	var requestStr = "http://randomword.setgetgo.com/get.php";

	$.ajax({
		type: "GET",
		url: requestStr,
		dataType: "jsonp",
		jsonpCallback: 'windowChanger'
	});
}

function makeWords() {
	var arrayManager = new wordArrayBuilder();
	
	for(i = 0; i <= 30; i++) {
		wordGetter(arrayManager.addItem(data.Word));
	}
	
	console.log(arrayManager.getArray);
}



/**
* Creates a new, blank window which will be changed later in windowChanger()
*/
function windowCreator() {
	this.win = window.open("", "Bingy Active Window");
}

function windowChanger(jsonpData) {
	/**
	* import dictionary
	* create array of 30 words
	* pick index at random, set object at that index to new var
	* splice out that index
	* change window to that var
	*/
	
	var myWindow = window.open("http://www.bing.com/search?q=" + jsonpData.Word, "MyWindow");
//	myWindow.location.assign("http://www.bing.com/search?q=" + jsonpData.Word);
	
}
