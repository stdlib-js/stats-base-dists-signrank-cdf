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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Cumulative Distribution Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Wilcoxon signed rank test statistic [cumulative distribution function][cdf].

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import cdf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-signrank-cdf@esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { factory } from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-signrank-cdf@esm/index.mjs';
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

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import ceil from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ceil@esm/index.mjs';
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@esm/index.mjs';
import cdf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-signrank-cdf@esm/index.mjs';

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

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-signrank-cdf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-signrank-cdf

[test-image]: https://github.com/stdlib-js/stats-base-dists-signrank-cdf/actions/workflows/test.yml/badge.svg?branch=v0.2.3
[test-url]: https://github.com/stdlib-js/stats-base-dists-signrank-cdf/actions/workflows/test.yml?query=branch:v0.2.3

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-signrank-cdf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-signrank-cdf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-signrank-cdf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-signrank-cdf/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-signrank-cdf/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists-signrank-cdf/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists-signrank-cdf/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists-signrank-cdf/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists-signrank-cdf/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists-signrank-cdf/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists-signrank-cdf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-signrank-cdf/main/LICENSE

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

</section>

<!-- /.links -->
