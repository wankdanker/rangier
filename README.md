rangier
-------

Given an array of numeric or alphabetical character ranges execute a function for each combination

example
-------

```js
const rangier = require('rangier');

rangier(['1-10', 'a-b'], range => {
    console.log('combo: %s, %s', range[0], range[1]);
});
```

api
---

### rangier(ranges, fn);

* ranges: an array of ranges where a range may be one of the following
    * string character range: 'A-Z'
    * string numeric range: '0-100'
    * array character range: ['A', 'Z']
    * array numeric range: [0, 100]
* fn(range): a function that is called for each combination of all ranges specified
    * range: an array that contains as many elements as the ranges array passed to rangier

cli
---

The simple cli takes one or more `--range` options and then renders `--template` for each combination. 

```bash
rangier --range 1-2 --range 5-7 --range A-B --template "select 1, 11, 20, 0, '\${range[0]}', '\${range[1]}', '\${range[2]}'"

select 1, 11, 20, 0, '1', '5', 'A'
select 1, 11, 20, 0, '1', '5', 'B'
select 1, 11, 20, 0, '1', '6', 'A'
select 1, 11, 20, 0, '1', '6', 'B'
select 1, 11, 20, 0, '1', '7', 'A'
select 1, 11, 20, 0, '1', '7', 'B'
select 1, 11, 20, 0, '2', '5', 'A'
select 1, 11, 20, 0, '2', '5', 'B'
select 1, 11, 20, 0, '2', '6', 'A'
select 1, 11, 20, 0, '2', '6', 'B'
select 1, 11, 20, 0, '2', '7', 'A'
select 1, 11, 20, 0, '2', '7', 'B'
```

license
-------

MIT