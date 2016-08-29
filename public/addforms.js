$(function() {
  console.log('hello world :o');
  $(document).ready(function(){
    $("#form-sheds").load("/form-shed.html");
    $("#form-verandas").load("/form-verandas.html");
    $("#form-fences").load("/form-fences.html");
  });
});
