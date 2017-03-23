function bing_helper(url) {
  console.log('Hello World');

  window.location.href = url;
}

function main() {
  bing_helper('http://www.cnn.com');
  // setTimeout(bing_helper('http://www.cnn.com'), 3000);
  // setTimeout(bing_helper('http://www.nytimes.com'), 3000);
}
