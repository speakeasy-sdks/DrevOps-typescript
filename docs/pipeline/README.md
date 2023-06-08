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
  configuration: "praesentium",
  continuationKey: "natus",
  parameters: {
    "sunt": "quo",
  },
}).then((res: ContinuePipelineResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

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
  pipelineId: "ddc69260-1fb5-476b-8d5f-0d30c5fbb258",
}).then((res: GetPipelineByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

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
  pipelineNumber: "dignissimos",
  projectSlug: "eaque",
}).then((res: GetPipelineByNumberResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

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
  pipelineId: "53202c73-d5fe-49b9-8c28-909b3fe49a8d",
}).then((res: GetPipelineConfigByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

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
  pageToken: "provident",
  projectSlug: "nobis",
}).then((res: ListMyPipelinesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

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
  orgSlug: "libero",
  pageToken: "delectus",
}).then((res: ListPipelinesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

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
  branch: "quaerat",
  pageToken: "quos",
  projectSlug: "aliquid",
}).then((res: ListPipelinesForProjectResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

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
  pageToken: "dolorem",
  pipelineId: "3323f9b7-7f3a-4410-8674-ebf69280d1ba",
}).then((res: ListWorkflowsByPipelineIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

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
      "voluptate": "dolorum",
      "deleniti": "omnis",
    },
    tag: "v3.1.4159",
  },
  projectSlug: "necessitatibus",
}).then((res: TriggerPipelineResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
