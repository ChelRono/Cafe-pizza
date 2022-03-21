
// $(document).ready(function() {
//     $("#add").click(function() {
//         $("#new-order").append(
//            <tr>
//       <><th scope="row">1</th><td id="newPizza.OrderNo"></td><td id="newPizza.size"></td><td id="newPizza.toppings"></td><td id="newPizza.crust"></td><td id="newPizza.total"></td></>
//     </tr>)
    
//     });
    
function Pizza(OrderNo, Size, Toppings, Crust, Total) {
    this.OrderNo = OrderNo;
    this.Size = Size;
    this.Toppings = Toppings;
    this.Crust = Crust;
    this.Total = Total;
   
  }


  $("#add-order").submit(function(event) {
    event.preventDefault();

    var inputtedSize = $("#size").val();
    var inputtedToppings = $("#toppings").val();
    var inputtedCrust = $("#crust").val();
    var total = parseInt(inputtedSize) + parseInt(inputtedToppings) + parseInt(inputtedCrust);
    order = order + 1;
    grandTotal = grandTotal + total;



    var newOrder = new Pizza (parseInt(inputtedSize) + parseInt(inputtedToppings) + parseIn(inputtedCrust));
    order = order + 1;
    grandTotal = grandTotal + total;

    newOrder = new Pizza(inputtedSize, inputtedToppings, inputtedCrust, total, order);

    var newRow = '<tr><th scope="row">' + newPizza.orderNo + '</th><td id="size">' + $(".size option:selected").text() + " - " + newPizza.size + '</td><td id="toppings">' + $(".toppings option:selected").text() + " - " + newPizza.toppings + '</td><td id="crust">' + $(".crust option:selected").text() + " - " + newPizza.crust + '</td><td id="total">' + newPizza.total + '</td></tr>'

    $("#pizza").append(newRow);
   
  });

  $(".btn.check-out").click(function() {
    $("#add-order").hide();
    $(".btn.check-out").hide();
    $(".info").show();
    $(".location").hide();
    grandTotal = grandTotal + total;
  });
  $("#yes").click(function() {
    $(".info h5").hide();
    $("#yes").hide();
    $("#no").hide();
    $(".location").show();
    $(".additional-info h3 span").html(grandTotal + 150);
  });
  $("#yes").click(function() {
    $(".info h5").hide();
    $("#yes").hide();
    $("#no").hide();
    $(".location").show();
  });
  $("btn btn-primary").click(function() {
    var location = $(".location input").val();
    $(".info h4").show();
    $(".location").hide();
    // $(".additional-info h4 span").html(location);
  });