

function filterProductsHelper(queries){
    /***************************preparing properties to be used in find method for db************************************/
    let { price , categ , rating} = queries;
    let filter = {};

    if(price){
        price =price.split(' - ');
        price[0] = parseInt(price[0]);
        price[1] = parseInt(price[1]);

        // we will use this to find products in this price range from min to max
        filter.price = { $gt : price[0] , $lt : price[1] }
    }
    if(rating){
        filter.rating = {$gte:parseInt(rating)}
    }

    if(categ){
        filter.category = categ
    }
    console.log("filter" , filter)
    return filter
}



module.exports = filterProductsHelper