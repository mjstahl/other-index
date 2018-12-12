# other-index
Simple HTTP server to serve a single file other than index.html. Used for development testing.

The idea behind this was when developing a web client your production and development
HTML files would be different. You would develop with one, and deploy the other.

## Installation

```sh
$ npm install --save-dev @mjstahl/other-index
```

Assuming you have a development.html and a production.html, you would specify two
different scripts in your package.json.

```json
"scripts": {
  "develop": "other-index development.html",
  "start": "other-index production.html 3000"
}
```

## Use

```js
other-index [file] [port]
```

File will default to `./` if one is not specified. Port will default to `8080` if not specified.
