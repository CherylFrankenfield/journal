(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Entry(title, body) {
  this.title = title;
  this.body = body;
}


Entry.prototype.countWords = function() {
  var wordsArray = this.body.split(" ");
  return wordsArray.length;
}

exports.entryModule = Entry;

},{}],2:[function(require,module,exports){
var Entry = require('./../js/scripts.js').entryModule;

$(document).ready(function(){
  $("form#entry-form").submit(function() {
    event.preventDefault();
    var inputtedTitle = $('input#entry-title').val();
    var inputtedBody = $('input#entry-body').val();

    var currentPost = new Entry(inputtedTitle, inputtedBody);
    console.log(currentPost.body);
    var wordCount = currentPost.countWords();
    console.log(wordCount);
  });
});

function Entry(title, body) {
  this.title = title;
  this.body = body;
}


Entry.prototype.countWords = function() {
  var wordsArray = this.body.split(" ");
  return wordsArray.length;
}

exports.entryModule = Entry;

},{"./../js/scripts.js":1}]},{},[2]);
