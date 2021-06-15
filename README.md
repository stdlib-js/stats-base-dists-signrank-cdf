<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Cumulative Distribution Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Wilcoxon signed rank test statistic [cumulative distribution function][cdf].

<section class="intro">

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-signrank-cdf
```

</section>

<section class="usage">

## Usage

```javascript
var cdf = require( '@stdlib/stats-base-dists-signrank-cdf' );
```

#### cdf( x, n )

Evaluates the [cumulative distribution function][cdf] of the Wilcoxon signed rank test statistic with `n` observations.

```javascript
var y = cdf( 7.0, 9 );
// returns ~0.037

y = cdf( 7.0, 6 );
// returns ~0.281

y = cdf( -1.0, 40 );
// returns 0.0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = cdf( NaN, 8 );
// returns NaN

y = cdf( 0.0, NaN );
// returns NaN
```

If provided `x < 0`, the function returns `NaN`.

```javascript
var y = cdf( 2.0, -1.0 );
// returns NaN
```

If not provided a positive integer for `n`, the function returns `NaN`.

```javascript
var y = cdf( 2.0, 0 );
// returns NaN

y = cdf( 2.0, -2 );
// returns NaN

y = cdf( 2.0, 8.9 );
// returns NaN
```

#### cdf.factory( n )

Returns a function for evaluating the [cumulative distribution function][cdf] of the Wilcoxon signed rank test statistic with `n` observations.

```javascript
var mycdf = cdf.factory( 8 );
var y = mycdf( 3.9 );
// returns ~0.027

y = mycdf( 17.0 );
// returns ~0.473
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var ceil = require( '@stdlib/math-base-special-ceil' );
var randu = require( '@stdlib/random-base-randu' );
var cdf = require( '@stdlib/stats-base-dists-signrank-cdf' );

var n;
var x;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    x = randu() * 30.0;
    n = ceil( randu() * 30.0 );
    y = cdf( x, n );
    console.log( 'x: %d, n: %d, F(x;n): %d', x.toFixed( 4 ), n.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-signrank-cdf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-signrank-cdf

[test-image]: https://github.com/stdlib-js/stats-base-dists-signrank-cdf/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/stats-base-dists-signrank-cdf/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-signrank-cdf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-signrank-cdf?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-signrank-cdf
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-signrank-cdf/main

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-signrank-cdf/main/LICENSE

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

</section>

<!-- /.links -->
