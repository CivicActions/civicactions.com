# civicactions.com ARCHIVE

### NOTE: This repo has been archived - development continues at https://github.com/CivicActions/civicactions-homesite

CivicActions home site
=======

For an overview of the project structure please refer to the [Gatsby documentation - Building with Components](https://www.gatsbyjs.org/docs/building-with-components/).

## Requirements
* [Docker 17.05 or later](https://docs.docker.com/install/)

Alternatively you can use a recent version of [Node.js](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/lang/en/) - however Docker is the preferred environment as it matches CI and production environments.

## Install
Clone the git repository:
```sh
git clone git@github.com:CivicActions/civicactions.com.git
```

Go to the top level directory:
```sh
cd civicactions.com
```

Source an activate script. This will make CLI tools (running in Docker) available on your terminal and also download NPM dependencies.
```sh
. bin/activate
```

Fire up the development server:
```sh
yarn develop
```
You should see the site by going to http://localhost:8000/  in your browser.
To turn off the server run `Ctrl + C`

To see gatsby sub-commands available run:
```sh
gatsby
```

To see other scripts useful for development:
```sh
yarn run
```

You can also test a full build which will run with some additional compression steps and serve the site with the [Caddy](https://caddyserver.com/) web server, albeit without hot reloading.
```sh
fullbuild
```
You should see the site by going to http://localhost:8000/  in your browser.
To turn off the server run `Ctrl + C`

To stop development and use your local versions of CLI tools run:
```sh
deactivate
```

If you encounter problems you can force a rebuild by deleting the sandbox and/or full images and reactivate:
```sh
deactivate
docker rmi -f home-sandbox home-full
. bin/activate
```

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

### Working in local branch

4. Create a new local branch with the naming convention `CA-xx(ticket number)-brief-ticket-title` and commit your changes to the ticket branch.
5. After working, run `git pull --rebase origin master` to pull in the latest changes.
6. Follow the instructions above to activate.
7. Run `yarn develop` to make sure the site builds as expected.
8. Push your changes to your fork `git push myfork`.
9. Create a PR in the main repo.

## Deploy

Pull requests are deployed automatically when merged.
