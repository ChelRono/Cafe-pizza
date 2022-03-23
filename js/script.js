
/*$(".table").hide();
$(".additional-info").hide();
$(".info").hide();
$("#yes").hide();
$("#no").hide();
$(".received").hide();*/


$(document).ready(function() {
  $('#order1').click(function(event) {


    event.preventDefault();

    var sizeOfPizza = parseInt($(".size option:selected").val());
    var toppingsOfPizza = parseInt($(".toppings option:selected").val());
    var crustOfPizza = parseInt($(".crust option:selected").val());
    var numberOfPizza = parseInt($("#number-pizza").val());


    var total = (sizeOfPizza + toppingsOfPizza + crustOfPizza)*numberOfPizza;
    var order = 1;
    var grandTotal = 0;

    $(".table").show();

    $(".additional-info").show();
    $("#order1").hide();

    $("#orderNo").text(order);
    $("#size").text($(".size option:selected").text());
    $("#toppings").text($(".toppings option:selected").text());
    $("#crust").text($(".crust option:selected").text());
  
    $("#total").html(total);
    


    function  Pizza(size, toppings, crust, total, orderNo) {
      this.size = size;
      this.toppings = toppings;
      this.crust = crust;
      this.total = total;
      this.orderNo = orderNo;
    }
  $('#add-order').click(function(event) {
    event.preventDefault();
    var sizeOfPizza = parseInt($(".size option:selected").val());
    var toppingsOfPizza = parseInt($(".toppings option:selected").val());
    var crustOfPizza = parseInt($(".crust option:selected").val());
    var numberOfPizza = parseInt($("#number-pizza").val());


    var total = (sizeOfPizza + toppingsOfPizza + crustOfPizza)*numberOfPizza;
    order = order + 1;
    grandTotal = grandTotal + total;
    

    var newPizza = new Pizza(sizeOfPizza, toppingsOfPizza, crustOfPizza, grandTotal, order );

    
    // var newRow = '<tr><th scope="row">' + newPizza.orderNo + '</th><td id="size">' + $(".size option:selected").text() + " - " + newPizza.size + '</td><td id="toppings">' + $(".toppings option:selected").text() + " - " + newPizza.toppings + '</td><td id="crust">' + $(".crust option:selected").text() + " - " + newPizza.crust + '</td><td id="total">' + newPizza.total + '</td></tr>'
    var newRow = '<tr><th scope="row">' + newPizza.orderNo + '</th><td id="size">' + $(".size option:selected").text()+ '</td><td id="toppings">' + $(".toppings option:selected").text()+ '</td><td id="crust">' + $(".crust option:selected").text()+ '</td><td id="total">' + newPizza.total + '</td></tr>'

    
    $("#pizza").append(newRow);
  });

  $("#checkout").click(function() {
    $("#add-order").hide();
    $("#checkout").hide();
    $(".additional-info").show();
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
    grandTotal += 150;
  });
  $("#no").click(function() {
    $(".delivery").hide();
    $("#yes").hide();
    $("#no").hide();
    alert("Your order is ready! Your GRAND TOTAL is khs " + grandTotal)
  });
  $("#done").click(function() {
    var location = $(".location").val();
    $(".received").show();
    $(".location").hide();
    $(".received ").html(location);
    alert("Your order will be dispatched to you shortly! Your GRAND TOTAL is khs " + grandTotal)
  });
});

})

