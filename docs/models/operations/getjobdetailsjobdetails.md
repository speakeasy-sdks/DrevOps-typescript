# GetJobDetailsJobDetails

Job Details


## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `contexts`                                                                                                | [GetJobDetailsJobDetailsContexts](../../models/operations/getjobdetailsjobdetailscontexts.md)[]           | :heavy_check_mark:                                                                                        | List of contexts used by the job.                                                                         |
| `createdAt`                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)             | :heavy_check_mark:                                                                                        | The time when the job was created.                                                                        |
| `duration`                                                                                                | *number*                                                                                                  | :heavy_check_mark:                                                                                        | Duration of a job in milliseconds.                                                                        |
| `executor`                                                                                                | [GetJobDetailsJobDetailsExecutor](../../models/operations/getjobdetailsjobdetailsexecutor.md)             | :heavy_check_mark:                                                                                        | Information about executor used for a job.                                                                |
| `latestWorkflow`                                                                                          | [GetJobDetailsJobDetailsLatestWorkflow](../../models/operations/getjobdetailsjobdetailslatestworkflow.md) | :heavy_check_mark:                                                                                        | Info about the latest workflow the job was a part of.                                                     |
| `messages`                                                                                                | [GetJobDetailsJobDetailsMessages](../../models/operations/getjobdetailsjobdetailsmessages.md)[]           | :heavy_check_mark:                                                                                        | Messages from CircleCI execution platform.                                                                |
| `name`                                                                                                    | *string*                                                                                                  | :heavy_check_mark:                                                                                        | The name of the job.                                                                                      |
| `number`                                                                                                  | *number*                                                                                                  | :heavy_check_mark:                                                                                        | The number of the job.                                                                                    |
| `organization`                                                                                            | [GetJobDetailsJobDetailsOrganization](../../models/operations/getjobdetailsjobdetailsorganization.md)     | :heavy_check_mark:                                                                                        | Information about an organization.                                                                        |
| `parallelRuns`                                                                                            | [GetJobDetailsJobDetailsParallelRuns](../../models/operations/getjobdetailsjobdetailsparallelruns.md)[]   | :heavy_check_mark:                                                                                        | Info about parallels runs and their status.                                                               |
| `parallelism`                                                                                             | *number*                                                                                                  | :heavy_check_mark:                                                                                        | A number of parallel runs the job has.                                                                    |
| `pipeline`                                                                                                | [GetJobDetailsJobDetailsPipeline](../../models/operations/getjobdetailsjobdetailspipeline.md)             | :heavy_check_mark:                                                                                        | Info about a pipeline the job is a part of.                                                               |
| `project`                                                                                                 | [GetJobDetailsJobDetailsProject](../../models/operations/getjobdetailsjobdetailsproject.md)               | :heavy_check_mark:                                                                                        | Information about a project.                                                                              |
| `queuedAt`                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)             | :heavy_check_mark:                                                                                        | The time when the job was placed in a queue.                                                              |
| `startedAt`                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)             | :heavy_check_mark:                                                                                        | The date and time the job started.                                                                        |
| `status`                                                                                                  | [GetJobDetailsJobDetailsStatus](../../models/operations/getjobdetailsjobdetailsstatus.md)                 | :heavy_check_mark:                                                                                        | The current status of the job.                                                                            |
| `stoppedAt`                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)             | :heavy_minus_sign:                                                                                        | The time when the job stopped.                                                                            |
| `webUrl`                                                                                                  | *string*                                                                                                  | :heavy_check_mark:                                                                                        | URL of the job in CircleCI Web UI.                                                                        |