#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "@aws-cdk/core";
import { CdkLambdaMsTeamsConnectorStack } from "../lib/cdk_lambda_ms_teams_connector-stack";
import { Tags } from "@aws-cdk/core";

export const _AWSREGION = process.env.CDK_DEFAULT_REGION;
export const _ACCOUNT = process.env.CDK_DEFAULT_ACCOUNT;
const env = { account: _ACCOUNT, region: _AWSREGION };

const app = new cdk.App();
const connector = new CdkLambdaMsTeamsConnectorStack(app, "CdkLambdaMsTeamsConnectorStack", {
  env,
});

let criticality = "Low"; // "High"
let environment = "Development"; // "Production";

// Tags
Tags.of(connector).add("IAC.Module", "CdkLambdaMsTeamsConnectorStack");
Tags.of(app).add("IAC.Version", "Latest");
Tags.of(app).add("IAC.Repository", "https://github.com/morgans3/cdk_lambda_msteams_integration");
Tags.of(app).add("IAC.Docs", "DIU Confluence Site");
Tags.of(app).add("Security.Audit.LastChecked", new Date().toISOString());
Tags.of(app).add("Criticality", criticality);
Tags.of(app).add("Environment", environment);
