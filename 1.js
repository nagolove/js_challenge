var test_data = [
    {
        "input": [10, 12, 4, 5, 9],
        "output": 5
    },
    {
        "input": [14, 20, 4, 12, 5, 11],
        "output": 8
    },
    {
        "input": [10, 9, 8, 2],
        "output": -1
    },
    {
        "input": [44, 30, 24, 32, 35, 30, 40, 38, 15],
        "output": 16
    }
]

// лучший результат продажи данного товара
function best(input, value, startindex) {
    // алгоритм поиска максимального значения
    var max = Number.MIN_SAFE_INTEGER;
    for(var i = startindex;i < input.length;i++) {
        // выгода при продаже товара
        var profit = input[i] - value;
        if (profit > max) { max = profit; };
    }
    return max;
}

function maxprofit(input) {
    // алгоритм поиска максимального значения
    var max = Number.MIN_SAFE_INTEGER;
    for(var i=0; i<input.length - 1;i++) {
        // найти сколько можно заработать при продаже товара купленного по
        // цене value и проданного в следующие дни
        var profit = best(input, input[i], i+1);
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

function tests() {
    for(i = 0; i < test_data.length; i++) {
        var answer = maxprofit(test_data[i].input);
        if (answer != test_data[i].output) {
            console.log("test ", i, "error:", answer, "instead of", test_data[i].output);
        } else {
            console.log("test ", i, " passed");
        }
    }
}

//console.log("maxprofit", maxprofit())
tests()
