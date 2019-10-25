const test = require('tape');
const ranger = require('./index.js');

test('test string numbers', function (t) {
    const result = [];
    const expect = [ 
        [ 0 ],
        [ 1 ],
        [ 2 ],
        [ 3 ],
        [ 4 ],
        [ 5 ],
        [ 6 ],
        [ 7 ],
        [ 8 ],
        [ 9 ],
        [ 10 ] 
    ]

    ranger(['0-10'], result.push.bind(result));

    t.deepEqual(result, expect);

    t.end();
});

test('test numeric numbers', function (t) {
    const result = [];
    const expect = [ 
        [ 0 ],
        [ 1 ],
        [ 2 ],
        [ 3 ],
        [ 4 ],
        [ 5 ],
        [ 6 ],
        [ 7 ],
        [ 8 ],
        [ 9 ],
        [ 10 ] 
    ]

    ranger([[0, 10]], result.push.bind(result));

    t.deepEqual(result, expect);

    t.end();
});

test('test letter range as string', function (t) {
    const result = [];
    const expect = [ [ 'A' ], [ 'B' ], [ 'C' ], [ 'D' ] ];

    ranger(['A-D'], result.push.bind(result));

    t.deepEqual(result, expect);

    t.end();
});

test('test letter range as arrays', function (t) {
    const result = [];
    const expect = [ [ 'A' ], [ 'B' ], [ 'C' ], [ 'D' ] ];

    ranger([['A', 'D']], result.push.bind(result));

    t.deepEqual(result, expect);

    t.end();
});
