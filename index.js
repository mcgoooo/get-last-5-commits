var Git = require("nodegit");
const REPO = process.env.REPO
const FILESYSTEM_LOCATION = process.env.FILESYSTEM_LOCATION
const HUB_LOCATION = "https://github.com/"

// Open the repository directory.
Git.Repository.open(FILESYSTEM_LOCATION)
  // Open the master branch.
  .then(function(repo) {
    return repo.getMasterCommit();
  })
  // Display information about commits on master.
  .then(function(firstCommitOnMaster) {
    // Create a new history event emitter.
    var history = firstCommitOnMaster.history();

    // Create a counter to only show up to 9 entries.
    var count = 0;

    // Listen for commit events from the history.
    history.on("commit", function(commit) {
      // Disregard commits past 5.
      if (++count >= 5) return
      const message = commit.message().substr(0,72)
      const markdownLinkToSha = `[${message}](${HUB_LOCATION}/${REPO}/commits/${commit.sha()})`
      const author = commit.author()
      const date = commit.date().toLocaleString()
      // Show the commit sha.
      console.log(`${markdownLinkToSha} by ${author} on ${date}`);
    });

    // Start emitting events.
    history.start();
  });