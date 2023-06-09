/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform } from "class-transformer";

export class AddEnvironmentVariableToContextRequestBody extends SpeakeasyBase {
    /**
     * The value of the environment variable
     */
    @SpeakeasyMetadata()
    @Expose({ name: "value" })
    value: string;
}

export class AddEnvironmentVariableToContextRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody?: AddEnvironmentVariableToContextRequestBody;

    /**
     * ID of the context (UUID)
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=context-id" })
    contextId: string;

    /**
     * The name of the environment variable
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=env-var-name" })
    envVarName: string;
}

/**
 * Error response.
 */
export class AddEnvironmentVariableToContextDefaultApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

/**
 * message response
 */
export class AddEnvironmentVariableToContext200ApplicationJSONMessageResponse extends SpeakeasyBase {
    /**
     * A human-readable message
     */
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message: string;
}

export class AddEnvironmentVariableToContext200ApplicationJson1 extends SpeakeasyBase {
    /**
     * ID of the context (UUID)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "context_id" })
    contextId: string;

    /**
     * The date and time the environment variable was created.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt: Date;

    /**
     * The date and time the environment variable was updated
     */
    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt: Date;

    /**
     * The name of the environment variable
     */
    @SpeakeasyMetadata()
    @Expose({ name: "variable" })
    variable: string;
}

export class AddEnvironmentVariableToContextResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * The new environment variable
     */
    @SpeakeasyMetadata()
    addEnvironmentVariableToContext200ApplicationJSONAnyOf?: any;

    /**
     * Error response.
     */
    @SpeakeasyMetadata()
    addEnvironmentVariableToContextDefaultApplicationJSONObject?: AddEnvironmentVariableToContextDefaultApplicationJSON;
}
