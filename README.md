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

Example: `<html class="w3c-b pr">` for W3c Proposed Recommendation.

### Custom Text

To add your own custom text, insert your own element instead of using the `w3c-b` class:

```
<!-- Default is blue -->
<div class="w3c-custom">Paper Napkin Sketch</div>
<div class="w3c-custom green">Thought Leadership</div>
<div class="w3c-custom red">Bifocal Specification</div>
```

## [MIT License](LICENSE)

## To Do

* Internationalization (i18n)