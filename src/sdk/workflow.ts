/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class Workflow {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Approve a job
     *
     * @remarks
     * Approves a pending approval job in a workflow.
     */
    async approvePendingApprovalJobById(
        req: operations.ApprovePendingApprovalJobByIdRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.ApprovePendingApprovalJobByIdResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ApprovePendingApprovalJobByIdRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/workflow/{id}/approve/{approval_request_id}",
            req
        );

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json;q=1, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

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

        const res: operations.ApprovePendingApprovalJobByIdResponse =
            new operations.ApprovePendingApprovalJobByIdResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 202:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.messageResponse = utils.objectToClass(
                        httpRes?.data,
                        operations.ApprovePendingApprovalJobByIdMessageResponse
                    );
                }
                break;
            default:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.approvePendingApprovalJobByIdDefaultApplicationJSONObject =
                        utils.objectToClass(
                            httpRes?.data,
                            operations.ApprovePendingApprovalJobByIdDefaultApplicationJSON
                        );
                }
                break;
        }

        return res;
    }

    /**
     * Cancel a workflow
     *
     * @remarks
     * Cancels a running workflow.
     */
    async cancelWorkflow(
        req: operations.CancelWorkflowRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.CancelWorkflowResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CancelWorkflowRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/workflow/{id}/cancel", req);

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json;q=1, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

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

        const res: operations.CancelWorkflowResponse = new operations.CancelWorkflowResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            case httpRes?.status == 202:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.messageResponse = utils.objectToClass(
                        httpRes?.data,
                        operations.CancelWorkflowMessageResponse
                    );
                }
                break;
            default:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.cancelWorkflowDefaultApplicationJSONObject = utils.objectToClass(
                        httpRes?.data,
                        operations.CancelWorkflowDefaultApplicationJSON
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Get a workflow
     *
     * @remarks
     * Returns summary fields of a workflow by ID.
     */
    async getWorkflowById(
        req: operations.GetWorkflowByIdRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.GetWorkflowByIdResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetWorkflowByIdRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/workflow/{id}", req);

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json;q=1, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

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

        const res: operations.GetWorkflowByIdResponse = new operations.GetWorkflowByIdResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.workflow = utils.objectToClass(
                        httpRes?.data,
                        operations.GetWorkflowByIdWorkflow
                    );
                }
                break;
            default:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.getWorkflowByIdDefaultApplicationJSONObject = utils.objectToClass(
                        httpRes?.data,
                        operations.GetWorkflowByIdDefaultApplicationJSON
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Get a workflow's jobs
     *
     * @remarks
     * Returns a sequence of jobs for a workflow.
     */
    async listWorkflowJobs(
        req: operations.ListWorkflowJobsRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.ListWorkflowJobsResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ListWorkflowJobsRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/workflow/{id}/job", req);

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json;q=1, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

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

        const res: operations.ListWorkflowJobsResponse = new operations.ListWorkflowJobsResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.workflowJobListResponse = utils.objectToClass(
                        httpRes?.data,
                        operations.ListWorkflowJobsWorkflowJobListResponse
                    );
                }
                break;
            default:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.listWorkflowJobsDefaultApplicationJSONObject = utils.objectToClass(
                        httpRes?.data,
                        operations.ListWorkflowJobsDefaultApplicationJSON
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Rerun a workflow
     *
     * @remarks
     * Reruns a workflow.
     */
    async rerunWorkflow(
        req: operations.RerunWorkflowRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.RerunWorkflowResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.RerunWorkflowRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/workflow/{id}/rerun", req);

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "requestBody", "json");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...reqBodyHeaders, ...config?.headers };
        headers["Accept"] = "application/json;q=1, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

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

        const res: operations.RerunWorkflowResponse = new operations.RerunWorkflowResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            case httpRes?.status == 202:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.rerunWorkflow202ApplicationJSONObject = utils.objectToClass(
                        httpRes?.data,
                        operations.RerunWorkflow202ApplicationJSON
                    );
                }
                break;
            default:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.rerunWorkflowDefaultApplicationJSONObject = utils.objectToClass(
                        httpRes?.data,
                        operations.RerunWorkflowDefaultApplicationJSON
                    );
                }
                break;
        }

        return res;
    }
}
