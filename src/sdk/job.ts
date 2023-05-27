/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class Job {
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
     * Cancel job
     *
     * @remarks
     * Cancel job with a given job number.
     */
    async cancelJob(
        req: operations.CancelJobRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.CancelJobResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CancelJobRequest(req);
        }

        const baseURL: string = this._serverURL;
        const url: string = utils.generateURL(
            baseURL,
            "/project/{project-slug}/job/{job-number}/cancel",
            req
        );

        const client: AxiosInstance = this._securityClient || this._defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json;q=1, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "post",
            headers: headers,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.CancelJobResponse = new operations.CancelJobResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.messageResponse = utils.objectToClass(
                        httpRes?.data,
                        operations.CancelJobMessageResponse
                    );
                }
                break;
            default:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.cancelJobDefaultApplicationJSONObject = utils.objectToClass(
                        httpRes?.data,
                        operations.CancelJobDefaultApplicationJSON
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Get a job's artifacts
     *
     * @remarks
     * Returns a job's artifacts.
     */
    async getJobArtifacts(
        req: operations.GetJobArtifactsRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.GetJobArtifactsResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetJobArtifactsRequest(req);
        }

        const baseURL: string = this._serverURL;
        const url: string = utils.generateURL(
            baseURL,
            "/project/{project-slug}/{job-number}/artifacts",
            req
        );

        const client: AxiosInstance = this._securityClient || this._defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json;q=1, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "get",
            headers: headers,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetJobArtifactsResponse = new operations.GetJobArtifactsResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.artifactListResponse = utils.objectToClass(
                        httpRes?.data,
                        operations.GetJobArtifactsArtifactListResponse
                    );
                }
                break;
            default:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.getJobArtifactsDefaultApplicationJSONObject = utils.objectToClass(
                        httpRes?.data,
                        operations.GetJobArtifactsDefaultApplicationJSON
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Get job details
     *
     * @remarks
     * Returns job details.
     */
    async getJobDetails(
        req: operations.GetJobDetailsRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.GetJobDetailsResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetJobDetailsRequest(req);
        }

        const baseURL: string = this._serverURL;
        const url: string = utils.generateURL(
            baseURL,
            "/project/{project-slug}/job/{job-number}",
            req
        );

        const client: AxiosInstance = this._securityClient || this._defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json;q=1, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "get",
            headers: headers,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetJobDetailsResponse = new operations.GetJobDetailsResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.jobDetails = utils.objectToClass(
                        httpRes?.data,
                        operations.GetJobDetailsJobDetails
                    );
                }
                break;
            default:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.getJobDetailsDefaultApplicationJSONObject = utils.objectToClass(
                        httpRes?.data,
                        operations.GetJobDetailsDefaultApplicationJSON
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Get test metadata
     *
     * @remarks
     * Get test metadata for a build. In the rare case where there is more than 250MB of test data on the job, no results will be returned.
     */
    async getTests(
        req: operations.GetTestsRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.GetTestsResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetTestsRequest(req);
        }

        const baseURL: string = this._serverURL;
        const url: string = utils.generateURL(
            baseURL,
            "/project/{project-slug}/{job-number}/tests",
            req
        );

        const client: AxiosInstance = this._securityClient || this._defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json;q=1, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "get",
            headers: headers,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetTestsResponse = new operations.GetTestsResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.testsResponse = utils.objectToClass(
                        httpRes?.data,
                        operations.GetTestsTestsResponse
                    );
                }
                break;
            default:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.getTestsDefaultApplicationJSONObject = utils.objectToClass(
                        httpRes?.data,
                        operations.GetTestsDefaultApplicationJSON
                    );
                }
                break;
        }

        return res;
    }
}
