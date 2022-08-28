const MarkdownIt = require('markdown-it');
const MarkdownItClass = require('./index.js');
const attrs = require('markdown-it-attrs');

describe('markdown-it-class', () => {
  it('can add single class to tags', () => {
    const md = new MarkdownIt();
    md.use(MarkdownItClass, {
      h1: 'title',
      h2: 'subtitle',
    });

    expect(md.render('# Hello\n## World').trim()).toBe(
      '<h1 class="title">Hello</h1>\n<h2 class="subtitle">World</h2>'
    );
  });

  it('can add multiple classes to tags', () => {
    const md = new MarkdownIt();
    md.use(MarkdownItClass, {
      h1: ['title', 'is-4'],
      h2: ['subtitle', 'is-6'],
    });

    expect(md.render('# Hello\n## World').trim()).toBe(
      '<h1 class="title is-4">Hello</h1>\n<h2 class="subtitle is-6">World</h2>'
    );
  });

  it('adds classes to em tags', () => {
    const md = new MarkdownIt();
    md.use(MarkdownItClass, {
      em: 'tag',
    });

    expect(
      md.render('# There are three buttons, *red* *green* and *blue*.').trim()
    ).toBe(
      '<h1>There are three buttons, <em class="tag">red</em> <em class="tag">green</em> and <em class="tag">blue</em>.</h1>'
    );
  });

  it('adds classes to img tags', () => {
    const md = new MarkdownIt();
    md.use(MarkdownItClass, {
      img: 'tag',
    });

    expect(
      md.render('![alt text](http://placehold.it/720x480.jpg)').trim()
    ).toBe(
      '<p><img src="http://placehold.it/720x480.jpg" alt="alt text" class="tag"></p>'
    );
  });

  it('works with markdown-it-attrs', () => {
    const md = new MarkdownIt();
    md.use(MarkdownItClass, {
      h1: ['is-4', 'is-black'],
      h2: 'is-6',
    });
    md.use(attrs);

    expect(
      md.render('# Hello {.title}\n## World {.subtitle .is-dark}').trim()
    ).toBe(
      '<h1 class="title is-4 is-black">Hello</h1>\n<h2 class="subtitle is-dark is-6">World</h2>'
    );
  });

  it('adds classes to code spans', () => {
    const md = new MarkdownIt();
    md.use(MarkdownItClass, {
      code: 'tag',
    });

    expect(
      md.render('# There are three languages, `python` `JavaScript` and `C`.').trim()
    ).toBe(
      '<h1>There are three languages, <code class="tag">python</code> <code class="tag">JavaScript</code> and <code class="tag">C</code>.</h1>'
    );
  });

  it('adds classes to code blocks', () => {
    const md = new MarkdownIt();
    md.use(MarkdownItClass, {
      code: 'tag',
    });

    expect(
      md.render("# Hello World Example, ```javascript console.log('Hello World'); ```.").trim()
    ).toBe(
      '<h1>Hello World Example, <code class="tag">javascript console.log(\'Hello World\');</code>.</h1>'
    );
  });
});
