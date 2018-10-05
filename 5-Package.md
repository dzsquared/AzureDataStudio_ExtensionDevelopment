# Azure Data Studio Extension Development

[![Prereqs](/images/buttons/button_prereqs.png)](0-Prereqs.md)
[![Prereqs](/images/buttons/button_yo.png)](1-Yo.md)
[![Prereqs](/images/buttons/button_git.png)](2-Git.md)
[![Prereqs](/images/buttons/button_debugging.png)](3-Debugging.md)
[![Prereqs](/images/buttons/button_create.png)](4-CodeCreate.md)
[![Prereqs](/images/buttons2/button_package.png)](5-Package.md)
[![Prereqs](/images/buttons/button_publish.png)](6-Publish.md)

# Package the Extension for Portability

## Update package.json
The file **package.json** is used for the metadata information when our project is bundled up, such as:
- extension name
- extension description
- version number
- publisher name
- extension category

Since we're about to create the portable extension file that can be used to install the extension on any machine running Azure Data Studio, now is a good time to double check the information in this file.

## Create a vsix
Using vsce we can create a .vsix file from our extension.  This file is a portable installer for our Azure Data Studio extension.
```
vsce package
```
![vsce](/images/5/vsce_readme.png)

**Don't forget to update the readme file.  If you plan to publish, you want all images in the readme to be absolute links instead of relative links.**


After running the following command at the VS Code terminal, the .vsix file will be placed in the root folder of our project.

![vsix](/images/5/vsix.png)


## Ready to Move on to 6-Publish?
[![Prereqs](/images/buttons/button_prereqs.png)](0-Prereqs.md)
[![Prereqs](/images/buttons/button_yo.png)](1-Yo.md)
[![Prereqs](/images/buttons/button_git.png)](2-Git.md)
[![Prereqs](/images/buttons/button_debugging.png)](3-Debugging.md)
[![Prereqs](/images/buttons/button_create.png)](4-CodeCreate.md)
[![Prereqs](/images/buttons2/button_package.png)](5-Package.md)
[![Prereqs](/images/buttons/button_publish.png)](6-Publish.md)