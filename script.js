console.log('Hello!');
//console.log($('#p1').text());
//console.log($('p[id]').text());
$('p[id=p1][lang^=en]').text('En');
$('p[id=p2][lang^=fr]').text('Fr');
$('p:last').text('Last');
$('p:not(:last)').text('Not last');
$('p:eq(0)').text('First');
//$('p[id=p1]').text('text');

