# GetProjectWorkflowMetricsResponse


## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                 | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `statusCode`                                                                                                                  | *number*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `rawResponse`                                                                                                                 | [AxiosResponse>](https://axios-http.com/docs/res_schema)                                                                      | :heavy_minus_sign:                                                                                                            | N/A                                                                                                                           |
| `getProjectWorkflowMetrics200ApplicationJSONObject`                                                                           | [GetProjectWorkflowMetrics200ApplicationJSON](../../models/operations/getprojectworkflowmetrics200applicationjson.md)         | :heavy_minus_sign:                                                                                                            | A paginated list of summary metrics by workflow                                                                               |
| `getProjectWorkflowMetricsDefaultApplicationJSONObject`                                                                       | [GetProjectWorkflowMetricsDefaultApplicationJSON](../../models/operations/getprojectworkflowmetricsdefaultapplicationjson.md) | :heavy_minus_sign:                                                                                                            | Error response.                                                                                                               |