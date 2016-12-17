'use strict';

var assert = require('assert');
var htmlAttributeParser = require('./');

let text = '<p attr class="animated infinite" ng-class="main.classAnimation">Hello world</p>';
let text2 = '<a href="Lecture/Lec3.ppt">Lecture 3</a>';

describe('test', function(){
  it('Assert parsing tag name', function() {
    assert(htmlAttributeParser(text)['tagName'] = 'p');
  });

  it('Assert parsing tag name 2', function() {
    assert(htmlAttributeParser(text2)['tagName'] = 'a');
  });

  it('Assert parsing tag attributes', function() {
    const attributes = htmlAttributeParser(text)['attributes'];
    assert(attributes['attr']);
    assert(attributes['class'] === 'animated infinite');
    assert(attributes['ng-class'] === 'main.classAnimation');
  });

  it('Assert parsing tag attributes 2', function() {
    const attributes = htmlAttributeParser(text2)['attributes'];
    assert(attributes['href'] === 'Lecture/Lec3.ppt');
  });

  it('Assert parsing tag attributes: non-existing tag', function() {
    const attributes = htmlAttributeParser(text)['attributes'];
    assert(attributes['sometag'] === undefined);
  });

  it('Assert parsing tag attributes 2: non-existing tag', function() {
    const attributes = htmlAttributeParser(text2)['attributes'];
    assert(attributes['sometag'] === undefined);
  });

  it('Assert parsing tag value', function() {
    assert(htmlAttributeParser(text)['value'] === 'Hello world');
  });

  it('Assert parsing tag value 2', function() {
    assert(htmlAttributeParser(text2)['value'] === 'Lecture 3');
  });
});