# schedule

### Available Operations

* [createSchedule](#createschedule) - Create a schedule
* [deleteScheduleById](#deleteschedulebyid) - Delete a schedule
* [getScheduleById](#getschedulebyid) - Get a schedule
* [listSchedulesForProject](#listschedulesforproject) - Get all schedules
* [updateSchedule](#updateschedule) - Update a schedule

## createSchedule

Creates a schedule and returns the created schedule.

### Example Usage

```typescript
import { SDK } from "CircleCi";
import {
  CreateScheduleCreateScheduleParametersAttributionActor,
  CreateScheduleCreateScheduleParametersTimetable1DaysOfWeek,
  CreateScheduleCreateScheduleParametersTimetable1Months,
  CreateScheduleCreateScheduleParametersTimetable2DaysOfWeek,
  CreateScheduleCreateScheduleParametersTimetable2Months,
  CreateScheduleResponse,
} from "CircleCi/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyHeader: "",
  },
});

sdk.schedule.createSchedule({
  requestBody: {
    attributionActor: CreateScheduleCreateScheduleParametersAttributionActor.Current,
    description: "soluta",
    name: "Ted Kling",
    parameters: {
      "necessitatibus": "distinctio",
      "asperiores": "nihil",
      "ipsum": "voluptate",
    },
    timetable: {
      daysOfMonth: [
        263322,
        137220,
        20651,
        229219,
      ],
      daysOfWeek: [
        CreateScheduleCreateScheduleParametersTimetable2DaysOfWeek.Fri,
        CreateScheduleCreateScheduleParametersTimetable2DaysOfWeek.Sun,
        CreateScheduleCreateScheduleParametersTimetable2DaysOfWeek.Fri,
        CreateScheduleCreateScheduleParametersTimetable2DaysOfWeek.Sun,
      ],
      hoursOfDay: [
        588317,
        324683,
        831049,
      ],
      months: [
        CreateScheduleCreateScheduleParametersTimetable2Months.Apr,
        CreateScheduleCreateScheduleParametersTimetable2Months.Mar,
        CreateScheduleCreateScheduleParametersTimetable2Months.Jan,
      ],
      perHour: 311860,
    },
  },
  projectSlug: "tempora",
}).then((res: CreateScheduleResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.CreateScheduleRequest](../../models/operations/createschedulerequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.CreateScheduleResponse](../../models/operations/createscheduleresponse.md)>**


## deleteScheduleById

Deletes the schedule by id.

### Example Usage

```typescript
import { SDK } from "CircleCi";
import { DeleteScheduleByIdResponse } from "CircleCi/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyHeader: "",
  },
});

sdk.schedule.deleteScheduleById({
  scheduleId: "6ce2af7a-73cf-43be-853f-870b326b5a73",
}).then((res: DeleteScheduleByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.DeleteScheduleByIdRequest](../../models/operations/deleteschedulebyidrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.DeleteScheduleByIdResponse](../../models/operations/deleteschedulebyidresponse.md)>**


## getScheduleById

Get a schedule by id.

### Example Usage

```typescript
import { SDK } from "CircleCi";
import { GetScheduleByIdResponse } from "CircleCi/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyHeader: "",
  },
});

sdk.schedule.getScheduleById({
  scheduleId: "429cdb1a-8422-4bb6-b9d2-322715bf0cbb",
}).then((res: GetScheduleByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.GetScheduleByIdRequest](../../models/operations/getschedulebyidrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.GetScheduleByIdResponse](../../models/operations/getschedulebyidresponse.md)>**


## listSchedulesForProject

Returns all schedules for this project.

### Example Usage

```typescript
import { SDK } from "CircleCi";
import { ListSchedulesForProjectResponse } from "CircleCi/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyHeader: "",
  },
});

sdk.schedule.listSchedulesForProject({
  pageToken: "et",
  projectSlug: "saepe",
}).then((res: ListSchedulesForProjectResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.ListSchedulesForProjectRequest](../../models/operations/listschedulesforprojectrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.ListSchedulesForProjectResponse](../../models/operations/listschedulesforprojectresponse.md)>**


## updateSchedule

Updates a schedule and returns the updated schedule.

### Example Usage

```typescript
import { SDK } from "CircleCi";
import {
  UpdateScheduleResponse,
  UpdateScheduleUpdateScheduleParametersAttributionActor,
  UpdateScheduleUpdateScheduleParametersTimetableDaysOfWeek,
  UpdateScheduleUpdateScheduleParametersTimetableMonths,
} from "CircleCi/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    apiKeyHeader: "",
  },
});

sdk.schedule.updateSchedule({
  requestBody: {
    attributionActor: UpdateScheduleUpdateScheduleParametersAttributionActor.Current,
    description: "ipsum",
    name: "Gayle Lueilwitz",
    parameters: {
      "delectus": "dolorem",
    },
    timetable: {
      daysOfMonth: [
        286915,
        240829,
      ],
      daysOfWeek: [
        UpdateScheduleUpdateScheduleParametersTimetableDaysOfWeek.Tue,
        UpdateScheduleUpdateScheduleParametersTimetableDaysOfWeek.Tue,
        UpdateScheduleUpdateScheduleParametersTimetableDaysOfWeek.Tue,
      ],
      hoursOfDay: [
        929530,
        9240,
        669917,
      ],
      months: [
        UpdateScheduleUpdateScheduleParametersTimetableMonths.Aug,
        UpdateScheduleUpdateScheduleParametersTimetableMonths.Jul,
        UpdateScheduleUpdateScheduleParametersTimetableMonths.Jun,
        UpdateScheduleUpdateScheduleParametersTimetableMonths.Sep,
      ],
      perHour: 586410,
    },
  },
  scheduleId: "21879fce-953f-473e-b7fb-c7abd74dd39c",
}).then((res: UpdateScheduleResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.UpdateScheduleRequest](../../models/operations/updateschedulerequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.UpdateScheduleResponse](../../models/operations/updatescheduleresponse.md)>**

