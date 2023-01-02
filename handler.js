const {
  createLambdaFunction,
  createProbot
} = require('@probot/adapter-aws-lambda-serverless')

const appFn = require('safe-settings')

module.exports.webhooks = createLambdaFunction(appFn, {
  probot: createProbot()
})
