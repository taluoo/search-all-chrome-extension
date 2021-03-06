'use strict';

// console.log('\'Allo \'Allo! Popup');

var searchInput = document.getElementById('input-search');

searchInput.addEventListener('keypress', function (e) {
  var key = e.which || e.keyCode;
  if (key === 13) { // 13 is enter
    // code for enter
    searchAll();
  }
});

function searchAll() {
  var keywords = encodeURIComponent(searchInput.value);
  google(keywords);
  bing(keywords);
  baidu(keywords);
  yandex(keywords);
  github(keywords);
}

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

function github(keywords) {
  var url = `https://github.com/search?utf8=%E2%9C%93&q=${keywords}&type=`;
  window.open(url);
}