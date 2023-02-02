module.exports = async function (context, req, testData) {
      context.log('JavaScript HTTP trigger function processed a request.');
      context.log(testData)
    
        context.res = {
            body: testData
        }
    }