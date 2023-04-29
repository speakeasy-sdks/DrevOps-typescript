/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class Pipeline {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(
    defaultClient: AxiosInstance,
    securityClient: AxiosInstance,
    serverURL: string,
    language: string,
    sdkVersion: string,
    genVersion: string
  ) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }

  /**
   * Continue a pipeline
   *
   * @remarks
   * Continue a pipeline from the setup phase.
   */
  async continuePipeline(
    req: operations.ContinuePipelineRequestBody,
    config?: AxiosRequestConfig
  ): Promise<operations.ContinuePipelineResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ContinuePipelineRequestBody(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/pipeline/continue";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "request",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...reqBodyHeaders, ...config?.headers };

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url,
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.ContinuePipelineResponse =
      new operations.ContinuePipelineResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.messageResponse = utils.objectToClass(
            httpRes?.data,
            operations.ContinuePipelineMessageResponse
          );
        }
        break;
      default:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.continuePipelineDefaultApplicationJSONObject =
            utils.objectToClass(
              httpRes?.data,
              operations.ContinuePipelineDefaultApplicationJSON
            );
        }
        break;
    }

    return res;
  }

  /**
   * Get a pipeline by ID
   *
   * @remarks
   * Returns a pipeline by the pipeline ID.
   */
  async getPipelineById(
    req: operations.GetPipelineByIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPipelineByIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPipelineByIdRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/pipeline/{pipeline-id}",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url,
      method: "get",
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.GetPipelineByIdResponse =
      new operations.GetPipelineByIdResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.pipeline = utils.objectToClass(
            httpRes?.data,
            operations.GetPipelineByIdPipeline
          );
        }
        break;
      default:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.getPipelineByIdDefaultApplicationJSONObject = utils.objectToClass(
            httpRes?.data,
            operations.GetPipelineByIdDefaultApplicationJSON
          );
        }
        break;
    }

    return res;
  }

  /**
   * Get a pipeline by pipeline number
   *
   * @remarks
   * Returns a pipeline by the pipeline number.
   */
  async getPipelineByNumber(
    req: operations.GetPipelineByNumberRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPipelineByNumberResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPipelineByNumberRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/project/{project-slug}/pipeline/{pipeline-number}",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url,
      method: "get",
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.GetPipelineByNumberResponse =
      new operations.GetPipelineByNumberResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.pipeline = utils.objectToClass(
            httpRes?.data,
            operations.GetPipelineByNumberPipeline
          );
        }
        break;
      default:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.getPipelineByNumberDefaultApplicationJSONObject =
            utils.objectToClass(
              httpRes?.data,
              operations.GetPipelineByNumberDefaultApplicationJSON
            );
        }
        break;
    }

    return res;
  }

  /**
   * Get a pipeline's configuration
   *
   * @remarks
   * Returns a pipeline's configuration by ID.
   */
  async getPipelineConfigById(
    req: operations.GetPipelineConfigByIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPipelineConfigByIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPipelineConfigByIdRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/pipeline/{pipeline-id}/config",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url,
      method: "get",
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.GetPipelineConfigByIdResponse =
      new operations.GetPipelineConfigByIdResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.pipelineConfig = utils.objectToClass(
            httpRes?.data,
            operations.GetPipelineConfigByIdPipelineConfig
          );
        }
        break;
      default:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.getPipelineConfigByIdDefaultApplicationJSONObject =
            utils.objectToClass(
              httpRes?.data,
              operations.GetPipelineConfigByIdDefaultApplicationJSON
            );
        }
        break;
    }

    return res;
  }

  /**
   * Get your pipelines
   *
   * @remarks
   * Returns a sequence of all pipelines for this project triggered by the user.
   */
  async listMyPipelines(
    req: operations.ListMyPipelinesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListMyPipelinesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListMyPipelinesRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/project/{project-slug}/pipeline/mine",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const queryParams: string = utils.serializeQueryParams(req);

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url + queryParams,
      method: "get",
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.ListMyPipelinesResponse =
      new operations.ListMyPipelinesResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.pipelineListResponse = utils.objectToClass(
            httpRes?.data,
            operations.ListMyPipelinesPipelineListResponse
          );
        }
        break;
      default:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.listMyPipelinesDefaultApplicationJSONObject = utils.objectToClass(
            httpRes?.data,
            operations.ListMyPipelinesDefaultApplicationJSON
          );
        }
        break;
    }

    return res;
  }

  /**
   * Get a list of pipelines
   *
   * @remarks
   * Returns all pipelines for the most recently built projects (max 250) you follow in an organization.
   */
  async listPipelines(
    req: operations.ListPipelinesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListPipelinesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListPipelinesRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/pipeline";

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const queryParams: string = utils.serializeQueryParams(req);

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url + queryParams,
      method: "get",
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.ListPipelinesResponse =
      new operations.ListPipelinesResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.pipelineListResponse = utils.objectToClass(
            httpRes?.data,
            operations.ListPipelinesPipelineListResponse
          );
        }
        break;
      default:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.listPipelinesDefaultApplicationJSONObject = utils.objectToClass(
            httpRes?.data,
            operations.ListPipelinesDefaultApplicationJSON
          );
        }
        break;
    }

    return res;
  }

  /**
   * Get all pipelines
   *
   * @remarks
   * Returns all pipelines for this project.
   */
  async listPipelinesForProject(
    req: operations.ListPipelinesForProjectRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListPipelinesForProjectResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListPipelinesForProjectRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/project/{project-slug}/pipeline",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const queryParams: string = utils.serializeQueryParams(req);

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url + queryParams,
      method: "get",
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.ListPipelinesForProjectResponse =
      new operations.ListPipelinesForProjectResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.pipelineListResponse = utils.objectToClass(
            httpRes?.data,
            operations.ListPipelinesForProjectPipelineListResponse
          );
        }
        break;
      default:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.listPipelinesForProjectDefaultApplicationJSONObject =
            utils.objectToClass(
              httpRes?.data,
              operations.ListPipelinesForProjectDefaultApplicationJSON
            );
        }
        break;
    }

    return res;
  }

  /**
   * Get a pipeline's workflows
   *
   * @remarks
   * Returns a paginated list of workflows by pipeline ID.
   */
  async listWorkflowsByPipelineId(
    req: operations.ListWorkflowsByPipelineIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListWorkflowsByPipelineIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListWorkflowsByPipelineIdRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/pipeline/{pipeline-id}/workflow",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const queryParams: string = utils.serializeQueryParams(req);

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url + queryParams,
      method: "get",
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.ListWorkflowsByPipelineIdResponse =
      new operations.ListWorkflowsByPipelineIdResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.workflowListResponse = utils.objectToClass(
            httpRes?.data,
            operations.ListWorkflowsByPipelineIdWorkflowListResponse
          );
        }
        break;
      default:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.listWorkflowsByPipelineIdDefaultApplicationJSONObject =
            utils.objectToClass(
              httpRes?.data,
              operations.ListWorkflowsByPipelineIdDefaultApplicationJSON
            );
        }
        break;
    }

    return res;
  }

  /**
   * Trigger a new pipeline
   *
   * @remarks
   * Triggers a new pipeline on the project.
   */
  async triggerPipeline(
    req: operations.TriggerPipelineRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TriggerPipelineResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TriggerPipelineRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/project/{project-slug}/pipeline",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "requestBody",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...reqBodyHeaders, ...config?.headers };

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url,
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.TriggerPipelineResponse =
      new operations.TriggerPipelineResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 201:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.pipelineCreation = utils.objectToClass(
            httpRes?.data,
            operations.TriggerPipelinePipelineCreation
          );
        }
        break;
      default:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.triggerPipelineDefaultApplicationJSONObject = utils.objectToClass(
            httpRes?.data,
            operations.TriggerPipelineDefaultApplicationJSON
          );
        }
        break;
    }

    return res;
  }
}
