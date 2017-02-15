$(document).ready(function(){
  $("#formOne").submit(function(event){
    var companyInput = $("input#company").val();
    var numberInput = $("input#number").val();
    var nameInput = $("input#name").val();
    var addressInput = $("input#address").val();
    var emailInput = $("input#email").val();

    $(".company").text(companyInput);
    $(".number").text(numberInput);
    $(".name").text(nameInput);
    $(".address").text(addressInput);
    $(".email").text(emailInput);

    $("#letter").show();

    event.preventDefault();
  });
});
