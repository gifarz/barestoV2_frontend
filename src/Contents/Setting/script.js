$("#login_yes").on('click',function() {
    console.log("clicked");
    //   $("#form_input_user").fadeIn();
    //   $("#form_input_user").css("display","block");
});
$("#login_no").on('click',function() {
console.log("clicked");
    // $("#form_input_user").fadeOut();
    // $("#form_input_user").css("display","none");
  
});

$("#select_all").on("click", function() {
    $('input:checkbox').not(this).prop('checked', this.checked);
});