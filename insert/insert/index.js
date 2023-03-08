module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    let item = req.body;

    context.bindings.testData = item;

    context.res = {
        body: item
    }
}