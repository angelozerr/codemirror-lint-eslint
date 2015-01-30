# codemirror-lint-eslint

[codemirror-lint-eslint](https://github.com/angelozerr/codemirror-lint-eslint) provides the [eslint-lint.js](https://github.com/angelozerr/codemirror-lint-eslint/blob/master/eslint-lint.js) which is a [CodeMirror addon](http://codemirror.net/doc/manual.html#addons) 
to use [CodeMirror Lint](http://codemirror.net/addon/lint/lint.js) with [ESLint](https://github.com/eslint/eslint).

You can play with the demo [index.html](https://github.com/angelozerr/codemirror-lint-eslint/blob/master/index.html) which validate JavaScript content of a CodeMirror editor with [ESLint](https://github.com/eslint/eslint):

![CodeMirror & ESLint](https://github.com/angelozerr/codemirror-lint-eslint/wiki/images/CodeMirrorESLint.png)

## How to use it?

To use [eslint-lint.js](https://github.com/angelozerr/codemirror-lint-eslint/blob/master/eslint-lint.js), you must declare your CodeMirror instance with 
**javascript mode**, and activate **lint** (gutters & lint to true) like this :

var editor = CodeMirror.fromTextArea(document.getElementById("code-js"), {
    lineNumbers: true,
    mode: "javascript",
    gutters: ["CodeMirror-lint-markers"],
    lint: true
});
  
and include several scripts (see [index.html](https://github.com/angelozerr/codemirror-lint-eslint/blob/master/index.html) to see the full scripts and CSS to include).

* ESLint scripts :

```html 
<script src="http://eslint.org/js/app/eslint.js" ></script> 
```
 
 * Commons Codemirror : 

```html
<link rel=stylesheet href="resources/codemirror/doc/docs.css">
<link rel="stylesheet" href="resources/codemirror/lib/codemirror.css">
<script src="resources/codemirror/lib/codemirror.js"></script>
```

 * JavaScript mode 
 
```html
<script src="resources/codemirror/mode/javascript/javascript.js"></script> 
```
 
 * Commons Lint interface
 
```html
<link rel="stylesheet" href="resources/codemirror/addon/lint/lint.css">
<script src="resources/codemirror/addon/lint/lint.js"></script> 
```
 
 * Lint implementation with ESLint
 
```html
<script src="eslint-lint.js"></script>
```

## Structure

The basic structure of the project is given in the following way:

* `eslint-lint.js` the CodeMirror Lint addon which uses ESLint.
* `index.html` the demo which uses ESLint with CodeMirror editor.
* `resources` folder which contains CodeMirror & ESLint resources.
