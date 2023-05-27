/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class ListCheckoutKeysRequest extends SpeakeasyBase {
    /**
     * Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project-slug" })
    projectSlug: string;
}

/**
 * Error response.
 */
export class ListCheckoutKeysDefaultApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

/**
 * The type of checkout key. This may be either `deploy-key` or `github-user-key`.
 */
export enum ListCheckoutKeysCheckoutKeyListResponseCheckoutKeyCheckoutKeyType {
    DeployKey = "deploy-key",
    GithubUserKey = "github-user-key",
}

export class ListCheckoutKeysCheckoutKeyListResponseCheckoutKey extends SpeakeasyBase {
    /**
     * The date and time the checkout key was created.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "created-at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt: Date;

    /**
     * An SSH key fingerprint.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "fingerprint" })
    fingerprint: string;

    /**
     * A boolean value that indicates if this key is preferred.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "preferred" })
    preferred: boolean;

    /**
     * A public SSH key.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "public-key" })
    publicKey: string;

    /**
     * The type of checkout key. This may be either `deploy-key` or `github-user-key`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type: ListCheckoutKeysCheckoutKeyListResponseCheckoutKeyCheckoutKeyType;
}

/**
 * A sequence of checkout keys.
 */
export class ListCheckoutKeysCheckoutKeyListResponse extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: ListCheckoutKeysCheckoutKeyListResponseCheckoutKey })
    @Expose({ name: "items" })
    @Type(() => ListCheckoutKeysCheckoutKeyListResponseCheckoutKey)
    items: ListCheckoutKeysCheckoutKeyListResponseCheckoutKey[];

    /**
     * A token to pass as a `page-token` query parameter to return the next page of results.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "next_page_token" })
    nextPageToken: string;
}

export class ListCheckoutKeysResponse extends SpeakeasyBase {
    /**
     * A sequence of checkout keys.
     */
    @SpeakeasyMetadata()
    checkoutKeyListResponse?: ListCheckoutKeysCheckoutKeyListResponse;

    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * Error response.
     */
    @SpeakeasyMetadata()
    listCheckoutKeysDefaultApplicationJSONObject?: ListCheckoutKeysDefaultApplicationJSON;
}
