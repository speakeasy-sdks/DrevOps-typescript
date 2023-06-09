/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

/**
 * The attribution-actor of the scheduled pipeline.
 */
export enum CreateScheduleCreateScheduleParametersAttributionActor {
    Current = "current",
    System = "system",
}

/**
 * Day in a week, in three letters format
 */
export enum CreateScheduleCreateScheduleParametersTimetable2DaysOfWeek {
    Tue = "TUE",
    Sat = "SAT",
    Sun = "SUN",
    Mon = "MON",
    Thu = "THU",
    Wed = "WED",
    Fri = "FRI",
}

/**
 * Month, in three letters format.
 */
export enum CreateScheduleCreateScheduleParametersTimetable2Months {
    Mar = "MAR",
    Nov = "NOV",
    Dec = "DEC",
    Jun = "JUN",
    May = "MAY",
    Oct = "OCT",
    Feb = "FEB",
    Apr = "APR",
    Sep = "SEP",
    Aug = "AUG",
    Jan = "JAN",
    Jul = "JUL",
}

/**
 * Timetable that specifies when a schedule triggers.
 */
export class CreateScheduleCreateScheduleParametersTimetable2 extends SpeakeasyBase {
    /**
     * Days in a month in which the schedule triggers. This is mutually exclusive with days in a week.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "days-of-month" })
    daysOfMonth: number[];

    /**
     * Days in a week in which the schedule triggers.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "days-of-week" })
    daysOfWeek?: CreateScheduleCreateScheduleParametersTimetable2DaysOfWeek[];

    /**
     * Hours in a day in which the schedule triggers.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "hours-of-day" })
    hoursOfDay: number[];

    /**
     * Months in which the schedule triggers.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "months" })
    months?: CreateScheduleCreateScheduleParametersTimetable2Months[];

    /**
     * Number of times a schedule triggers per hour, value must be between 1 and 60
     */
    @SpeakeasyMetadata()
    @Expose({ name: "per-hour" })
    perHour: number;
}

/**
 * Day in a week, in three letters format
 */
export enum CreateScheduleCreateScheduleParametersTimetable1DaysOfWeek {
    Tue = "TUE",
    Sat = "SAT",
    Sun = "SUN",
    Mon = "MON",
    Thu = "THU",
    Wed = "WED",
    Fri = "FRI",
}

/**
 * Month, in three letters format.
 */
export enum CreateScheduleCreateScheduleParametersTimetable1Months {
    Mar = "MAR",
    Nov = "NOV",
    Dec = "DEC",
    Jun = "JUN",
    May = "MAY",
    Oct = "OCT",
    Feb = "FEB",
    Apr = "APR",
    Sep = "SEP",
    Aug = "AUG",
    Jan = "JAN",
    Jul = "JUL",
}

/**
 * Timetable that specifies when a schedule triggers.
 */
export class CreateScheduleCreateScheduleParametersTimetable1 extends SpeakeasyBase {
    /**
     * Days in a month in which the schedule triggers. This is mutually exclusive with days in a week.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "days-of-month" })
    daysOfMonth?: number[];

    /**
     * Days in a week in which the schedule triggers.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "days-of-week" })
    daysOfWeek: CreateScheduleCreateScheduleParametersTimetable1DaysOfWeek[];

    /**
     * Hours in a day in which the schedule triggers.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "hours-of-day" })
    hoursOfDay: number[];

    /**
     * Months in which the schedule triggers.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "months" })
    months?: CreateScheduleCreateScheduleParametersTimetable1Months[];

    /**
     * Number of times a schedule triggers per hour, value must be between 1 and 60
     */
    @SpeakeasyMetadata()
    @Expose({ name: "per-hour" })
    perHour: number;
}

/**
 * The parameters for a create schedule request
 */
export class CreateScheduleCreateScheduleParameters extends SpeakeasyBase {
    /**
     * The attribution-actor of the scheduled pipeline.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "attribution-actor" })
    attributionActor: CreateScheduleCreateScheduleParametersAttributionActor;

    /**
     * Description of the schedule.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    /**
     * Name of the schedule.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    /**
     * Pipeline parameters represented as key-value pairs. Must contain branch or tag.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "parameters" })
    parameters: Record<string, any>;

    /**
     * Timetable that specifies when a schedule triggers.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "timetable" })
    timetable: any;
}

export class CreateScheduleRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody?: CreateScheduleCreateScheduleParameters;

    /**
     * Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project-slug" })
    projectSlug: string;
}

/**
 * Error response.
 */
export class CreateScheduleDefaultApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

/**
 * The attribution actor who will run the scheduled pipeline.
 */
export class CreateScheduleScheduleUser extends SpeakeasyBase {
    /**
     * The unique ID of the user.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    /**
     * The login information for the user on the VCS.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "login" })
    login: string;

    /**
     * The name of the user.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;
}

/**
 * Day in a week, in three letters format
 */
export enum CreateScheduleScheduleTimetable2DaysOfWeek {
    Tue = "TUE",
    Sat = "SAT",
    Sun = "SUN",
    Mon = "MON",
    Thu = "THU",
    Wed = "WED",
    Fri = "FRI",
}

/**
 * Month, in three letters format.
 */
export enum CreateScheduleScheduleTimetable2Months {
    Mar = "MAR",
    Nov = "NOV",
    Dec = "DEC",
    Jun = "JUN",
    May = "MAY",
    Oct = "OCT",
    Feb = "FEB",
    Apr = "APR",
    Sep = "SEP",
    Aug = "AUG",
    Jan = "JAN",
    Jul = "JUL",
}

/**
 * Timetable that specifies when a schedule triggers.
 */
export class CreateScheduleScheduleTimetable2 extends SpeakeasyBase {
    /**
     * Days in a month in which the schedule triggers. This is mutually exclusive with days in a week.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "days-of-month" })
    daysOfMonth: number[];

    /**
     * Days in a week in which the schedule triggers.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "days-of-week" })
    daysOfWeek?: CreateScheduleScheduleTimetable2DaysOfWeek[];

    /**
     * Hours in a day in which the schedule triggers.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "hours-of-day" })
    hoursOfDay: number[];

    /**
     * Months in which the schedule triggers.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "months" })
    months?: CreateScheduleScheduleTimetable2Months[];

    /**
     * Number of times a schedule triggers per hour, value must be between 1 and 60
     */
    @SpeakeasyMetadata()
    @Expose({ name: "per-hour" })
    perHour: number;
}

/**
 * Day in a week, in three letters format
 */
export enum CreateScheduleScheduleTimetable1DaysOfWeek {
    Tue = "TUE",
    Sat = "SAT",
    Sun = "SUN",
    Mon = "MON",
    Thu = "THU",
    Wed = "WED",
    Fri = "FRI",
}

/**
 * Month, in three letters format.
 */
export enum CreateScheduleScheduleTimetable1Months {
    Mar = "MAR",
    Nov = "NOV",
    Dec = "DEC",
    Jun = "JUN",
    May = "MAY",
    Oct = "OCT",
    Feb = "FEB",
    Apr = "APR",
    Sep = "SEP",
    Aug = "AUG",
    Jan = "JAN",
    Jul = "JUL",
}

/**
 * Timetable that specifies when a schedule triggers.
 */
export class CreateScheduleScheduleTimetable1 extends SpeakeasyBase {
    /**
     * Days in a month in which the schedule triggers. This is mutually exclusive with days in a week.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "days-of-month" })
    daysOfMonth?: number[];

    /**
     * Days in a week in which the schedule triggers.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "days-of-week" })
    daysOfWeek: CreateScheduleScheduleTimetable1DaysOfWeek[];

    /**
     * Hours in a day in which the schedule triggers.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "hours-of-day" })
    hoursOfDay: number[];

    /**
     * Months in which the schedule triggers.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "months" })
    months?: CreateScheduleScheduleTimetable1Months[];

    /**
     * Number of times a schedule triggers per hour, value must be between 1 and 60
     */
    @SpeakeasyMetadata()
    @Expose({ name: "per-hour" })
    perHour: number;
}

/**
 * A schedule response
 */
export class CreateScheduleSchedule extends SpeakeasyBase {
    /**
     * The attribution actor who will run the scheduled pipeline.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "actor" })
    @Type(() => CreateScheduleScheduleUser)
    actor: CreateScheduleScheduleUser;

    /**
     * The date and time the pipeline was created.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "created-at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt: Date;

    /**
     * Description of the schedule.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description: string;

    /**
     * The unique ID of the schedule.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    /**
     * Name of the schedule.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    /**
     * Pipeline parameters represented as key-value pairs. Must contain branch or tag.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "parameters" })
    parameters: Record<string, any>;

    /**
     * The project-slug for the schedule
     */
    @SpeakeasyMetadata()
    @Expose({ name: "project-slug" })
    projectSlug: string;

    /**
     * Timetable that specifies when a schedule triggers.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "timetable" })
    timetable: any;

    /**
     * The date and time the pipeline was last updated.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "updated-at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt: Date;
}

export class CreateScheduleResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * A schedule object.
     */
    @SpeakeasyMetadata()
    schedule?: CreateScheduleSchedule;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * Error response.
     */
    @SpeakeasyMetadata()
    createScheduleDefaultApplicationJSONObject?: CreateScheduleDefaultApplicationJSON;
}
