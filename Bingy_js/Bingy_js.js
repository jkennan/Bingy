document.getElementById("startButton").addEventListener("click", function() {main();});

/**
* Will eventually change userAgent to mobile and call windowChanger()
*/ 
function bing_mobile(jsonpData) {
 
	
//	console.log(navigator.userAgent);
	
//  var myWindow = window.open("", "MyWindow", "width=375,height=667");
	
//	  var myWindow = window.open("", "MyWindow");
  
//	alert(myWindow);
//	
	navigator.__defineGetter__('userAgent',
  function() {
    return 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/603.1.23 (KHTML, like Gecko) Version/10.0 Mobile/14E5239e Safari/602.1';
  });
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	console.log(navigator.userAgent);
	var myWindow = window.open("http://www.bing.com/search?q=" + jsonpData.Word, "MyWindow");
//	
//	myWindow.location.assign("http://www.bing.com/search?q=" + jsonpData.Word);
}


/**
* Testing various window manipulation methods, will be removed later
*/
function main() {
//  this.myWindow = window.open("", "MyWindow");
//   myWindow.document.write("<p>This window's name is: " + myWindow.name + "</p>");
//	myWindow.location.assign("http://www.cnn.com");
////	setTimeout(function() {myWindow.location.assign("http://www.nytimes.com");}, 3000);
//	setTimeout(function() {alert("http://www.nytimes.com");}, 3000);
	
	
	wordGetter();
      
    

   
}


function wordGetter() {
	var requestStr = "http://randomword.setgetgo.com/get.php";

	$.ajax({
		type: "GET",
		url: requestStr,
		dataType: "jsonp",
		jsonpCallback: 'bing_mobile'
	});
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
