'use strict';

// console.log('\'Allo \'Allo! Popup');

var searchBtn = document.getElementById('btn-search');
var searchInput = document.getElementById('input-search');
searchBtn.addEventListener('click', function () {
  var keywords = encodeURIComponent(searchInput.value);
  google(keywords);
  bing(keywords);
  baidu(keywords);
  yandex(keywords);
});

function baidu(keywords) {
  console.log('baidu');
  var url = `https://www.baidu.com/s?wd=${keywords}`;
  window.open(url);
}

function google(keywords) {
  var url = `https://www.google.com/search?source=hp&q=${keywords}&oq=${keywords}`;
  window.open(url);
}

function bing(keywords) {
  var url = `https://cn.bing.com/search?q=${keywords}&qs=n&form=QBLHCN&sp=-1&pq=${keywords}`;
  window.open(url);
}

function yandex(keywords) {
  var url = `https://www.yandex.com/search/?text=${keywords}`;
  window.open(url);
}