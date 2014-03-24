RunAwayBtn
==========

Run away button.

## demo

 - http://fnobi.github.io/RunAwayBtn/demo/

## dependencies
 - [jquery](http://github.com/jquery/jquery)

## usage

```javascript
var btn = new RunAwayBtn({
  $el: $('#run-away-btn'),
  xMargin: 50,
  yMargin: 50
});

btn.on('jump', function () {
  console.log('jump');
});

btn.on('jump:4', function () {
  alert('this is 4th jump!\nand, good bye.');
  btn.jumpTo(-100, -100);
});
```
