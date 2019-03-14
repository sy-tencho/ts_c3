"use strict";
exports.__esModule = true;
var c3 = require("c3");
var chart = c3.generate({
    bindto: '#chart',
    data: {
        type: 'donut',
        columns: [
            ['良い感じ', 50],
            ['ピンとこない', 50]
        ]
    },
    donut: {
        title: 'TypeScriptの印象は？'
    }
});
