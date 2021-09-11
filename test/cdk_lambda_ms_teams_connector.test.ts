import { expect as expectCDK, matchTemplate, MatchStyle } from "@aws-cdk/assert";
import * as cdk from "@aws-cdk/core";
import * as CdkLambdaMsTeamsConnector from "../lib/cdk_lambda_ms_teams_connector-stack";
export const _AWSREGION = process.env.CDK_DEFAULT_REGION;
export const _ACCOUNT = process.env.CDK_DEFAULT_ACCOUNT;
const env = { account: _ACCOUNT, region: _AWSREGION };

test("Empty Stack", () => {
  const app = new cdk.App();
  // WHEN
  const stack = new CdkLambdaMsTeamsConnector.CdkLambdaMsTeamsConnectorStack(app, "MyTestStack", { env });
  // THEN
  expectCDK(stack).to(
    matchTemplate(
      {
        Resources: {},
      },
      MatchStyle.EXACT
    )
  );
});
