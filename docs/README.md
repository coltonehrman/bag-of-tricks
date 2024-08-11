[![XO code style](https://shields.io/badge/code_style-5ed9c7?logo=xo&labelColor=gray&logoSize=auto&logoWidth=20)](https://github.com/xojs/xo)

### Adding local package dependency to another local package

```sh
pnpm add [-D] <PACKAGE_NAME> --filter <OTHER_PACKAGE_NAME> --workspace
```

Example:

```sh
pnpm add -D @cehrman/tsconfig --filter @cehrman/module-a --workspace
```

This command will add the local package `@cehrman/tsconfig` as a **dev dependency** to the local package `@cehrman/module-a`. _Notice the usage of **pnpm** special protocol `workspace:` is used when doing this._

[`pnpm add` docs](https://pnpm.io/cli/add)

## Releasing

### Create Changeset

```sh
pnpm changeset
```

### Version Packages

```sh
pnpm changeset version
```

### Publish Packages

```sh
pnpm changeset publish
```

[`changeset` docs](https://github.com/changesets/changesets/blob/main/packages/cli/README.md)
