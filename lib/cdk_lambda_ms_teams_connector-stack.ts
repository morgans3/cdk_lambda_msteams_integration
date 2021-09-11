import * as cdk from "@aws-cdk/core";
import lambda = require("@aws-cdk/aws-lambda");
import * as iam from "@aws-cdk/aws-iam";
import { MS_TEAMS_WEBHOOK_URL } from "./_config";

export class CdkLambdaMsTeamsConnectorStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props: any) {
    super(scope, id, props);

    const lambdarole = new iam.Role(this, "LambdaMSTeamsRole", {
      assumedBy: new iam.ServicePrincipal("lambda.amazonaws.com"),
      roleName: "LambdaMSTeamsConnectorRole",
    });
    lambdarole.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName("CloudWatchFullAccess"));

    const handler = new lambda.Function(this, "MSTeamConnectorHandler", {
      functionName: "MSTeamConnectorLambda",
      runtime: lambda.Runtime.NODEJS_14_X,
      code: lambda.Code.fromAsset("./src/msteams", {
        exclude: ["cdk", "*.ts"],
      }),
      handler: "msteams.handler",
      environment: {
        MS_TEAMS_WEBHOOK_URL: MS_TEAMS_WEBHOOK_URL,
        ACCOUNT: props.env.account,
      },
      role: lambdarole,
    });
  }
}
