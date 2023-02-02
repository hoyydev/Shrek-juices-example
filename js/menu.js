$(document).ready(function() {
    // qty
    $(".qtyminus").on("click",function(){
        var now = $(".qty").val();
        if ($.isNumeric(now)){
            if (parseInt(now) -1> 0)
            { now--;}
            $(".qty").val(now);
        }
    });
    $(".qtyplus").on("click",function(){
        var now = $(".qty").val();
        if ($.isNumeric(now)){
            $(".qty").val(parseInt(now)+1);
        }
    });


    // add to cart
    // $('#cart').hide();
    // $(".fa-cart-shopping").mouseenter(function(){
    //     $('#cart').show();
    // })
    // $('#cart').mouseleave(function(){
    //     $('#cart').hide();
    // })

    // var cart_item_count = 0;
    // $('.round-black-btn').click(function(){
    //     cart_item_count++;
    //     var img_src = $(this).parents(".item").siblings("img").attr("src");
    //     var titlte = $(this).parents(".col-md-6").find(".product-name").text();
    //     var price = $(this).parents(".col-md-6").find("span:nth-child(1)").text();
    //     var qtys = $(this).parents(".product-count").find(".qty").val();


    //     var cart_item = `
    //     <div class="main d-flex p-3 border border-left-0 border-right-0 border-top-0">
    //         <div class="col-md-3 border border-left-0 border-top-0 border-bottom-0">
    //             <img src=${img_src} class="w-100"/>
    //         </div>
    //         <div id="title" class="col-md-3 d-flex flex-wrap align-content-center"
    //             <h6 style="font-size:13px;">${titlte}</h6>
    //         </div>
    //         <div class=" col-md-3 d-flex flex-wrap align-content-center">
    //             <span class="mx-2"> ${qtys} </span>
    //         </div>
    //         <div class="col-md-2 d-flex flex-wrap align-content-center" id="t_price"> 
    //             <h6 class=" mt-2 d-flex"><span class="cart_item_price">${price}</span></h6>
    //         </div>
    //         <div class="col-md-1 d-flex flex-wrap align-content-center"> 
    //             <span class="close" style="cursor: pointer; font-size:25px;">&times;</span>
    //         </div>
    //     </div>

    //     `

    //     $("#order").append(cart_item);

    //     $("#cart_item_count").text(cart_item_count);
    //     $(".close").click(function(){
    //         $(this).parents(".main").remove();
    //         item_count();
    //     });
    //     item_count();
    //  })
    // function item_count(){
    //     var res = $("#order").children().length;
    //     $("$cart_item_count").text(res);

    // }
});
function search_animal() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('item');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}
