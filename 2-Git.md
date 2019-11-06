# Azure Data Studio Extension Development

[![Prereqs](/images/buttons/button_prereqs.png)](0-Prereqs.md)
[![Prereqs](/images/buttons/button_yo.png)](1-Yo.md)
[![Prereqs](/images/buttons2/button_git.png)](2-Git.md)
[![Prereqs](/images/buttons/button_debugging.png)](3-Debugging.md)
[![Prereqs](/images/buttons/button_create.png)](4-CodeCreate.md)
[![Prereqs](/images/buttons/button_package.png)](5-Package.md)
[![Prereqs](/images/buttons/button_publish.png)](6-Publish.md)

# Store Your Work
As you work on your extension you can create checkpoints in the project history through Git.

## Initial Commit
The project folder was initialized for Git through the yo generator, but we need to check the current state of the folder into source control.  In the source control tab of the activity bar, type an initial commit description and **Commit All**.


![VS Code Git Remote](/images/summit_gifs/initialcommit.gif)

![VS Code Git Remote](/images/2/initial_commit.png)

# Share Your Work
If you would like to store your code in a cloud location, follow through this section.  With a free account, GitHub repositories are public - if your work is super secret or private, you'll want to use a different repository provider or use a paid GitHub account.
You can also skip this section and keep your work local.

## Add a Repository to GitHub
Create a GitHub repository without initializing the repository with a README.

![GitHub Create Repo](/images/2/github_create.png)

Use the **Clone or Download** button to copy the repository URL for https.

![GitHub Clone Repo](/images/2/github_clone.png)


## Connect the Repository
Using the terminal in VS Code, run the command `git remote add origin <url-from-github>`.

![VS Code Git Remote](/images/2/git_remote.png)

In the source control tab of the activity bar, open the elipsis menu and select **Push**.

![VS Code Git Push](/images/2/git_push.png)

## Ready to Move on to 3-Debugging?
[![Prereqs](/images/buttons/button_prereqs.png)](0-Prereqs.md)
[![Prereqs](/images/buttons/button_yo.png)](1-Yo.md)
[![Prereqs](/images/buttons2/button_git.png)](2-Git.md)
[![Prereqs](/images/buttons/button_debugging.png)](3-Debugging.md)
[![Prereqs](/images/buttons/button_create.png)](4-CodeCreate.md)
[![Prereqs](/images/buttons/button_package.png)](5-Package.md)
[![Prereqs](/images/buttons/button_publish.png)](6-Publish.md)