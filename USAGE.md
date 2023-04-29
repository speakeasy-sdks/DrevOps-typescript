<!-- Start SDK Example Usage -->
```typescript
import { SDK } from "CircleCi";
import { AddEnvironmentVariableToContextResponse } from "CircleCi/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.context.addEnvironmentVariableToContext({
  requestBody: {
    value: "some-secret-value",
  },
  contextId: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
  envVarName: "deserunt",
}).then((res: AddEnvironmentVariableToContextResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->