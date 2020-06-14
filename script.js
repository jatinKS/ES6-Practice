function add(...num){
    let total = num.reduce(function(x,y){
        return x+y;
    });
    console.log(total);
}
add(1,2,3,4);