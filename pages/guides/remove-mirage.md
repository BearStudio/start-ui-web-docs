# Remove MirageJS

You can easily remove MirageJS if you don't need to mock an API.

1. Delete `src/mocks` folder

2. In `package.json` file :

   1. Remove `miragejs` dependency
   2. Delete `docs:build` script, and remove use on `dev` and `build` script

```bash
"dev": "next dev",
"build": "yarn build:info && next build",
```

3. In `<Providers />` components, remove `useMockServer` hook and use on `<Providers />`

4. In `<LoginForm />`, remove `<MockedApiHint />` declaration and use.
