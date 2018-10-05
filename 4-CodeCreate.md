# Azure Data Studio Extension Development

[![Prereqs](/images/buttons/button_prereqs.png)](0-Prereqs.md)
[![Prereqs](/images/buttons/button_yo.png)](1-Yo.md)
[![Prereqs](/images/buttons/button_git.png)](2-Git.md)
[![Prereqs](/images/buttons/button_debugging.png)](3-Debugging.md)
[![Prereqs](/images/buttons2/button_create.png)](4-CodeCreate.md)
[![Prereqs](/images/buttons/button_package.png)](5-Package.md)
[![Prereqs](/images/buttons/button_publish.png)](6-Publish.md)

# Create Something Special

For a typescript extension, the yo generator creates the *src/extension.ts* file with the framework for a basic extension.

![Extension Framework](/images/4/framework.png)

The **import** statements make additional libraries available for use.  More can be added, but by default the VS Code and Azure Data Studio (sqlops) are added to the code.

The **activate** and **deactivate** functions control the code executed when the extension is activated or deactivated, respectively.  Activation events are defined within *package.json*.

To associate code to execute with a command from Azure Data Studio, use **registerCommand**. 


## Available APIs



## Proposed APIs
If you would like to use APIs for Azure Data Studio that are still in the "Preview" stage, you need to grab the [sqlops.proposed.d.ts](https://raw.githubusercontent.com/Microsoft/sqlopsstudio/master/src/sql/sqlops.proposed.d.ts) file from the Azure Data Studio repository. Create a folder in `src` named `typings` and place the file there.

![Proposed API File](/images/4/proposed_apis.png)


## Ready to Move on to 5-Package?
[![Prereqs](/images/buttons/button_prereqs.png)](0-Prereqs.md)
[![Prereqs](/images/buttons/button_yo.png)](1-Yo.md)
[![Prereqs](/images/buttons/button_git.png)](2-Git.md)
[![Prereqs](/images/buttons/button_debugging.png)](3-Debugging.md)
[![Prereqs](/images/buttons2/button_create.png)](4-CodeCreate.md)
[![Prereqs](/images/buttons/button_package.png)](5-Package.md)
[![Prereqs](/images/buttons/button_publish.png)](6-Publish.md)