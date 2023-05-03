1 - 'git init' is the command used to set up a repository in a folder/directory.
2 - 'git add' is used when asking git to start tracking a file. The file name should be included, or just a period to say "add all new changes" (i.e., 'git add .').
3 - 'git commit' with a message flag and a message are used to move file from staging to repository (i.e., 'git commit -m "test message"').
4 - 'git fetch' will retreive all of the changes/updates from the class directory/repository, after which 'git merge' can be used to merge the updates to the file. We used 'git remote add upstream [repo name]' to pull the changes.
5 - At this point I believe you'd need to submit a pull request to the owner of the repo, so they can then decide about accepting/merging any changes or not. 