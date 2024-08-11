# Development workflow for bag-of-tools

This guide aims to layout the standard development workflow for this project.

## Starting New Development Work

The first step is to checkout out a new branch off of `main`.

### Pre-Work

> _:warning: Your git branch must be tracking the remote branch at `git@github.com:coltonehrman/bag-of-tools.git`._

You can use the `git branch -vv` & `git remote show <remote>` commands to confirm you are setup correctly.

_Example output:_

```bash
> git branch -vv
main ... [origin/main] ...

> git remote show origin
* remote origin
  Fetch URL: git@github.com:coltonehrman/bag-of-tools.git
  Push  URL: git@github.com:coltonehrman/bag-of-tools.git
  HEAD branch: main
  Remote branch:
    main tracked
  Local branch configured for 'git pull':
    main merges with remote main
  Local ref configured for 'git push':
    main pushes to main (up to date)
```

1. `git checkout main` - Make sure you are on the the `main` branch
2. `git pull` - Make sure to pull down the latest changes from the **remote**.

### Steps

1. `git checkout -b <new_branch>`
2. Start you development work.
3. `git add <changes>`
4. `git commit` or `git commit -m "<message>"`
   - _Please use [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)._
5. `git push -u origin <new_branch>`
   - _This assumes you have push access to the remote `git@github.com:coltonehrman/bag-of-tools.git`_
