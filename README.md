# CSS

[![Version](https://flat.badgen.net/npm/v/@unsass/css)](https://www.npmjs.com/package/@unsass/css)
[![Downloads](https://flat.badgen.net/npm/dt/@unsass/css)](https://www.npmjs.com/package/@unsass/css)
[![License](https://flat.badgen.net/npm/license/@unsass/css)](https://www.npmjs.com/package/@unsass/css)

## Introduction

Easily manage your CSS declarations.

> **Note:** this is new code moved
> from [`@sass-collective/css`](https://github.com/sass-collective/sass-collective/tree/master/packages/css) repository.

## Installing

```shell
npm install @unsass/css
```

## Usage

```scss
@use "@unsass/css";

.foo {
    @include css.declaration(color, darkcyan);
}
```

## API

### Sass mixins

| Mixin                                        | Description                                           |
|----------------------------------------------|-------------------------------------------------------|
| `declaration($property, $value, $important)` | Sets new CSS declaration, with optional `!important`. |

#### Add a new declaration with `css.declaration()`

The following Sass...

```scss
@use "@unsass/css";

.foo {
    @include css.declaration(color, darkcyan); // Standard declaration.
    @include css.declaration(font-size, 16px, true); // Declaration with `!important`.
    @include css.declaration(box-shadow, (0 0 10px 5px rgba(darkcyan, 0.75), inset 0 0 10px 5px rgba(darkcyan, 0.75))); // Use parentheses for declare comma-separated values list.
}
```

...will produce the following CSS...

```css
.foo {
    color: darkcyan;
    font-size: 16px !important;
    box-shadow: 0 0 10px 5px rgba(darkcyan, 0.75), inset 0 0 10px 5px rgba(darkcyan, 0.75);
}
```
