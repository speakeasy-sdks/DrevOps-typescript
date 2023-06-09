/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

/**
 * The environment variable.
 */
export class CreateEnvVarEnvironmentVariablePair extends SpeakeasyBase {
    /**
     * The name of the environment variable.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    /**
     * The value of the environment variable.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "value" })
    value: string;
}

export class CreateEnvVarRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody?: CreateEnvVarEnvironmentVariablePair;

    /**
     * Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project-slug" })
    projectSlug: string;
}

/**
 * Error response.
 */
export class CreateEnvVarDefaultApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

export class CreateEnvVarResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * The environment variable.
     */
    @SpeakeasyMetadata()
    environmentVariablePair?: CreateEnvVarEnvironmentVariablePair;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * Error response.
     */
    @SpeakeasyMetadata()
    createEnvVarDefaultApplicationJSONObject?: CreateEnvVarDefaultApplicationJSON;
}
