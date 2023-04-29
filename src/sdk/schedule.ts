/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class Schedule {
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
   * Create a schedule
   *
   * @remarks
   * Creates a schedule and returns the created schedule.
   */
  async createSchedule(
    req: operations.CreateScheduleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateScheduleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateScheduleRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/project/{project-slug}/schedule",
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

    const res: operations.CreateScheduleResponse =
      new operations.CreateScheduleResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 201:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.schedule = utils.objectToClass(
            httpRes?.data,
            operations.CreateScheduleSchedule
          );
        }
        break;
      default:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.createScheduleDefaultApplicationJSONObject = utils.objectToClass(
            httpRes?.data,
            operations.CreateScheduleDefaultApplicationJSON
          );
        }
        break;
    }

    return res;
  }

  /**
   * Delete a schedule
   *
   * @remarks
   * Deletes the schedule by id.
   */
  async deleteScheduleById(
    req: operations.DeleteScheduleByIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteScheduleByIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteScheduleByIdRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/schedule/{schedule-id}",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url,
      method: "delete",
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.DeleteScheduleByIdResponse =
      new operations.DeleteScheduleByIdResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.messageResponse = utils.objectToClass(
            httpRes?.data,
            operations.DeleteScheduleByIdMessageResponse
          );
        }
        break;
      default:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.deleteScheduleByIdDefaultApplicationJSONObject =
            utils.objectToClass(
              httpRes?.data,
              operations.DeleteScheduleByIdDefaultApplicationJSON
            );
        }
        break;
    }

    return res;
  }

  /**
   * Get a schedule
   *
   * @remarks
   * Get a schedule by id.
   */
  async getScheduleById(
    req: operations.GetScheduleByIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetScheduleByIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetScheduleByIdRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/schedule/{schedule-id}",
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

    const res: operations.GetScheduleByIdResponse =
      new operations.GetScheduleByIdResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.schedule = utils.objectToClass(
            httpRes?.data,
            operations.GetScheduleByIdSchedule
          );
        }
        break;
      default:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.getScheduleByIdDefaultApplicationJSONObject = utils.objectToClass(
            httpRes?.data,
            operations.GetScheduleByIdDefaultApplicationJSON
          );
        }
        break;
    }

    return res;
  }

  /**
   * Get all schedules
   *
   * @remarks
   * Returns all schedules for this project.
   */
  async listSchedulesForProject(
    req: operations.ListSchedulesForProjectRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListSchedulesForProjectResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListSchedulesForProjectRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/project/{project-slug}/schedule",
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

    const res: operations.ListSchedulesForProjectResponse =
      new operations.ListSchedulesForProjectResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.listSchedulesForProject200ApplicationJSONObject =
            utils.objectToClass(
              httpRes?.data,
              operations.ListSchedulesForProject200ApplicationJSON
            );
        }
        break;
      default:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.listSchedulesForProjectDefaultApplicationJSONObject =
            utils.objectToClass(
              httpRes?.data,
              operations.ListSchedulesForProjectDefaultApplicationJSON
            );
        }
        break;
    }

    return res;
  }

  /**
   * Update a schedule
   *
   * @remarks
   * Updates a schedule and returns the updated schedule.
   */
  async updateSchedule(
    req: operations.UpdateScheduleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateScheduleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateScheduleRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/schedule/{schedule-id}",
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
      method: "patch",
      headers: headers,
      data: reqBody,
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.UpdateScheduleResponse =
      new operations.UpdateScheduleResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.schedule = utils.objectToClass(
            httpRes?.data,
            operations.UpdateScheduleSchedule
          );
        }
        break;
      default:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.updateScheduleDefaultApplicationJSONObject = utils.objectToClass(
            httpRes?.data,
            operations.UpdateScheduleDefaultApplicationJSON
          );
        }
        break;
    }

    return res;
  }
}