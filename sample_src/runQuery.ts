context.subscriptions.push(vscode.commands.registerCommand('extension.getDown', async () => {

    let connection = await azdata.connection.getCurrentConnection();
    let connectId = connection.connectionId;
    if (connection && connectId) {
        let query = `SELECT MAX(DOWNVOTES) AS DOWNVOTES
        FROM USERS`;

        let connectionUri = await azdata.connection.getUriForConnection(connectId);
        let queryProvider = azdata.dataprotocol.getProvider<azdata.QueryProvider>(connection.providerId,azdata.DataProviderType.QueryProvider);

        let results = await queryProvider.runQueryAndReturn(connectionUri, query);
        let cell = results.rows[0][0];

        let downvotes = cell.displayValue;

        vscode.window.showInformationMessage('The max downvotes is: '+downvotes);
    }
}));