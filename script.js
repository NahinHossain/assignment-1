
var products = [
  {name: "HORNET ORANGE EDDTION", price: "5500", image: "image/ab.jpg"},
  {name: "CBR BLACK ", price: "7500", image: "image/abc.jpg"},
  {name: "REPSOL SPECIAL EDDITION", price: "7550", image: "image/abcd.jpg"},
  {name: "SPECIAL ", price: "9500", image: "image/bd.jpg"},
  {name: "RED AND WHITE CBR", price: "7500", image: "image/CBR.jpg"},
  {name: "HORNET GREEN", price: "5550", image: "image/HORNET.jpg"},
  {name: "X BLEAD", price: "5050", image: "image/index.jpg"},
  {name: "REPSOL CBR", price: "7555", image: "image/indexx.jpg"},

];
var cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')):{
  items: [],
  total: 0
};

localStorage.setItem('cart',JSON.stringify(cart));

$(document).ready(function(){

    $('#itemNo').text(cart.items.length);

    products.forEach(function(product, index){
      var colDiv = $('<div>').addClass('col-md-4');
      var cardDiv = $('<div>').addClass('card');

      var prodImg = $('<img>').addClass('card-img-top');
      prodImg.attr('src', product.image);
      cardDiv.append(prodImg);

      var cardBody = $('<div>').addClass('card-body');
      cardDiv.append(cardBody);

      var productTitle = $('<h5>').addClass('carf-title').text(product.name);
      cardBody.append(productTitle);

      var produtPrice = $('<p>').addClass('card-text').text("$" + product.price);
      cardBody.append(produtPrice);
     
      var addtoCartbtn = $('<button>').addClass('btn btn-primary').text('Add to Cart').attr('id', index);
      cardBody.append(addtoCartbtn);

      addtoCartbtn.click(function(event){
        var cartItem = products[event.target.id];
        cartItem.quantity = 1;
        cart.items.push(cartItem);
        $('#itemNo').text(cart.items.length);
        localStorage.setItem('cart',JSON.stringify(cart));
      });



      cardDiv.append(cardBody);


      colDiv.append(cardDiv);

      $('#prod-row').append(colDiv);
    });
  
  $("#showCartBtn").click(function(){
    $("#cart").show();
    $("#products").hide();
    $("#showCartBtn").hide();
  });

  $("#showProdBtn").click(function(){
    $("#cart").hide();
    $("#products").show();
    $("#showCartBtn").show();
  });

  console.log("Start here");
 
});
