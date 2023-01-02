# example-safe-settings-sam-app

Example repo for running https://github.com/github/safe-settings on AWS Lambda
using SAM for packaging and deployment through GitHub Actions using GitHub OIDC
for authenticating with AWS.

Bootstrapped using AWS SAM CLI.

In this example, the required parameters for webhook secret, application ID and
private key are provided using parameter overrides to the `sam deploy` command
with values retrieved from GitHub Environment Secrets.
These may also be resolved from AWS SSM Parameter Store or Secrets Manager by
modifying `template.yml` or modifying the code to use `aws-parameter-cache` or
similar package.