
$(document).ready(function() {
var string = "";
var screen = $('#screen');
var total;
  $('span').on('click',function(event) {
    var input = $(event.target).text();
      console.log(typeof(input));
      string+=input
      console.log(string);
      //screen.append(string);
      screen.html(string);

    $('#equals').click(function(event){

      var result= string.replace(/=/g,'');
      for(i= 0;i<result.length;i++){
    if(result[i] === '÷'){ result = result.replace(/÷/g,'/');};
    if (result[i]=== 'x'){ result = result.replace(/x/g,'*')}
    }
       total = eval(result);
      screen.html(total );
      console.log(total);
      });
      $('#clear').click(function(event){
        screen.html("");
        string= '';
      })
    });
  });
