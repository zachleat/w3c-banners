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

## MIT License

```
Copyright (C) 2014 Zach Leatherman

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

## To Do

* Internationalization (i18n)