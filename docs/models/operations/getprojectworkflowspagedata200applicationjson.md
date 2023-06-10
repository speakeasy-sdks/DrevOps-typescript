# GetProjectWorkflowsPageData200ApplicationJSON

Aggregated summary metrics and trends by workflow and branches


## Fields

| Field                                                                                                                                                                         | Type                                                                                                                                                                          | Required                                                                                                                                                                      | Description                                                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `allBranches`                                                                                                                                                                 | *string*[]                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                            | A list of all the branches for a given project.                                                                                                                               |
| `allWorkflows`                                                                                                                                                                | *string*[]                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                            | A list of all the workflows for a given project.                                                                                                                              |
| `orgId`                                                                                                                                                                       | *any*                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                            | The unique ID of the organization                                                                                                                                             |
| `projectData`                                                                                                                                                                 | [GetProjectWorkflowsPageData200ApplicationJSONProjectData](../../models/operations/getprojectworkflowspagedata200applicationjsonprojectdata.md)                               | :heavy_minus_sign:                                                                                                                                                            | Metrics and trends data aggregated for a given project.                                                                                                                       |
| `projectId`                                                                                                                                                                   | *any*                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                            | The unique ID of the project                                                                                                                                                  |
| `projectWorkflowBranchData`                                                                                                                                                   | [GetProjectWorkflowsPageData200ApplicationJSONProjectWorkflowBranchData](../../models/operations/getprojectworkflowspagedata200applicationjsonprojectworkflowbranchdata.md)[] | :heavy_minus_sign:                                                                                                                                                            | A list of metrics and trends data for branches for a given project.                                                                                                           |
| `projectWorkflowData`                                                                                                                                                         | [GetProjectWorkflowsPageData200ApplicationJSONProjectWorkflowData](../../models/operations/getprojectworkflowspagedata200applicationjsonprojectworkflowdata.md)[]             | :heavy_minus_sign:                                                                                                                                                            | A list of metrics and trends data for workflows for a given project.                                                                                                          |