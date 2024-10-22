Review Wizard
=============

Project setup
-------------
```
npm cleaninstall
```

Launch server in dev mode
-------------------------
```
npm run serve
```


Development Process
===================
1. Work with the review wizard `master` branch whenever possible
2. When publishing, switch to production (`git switch production`) and merge master changes (`git merge master`) then push (`git push origin production`) - changing "origin" to whatever wizard thats being updated


Other Wizards
=============
Due to limitations with Cloudflare only supporting one GitHub repo per  deployment, other wizard projects must be split into a seperate GitHub repositories.

Setup all origins
-----------------
```
# Add all other repo origins - if not already present
git remote add aw-origin git@github.com:IEBH/audit-wizard.git
git remote add tw-origin git@github.com:IEBH/trials-wizard.git
git remote add sw-origin git@github.com:IEBH/scoping-wizard.git
```

Push to other origins
---------------------
```
# Push this master branch to Trials-Wizard master - change `tw-origin` to whatever wizard is being updated
git push tw-origin master

# Push this production branch to Trials-Wizard production - change `tw-origin` to whatever wizard is being updated
git push tw-origin production
```
