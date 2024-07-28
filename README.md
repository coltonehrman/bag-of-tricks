### Adding local package dependency to another local package

```sh
pnpm add [-D] <PACKAGE_NAME> --filter <OTHER_PACKAGE_NAME> --workspace
```

Example:

```sh
pnpm add -D @cehrman/tsconfig --filter @cehrman/module-a --workspace
```

This command will add the local package `@cehrman/tsconfig` as a **dev dependency** to the local package `@cehrman/module-a`. _Notice this usage of **pnpm** special protocol `workspace:` is used when doing this._
