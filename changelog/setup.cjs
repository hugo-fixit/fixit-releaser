// Custom Handlebars helpers
module.exports = function (Handlebars) {
  /**
   * Handlebars helper to replace a string with another string
   * @param {string} context the string to replace
   * @param {object} options
   * @param {string} options.hash.from the string to replace
   * @param {string} options.hash.to the string to replace with
   * @example {{replace "foo bar" from="foo" to="baz"}} => "baz bar"
   */
  Handlebars.registerHelper('replace', (context, options) => {
    return context.replace(options.hash.from, options.hash.to)
  })
  /**
   * Handlebars helper to convert a name to a GitHub username
   * @param {string} context name to convert
   * @param {object} options
   * @param {boolean} [options.hash.linked=true] whether to return a linked username
   * @example {{githubUser "Cell"}} => "Lruihao"
   */
  Handlebars.registerHelper('githubUser', (context, { hash: { linked = false } }) => {
    /**
     * Map Commit names to GitHub usernames
     * if your commit name is not same as your GitHub username, add an entry here.
     */
    const map = {
      // Author
      'Cell': 'Lruihao',
      // Bots
      'Cell[bot]': 'lrhx',
      'dependabot[bot]': 'dependabot',
      // Collaborators, Contributors
    }
    const username = map[context] || context
    if (linked) {
      return `[@${username}](https://github.com/${username})`
    }
    return `@${username}`
  })
}
