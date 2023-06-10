# webhook

### Available Operations

* [createWebhook](#createwebhook) - Create a webhook
* [deleteWebhook](#deletewebhook) - Delete a webhook
* [getWebhookById](#getwebhookbyid) - Get a webhook
* [getWebhooks](#getwebhooks) - List webhooks
* [updateWebhook](#updatewebhook) - Update a webhook

## createWebhook

Create a webhook

### Example Usage

```typescript
import { SDK } from "CircleCi";
import {
  CreateWebhookRequestBodyEvents,
  CreateWebhookRequestBodyScopeType,
  CreateWebhookResponse,
  CreateWebhookWebhookEvents,
} from "CircleCi/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyHeader: "",
  },
});

sdk.webhook.createWebhook({
  events: [
    CreateWebhookRequestBodyEvents.JobCompleted,
    CreateWebhookRequestBodyEvents.JobCompleted,
  ],
  name: "Nathaniel Ryan",
  scope: {
    id: "6146c3e2-50fb-4008-842e-141aac366c8d",
    type: CreateWebhookRequestBodyScopeType.Project,
  },
  signingSecret: "nulla",
  url: "voluptas",
  verifyTls: false,
}).then((res: CreateWebhookResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.CreateWebhookRequestBody](../../models/operations/createwebhookrequestbody.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.CreateWebhookResponse](../../models/operations/createwebhookresponse.md)>**


## deleteWebhook

Delete a webhook

### Example Usage

```typescript
import { SDK } from "CircleCi";
import { DeleteWebhookResponse } from "CircleCi/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyHeader: "",
  },
});

sdk.webhook.deleteWebhook({
  webhookId: "b1442907-4747-478a-bbd4-66d28c10ab3c",
}).then((res: DeleteWebhookResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.DeleteWebhookRequest](../../models/operations/deletewebhookrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.DeleteWebhookResponse](../../models/operations/deletewebhookresponse.md)>**


## getWebhookById

Get a webhook by id.

### Example Usage

```typescript
import { SDK } from "CircleCi";
import { GetWebhookByIdResponse, GetWebhookByIdWebhookEvents } from "CircleCi/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyHeader: "",
  },
});

sdk.webhook.getWebhookById({
  webhookId: "dca42519-04e5-423c-be0b-c7178e4796f2",
}).then((res: GetWebhookByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.GetWebhookByIdRequest](../../models/operations/getwebhookbyidrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetWebhookByIdResponse](../../models/operations/getwebhookbyidresponse.md)>**


## getWebhooks

Get a list of webhook that match the given scope-type and scope-id

### Example Usage

```typescript
import { SDK } from "CircleCi";
import {
  GetWebhooks200ApplicationJSONWebhookEvents,
  GetWebhooksResponse,
  GetWebhooksScopeType,
} from "CircleCi/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyHeader: "",
  },
});

sdk.webhook.getWebhooks({
  scopeId: "a70c6882-82aa-4482-962f-222e9817ee17",
  scopeType: GetWebhooksScopeType.Project,
}).then((res: GetWebhooksResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.GetWebhooksRequest](../../models/operations/getwebhooksrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetWebhooksResponse](../../models/operations/getwebhooksresponse.md)>**


## updateWebhook

Update a webhook

### Example Usage

```typescript
import { SDK } from "CircleCi";
import {
  UpdateWebhookRequestBodyEvents,
  UpdateWebhookResponse,
  UpdateWebhookWebhookEvents,
} from "CircleCi/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyHeader: "",
  },
});

sdk.webhook.updateWebhook({
  requestBody: {
    events: [
      UpdateWebhookRequestBodyEvents.JobCompleted,
      UpdateWebhookRequestBodyEvents.JobCompleted,
      UpdateWebhookRequestBodyEvents.WorkflowCompleted,
      UpdateWebhookRequestBodyEvents.WorkflowCompleted,
    ],
    name: "Cecil Pollich",
    signingSecret: "occaecati",
    url: "minima",
    verifyTls: false,
  },
  webhookId: "bc0ab3c2-0c4f-4378-9fd8-71f99dd2efd1",
}).then((res: UpdateWebhookResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.UpdateWebhookRequest](../../models/operations/updatewebhookrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.UpdateWebhookResponse](../../models/operations/updatewebhookresponse.md)>**

