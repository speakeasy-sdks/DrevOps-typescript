/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import { Context } from "./context";
import { Insights } from "./insights";
import { Job } from "./job";
import * as shared from "./models/shared";
import { Pipeline } from "./pipeline";
import { Project } from "./project";
import { Schedule } from "./schedule";
import { User } from "./user";
import { Webhook } from "./webhook";
import { Workflow } from "./workflow";
import axios from "axios";
import { AxiosInstance } from "axios";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = ["https://circleci.com/api/v2"] as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
  /**
   * The security details required to authenticate the SDK
   */
  security?: shared.Security;
  /**
   * Allows overriding the default axios client used by the SDK
   */
  defaultClient?: AxiosInstance;
  /**
   * Allows overriding the default server URL used by the SDK
   */
  serverURL?: string;
};

/**
 * This describes the resources that make up the CircleCI API v2.
 *
 * @remarks
 *
 * # Authentication
 *
 * <!-- ReDoc-Inject: <security-definitions> -->
 */
export class SDK {
  public context: Context;
  public insights: Insights;
  public job: Job;
  public pipeline: Pipeline;
  public project: Project;
  public schedule: Schedule;
  public user: User;
  public webhook: Webhook;
  public workflow: Workflow;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "1.2.3";
  private _genVersion = "2.26.3";
  private _globals: any;

  constructor(props?: SDKProps) {
    this._serverURL = props?.serverURL ?? ServerList[0];

    this._defaultClient =
      props?.defaultClient ?? axios.create({ baseURL: this._serverURL });
    if (props?.security) {
      let security: shared.Security = props.security;
      if (!(props.security instanceof utils.SpeakeasyBase))
        security = new shared.Security(props.security);
      this._securityClient = utils.createSecurityClient(
        this._defaultClient,
        security
      );
    } else {
      this._securityClient = this._defaultClient;
    }

    this.context = new Context(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.insights = new Insights(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.job = new Job(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.pipeline = new Pipeline(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.project = new Project(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.schedule = new Schedule(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.user = new User(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.webhook = new Webhook(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.workflow = new Workflow(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}
