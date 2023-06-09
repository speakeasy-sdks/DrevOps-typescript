# pipeline

### Available Operations

* [continuePipeline](#continuepipeline) - Continue a pipeline
* [getPipelineById](#getpipelinebyid) - Get a pipeline by ID
* [getPipelineByNumber](#getpipelinebynumber) - Get a pipeline by pipeline number
* [getPipelineConfigById](#getpipelineconfigbyid) - Get a pipeline's configuration
* [listMyPipelines](#listmypipelines) - Get your pipelines
* [listPipelines](#listpipelines) - Get a list of pipelines
* [listPipelinesForProject](#listpipelinesforproject) - Get all pipelines
* [listWorkflowsByPipelineId](#listworkflowsbypipelineid) - Get a pipeline's workflows
* [triggerPipeline](#triggerpipeline) - Trigger a new pipeline

## continuePipeline

Continue a pipeline from the setup phase.

### Example Usage

```typescript
import { SDK } from "CircleCi";
import { ContinuePipelineResponse } from "CircleCi/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyHeader: "",
  },
});

sdk.pipeline.continuePipeline({
  configuration: "ad",
  continuationKey: "eum",
  parameters: {
    "necessitatibus": "odit",
  },
}).then((res: ContinuePipelineResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.ContinuePipelineRequestBody](../../models/operations/continuepipelinerequestbody.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.ContinuePipelineResponse](../../models/operations/continuepipelineresponse.md)>**


## getPipelineById

Returns a pipeline by the pipeline ID.

### Example Usage

```typescript
import { SDK } from "CircleCi";
import {
  GetPipelineByIdPipelineErrorsType,
  GetPipelineByIdPipelineState,
  GetPipelineByIdPipelineTriggerType,
  GetPipelineByIdResponse,
} from "CircleCi/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyHeader: "",
  },
});

sdk.pipeline.getPipelineById({
  pipelineId: "516fe4c8-b711-4e5b-bfd2-ed028921cddc",
}).then((res: GetPipelineByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.GetPipelineByIdRequest](../../models/operations/getpipelinebyidrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.GetPipelineByIdResponse](../../models/operations/getpipelinebyidresponse.md)>**


## getPipelineByNumber

Returns a pipeline by the pipeline number.

### Example Usage

```typescript
import { SDK } from "CircleCi";
import {
  GetPipelineByNumberPipelineErrorsType,
  GetPipelineByNumberPipelineState,
  GetPipelineByNumberPipelineTriggerType,
  GetPipelineByNumberResponse,
} from "CircleCi/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyHeader: "",
  },
});

sdk.pipeline.getPipelineByNumber({
  pipelineNumber: "ea",
  projectSlug: "excepturi",
}).then((res: GetPipelineByNumberResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.GetPipelineByNumberRequest](../../models/operations/getpipelinebynumberrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.GetPipelineByNumberResponse](../../models/operations/getpipelinebynumberresponse.md)>**


## getPipelineConfigById

Returns a pipeline's configuration by ID.

### Example Usage

```typescript
import { SDK } from "CircleCi";
import { GetPipelineConfigByIdResponse } from "CircleCi/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyHeader: "",
  },
});

sdk.pipeline.getPipelineConfigById({
  pipelineId: "2601fb57-6b0d-45f0-930c-5fbb25870532",
}).then((res: GetPipelineConfigByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.GetPipelineConfigByIdRequest](../../models/operations/getpipelineconfigbyidrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.GetPipelineConfigByIdResponse](../../models/operations/getpipelineconfigbyidresponse.md)>**


## listMyPipelines

Returns a sequence of all pipelines for this project triggered by the user.

### Example Usage

```typescript
import { SDK } from "CircleCi";
import {
  ListMyPipelinesPipelineListResponsePipelineErrorsType,
  ListMyPipelinesPipelineListResponsePipelineState,
  ListMyPipelinesPipelineListResponsePipelineTriggerType,
  ListMyPipelinesResponse,
} from "CircleCi/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyHeader: "",
  },
});

sdk.pipeline.listMyPipelines({
  pageToken: "perferendis",
  projectSlug: "dolores",
}).then((res: ListMyPipelinesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.ListMyPipelinesRequest](../../models/operations/listmypipelinesrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.ListMyPipelinesResponse](../../models/operations/listmypipelinesresponse.md)>**


## listPipelines

Returns all pipelines for the most recently built projects (max 250) you follow in an organization.

### Example Usage

```typescript
import { SDK } from "CircleCi";
import {
  ListPipelinesPipelineListResponsePipelineErrorsType,
  ListPipelinesPipelineListResponsePipelineState,
  ListPipelinesPipelineListResponsePipelineTriggerType,
  ListPipelinesResponse,
} from "CircleCi/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyHeader: "",
  },
});

sdk.pipeline.listPipelines({
  mine: false,
  orgSlug: "minus",
  pageToken: "quam",
}).then((res: ListPipelinesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.ListPipelinesRequest](../../models/operations/listpipelinesrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.ListPipelinesResponse](../../models/operations/listpipelinesresponse.md)>**


## listPipelinesForProject

Returns all pipelines for this project.

### Example Usage

```typescript
import { SDK } from "CircleCi";
import {
  ListPipelinesForProjectPipelineListResponsePipelineErrorsType,
  ListPipelinesForProjectPipelineListResponsePipelineState,
  ListPipelinesForProjectPipelineListResponsePipelineTriggerType,
  ListPipelinesForProjectResponse,
} from "CircleCi/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyHeader: "",
  },
});

sdk.pipeline.listPipelinesForProject({
  branch: "dolor",
  pageToken: "vero",
  projectSlug: "nostrum",
}).then((res: ListPipelinesForProjectResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.ListPipelinesForProjectRequest](../../models/operations/listpipelinesforprojectrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.ListPipelinesForProjectResponse](../../models/operations/listpipelinesforprojectresponse.md)>**


## listWorkflowsByPipelineId

Returns a paginated list of workflows by pipeline ID.

### Example Usage

```typescript
import { SDK } from "CircleCi";
import {
  ListWorkflowsByPipelineIdResponse,
  ListWorkflowsByPipelineIdWorkflowListResponseWorkflowStatus,
  ListWorkflowsByPipelineIdWorkflowListResponseWorkflowTag,
} from "CircleCi/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyHeader: "",
  },
});

sdk.pipeline.listWorkflowsByPipelineId({
  pageToken: "hic",
  pipelineId: "e9b90c28-909b-43fe-89a8-d9cbf4863332",
}).then((res: ListWorkflowsByPipelineIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.ListWorkflowsByPipelineIdRequest](../../models/operations/listworkflowsbypipelineidrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.ListWorkflowsByPipelineIdResponse](../../models/operations/listworkflowsbypipelineidresponse.md)>**


## triggerPipeline

Triggers a new pipeline on the project.

### Example Usage

```typescript
import { SDK } from "CircleCi";
import { TriggerPipelinePipelineCreationState, TriggerPipelineResponse } from "CircleCi/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyHeader: "",
  },
});

sdk.pipeline.triggerPipeline({
  requestBody: {
    branch: "feature/design-new-api",
    parameters: {
      "hic": "excepturi",
    },
    tag: "v3.1.4159",
  },
  projectSlug: "cum",
}).then((res: TriggerPipelineResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.TriggerPipelineRequest](../../models/operations/triggerpipelinerequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.TriggerPipelineResponse](../../models/operations/triggerpipelineresponse.md)>**

