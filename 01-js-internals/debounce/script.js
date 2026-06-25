let count = 0
function getData(){
    console.log("key pressed", ++count)
}

const doSomeMagic = function(fn, d){
    let timer;
    return function(){
        clearTimeout(timer)
        timer = setTimeout(() => fn(), d)
    }
}

const debounce = doSomeMagic(getData, 300)