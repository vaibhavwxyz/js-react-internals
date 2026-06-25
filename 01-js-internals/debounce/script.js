let count = 0
function getData(){
    console.log("key pressed", ++count)
}

const doSomeMagic = function(fn, d){
    return function(){
        setTimeout(() => fn(), d)
    }
}

const debounce = doSomeMagic(getData, 300)