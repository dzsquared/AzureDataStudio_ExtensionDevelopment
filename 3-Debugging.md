# Azure Data Studio Extension Development

[![Prereqs](/images/buttons/button_prereqs.png)](0-Prereqs.md)
[![Prereqs](/images/buttons/button_yo.png)](1-Yo.md)
[![Prereqs](/images/buttons/button_git.png)](2-Git.md)
[![Prereqs](/images/buttons2/button_debugging.png)](3-Debugging.md)
[![Prereqs](/images/buttons/button_create.png)](4-CodeCreate.md)
[![Prereqs](/images/buttons/button_package.png)](5-Package.md)
[![Prereqs](/images/buttons/button_publish.png)](6-Publish.md)

# Debug and Test in Azure Data Studio

## Debugging
The **Debug** menu can be used to launch your extension into a special instance of Azure Data Studio with or without the VS Code debugger attached.

The template extension demonstrates two concepts - extension activation and extension commands.  On extension activation, a message is logged to the extension console.  On execution of the "Hello World" command, an information message is presented to the user.

![VS Code Debugging](/images/summit_gifs/debug.gif)

Open the **Debug** menu and select **Start Debugging**. A new Azure Data Studio window should open and VS Code should enter debugging mode.

![VS Code Debugging](/images/3/debugging.png)

In Azure Data Studio, open the command pallette (*ctrl + shift + p*) and type in `Hello World`.

![Hello World Command](/images/3/hello_world_command.png)

When you hit enter, an information message will appear in the lower right corner.

![Hello World Message](/images/3/hello_world_popup.png)

**We have a functioning, albeit not very useful, Azure Data Studio extension**

## If Azure Data Studio Won't Launch
1. Open an Azure Data Studio window prior to starting debugging
2. Ensure that Azure Data Studio is in your PATH

## Ready to Move on to 4-Create?
[![Prereqs](/images/buttons/button_prereqs.png)](0-Prereqs.md)
[![Prereqs](/images/buttons/button_yo.png)](1-Yo.md)
[![Prereqs](/images/buttons/button_git.png)](2-Git.md)
[![Prereqs](/images/buttons2/button_debugging.png)](3-Debugging.md)
[![Prereqs](/images/buttons/button_create.png)](4-CodeCreate.md)
[![Prereqs](/images/buttons/button_package.png)](5-Package.md)
[![Prereqs](/images/buttons/button_publish.png)](6-Publish.md)