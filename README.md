# Pure & standard Web Components autoLoader

With a simple combination and creative approach, you can easily load all your standard components through an unzipped JavaScript that is only 64 bytes.

[Standard Web Components](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry) have been supporting Chrome version 54 and Firefox version 63 and others for years, and there is no need to use bulky dependencies of large frameworks such as React, Angular, etc.;

The interesting thing is that the latest version of browser support for Windows before Windows 10 is version 109 for Chrome and version 115 for Firefox, which even the current version of the browsers is far from it and is obsolete; so there is no need to worry.

Another point is that currently, the percentage of desktop devices is much lower than mobile; therefore, it is possible to enter the modern world of component writing with less code volume and real isolated components.

# Using components

Put a script tag similar to this

```html
<script src="./js/app.js" type="module" fetchpriority="high"></script>
```

in the head of your index.html or App's root.

That's all!

[Module type JavaScripts](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script) are also supported in versions 60 and 61 of Firefox and Chrome browsers, etc.

The good news is that module-type JavaScripts do not need to be mentioned at the end of the body tag and [are executed after the content is loaded](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules):
They can be written in the same head and there is no need to write additional code to check for the end of the page load.
Another thing about loading modules is that modules are not loaded twice in JavaScript; so repeating the import does not cause a problem.

# app.js

```js
document.body.querySelectorAll(':not(:defined)').forEach(el => import(`./${el.localName}.js`))
```

This can also be done for placeholder web components that have not yet been loaded:

```css
:not(:defined)::after{
	content:"Loading ...";
	direction:ltr;
	display:flex;
	place-content:center;
	align-items:center;
	height:100%;
	background:linear-gradient(to right,#0001 10%,#0002 50%,#0001 80%);
	background-size:50% 100%;
	animation:placeholder 1s linear 0 infinite normal forwards;
}
@keyframes placeholder{
	from{background-position:-100% 0}
	to{background-position:100% 0}
}
```

We also show a message for potentially extinct browsers to update, which of course are not even one percent:

```css
.notsupported{
	position:fixed;
	display:none;
	z-index:100000;
	left:0;
	top:0;
	width:100%;
	height:100%;
	background-color:#3490dc;
	color:#fff;
	text-align:center;
	vertical-align:middle;
	padding-top:5%;
	font-family:system-ui,Tahoma;
	direction:ltr;
	/*IE:5,6,7 hack*/
	*display:block;
	_display:block;
}
/*IE:8,9,10,11 hack*/
@media all\0{.notsupported{display:table-cell}}
/*Chrome:76,Firefox:69,Edge:79,Safari:13.1 hack*/
@supports not ((white-space:break-spaces) or (:autofill)){.notsupported{display:table-cell}}
```

or:

```html
<link rel="stylesheet" href="./css/app.css" fetchpriority="high"/>
```

# Using components with lazy load

```html
<script src="./js/app-lazy.js" type="module" fetchpriority="high"></script>
```

A component will not load unless it is placed in the page view.
