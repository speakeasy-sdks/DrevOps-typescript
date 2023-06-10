# ListContextsResponse


## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                       | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `statusCode`                                                                                        | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `rawResponse`                                                                                       | [AxiosResponse>](https://axios-http.com/docs/res_schema)                                            | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `listContexts200ApplicationJSONObject`                                                              | [ListContexts200ApplicationJSON](../../models/operations/listcontexts200applicationjson.md)         | :heavy_minus_sign:                                                                                  | A paginated list of contexts                                                                        |
| `listContextsDefaultApplicationJSONObject`                                                          | [ListContextsDefaultApplicationJSON](../../models/operations/listcontextsdefaultapplicationjson.md) | :heavy_minus_sign:                                                                                  | Error response.                                                                                     |