# Miniature DB

[View Site](https://minidb.dankelzahn.com/)

A visual miniature database. Its main purpose was to provide my gaming group a way to find miniatures for use in roleplaying and tabletop games.

The primary requirements are:

- Provide a searchable interface to filter miniatures by tags
- Archive old blog post contents from an old wordpress-driven painted miniature gallery
- Electronic copy of the painting journal I kept to record paint recipes used

Originally written using [Jekyll](https://jekyllrb.com/), this project was migrated to [Gatsby](https://www.gatsbyjs.com/) to try out the framework and get more experience with [React](https://reactjs.org/).

### Built With

- [Gatsby](https://www.gatsbyjs.com/)
  - Primary framework, using frontmatter-loaded `.md` files as the datasource.
- [React-Bootstrap](https://react-bootstrap.github.io/)
  - UI toolkit, used with a template from [Bootswatch](bootswatch.com).
  - Styling was applied via [styled-components](https://styled-components.com/)
  - Icons provided by [React Icons](https://react-icons.github.io/react-icons/)
- [react-image-gallery](https://github.com/xiaolin/react-image-gallery)
  - Providing gallery functionality on individual miniature pages.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/ddankel/minidb-gatsby
   ```
2. Install packages
   ```sh
   yarn install
   ```
3. Run
   ```sh
   yarn run develop
   ```

## Development Scripts

Since Gatsby has stricter Frontmatter formatting requirements than Jekyll, development scripts were created in the miniature-data submodule and referenced in `package.json` to maintain data integrity and aid development.

For full documentation, see [https://github.com/ddankel/miniature-data](https://github.com/ddankel/miniature-data).

```json
// package.json
"scripts": {
  ...
  "new": "npm run new --prefix ./vendor/miniature-data",
  "listfm": "npm run listfm --prefix ./vendor/miniature-data",
  "validate": "npm run validate --prefix ./vendor/miniature-data",
  "status": "npm run status --prefix ./vendor/miniature-data",
  "todo": "npm run todo --prefix ./vendor/miniature-data"
},
```

## Contact

Project Link: [https://github.com/ddankel/minidb-gatsby](https://github.com/ddankel/minidb-gatsby)
