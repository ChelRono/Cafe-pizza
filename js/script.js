$(document).ready(function() {
function Pizza(OrderNo, Size, Toppings, Crust, Total) {
    this.OrderNo = OrderNo;
    this.Size = Size;
    this.Toppings = Toppings;
    this.Crust = Crust;
    this.Total = Total;
   
  }


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