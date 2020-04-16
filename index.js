var Git = require("nodegit");
const REPO = process.env.REPO
const FILESYSTEM_LOCATION = process.env.FILESYSTEM_LOCATION
const HUB_LOCATION = "https://github.com"

const makeMessage = (commit)  => {
  const message = commit.message().substr(0,72)
  const markdownLinkToSha = `[${message.trim().replace(/\n|\r/g, "")}](${HUB_LOCATION}/${REPO}/commits/${commit.sha()})`
  const author = commit.author().name()
  // const date = commit.date().toLocaleString()
  return `${author}: ${markdownLinkToSha}`
}

const go = async function(){
  const repo = await Git.Repository.open(FILESYSTEM_LOCATION)
  // TODO: figure out non master branch flow
  const masterCommit = await repo.getMasterCommit()
  const history = masterCommit.history()
  let count = 0
  history.on("commit", function(commit) {
    if (++count >= 6) return
    console.log(makeMessage(commit));
  });
  history.start();
}
go()
