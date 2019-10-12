# Azure Data Studio Extension Development

[![Prereqs](/images/buttons/button_prereqs.png)](0-Prereqs.md)
[![Prereqs](/images/buttons/button_yo.png)](1-Yo.md)
[![Prereqs](/images/buttons/button_git.png)](2-Git.md)
[![Prereqs](/images/buttons/button_debugging.png)](3-Debugging.md)
[![Prereqs](/images/buttons2/button_create.png)](4-CodeCreate.md)
[![Prereqs](/images/buttons/button_package.png)](5-Package.md)
[![Prereqs](/images/buttons/button_publish.png)](6-Publish.md)

# Create Something Special

For a TypeScript extension, the yo generator creates the *src/extension.ts* file with the framework for a basic extension.

![Extension Framework](/images/4/framework.png)

The **import** statements make additional libraries available for use.  More can be added, but by default the VS Code and Azure Data Studio (azdata) are added to the code.

The **activate** and **deactivate** functions control the code executed when the extension is activated or deactivated, respectively.  Activation events are defined within *package.json*.

To associate code to execute with a command from Azure Data Studio, use **registerCommand**. 


## Available Azure Data Studio APIs
### Utilize Connection and Query APIs
The code snippet for this section is available [here](/sample_src/runQuery.ts).

In your generated extension framework, within the activate function add an additional command:
![Add Command](/images/4/add_command.png)

Access the current Azure Data Studio connection with `connection.getCurrentConnection()` and create a code block that will execute if a connection is found:
![Get Connection](/images/4/add_connection.png)

If we're connected, we want to establish a QueryProvider for the connection and run a query.  In this example, we're counting on the user being connected to a StackOverflow sample database.
![Run a Query](/images/4/full_command.png)


### Keep Up with Changes to Azure Data Studio APIs
While the APIs are largely self-documenting, keeping up with changes and additions is easiest through the GitHub RSS feed for the API file: https://github.com/microsoft/azuredatastudio/commits/master/src/sql/azdata.d.ts.atom


## Proposed APIs
There are 2 ways to add the proposed Azure Data Studio APIs to your project:

### If you used the Yeoman (yo) Azure Data Studio generator:
In the terminal at the root folder of your project, run: `npm run proposedapi`

### or, for any project:
Grab the [azdata.proposed.d.ts](https://raw.githubusercontent.com/Microsoft/azuredatastudio/master/src/sql/azdata.proposed.d.ts) file from the Azure Data Studio repository. 

Create a folder in `src` named `typings` and place the file there.

![Proposed API File](/images/4/proposed_apis.png)

## Additional NodeJS Packages
The code snippet for this section is available [here](/sample_src/runOS.ts).

We're going to update Hello World to tell us a little info about our machine.

First, open the terminal and install the NodeJS package 'os' to this project with the command `npm install os`.  At the top of the `extension.ts` file with the other import statements, add a line to access this package:

`import * as os from 'os';`

Find the command for 'extension.sayHello' in your extension framework.  Add a variable for the hostname ahead of the information message and edit the message to include the hostname.

![Host Name](/images/4/add_hostname.png)

Some extensions might need more information about a machine, such as the operating system.  We can access the OS type through this NodeJS package and show a message to the user based on the OS of machine.

![OS Name](/images/4/add_ostype.png)


## Serve Up Webviews
I haven't put together an Azure Data Studio example for serving up a webview yet, but an additional way to add extension functionality is to send HTML content to a webview.

## Extended Architecture
Beyond the use of VSCode/Azure Data Studio APIs, additional NodeJS libraries, and webviews - is the opportunity to access native code through an extension.

## Once You Have Functionality Put Together
You can continue to add functionality, debug, or package your extension for distribution.

## Ready to Move on to 5-Package?
[![Prereqs](/images/buttons/button_prereqs.png)](0-Prereqs.md)
[![Prereqs](/images/buttons/button_yo.png)](1-Yo.md)
[![Prereqs](/images/buttons/button_git.png)](2-Git.md)
[![Prereqs](/images/buttons/button_debugging.png)](3-Debugging.md)
[![Prereqs](/images/buttons2/button_create.png)](4-CodeCreate.md)
[![Prereqs](/images/buttons/button_package.png)](5-Package.md)
[![Prereqs](/images/buttons/button_publish.png)](6-Publish.md)