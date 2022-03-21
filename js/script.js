$(document).ready(function() {
function Pizza(Size, Toppings, Crust, Total, Order-No) {
    this.Order-No = Order-No;
    this.Size = Size;
    this.Toppings = Toppings;
    this.Crust = Crust;
    this.total = Total;
   
  }


  $('#new-order').click(function() {
    var sizeOfPizza = $(".size option:selected").val();
    var toppingsOfPizza = $(".toppings option:selected").val();
    var crustOfPizza = $(".crust option:selected").val();
    var total = parseInt(sizeOfPizza) + parseInt(toppingsOfPizza) + parseInt(crustOfPizza);
    order = order + 1;
    grandTotal = grandTotal + total;

    var newPizza = new Pizza(sizeOfPizza, toppingsOfPizza, crustOfPizza, total, order);

    var newRow = '<tr><th scope="row">' + newPizza.orderNo + '</th><td id="size">' + $(".size option:selected").text() + " - " + newPizza.size + '</td><td id="toppings">' + $(".toppings option:selected").text() + " - " + newPizza.toppings + '</td><td id="crust">' + $(".crust option:selected").text() + " - " + newPizza.crust + '</td><td id="total">' + newPizza.total + '</td></tr>'

    $("#pizza").append(newRow);
});