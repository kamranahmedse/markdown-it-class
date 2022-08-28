# markdown-it-class

> Plugin for [markdown-it](https://github.com/markdown-it/markdown-it) to allow adding classes to HTML tags.

## Install

You can install it using yarn or npm

```shell
npm install --save-dev markdown-it-class
```

## Usage

All you have to do is register the plugin and pass the tag to class mapping.

```javascript
const MarkdownIt = require('markdown-it')
const markdownItClass = require('markdown-it-class')

// Setup the markdown renderer
const md = MarkdownIt()
  // Register the plugin and pass a tag to class mapping
  .use(markdownItClass, {
    h1: ['text-2xl', 'font-bold', 'mb-3', 'text-blue-700'],
    p: ['text-md'],
  });

const markdownString = fs.readFileSync('post.md', 'utf-8');
const html = md.render(markdownString);

// HTML with classes assigned to the tags
console.log(html);
```

## Credits

This package is a fork of [markdown-it-class](https://github.com/HiroshiOkada/markdown-it-class) which has outdated dependencies and has [improper handling for HTML tags](https://github.com/HiroshiOkada/markdown-it-class/blob/19ab6f12ef78af7df15795ec4eb30c39e8653ea5/index.js#L11) because it relies on the [undocumented token types](https://github.com/markdown-it/markdown-it/issues/822) which [misses out](https://github.com/HiroshiOkada/markdown-it-class/pull/1) [an unknown number](https://github.com/HiroshiOkada/markdown-it-class/pull/3) token types. This fork has up-to-date dependencies and supports all the html types by relying on the [documented nesting property of tokens](https://markdown-it.github.io/markdown-it/#Token.prototype.nesting). 

## Contributions

Feel free to submit pull requests, create issues or spread the word.

## License

MIT &copy; [Kamran Ahmed](https://twitter.com/kamranahmedse)


