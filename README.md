RunAwayBtn
==========

Run away button.

## dependencies
 - [jquery](http://github.com/jquery/jquery)

## usage

```html
<html>
<head>
<title>RunAwayBtn demo</title>
<style>
.btn {
  display: inline-block;
  background-color: white;
  box-shadow: 0px 0px 0.2em black;
  padding: 0.2em;
}
</style>
</head>
<body>
<div id="run-away-btn" class="btn">click me!</div>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script src="../RunAwayBtn.js"></script>
<script>
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
</script>
</body>
</html>
```
