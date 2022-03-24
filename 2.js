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

function search(str) {
    return "cbebebe"
}

function tests() {
    for(i = 0; i < test_data.length; i++) {
        var answer = search(test_data[i].input);
        if (answer != test_data[i].output) {
            console.log("test ", i, "error:", answer, "instead of", test_data[i].output);
        } else {
            console.log("test ", i, " passed");
        }
    }
}

tests()
