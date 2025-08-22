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

  /**
   * Handlebars helper to capitalize the first letter of a string
   * @param {string} context the string to capitalize
   * @example {{capitalize "hello world"}} => "Hello world"
   * @example {{capitalize "**scope**: message"}} => "**Scope**: Message"
   */
  Handlebars.registerHelper('capitalize', (context) => {
    if (!context || typeof context !== 'string') {
      return context
    }

    // Check if it matches **scope**: pattern using regex
    const scopeMatch = context.match(/^\*\*([^*]+)\*\*:\s(.*)$/)
    if (scopeMatch) {
      const scope = scopeMatch[1]
      const message = scopeMatch[2]
      const capitalizedScope = scope.charAt(0).toUpperCase() + scope.slice(1)
      const capitalizedMessage = message.charAt(0).toUpperCase() + message.slice(1)
      return `**${capitalizedScope}**: ${capitalizedMessage}`
    }

    // Regular capitalization
    return context.charAt(0).toUpperCase() + context.slice(1)
  })
}
