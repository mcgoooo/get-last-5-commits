# get-last-5-commits
get the last five commits as markdown of a local filesytem git repo
as an example etc)

opininated in the sense, that for a ci system, and slack notifications,
you only need five commits, and i would prefer you work directly off master :D

# install

```
cp .env.example .env.development
yarn
yarn start:dev

edit `.env.development` to point to the git repo,
and also the full path to the git repo on the filesystem, checked out on the correct branch
and where the repo is on github,
it will link to commits that are already on github
```

# known issues

if you wish to pipe this content anywhere, plese just call `node index.js`
as yarn and npm scripts have the annoying

"✨  Done in 0.27s."

which ruins the output, you may need to run the full command from `yarn:start:dev`
this is the first time i have came across this problem..

if anyone understands the better way to deal with this, pelase shout,it works enough for me

# what it does
![in action](https://user-images.githubusercontent.com/248888/79405680-f8877f80-7f8c-11ea-97f2-1dea73702c33.gif)
