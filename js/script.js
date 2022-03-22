
$(".table").hide();
$("#add-order").hide();
$(".info").hide();
$("#yes").hide();
$("#no").hide();
$(".received").hide();


$(document).ready(function() {
  $("#order").click(function(event) {
      event.preventDefault();

  var sizeOfPizza = $(".size option:selected").val();
  var toppingsOfPizza = $(".toppings option:selected").val();
  var crustOfPizza = $(".crust option:selected").val();
  var total = parseInt(sizeOfPizza) + parseInt(toppingsOfPizza) + parseInt(crustOfPizza);
  var order = 1;
  var grandTotal = 0;

  $(".table").show();
  $("#add-order").show();
  $("#order").hide();

  $("#Size").html($(".size option:selected").text() + " - " + sizeOfPizza);
  $("#Toppings").html($(".toppings option:selected").text() + " - " + toppingsOfPizza);
  $("#Crust").html($(".crust option:selected").text() + " - " + crustOfPizza);
  $("#Total").html(total);

  function Pizza(Size, Toppings, Crust, total, OrderNo,) {
      this.Size = Size;
      this.Toppings = Toppings;
      this.Crust = Crust;
      this.Total = total;
      this.OrderNo = OrderNo;
  }
  $('add-order').click(function() {
    var sizeOfPizza = $(".size option:selected").val();
    var toppingsOfPizza = $(".toppings option:selected").val();
    var crustOfPizza = $(".crust option:selected").val();
    var total = parseInt(sizeOfPizza) + parseInt(toppingsOfPizza) + parseInt(crustOfPizza);
    order = order + 1;
    grandTotal = grandTotal + total;


    var newPizza = new Pizza(sizeOfPizza, toppingsOfPizza, crustOfPizza, grandTotal, order );

    

    var newRow = '<tr><th scope="row">' + newPizza.orderNo + '</th><td id="size">' + $(".size option:selected").text() + " - " + newPizza.size + '</td><td id="toppings">' + $(".toppings option:selected").text() + " - " + newPizza.toppings + '</td><td id="crust">' + $(".crust option:selected").text() + " - " + newPizza.crust + '</td><td id="total">' + newPizza.total + '</td></tr>'

    $("#pizza").append(newRow);
   
  });

  $("#checkout").click(function() {
    $("#add-order").hide();
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
    // $(".location").show();
    alert("Your order is ready!")
  });
  $("#done").click(function() {
    var location = $(".location").val();
    $(".received").show();
    $(".location").hide();
    $(".received ").html(location);
    alert("Your order will be dispatched to you shortly!")
  });
  
});
})

