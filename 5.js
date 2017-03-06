//----------------------------------------5. Hello World for functions

function math(a,b) {

    var c =  Math.min(2, 2) == 2;
    console.log(c);

    var d = Math.min(3, -1) == -1;
    console.log(d);

    var e = Math.min(1, 3) == 3;
    console.log(e);


    //- что вернет твоя функция, если вызвать `min(10, 12)`?

    var f = Math.min(10, 12) == 2;
    console.log(f);

    var g = Math.min(10, 12) == -1;
    console.log(g);
    
    var h = Math.min(10, 12) == 3;
    console.log(h);

};

//all false



math();