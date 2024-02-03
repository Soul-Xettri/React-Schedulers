import React, { useCallback, useState } from "react";
import Scheduler, { Editing, SchedulerTypes } from "devextreme-react/scheduler";
import SelectBox, { SelectBoxTypes } from "devextreme-react/select-box";

import * as timeZoneUtils from "devextreme/time_zone_utils";
import { data, locations } from "./data.ts";
import { Text, Title } from "@mantine/core";

const timeZoneLabel = { "aria-label": "Time zone" };

const currentDate = new Date(2021, 3, 27);
const views: SchedulerTypes.ViewType[] = ["workWeek"];

const getTimeZones = (date: Date) => {
  const timeZones = timeZoneUtils.getTimeZones(date);

  return timeZones.filter(
    (timeZone: { id: string }) => locations.indexOf(timeZone.id) !== -1
  );
};

const defaultTimeZones = getTimeZones(currentDate);

const onAppointmentFormOpening = (
  e: SchedulerTypes.AppointmentFormOpeningEvent
) => {
  const { form } = e;

  const startDateTimezoneEditor = form.getEditor("startDateTimeZone");
  const endDateTimezoneEditor = form.getEditor("endDateTimeZone");

  const startDateDataSource = startDateTimezoneEditor?.option(
    "dataSource"
  ) as any;
  const endDateDataSource = endDateTimezoneEditor?.option("dataSource") as any;

  startDateDataSource.filter(["id", "contains", "Europe"]);
  endDateDataSource.filter(["id", "contains", "Europe"]);

  startDateDataSource.load();
  endDateDataSource.load();
};

const TimeZoneSupport = () => {
  const [currentTimeZone, setCurrentTimeZone] = useState(
    defaultTimeZones[0].id
  );
  const [timeZones, setTimeZones] = useState(defaultTimeZones);

  const onValueChanged = useCallback((e: SelectBoxTypes.ValueChangedEvent) => {
    setCurrentTimeZone(e.value);
  }, []);

  const onOptionChanged = useCallback(
    (e: SchedulerTypes.OptionChangedEvent) => {
      if (e.name === "currentDate") {
        setTimeZones(getTimeZones(e.value));
      }
    },
    []
  );

  return (
    <div className="pr-10 pl-10">
      <Title size={"40px"} pb={"10px"}>
        Time Zone Support
      </Title>
      <Text pb={"xs"}>
        The Scheduler allows its users to view appointments in different time
        zones. Set the{" "}
        <a
          style={{ color: "#09b5e1", textDecoration: "underline" }}
          href="https://js.devexpress.com/React/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#timeZone"
          target="_blank"
        >
          timeZone
        </a>{" "}
        property to specify the current time zone. This property accepts values
        from the{" "}
        <a
          style={{ color: "#09b5e1", textDecoration: "underline" }}
          href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones"
          target="_blank"
        >
          IANA time zone database
        </a>
        .
      </Text>
      <Text pb={"xs"}>
        In this demo, you can use the drop-down menu above the Scheduler to
        choose between the London, Berlin, and Helsinki time zones. To populate
        the menu, the{" "}
        <a
          style={{ color: "#09b5e1", textDecoration: "underline" }}
          href="https://js.devexpress.com/React/Documentation/ApiReference/Common/Utils/utils/#getTimeZonesdate"
          target="_blank"
        >
          getTimeZones
        </a>{" "}
        utility method is used. It returns a list of all IANA time zones that is
        then filtered.
      </Text>
      <Text pb={"xs"}>
        Users can edit the time zones of individual appointments in the
        appointment details form. To enable this functionality, set the{" "}
        <strong>editing</strong>.{" "}
        <a
          style={{ color: "#09b5e1", textDecoration: "underline" }}
          href="https://js.devexpress.com/React/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/editing/#allowTimeZoneEditing"
          target="_blank"
        >
          allowTimeZoneEditing
        </a>{" "}
        property to <strong>true</strong>. Information about individual time
        zones is saved in the{" "}
        <a
          style={{ color: "#09b5e1", textDecoration: "underline" }}
          href="https://js.devexpress.com/React/Documentation/ApiReference/Common/Object_Structures/dxSchedulerAppointment/#startDateTimeZone"
          target="_blank"
        >
          startDateTimeZone
        </a>{" "}
        and{" "}
        <a
          style={{ color: "#09b5e1", textDecoration: "underline" }}
          href="https://js.devexpress.com/React/Documentation/ApiReference/Common/Object_Structures/dxSchedulerAppointment/#endDateTimeZone"
          target="_blank"
        >
          endDateTimeZone
        </a>{" "}
        fields of the appointment data objects.
      </Text>

      <React.Fragment>
        <div className="option">
          <span>Office Time Zone</span>
          <SelectBox
            items={timeZones}
            displayExpr="title"
            valueExpr="id"
            inputAttr={timeZoneLabel}
            width={240}
            value={currentTimeZone}
            onValueChanged={onValueChanged}
          />
        </div>
        <Scheduler
          dataSource={data}
          views={views}
          defaultCurrentView="workWeek"
          startDayHour={8}
          defaultCurrentDate={currentDate}
          timeZone={currentTimeZone}
          height={600}
          onAppointmentFormOpening={onAppointmentFormOpening}
          onOptionChanged={onOptionChanged}
        >
          <Editing allowTimeZoneEditing={true} />
        </Scheduler>
      </React.Fragment>
    </div>
  );
};

export default TimeZoneSupport;
