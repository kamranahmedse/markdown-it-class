/**
 * Takes the markdown-it tokens and assigns classes to each token
 *
 * @param tokens
 * @param mapping
 */
function setTokenClasses(tokens, mapping = {}) {
  tokens.forEach((token) => {
    if (/(_open$|image)/.test(token.type) && mapping[token.tag]) {
      const existingClassAtr = token.attrGet('class') || '';

      const existingClasses = existingClassAtr.split(' ');
      const givenClasses = mapping[token.tag] || '';

      const newClasses = [
        ...existingClasses,
        ...(Array.isArray(givenClasses) ? givenClasses : [givenClasses]),
      ];

      token.attrSet('class', newClasses.join(' ').trim());
    }

    if (token.children) {
      setTokenClasses(token.children, mapping);
    }
  });
}

module.exports = function markdownitTagToClass(md, mapping = {}) {
  md.core.ruler.push('markdownit-tag-to-class', (state) => {
    setTokenClasses(state.tokens, mapping);
  });
};
