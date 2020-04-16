# get-last-5-commits
get the last five commits as markdown of a local filesytem git repo

the primary usage is to be able to give a markdown lsit to github
that can be used in various places (from circle ci to a slack notification as an example etc)

# install

```
cp .env.example .env.development
yarn
yarn start:dev

edit environment to point to the git repo,
and where the repo is on github,
it will link to commits that are already on github
```
