$(document).ready(function() {
    $("#add").click(function() {
        $("#new-order").append(
            var newRow = '<tr><th scope="row">' + newPizza.orderNo + '</th><td id="size">' + $("#size").text() + " - " + newPizza.size + '</td><td id="toppings">' + $("#toppings").text() + " - " + newPizza.toppings + '</td><td id="crust">' + $("#crust").text() + " - " + newPizza.crust + '</td><td id="total">' + newPizza.total + '</td></tr>'
            $("#pizza").append(newRow);
    });
// function Pizza(OrderNo, Size, Toppings, Crust, Total) {
//     this.OrderNo = OrderNo;
//     this.Size = Size;
//     this.Toppings = Toppings;
//     this.Crust = Crust;
//     this.Total = Total;
   
//   }


  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedSize = $("#size").val();
    var inputtedToppings = $("#toppings").val();
    var inputtedCrust = $("#crust").val();

    var newOrder = newOrder (parseInt(inputtedSize) + parseInt(inputtedToppings) + parseIn(inputtedCrust));
    order = order + 1;
    grandTotal = grandTotal + total;

    var newPizza = new Pizza(inputtedSize, inputtedToppings, inputtedCrust, total, order);

    var newRow = 

    $("#pizza").append(newRow);
  });
});