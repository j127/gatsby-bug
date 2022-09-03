This is a sample repo to demonstrate a Gatsby bug for a bug report.

To reproduce the bug:

- Clone this repo.
- Run `npm i`
- Run `npm run build`

The build process will crash because the environment variable isn't found.

It will only work if this valid JavaScript:

```
const { GATSBY_MY_VAR } = process.env;
```

is changed to this:

```
const GATSBY_MY_VAR  = process.env.GATSBY_MY_VAR;
```

This change happened within the past few weeks and is probably silently breaking some Gatsby sites.
