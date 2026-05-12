# mq-nx-playground

A dummy Nx workspace for testing Aviator MergeQueue **affected targets**.

The repo has four projects with a small dependency graph:

```
shared          (no deps)
api    -> shared
web    -> shared
cli    -> api -> shared
```

That shape lets you exercise different affected-targets scenarios:

| Edit a file in...   | `nx show projects --affected` returns |
| ------------------- | ------------------------------------- |
| `packages/shared`   | `shared, api, web, cli` (everything)  |
| `packages/api`      | `api, cli`                            |
| `packages/web`      | `web`                                 |
| `packages/cli`      | `cli`                                 |

## Try it locally

```sh
npm install

# Show all projects
npx nx show projects

# Show the dependency graph
npx nx graph

# Simulate affected targets vs. the base branch
npx nx show projects --affected --base HEAD~1 --head HEAD --json
```

## MergeQueue integration

`.github/workflows/aviator-targets.yml` computes `nx show projects --affected`
on every PR and POSTs it to the Aviator API as the PR's `affected_targets`.

Required GitHub secret: `AVIATOR_API_TOKEN`.

See the Aviator docs:
https://docs.aviator.co/mergequeue/concepts/affected-targets/nx-based-affected-targets

## Adding more projects

```sh
npx nx g @nx/js:library packages/<name> --name=<name> --bundler=tsc --unitTestRunner=none --linter=none
```

Then wire it into the dep graph by adding an import in `src/lib/<name>.ts`
and a `"@org/<dep>": "*"` line in its `package.json`.
