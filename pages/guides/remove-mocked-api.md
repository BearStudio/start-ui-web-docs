# Remove Mocked API

You can easily remove the mocked api and use your own api.

#### Update the enviromnent variables
   - Update the `NEXT_PUBLIC_API_BASE_URL` in your `.env` file with your api base url.
   - Remove the `DATABASE_URL` and `AUTH_SECRET` in the `.env` and `.env.example` files.
   - Remove the `DATABASE_URL` and `AUTH_SECRET` check in the `.env.validator.js` file.

####  Delete the `./app/api/jhipster-mocks` and `./prisma` folders
   ```bash
   rm -rf ./app/api/jhipster-mocks
   rm -rf ./prisma
   ```

####  In the `package.json` file
   - Remove the `db:push`, `db:ui`, `db:seed` scripts.
   - Update the `postinstall` script by removing the `prisma generate &&` part. The updated `postinstall` script should look like this:
   ```json
   ...
   "postinstall": "yarn build:info && yarn theme:generate-typing",
   ...
   ```
#### Remove the `prisma`, `@prisma/client`, `jsonwebtoken` and `bcrypt` packages
   ```bash
   yarn remove prisma @prisma/client jsonwebtoken bcrypt
   ```
