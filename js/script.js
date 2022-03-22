

$("table").hide();
$("additional-buttons").hide();
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

  $("table").show();
  $("#add").show();
  $("#order").hide();

  $("#Size").html($(".size option:selected").text() + " - " + sizeOfPizza);
  $("#Toppings").html($(".toppings option:selected").text() + " - " + toppingsOfPizza);
  $("#Crust").html($(".crust option:selected").text() + " - " + crustOfPizza);
  $("#Total").html(total);

  function Add(OrderNo, Size, Toppings, Crust, total) {
      this.OrderNo = OrderNo;
      this.Size = Size;
      this.Toppings = Toppings;
      this.Crust = Crust;
      this.Total = total;
  }
  


  $(document).ready(function() {
    $("#add").click(function(event) {
        event.preventDefault();

    var sizeOfPizza = $(".size option:selected").val();
    var toppingsOfPizza = $(".toppings option:selected").val();
    var crustOfPizza = $(".crust option:selected").val();
    var total = parseInt(sizeOfPizza) + parseInt(toppingsOfPizza) + parseInt(crustOfPizza);
    order = order + 1;
    grandTotal = grandTotal + total;

    var newAdd = new Add(sizeOfPizza, toppingsOfPizza, crustOfPizza, total, order);

    

    var newRow = '<tr><th scope="row">' + newAdd.OrderNo + '</th><td id="Size">' + $(".size option:selected").text() + " - " + newAdd.Size + '</td><td id="Toppings">' + $(".toppings option:selected").text() + " - " + newAdd.Toppings + '</td><td id="Crust">' + $(".crust option:selected").text() + " - " + newAdd.Crust + '</td><td id="Total">' + newAdd.Total + '</td></tr>'

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
    alert("Thank you!")
  });
  
});
})
})
