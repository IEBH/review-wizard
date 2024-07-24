# @iebh/review-wizard

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm serve
```

### Compiles and minifies for production
```
npm build
```

### Lints and fixes files
```
npm lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# Trials Wizard
Due to limitations with Cloudflare only supporting one GitHub repo = 1 page deployment, the trials wizard project must be split into a seperate GitHub repository.

To update Trials Wizard add the repo and push to it from the master branch:

```
# Add the repo if not already present
git remote add trials-wizard git@github.com:IEBH/trials-wizard.git

# Push to the Trials-Wizard repo
git push trials-wizard --all
```
