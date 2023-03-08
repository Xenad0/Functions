module.exports = async function (context, req, item) {

    const { CosmosClient } = require("@azure/cosmos")

    const endpoint = "https://db-cosmos-dev-9782b81d.documents.azure.com:443";
    const key = "p0ADpnYzailjmAWq9rHcJiPU9qOHM4L1iHdP66Zdpiffj7QMJMQsKUCJSmWocubmaddU9kIkcu9NACDbOBJIAQ==";
    const client = new CosmosClient({ endpoint, key });

    //let newItem = req.body
    console.log(item)

    const container = client.database("Testapp").container("Items");

    const { resource } = await container.item(item.id, item.id).delete();

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: resource
    };
}