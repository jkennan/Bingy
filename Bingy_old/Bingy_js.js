main();


function bing_helper(url) {
  console.log('Hello World');

  window.location.href = url;
}

function bing_mobile(url) {
  navigator.__defineGetter__('userAgent',
  function() {
    return 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/603.1.23 (KHTML, like Gecko) Version/10.0 Mobile/14E5239e Safari/602.1'
  })
  window.location.href = url;
  // bing_helper(url);
}

function main() {
  bing_helper('http://www.cnn.com');
  bing_mobile('http://www.nytimes.com');
  // setTimeout(bing_helper('http://www.cnn.com'), 3000);
  // setTimeout(bing_mobile('http://www.nytimes.com'), 3000);
}
