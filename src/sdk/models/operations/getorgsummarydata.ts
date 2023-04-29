/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

/**
 * The time window used to calculate summary metrics.
 */
export enum GetOrgSummaryDataReportingWindowEnum {
  Last7Days = "last-7-days",
  Last90Days = "last-90-days",
  Last24Hours = "last-24-hours",
  Last30Days = "last-30-days",
  Last60Days = "last-60-days",
}

export class GetOrgSummaryDataRequest extends SpeakeasyBase {
  /**
   * Org slug in the form `vcs-slug/org-name`. The `/` characters may be URL-escaped.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=org-slug",
  })
  orgSlug: string;

  /**
   * List of project names.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=project-names",
  })
  projectNames?: Record<string, any>;

  /**
   * The time window used to calculate summary metrics.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=reporting-window",
  })
  reportingWindow?: GetOrgSummaryDataReportingWindowEnum;
}

/**
 * Error response.
 */
export class GetOrgSummaryDataDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;
}

/**
 * Metrics for a single org metrics.
 */
export class GetOrgSummaryData200ApplicationJSONOrgDataMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "success_rate" })
  successRate: number;

  /**
   * The average number of runs per day.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "throughput" })
  throughput: number;

  /**
   * The total credits consumed over the current timeseries interval.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "total_credits_used" })
  totalCreditsUsed: number;

  /**
   * Total duration, in seconds.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "total_duration_secs" })
  totalDurationSecs: number;

  /**
   * The total number of runs.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "total_runs" })
  totalRuns: number;
}

/**
 * Trends for a single org.
 */
export class GetOrgSummaryData200ApplicationJSONOrgDataTrends extends SpeakeasyBase {
  /**
   * The trend value for the success rate.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "success_rate" })
  successRate: number;

  /**
   * Trend value for the average number of runs per day.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "throughput" })
  throughput: number;

  /**
   * The trend value for total credits consumed.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "total_credits_used" })
  totalCreditsUsed: number;

  /**
   * Trend value for total duration.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "total_duration_secs" })
  totalDurationSecs: number;

  /**
   * The trend value for total number of runs.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "total_runs" })
  totalRuns: number;
}

/**
 * Aggregated metrics for an org, with trends.
 */
export class GetOrgSummaryData200ApplicationJSONOrgData extends SpeakeasyBase {
  /**
   * Metrics for a single org metrics.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "metrics" })
  @Type(() => GetOrgSummaryData200ApplicationJSONOrgDataMetrics)
  metrics: GetOrgSummaryData200ApplicationJSONOrgDataMetrics;

  /**
   * Trends for a single org.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "trends" })
  @Type(() => GetOrgSummaryData200ApplicationJSONOrgDataTrends)
  trends: GetOrgSummaryData200ApplicationJSONOrgDataTrends;
}

/**
 * Metrics for a single project, across all branches.
 */
export class GetOrgSummaryData200ApplicationJSONOrgProjectDataMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "success_rate" })
  successRate: number;

  /**
   * The total credits consumed over the current timeseries interval.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "total_credits_used" })
  totalCreditsUsed: number;

  /**
   * Total duration, in seconds.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "total_duration_secs" })
  totalDurationSecs: number;

  /**
   * The total number of runs.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "total_runs" })
  totalRuns: number;
}

/**
 * Trends for a single project, across all branches.
 */
export class GetOrgSummaryData200ApplicationJSONOrgProjectDataTrends extends SpeakeasyBase {
  /**
   * The trend value for the success rate.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "success_rate" })
  successRate: number;

  /**
   * The trend value for total credits consumed.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "total_credits_used" })
  totalCreditsUsed: number;

  /**
   * Trend value for total duration.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "total_duration_secs" })
  totalDurationSecs: number;

  /**
   * The trend value for total number of runs.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "total_runs" })
  totalRuns: number;
}

export class GetOrgSummaryData200ApplicationJSONOrgProjectData extends SpeakeasyBase {
  /**
   * Metrics for a single project, across all branches.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "metrics" })
  @Type(() => GetOrgSummaryData200ApplicationJSONOrgProjectDataMetrics)
  metrics: GetOrgSummaryData200ApplicationJSONOrgProjectDataMetrics;

  /**
   * The name of the project.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "project_name" })
  projectName: string;

  /**
   * Trends for a single project, across all branches.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "trends" })
  @Type(() => GetOrgSummaryData200ApplicationJSONOrgProjectDataTrends)
  trends: GetOrgSummaryData200ApplicationJSONOrgProjectDataTrends;
}

/**
 * Summary metrics with trends for the entire org, and for each project.
 */
export class GetOrgSummaryData200ApplicationJSON extends SpeakeasyBase {
  /**
   * A list of all the project names in the organization.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "all_projects" })
  allProjects: string[];

  /**
   * Aggregated metrics for an org, with trends.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "org_data" })
  @Type(() => GetOrgSummaryData200ApplicationJSONOrgData)
  orgData: GetOrgSummaryData200ApplicationJSONOrgData;

  /**
   * Metrics for a single project, across all branches
   */
  @SpeakeasyMetadata({
    elemType: GetOrgSummaryData200ApplicationJSONOrgProjectData,
  })
  @Expose({ name: "org_project_data" })
  @Type(() => GetOrgSummaryData200ApplicationJSONOrgProjectData)
  orgProjectData: GetOrgSummaryData200ApplicationJSONOrgProjectData[];
}

export class GetOrgSummaryDataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * summary metrics with trends for an entire org and it's projects.
   */
  @SpeakeasyMetadata()
  getOrgSummaryData200ApplicationJSONObject?: GetOrgSummaryData200ApplicationJSON;

  /**
   * Error response.
   */
  @SpeakeasyMetadata()
  getOrgSummaryDataDefaultApplicationJSONObject?: GetOrgSummaryDataDefaultApplicationJSON;
}