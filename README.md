# W3C Status Banners

## [Demo](http://zachleat.github.io/w3c-banners/)

## Includes 

* Unofficial Draft
* W3C Working Draft
* W3C Candidate Recommendation
* W3C Proposed Recommendation
* W3C Recommendation
* W3C Working Group Note
* W3C Interest Group Note
* W3C Editor’s Draft

## Usage

Add a `w3c-b` class to your `<html>` tag and one of: `wd`, `cr`, `pr`, `r`, `wgn`, `ign`, `ed`.

Example: `<html class="w3c-b pr">` for W3C Proposed Recommendation.

### Custom Text

To add your own custom text, insert your own element instead of using the `w3c-b` class:

```
<!-- Default is blue -->
<div class="w3c-custom">Paper Napkin Sketch</div>
<div class="w3c-custom green">Thought Leadership</div>
<div class="w3c-custom red">Bifocal Specification</div>
```

## Compatibility

Cuts the mustard on media query support (`@media only all`). Requires CSS 2D transforms.

A-Grade: Chrome, Opera, Safari, Firefox, IE9+, Android 2.3+. Probably anything that supports [CSS 2D Transforms](http://caniuse.com/#feat=transforms2d).

A-minus Grade: Gill Sans isn’t a default font on Windows as far as I know.

## [MIT License](LICENSE)

## To Do

* Internationalization (i18n)
* Mobile testing