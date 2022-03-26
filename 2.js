var test_data = [
    {
        "input": "3aabacbebebe",
        "output": "cbebebe"
    },
    {
        "input": "2aabbcbbbadef",
        "output": "bbcbbb"
    },
    {
        "input": "2aabbacbaa",
        "output": "aabba"
    }
];

function search_sub(k, str, startindex) {
    var set = new Set();
    set.add(str[startindex]);
    var last_index = startindex;
    for(var i = startindex + 1; i < str.length; i++) {
        //console.log("set length", set.size);
        if (set.size + 1 <= k) {
            set.add(str[i]);
            last_index = i;
        } else {
            console.log("set.size", set.size);
            break;
        }
    }
    //console.log("last_index", last_index);
    //return str.slice(startindex - 1, last_index + 1)
    return str.slice(startindex, last_index)
}

function search(str) {
    var k = Number(str[0])
    str = str.slice(1, str.length);

    console.log("k", k)
    console.log("str", str)

    var arr = []
    var max_len = Number.MIN_SAFE_INTEGER;
    var max_len_index = 0;
    for(var i = 0; i < str.length - 1; i++) {
        var sub_str = search_sub(k, str, i);
        arr.push(sub_str);
        if (sub_str.length > max_len) {
            max_len = sub_str.length;
            max_len_index = i;
        }
        console.log("sub_str", sub_str)
    }

    return arr[max_len_index]
}

function tests() {
    for(i = 0; i < test_data.length; i++) {
        var answer = search(test_data[i].input);
        if (answer != test_data[i].output) {
            console.log("test ", i, "error:", answer, "instead of", test_data[i].output);
        } else {
            console.log("test ", i, " passed");
        }
        console.log("-------------------------------------------------")
    }
}

/*
console.log("01234".slice(0, 0));
console.log("01234".slice(1, 0));
console.log("01234".slice(6, 0));
console.log("01234".slice(6, 1));
console.log("01234".slice(1, 5));
console.log("01234".slice(2, 2));
console.log("01234".slice(2, 3));
*/

tests()
