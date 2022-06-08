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

Default settings (build for node14, output to /dist) are configured in package.json and can be overwritten as needed.

## Development Scripts

Since Gatsby has stricter Frontmatter formatting requirements than Jekyll, the following two scripts were created to help with the conversion

### Create New Draft

```sh
yarn run new

# Examples:
yarn run new single-miniuature
yarn run new first-mini second-mini-third-mini
```

Creates a new folder and markdown file, named correctly, in `src/mini_drafts`, with the `slug` frontmatter value pre-populated.

### Frontmatter Validation

```sh
yarn run validate-fm
```

This script reads the frontmatter schema from `scripts/validate_frontmatter/frontmatter_schema.js` and checks each mini `.md` file for missing, disallowed, or deprecated formats and values. Any errors are reported in detail for easy fixing.

### Frontmatter Aggregation

```sh
yarn run list-fm
```

This script parses all of the mini `.md` pages and aggregates all current values for the frontmatter keys. This allows a quick review of current listed options as well as copying those lists into the frontmatter schema to change the allowlists if desired.

## Contact

Project Link: [https://github.com/ddankel/minidb-gatsby](https://github.com/ddankel/minidb-gatsby)
