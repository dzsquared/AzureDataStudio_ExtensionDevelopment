# Azure Data Studio Extension Development

[![Prereqs](/images/buttons/button_prereqs.png)](0-Prereqs.md)
[![Prereqs](/images/buttons/button_yo.png)](1-Yo.md)
[![Prereqs](/images/buttons/button_git.png)](2-Git.md)
[![Prereqs](/images/buttons/button_debugging.png)](3-Debugging.md)
[![Prereqs](/images/buttons/button_create.png)](4-CodeCreate.md)
[![Prereqs](/images/buttons/button_package.png)](5-Package.md)
[![Prereqs](/images/buttons2/button_publish.png)](6-Publish.md)

# Publish the Extension to GitHub

## Create a Release on GitHub
On the GitHub repository for your extension, click into *releases* and click the button for **Draft a new release**.

Fill in the information for your extension and upload the **.vsix** file to the drop zone for binaries.  Publish the release, you'll need links from this page for the extension gallery listing within Azure Data Studio.

![Release](/images/6/release.png)

# Publish the Extension to Azure Data Studio

## Fork the Azure Data Studio Repository

Go to the ![Azure Data Studio GitHub repository](https://github.com/Microsoft/azuredatastudio) and fork the repository. This adds a copy of the repository to your GitHub account, where you can make changes independently.

![Fork](/images/6/fork.png)

## Add to the Extensions File

On GitHub, change to the **release/extensions** branch of your fork and open the file **extensionsGallery.json**.  This file contains a list of extensions, you will be adding your extension to the content.

![extjson](/images/6/listing.png)


These changes can be made on the web, where you can copy another extension's listing to customize for your own.

![editonline](/images/6/edit_online.png)

The content of the listing includes:
- an ID number (select the next available in the sequence)
- extension name and description
- publisher info (that's you!)
- current version date and number
- download link
- icon link
- listing page (your readme)
- manifest and license info

When you're ready, commit the changes to **extensionsGallery.json**.
![commit](/images/6/commit.png)


## Submit a Pull Request
Finally, to send the addition of your extension over to *Microsoft/AzureDataStudio*, create a pull request.  A Microsoft maintainer generally reviews the pull request within a few business days and it will be merged into the product shortly after.


# You're Done! Ok, not really. Now you can implement new features.  Good luck!


[![Prereqs](/images/buttons/button_prereqs.png)](0-Prereqs.md)
[![Prereqs](/images/buttons/button_yo.png)](1-Yo.md)
[![Prereqs](/images/buttons/button_git.png)](2-Git.md)
[![Prereqs](/images/buttons/button_debugging.png)](3-Debugging.md)
[![Prereqs](/images/buttons/button_create.png)](4-CodeCreate.md)
[![Prereqs](/images/buttons/button_package.png)](5-Package.md)
[![Prereqs](/images/buttons2/button_publish.png)](6-Publish.md)