# insights

### Available Operations

* [getAllInsightsBranches](#getallinsightsbranches) - Get all branches for a project
* [getFlakyTests](#getflakytests) - Get flaky tests for a project
* [getJobTimeseries](#getjobtimeseries) - Job timeseries data
* [getOrgSummaryData](#getorgsummarydata) - Get summary metrics with trends for the entire org, and for each project.
* [getProjectWorkflowJobMetrics](#getprojectworkflowjobmetrics) - Get summary metrics for a project workflow's jobs.
* [getProjectWorkflowMetrics](#getprojectworkflowmetrics) - Get summary metrics for a project's workflows
* [getProjectWorkflowRuns](#getprojectworkflowruns) - Get recent runs of a workflow
* [getProjectWorkflowTestMetrics](#getprojectworkflowtestmetrics) - Get test metrics for a project's workflows
* [getProjectWorkflowsPageData](#getprojectworkflowspagedata) - Get summary metrics and trends for a project across it's workflows and branches
* [getWorkflowSummary](#getworkflowsummary) - Get metrics and trends for workflows

## getAllInsightsBranches

Get a list of all branches for a specified project. The list will only contain branches currently available within Insights. The maximum number of branches returned by this endpoint is 5,000.

### Example Usage

```typescript
import { SDK } from "CircleCi";
import { GetAllInsightsBranchesResponse } from "CircleCi/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyHeader: "",
  },
});

sdk.insights.getAllInsightsBranches({
  projectSlug: "accusamus",
  workflowName: "non",
}).then((res: GetAllInsightsBranchesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.GetAllInsightsBranchesRequest](../../models/operations/getallinsightsbranchesrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetAllInsightsBranchesResponse](../../models/operations/getallinsightsbranchesresponse.md)>**


## getFlakyTests

Get a list of flaky tests for a given project. Flaky tests are branch agnostic. 
             A flaky test is a test that passed and failed in the same commit.

### Example Usage

```typescript
import { SDK } from "CircleCi";
import { GetFlakyTestsResponse } from "CircleCi/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyHeader: "",
  },
});

sdk.insights.getFlakyTests({
  projectSlug: "occaecati",
}).then((res: GetFlakyTestsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.GetFlakyTestsRequest](../../models/operations/getflakytestsrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.GetFlakyTestsResponse](../../models/operations/getflakytestsresponse.md)>**


## getJobTimeseries

Get timeseries data for all jobs within a workflow.

### Example Usage

```typescript
import { SDK } from "CircleCi";
import { GetJobTimeseriesGranularity, GetJobTimeseriesResponse } from "CircleCi/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyHeader: "",
  },
});

sdk.insights.getJobTimeseries({
  branch: "enim",
  endDate: new Date("2020-02-08T20:51:42.354Z"),
  granularity: GetJobTimeseriesGranularity.Hourly,
  projectSlug: "provident",
  startDate: new Date("2021-09-06T10:36:33.442Z"),
  workflowName: "blanditiis",
}).then((res: GetJobTimeseriesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.GetJobTimeseriesRequest](../../models/operations/getjobtimeseriesrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.GetJobTimeseriesResponse](../../models/operations/getjobtimeseriesresponse.md)>**


## getOrgSummaryData

Gets aggregated summary metrics with trends for the entire org. 
              Also gets aggregated metrics and trends for each project belonging to the org.

### Example Usage

```typescript
import { SDK } from "CircleCi";
import { GetOrgSummaryDataReportingWindow, GetOrgSummaryDataResponse } from "CircleCi/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyHeader: "",
  },
});

sdk.insights.getOrgSummaryData({
  orgSlug: "deleniti",
  projectNames: {},
  reportingWindow: GetOrgSummaryDataReportingWindow.Last60Days,
}).then((res: GetOrgSummaryDataResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.GetOrgSummaryDataRequest](../../models/operations/getorgsummarydatarequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.GetOrgSummaryDataResponse](../../models/operations/getorgsummarydataresponse.md)>**


## getProjectWorkflowJobMetrics

Get summary metrics for a project workflow's jobs. Job runs going back at most 90 days are included in the aggregation window. Metrics are refreshed daily, and thus may not include executions from the last 24 hours. Please note that Insights is not a financial reporting tool and should not be used for precise credit reporting.  Credit reporting from Insights does not use the same source of truth as the billing information that is found in the Plan Overview page in the CircleCI UI, nor does the underlying data have the same data accuracy guarantees as the billing information in the CircleCI UI.  This may lead to discrepancies between credits reported from Insights and the billing information in the Plan Overview page of the CircleCI UI.  For precise credit reporting, always use the Plan Overview page in the CircleCI UI.

### Example Usage

```typescript
import { SDK } from "CircleCi";
import {
  GetProjectWorkflowJobMetricsReportingWindow,
  GetProjectWorkflowJobMetricsResponse,
} from "CircleCi/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyHeader: "",
  },
});

sdk.insights.getProjectWorkflowJobMetrics({
  allBranches: false,
  branch: "amet",
  pageToken: "deserunt",
  projectSlug: "nisi",
  reportingWindow: GetProjectWorkflowJobMetricsReportingWindow.Last24Hours,
  workflowName: "natus",
}).then((res: GetProjectWorkflowJobMetricsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.GetProjectWorkflowJobMetricsRequest](../../models/operations/getprojectworkflowjobmetricsrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.GetProjectWorkflowJobMetricsResponse](../../models/operations/getprojectworkflowjobmetricsresponse.md)>**


## getProjectWorkflowMetrics

Get summary metrics for a project's workflows.  Workflow runs going back at most 90 days are included in the aggregation window. Metrics are refreshed daily, and thus may not include executions from the last 24 hours.  Please note that Insights is not a financial reporting tool and should not be used for precise credit reporting.  Credit reporting from Insights does not use the same source of truth as the billing information that is found in the Plan Overview page in the CircleCI UI, nor does the underlying data have the same data accuracy guarantees as the billing information in the CircleCI UI.  This may lead to discrepancies between credits reported from Insights and the billing information in the Plan Overview page of the CircleCI UI.  For precise credit reporting, always use the Plan Overview page in the CircleCI UI.

### Example Usage

```typescript
import { SDK } from "CircleCi";
import { GetProjectWorkflowMetricsReportingWindow, GetProjectWorkflowMetricsResponse } from "CircleCi/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyHeader: "",
  },
});

sdk.insights.getProjectWorkflowMetrics({
  allBranches: false,
  branch: "omnis",
  pageToken: "molestiae",
  projectSlug: "perferendis",
  reportingWindow: GetProjectWorkflowMetricsReportingWindow.Last24Hours,
}).then((res: GetProjectWorkflowMetricsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.GetProjectWorkflowMetricsRequest](../../models/operations/getprojectworkflowmetricsrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.GetProjectWorkflowMetricsResponse](../../models/operations/getprojectworkflowmetricsresponse.md)>**


## getProjectWorkflowRuns

Get recent runs of a workflow. Runs going back at most 90 days are returned. Please note that Insights is not a financial reporting tool and should not be used for precise credit reporting.  Credit reporting from Insights does not use the same source of truth as the billing information that is found in the Plan Overview page in the CircleCI UI, nor does the underlying data have the same data accuracy guarantees as the billing information in the CircleCI UI.  This may lead to discrepancies between credits reported from Insights and the billing information in the Plan Overview page of the CircleCI UI.  For precise credit reporting, always use the Plan Overview page in the CircleCI UI.

### Example Usage

```typescript
import { SDK } from "CircleCi";
import {
  GetProjectWorkflowRuns200ApplicationJSONItemsStatus,
  GetProjectWorkflowRunsResponse,
} from "CircleCi/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyHeader: "",
  },
});

sdk.insights.getProjectWorkflowRuns({
  allBranches: false,
  branch: "magnam",
  endDate: new Date("2021-09-06T01:45:34.248Z"),
  pageToken: "labore",
  projectSlug: "labore",
  startDate: new Date("2022-05-20T10:11:05.115Z"),
  workflowName: "nobis",
}).then((res: GetProjectWorkflowRunsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.GetProjectWorkflowRunsRequest](../../models/operations/getprojectworkflowrunsrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetProjectWorkflowRunsResponse](../../models/operations/getprojectworkflowrunsresponse.md)>**


## getProjectWorkflowTestMetrics

Get test metrics for a project's workflows. Currently tests metrics are calculated based on 10 most recent workflow runs.

### Example Usage

```typescript
import { SDK } from "CircleCi";
import { GetProjectWorkflowTestMetricsResponse } from "CircleCi/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyHeader: "",
  },
});

sdk.insights.getProjectWorkflowTestMetrics({
  allBranches: false,
  branch: "eum",
  projectSlug: "vero",
  workflowName: "aspernatur",
}).then((res: GetProjectWorkflowTestMetricsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.GetProjectWorkflowTestMetricsRequest](../../models/operations/getprojectworkflowtestmetricsrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.GetProjectWorkflowTestMetricsResponse](../../models/operations/getprojectworkflowtestmetricsresponse.md)>**


## getProjectWorkflowsPageData

Get summary metrics and trends for a project at workflow and branch level. 
             Workflow runs going back at most 90 days are included in the aggregation window. 
             Trends are only supported upto last 30 days. 
             Please note that Insights is not a financial reporting tool and should not be used for precise credit reporting.  Credit reporting from Insights does not use the same source of truth as the billing information that is found in the Plan Overview page in the CircleCI UI, nor does the underlying data have the same data accuracy guarantees as the billing information in the CircleCI UI.  This may lead to discrepancies between credits reported from Insights and the billing information in the Plan Overview page of the CircleCI UI.  For precise credit reporting, always use the Plan Overview page in the CircleCI UI.

### Example Usage

```typescript
import { SDK } from "CircleCi";
import { GetProjectWorkflowsPageDataReportingWindow, GetProjectWorkflowsPageDataResponse } from "CircleCi/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyHeader: "",
  },
});

sdk.insights.getProjectWorkflowsPageData({
  branches: {},
  projectSlug: "architecto",
  reportingWindow: GetProjectWorkflowsPageDataReportingWindow.Last90Days,
  workflowNames: {},
}).then((res: GetProjectWorkflowsPageDataResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.GetProjectWorkflowsPageDataRequest](../../models/operations/getprojectworkflowspagedatarequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.GetProjectWorkflowsPageDataResponse](../../models/operations/getprojectworkflowspagedataresponse.md)>**


## getWorkflowSummary

Get the metrics and trends for a particular workflow on a single branch or all branches

### Example Usage

```typescript
import { SDK } from "CircleCi";
import { GetWorkflowSummaryResponse } from "CircleCi/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyHeader: "",
  },
});

sdk.insights.getWorkflowSummary({
  allBranches: false,
  branches: {},
  projectSlug: "et",
  workflowName: "excepturi",
}).then((res: GetWorkflowSummaryResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.GetWorkflowSummaryRequest](../../models/operations/getworkflowsummaryrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.GetWorkflowSummaryResponse](../../models/operations/getworkflowsummaryresponse.md)>**

