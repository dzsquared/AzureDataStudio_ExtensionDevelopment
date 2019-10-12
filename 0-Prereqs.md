# Azure Data Studio Extension Development

[![Prereqs](/images/buttons2/button_prereqs.png)](0-Prereqs.md)
[![Prereqs](/images/buttons/button_yo.png)](1-Yo.md)
[![Prereqs](/images/buttons/button_git.png)](2-Git.md)
[![Prereqs](/images/buttons/button_debugging.png)](3-Debugging.md)
[![Prereqs](/images/buttons/button_create.png)](4-CodeCreate.md)
[![Prereqs](/images/buttons/button_package.png)](5-Package.md)
[![Prereqs](/images/buttons/button_publish.png)](6-Publish.md)

# Prerequisites
We'll be installing these items on nearly any computer manufactured since 2013.  All are free, many are open source.
- VS Code
- Azure Data Studio Debugger Extension in VS Code
- Git
- NodeJS
- Typescript
- Yeoman Extension Generator
- ~~Azure Data Studio~~ Azure Data Studio
- vsce


## VS Code
Install VS Code from a download available at this link: https://code.visualstudio.com/
Once the install completes, launch VS Code.
[![VS Code](/images/0/vscode_layout.png)](https://code.visualstudio.com/docs/getstarted/userinterface)


## Azure Data Studio Debugger
The left-most column in VS Code is the *Activity Bar*, where we will access VS Code extensions.
Extension for VS Code that expedites the setup for debugging with ~~Azure Data Studio~~ Azure Data Studio.
[![SOS Debugger](/images/0/vscode_extensions.png)](https://marketplace.visualstudio.com/items?itemName=ms-mssql.sqlops-debug)

## Node JS
Traditionally, Javascript is executed in a browser. For a project to leverage Javascript in an alternate environment, such as server-side Javascript, it needs an environment such as Node JS. 
Open source, not by Microsoft, and available here: https://nodejs.org/en/download/

## npm
Software registry and package manager for Javascript, npm ties you directly to functionality from other code packages. Installed right along with Node JS, you can double check the npm version with `npm -v` from the VS Code terminal.

## Typescript
Typescript is a superset of Javascript, a language that adds functionality to the base language by compiling to Javascript. This functionality, including static types and classes, makes Typescript the choice over Javascript for many larger projects.
Open source and maintained by Microsoft.
With npm installed, you can get Typescript at the VS Code terminal with `npm install -g typescript`
*depending on your OS, you might need to use sudo*

## Install the Yeoman Extension Generator 
The Yeoman (yo) extension generator creates the framework needed for an Azure Data Studio extension, theme, or keymap. 
Install the extension generator from the VS Code terminal with npm by running `npm install -g yo generator-sqlops`
*depending on your OS, you might need to use sudo*
![Install Yo](/images/0/install_yo.png)


## Azure Data Studio
If you don't already have Azure Data Studio, it has a wide range of functionality for SQL Server, Azure DB, and Azure SQL Data Warehouse and is worthy of your consideration.
A feature comparison with SQL Server Management Studio is summarized here: https://cloudblogs.microsoft.com/sqlserver/2018/09/25/azure-data-studio-for-sql-server/

Open source, maintained by Microsoft, and available here: https://docs.microsoft.com/en-us/sql/azure-data-studio/download


## vsce
The VS Code extension manager, vsce, is used for packaging/publishing extensions for VS Code and Azure Data studio.  It can be installed from the VS Code terminal by running `npm install -g vsce`
*depending on your OS, you might need to use sudo*

## Ready to Move on to 1-Yo?
[![Prereqs](/images/buttons2/button_prereqs.png)](0-Prereqs.md)
[![Prereqs](/images/buttons/button_yo.png)](1-Yo.md)
[![Prereqs](/images/buttons/button_git.png)](2-Git.md)
[![Prereqs](/images/buttons/button_debugging.png)](3-Debugging.md)
[![Prereqs](/images/buttons/button_create.png)](4-CodeCreate.md)
[![Prereqs](/images/buttons/button_package.png)](5-Package.md)
[![Prereqs](/images/buttons/button_publish.png)](6-Publish.md)