//input = [10, 12, 4, 5, 9]
//input = [14, 20, 4, 12, 5, 11]
//input = [10, 9, 8, 2]
input = [44, 30, 24, 32, 35, 30, 40, 38, 15];

// лучший результат продажи данного товара
function best(value, startindex) {
    // алгоритм поиска максимального значения
    var max = Number.MIN_SAFE_INTEGER;
    for(var i = startindex;i < input.length;i++) {
        // выгода при продаже товара
        var profit = input[i] - value;
        if (profit > max) { max = profit; };
    }
    return max;
}

function maxprofit() {
    // алгоритм поиска максимального значения
    var max = Number.MIN_SAFE_INTEGER;
    for(var i=0; i<input.length - 1;i++) {
        // найти сколько можно заработать при продаже товара купленного по
        // цене value и проданного в следующие дни
        var profit = best(input[i], i+1);
        //console.log("value, startindex, profit", input[i], i+1, profit)
        if (profit>max) { 
            max = profit; 
        }
    }
    // нет выгоды
    if (max == Number.MIN_SAFE_INTEGER) {
        max = -1;
    }
    return max;
}

console.log("maxprofit", maxprofit())
