/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class Project {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Create a new checkout key
     *
     * @remarks
     * Creates a new checkout key. This API request is only usable with a user API token.
     */
    async createCheckoutKey(
        req: operations.CreateCheckoutKeyRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.CreateCheckoutKeyResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CreateCheckoutKeyRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/project/{project-slug}/checkout-key", req);

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

        const res: operations.CreateCheckoutKeyResponse = new operations.CreateCheckoutKeyResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            case httpRes?.status == 201:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.checkoutKey = utils.objectToClass(
                        httpRes?.data,
                        operations.CreateCheckoutKeyCheckoutKey
                    );
                }
                break;
            default:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.createCheckoutKeyDefaultApplicationJSONObject = utils.objectToClass(
                        httpRes?.data,
                        operations.CreateCheckoutKeyDefaultApplicationJSON
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Create an environment variable
     *
     * @remarks
     * Creates a new environment variable.
     */
    async createEnvVar(
        req: operations.CreateEnvVarRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.CreateEnvVarResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CreateEnvVarRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/project/{project-slug}/envvar", req);

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

        const res: operations.CreateEnvVarResponse = new operations.CreateEnvVarResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            case httpRes?.status == 201:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.environmentVariablePair = utils.objectToClass(
                        httpRes?.data,
                        operations.CreateEnvVarEnvironmentVariablePair
                    );
                }
                break;
            default:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.createEnvVarDefaultApplicationJSONObject = utils.objectToClass(
                        httpRes?.data,
                        operations.CreateEnvVarDefaultApplicationJSON
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Delete a checkout key
     *
     * @remarks
     * Deletes the checkout key.
     */
    async deleteCheckoutKey(
        req: operations.DeleteCheckoutKeyRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.DeleteCheckoutKeyResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteCheckoutKeyRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/project/{project-slug}/checkout-key/{fingerprint}",
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
            method: "delete",
            headers: headers,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.DeleteCheckoutKeyResponse = new operations.DeleteCheckoutKeyResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.messageResponse = utils.objectToClass(
                        httpRes?.data,
                        operations.DeleteCheckoutKeyMessageResponse
                    );
                }
                break;
            default:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.deleteCheckoutKeyDefaultApplicationJSONObject = utils.objectToClass(
                        httpRes?.data,
                        operations.DeleteCheckoutKeyDefaultApplicationJSON
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Delete an environment variable
     *
     * @remarks
     * Deletes the environment variable named :name.
     */
    async deleteEnvVar(
        req: operations.DeleteEnvVarRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.DeleteEnvVarResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteEnvVarRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/project/{project-slug}/envvar/{name}",
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
            method: "delete",
            headers: headers,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.DeleteEnvVarResponse = new operations.DeleteEnvVarResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.messageResponse = utils.objectToClass(
                        httpRes?.data,
                        operations.DeleteEnvVarMessageResponse
                    );
                }
                break;
            default:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.deleteEnvVarDefaultApplicationJSONObject = utils.objectToClass(
                        httpRes?.data,
                        operations.DeleteEnvVarDefaultApplicationJSON
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Get a checkout key
     *
     * @remarks
     * Returns an individual checkout key.
     */
    async getCheckoutKey(
        req: operations.GetCheckoutKeyRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.GetCheckoutKeyResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetCheckoutKeyRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/project/{project-slug}/checkout-key/{fingerprint}",
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
            method: "get",
            headers: headers,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetCheckoutKeyResponse = new operations.GetCheckoutKeyResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.checkoutKey = utils.objectToClass(
                        httpRes?.data,
                        operations.GetCheckoutKeyCheckoutKey
                    );
                }
                break;
            default:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.getCheckoutKeyDefaultApplicationJSONObject = utils.objectToClass(
                        httpRes?.data,
                        operations.GetCheckoutKeyDefaultApplicationJSON
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Get a masked environment variable
     *
     * @remarks
     * Returns the masked value of environment variable :name.
     */
    async getEnvVar(
        req: operations.GetEnvVarRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.GetEnvVarResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetEnvVarRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/project/{project-slug}/envvar/{name}",
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
            method: "get",
            headers: headers,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetEnvVarResponse = new operations.GetEnvVarResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.environmentVariablePair = utils.objectToClass(
                        httpRes?.data,
                        operations.GetEnvVarEnvironmentVariablePair
                    );
                }
                break;
            default:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.getEnvVarDefaultApplicationJSONObject = utils.objectToClass(
                        httpRes?.data,
                        operations.GetEnvVarDefaultApplicationJSON
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Get a project
     *
     * @remarks
     * Retrieves a project by project slug.
     */
    async getProjectBySlug(
        req: operations.GetProjectBySlugRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.GetProjectBySlugResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetProjectBySlugRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/project/{project-slug}", req);

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

        const res: operations.GetProjectBySlugResponse = new operations.GetProjectBySlugResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.project = utils.objectToClass(
                        httpRes?.data,
                        operations.GetProjectBySlugProject
                    );
                }
                break;
            default:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.getProjectBySlugDefaultApplicationJSONObject = utils.objectToClass(
                        httpRes?.data,
                        operations.GetProjectBySlugDefaultApplicationJSON
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Get all checkout keys
     *
     * @remarks
     * Returns a sequence of checkout keys for `:project`.
     */
    async listCheckoutKeys(
        req: operations.ListCheckoutKeysRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.ListCheckoutKeysResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ListCheckoutKeysRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/project/{project-slug}/checkout-key", req);

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

        const res: operations.ListCheckoutKeysResponse = new operations.ListCheckoutKeysResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.checkoutKeyListResponse = utils.objectToClass(
                        httpRes?.data,
                        operations.ListCheckoutKeysCheckoutKeyListResponse
                    );
                }
                break;
            default:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.listCheckoutKeysDefaultApplicationJSONObject = utils.objectToClass(
                        httpRes?.data,
                        operations.ListCheckoutKeysDefaultApplicationJSON
                    );
                }
                break;
        }

        return res;
    }

    /**
     * List all environment variables
     *
     * @remarks
     * Returns four 'x' characters, in addition to the last four ASCII characters of the value, consistent with the display of environment variable values on the CircleCI website.
     */
    async listEnvVars(
        req: operations.ListEnvVarsRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.ListEnvVarsResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ListEnvVarsRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/project/{project-slug}/envvar", req);

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

        const res: operations.ListEnvVarsResponse = new operations.ListEnvVarsResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.environmentVariableListResponse = utils.objectToClass(
                        httpRes?.data,
                        operations.ListEnvVarsEnvironmentVariableListResponse
                    );
                }
                break;
            default:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.listEnvVarsDefaultApplicationJSONObject = utils.objectToClass(
                        httpRes?.data,
                        operations.ListEnvVarsDefaultApplicationJSON
                    );
                }
                break;
        }

        return res;
    }
}
