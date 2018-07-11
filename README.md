# civicactions.com
CivicActions home site
=======

For an overview of the project structure please refer to the [Gatsby documentation - Building with Components](https://www.gatsbyjs.org/docs/building-with-components/).

## Requirements
-- A recent version of [Node.js](https://nodejs.org/en/)
-- Npm: https://www.npmjs.com/get-npm

## Install
Clone the git repository:
```sh
git clone git@github.com:CivicActions/civicactions.com.git
```

Go to the top level directory:
```sh
cd civicactions
```

Make sure that you have the Gatsby CLI program installed:
```sh
npm install --global gatsby-cli
```

And run from your CLI:
```sh
npm install
```

Fire up the development server:
```sh
cd gatsby-example-site
gatsby develop
```
You should see the site by going to http://localhost:8000/  in your browser.
To turn off the server run `Ctrl + C`

## Development Workflow
To collaborate on this project first follow the install steps above to create a functional sandbox.

### Create your fork and add git remotes (one time)
 1. Fork this repo to your github account.
 2. In your CLI, add this main repo as a remote named origin 
``` 
git remote add origin git@github.com:CivicActions/civicactions.com.git
```
3. Add your fork as a remote named myfork (or any preferred name)
```
git remote add myfork [link used to clone your fork]
```

---
### Working in local branch

4. Create a new local branch with the naming convention `CA-xx(ticket number)-brief-ticket-title` and commit your changes to the ticket branch.
5. After working, run `git pull --rebase origin master` to pull in the latest changes.
6. Run `npm install` to update the site with any new plugins.
7. Run `gatsby develop` to make sure the site builds as expected.
8. Push your changes to your fork `git push myfork`.
9. Create a PR in the main repo.

## Deploy
WIP
