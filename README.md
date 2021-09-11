# CDK Project for Deploying MS Teams Integration Lambda

Cloud Development Kit project for managing AWS Services for deploying MS Teams Integration Lambda

## Pre-requisites

- An AWS Account, with an IAM with required permissions to use CDK
- Locally stored AWS Credentials which grant programmatic access, created in AWS IAM
- MS Teams Channel with ability to configure an Incoming Webhook (https://docs.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook)

## Steps to deploy

- After downloading the repo, run the command `npm i` to install the node_modules folder and libraries
- In the terminal, run `npm run watch` to watch and compile changes
- Update lib/\_config.ts file to customise the configuration, adding your Webook url from MS Teams
- Run `cdk bootstrap` to bootstrap your AWS account (One time setup only)
- Run `cdk deploy` to deploy all the resources
- Test Lambda using the AWS Web Console to send a message to your MS Teams channel
- Once successfully tested, you can now link the lambda to any Event, Alarm or Trigger

## Useful commands

- `npm run build` compile typescript to js
- `npm run watch` watch for changes and compile
- `npm run test` perform the jest unit tests
- `cdk deploy` deploy this stack to your default AWS account/region
- `cdk diff` compare deployed stack with current state
- `cdk synth` emits the synthesized CloudFormation template

### Common Issues

#### Multiple locally stored AWS credentials

If you have multiple locally stored AWS credentials, or if you are not sure that you have a key stored with progammatic access, you should check your local machine:

- Linux and macOS: `~/.aws/config` or `~/.aws/credentials`
- Windows: `%USERPROFILE%\.aws\config` or `%USERPROFILE%\.aws\credentials`

To select a non-default account, run the cdk commands with the profile flag on the end like so `cdk bootstrap --profile myprofilename`
