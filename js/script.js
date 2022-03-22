
$(".table").hide();
$(".info").hide();
$("#yes").hide();
$("#no").hide();
$(".received").hide();


$('#order').click(function() {
  var sizeOfPizza = $("#size").val();
  var toppingsOfPizza = $("#toppings").val();
  var crustOfPizza = $("#crust").val();
  var total = parseInt(sizeOfPizza) + parseInt(toppingsOfPizza) + parseInt(crustOfPizza);
  var order = 1;
  var grandTotal = 0;

  $(".table").show();
  $("#order").hide();

  $("#size").html($("#size").text() + " - " + sizeOfPizza);
  $("#toppings").html($("#toppings").text() + " - " + toppingsOfPizza);
  $("#crust").html($("#crust").text() + " - " + crustOfPizza);
  $("#total").html(total);

  function order (OrderNo, Size, Toppings, Crust, total) {
      this.OrderNo = OrderNo;
      this.size = Size;
      this.toppings = Toppings;
      this.crust = Crust;
      this.total = total;
  }
  


  $("#new-order").submit(function(event) {
    event.preventDefault();

    var inputtedSize = $("#size").val();
    var inputtedToppings = $("#toppings").val();
    var inputtedCrust = $("#crust").val();
    var total = parseInt(inputtedSize) + parseInt(inputtedToppings) + parseInt(inputtedCrust);
    order = order + 1;
    grandTotal = grandTotal + total;



    newOrder = new Order (parseInt(inputtedSize) + parseInt(inputtedToppings) + parseInt(inputtedCrust));
    order = order + 1;
    grandTotal = grandTotal + total;

    newOrder = new Order(inputtedSize, inputtedToppings, inputtedCrust, total, order);

    var newRow = '<tr><th scope="row">' + newOrder.orderNo + '</th><td id="Size">' + $("#Size").text() + " - " + newOrder.Size + '</td><td id="Toppings">' + $("#Toppings").text() + " - " + newOrder.Toppings + '</td><td id="Crust">' + $("#Crust").text() + " - " + newOrder.Crust + '</td><td id="Total">' + newOrder.Total + '</td></tr>'

    $("#pizza").append(newRow);
   
  });

  $("#checkout").click(function() {
    $("#add-order").hide();
    $("#checkout").hide();
    $(".info").show();
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
  $("#yes").click(function() {
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
