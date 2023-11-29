# W3C Status Banners

## [Demo](http://zachleat.github.io/w3c-banners/)

## Usage

First include `<script type="module" src="w3c-banner.js"></script>` on your page.

```html
<w3c-banner text="W3C Candidate Recommendation"></w3c-banner>
<w3c-banner text="Unofficial Draft" color="green"></w3c-banner>
```

### Content

```html
<w3c-banner text="This works if you don’t want no-JS fallback text.">This overrides the text attribute</w3c-banner>
```

### Color

```html
<!-- Use a predefined color, one of: red, green, blue (default), black -->
<w3c-banner text="W3C Candidate Recommendation" color="blue"></w3c-banner>

<!-- Override -->
<w3c-banner style="--wb-color: orange"></w3c-banner>
```

## Compatibility

* A Grade: Cuts the mustard on [`CSSStyleSheet#replaceSync`](https://caniuse.com/mdn-api_cssstylesheet_replacesync).
* A-minus Grade: Gill Sans isn’t a default font on Windows as far as I know.
* Fallback: No content, no visual impact.

## [MIT License](LICENSE)
