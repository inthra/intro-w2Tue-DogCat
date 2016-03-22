$ (document).ready(function() {
  $('button#cat').click(function(){
    $('ul#cat-speak').append('<li>Meow</li>')
    $('ul#dog-speak').append('<li>What up cat!</li>')
  });
  $('button#dog').click(function(){
    $('ul#cat-speak').append('<li>What up dog!</li>')
    $('ul#dog-speak').append('<li>Bark!</li>')
  });
});
