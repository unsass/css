# CSS

[![Version](https://flat.badgen.net/npm/v/@unsass/css)](https://www.npmjs.com/package/@unsass/css)
[![Downloads](https://flat.badgen.net/npm/dt/@unsass/css)](https://www.npmjs.com/package/@unsass/css)
[![License](https://flat.badgen.net/npm/license/@unsass/css)](https://www.npmjs.com/package/@unsass/css)

## Introduction

Sass mixins to manage CSS declarations with custom properties option.

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

#### Add a custom property declaration with `css.declaration()`

The following Sass...

```scss
@use "@unsass/css";
@use "@unsass/css/custom-porperties";

.foo {
    @include css.declaration(custom-properties.create(--foo, darkcyan));
    @include css.declaration(color, custom-properties.create(--foo, darkcyan));
    @include css.declaration(color, custom-properties.create(--foo, custom-properties.create(--bar, darkcyan)));
}
```

...will produce the following CSS...

```css
.foo {
    --foo: darkcyan;
    color: var(--foo, darkcyan);
    color: var(--foo, var(--bar, darkcyan));
}
```
