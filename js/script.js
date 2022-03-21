function Pizza(Size, Toppings, Crust, Total, Order No) {
    this.Order No = Order No;
    this.size = Size;
    this.toppings = Toppings;
    this.crust = Crust;
    this.total = Total;
   
  }


  $('.btn.add-pizza').click(function() {
    var sizeOfPizza = $(".size option:selected").val();
    var toppingsOfPizza = $(".toppings option:selected").val();
    var crustOfPizza = $(".crust option:selected").val();
    var total = parseInt(sizeOfPizza) + parseInt(toppingsOfPizza) + parseInt(crustOfPizza);
    order = order + 1;
    grandTotal = grandTotal + total;

