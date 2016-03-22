$ (document).ready(function() {
  $('button#cat').click(function(){
    $('ul#cat-speak').empty().append('<li>Meow</li>')
    $('ul#dog-speak').empty().append('<li>What up cat!</li>')
  });

  $('button#dog').click(function(){
    $('ul#cat-speak').empty().append('<li>What up dog!</li>')
    $('ul#dog-speak').empty().append('<li>Bark!</li>')
  });
});
