// Custom Handlebars helpers
module.exports = function (Handlebars) {
  /**
   * Handlebars helper to replace a string with another string
   * @param {String} context the string to replace
   * @param {Object} options
   * @param {String} options.hash.from the string to replace
   * @param {String} options.hash.to the string to replace with
   * @example {{replace "foo bar" from="foo" to="baz"}} => "baz bar"
   */
  Handlebars.registerHelper('replace', function (context, options) {
    return context.replace(options.hash.from, options.hash.to)
  })
  /**
   * Handlebars helper to convert a name to a GitHub username
   * @param {String} context name to convert
   * @param {Object} options
   * @param {Boolean} [options.hash.linked=true] whether to return a linked username
   * @example {{githubUser "Cell"}} => "Lruihao"
   */
  Handlebars.registerHelper('githubUser', function (context, { hash: { linked = false }}) {
    /**
     * Map Commit names to GitHub usernames
     * if your commit name is not same as your GitHub username, add an entry here.
     */
    const map = {
      // Author
      'Cell': "Lruihao",
      // Collaborators, Contributors
    }
    const username = map[context] || context
    if (linked) {
      return `[@${username}](https://github.com/${username})`
    }
    return `@${username}`
  })
}
