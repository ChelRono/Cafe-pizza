

$("table").hide();
$("additional-buttons").hide();
$(".info").hide();
$("#yes").hide();
$("#no").hide();
$(".received").hide();


$(document).ready(function() {
  $("#order").click(function(event) {
      event.preventDefault();

  var sizeOfPizza = $("#size option:selected").val();
  var toppingsOfPizza = $("#toppings option:selected").val();
  var crustOfPizza = $("#crust option:selected").val();
  var total = parseInt(sizeOfPizza) + parseInt(toppingsOfPizza) + parseInt(crustOfPizza);
  var order = 1;
  var grandTotal = 0;

  $("table").show();
  $("#add").show();
  $("#order").hide();

  $("#Size").html($("#size option:selected").text() + " - " + sizeOfPizza);
  $("#Toppings").html($("#toppings option:selected").text() + " - " + toppingsOfPizza);
  $("#Crust").html($("#crust option:selected").text() + " - " + crustOfPizza);
  $("#Total").html(total);

  function Pizza(OrderNo, Size, Toppings, Crust, total) {
      this.OrderNo = OrderNo;
      this.size = Size;
      this.toppings = Toppings;
      this.crust = Crust;
      this.total = total;
  }
  


  $("#add").click(function(){

    var inputtedSize = $("#size option:selected").val();
    var inputtedToppings = $("#toppings option:selected").val();
    var inputtedCrust = $("#crust option:selected").val();
    var total = parseInt(inputtedSize) + parseInt(inputtedToppings) + parseInt(inputtedCrust);
    order = order + 1;
    grandTotal = grandTotal + total;



     var newOrder = new Order (parseInt(inputtedSize) + parseInt(inputtedToppings) + parseInt(inputtedCrust));
    order = order + 1;
    grandTotal = grandTotal + total;

    var newRow = '<tr><th scope="row">' + newOrder.orderNo + '</th><td id="Size">' + $("#size option:selected").text() + " - " + newOrder.Size + '</td><td id="Toppings">' + $("#toppings option:selected").text() + " - " + newOrder.Toppings + '</td><td id="Crust">' + $("#crust option:selected").text() + " - " + newOrder.Crust + '</td><td id="Total">' + newOrder.Total + '</td></tr>'

    $("#pizza").append(newRow);
   
  });

  $("#checkout").click(function() {
    $("#add").hide();
    $("#checkout").hide();
    $(".info").show();
    $("#yes").show();
    $("#no").show();
    $(".location").hide();
    grandTotal = grandTotal + total;
  });
  $("#yes").click(function() {
    $(".delivery").hide();
    $("#yes").hide();
    $("#no").hide();
    $(".location").show();
    (grandTotal + 150);
  });
  $("#no").click(function() {
    $("delivery").hide();
    $("#yes").hide();
    $("#no").hide();
    $(".location").show();
  });
  $("#done").click(function() {
    var location = $(".location").val();
    $(".received").show();
    $(".location").hide();
    $(".received ").html(location);
  });
  
});
})
