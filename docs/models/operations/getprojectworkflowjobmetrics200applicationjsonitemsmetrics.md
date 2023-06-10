# GetProjectWorkflowJobMetrics200ApplicationJSONItemsMetrics

Metrics relating to a workflow job's runs.


## Fields

| Field                                                                                                                                                                             | Type                                                                                                                                                                              | Required                                                                                                                                                                          | Description                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `durationMetrics`                                                                                                                                                                 | [GetProjectWorkflowJobMetrics200ApplicationJSONItemsMetricsDurationMetrics](../../models/operations/getprojectworkflowjobmetrics200applicationjsonitemsmetricsdurationmetrics.md) | :heavy_check_mark:                                                                                                                                                                | Metrics relating to the duration of runs for a workflow job.                                                                                                                      |
| `failedRuns`                                                                                                                                                                      | *number*                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                | The number of failed runs.                                                                                                                                                        |
| `successRate`                                                                                                                                                                     | *number*                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                | N/A                                                                                                                                                                               |
| `successfulRuns`                                                                                                                                                                  | *number*                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                | The number of successful runs.                                                                                                                                                    |
| `throughput`                                                                                                                                                                      | *number*                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                | The average number of runs per day.                                                                                                                                               |
| `totalCreditsUsed`                                                                                                                                                                | *number*                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                | The total credits consumed by the job in the aggregation window. Note that Insights is not a real time financial reporting tool and should not be used for credit reporting.      |
| `totalRuns`                                                                                                                                                                       | *number*                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                | The total number of runs.                                                                                                                                                         |