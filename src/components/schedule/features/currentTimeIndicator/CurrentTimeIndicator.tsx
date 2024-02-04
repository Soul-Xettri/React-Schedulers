import React, { useCallback, useState } from "react";
import Scheduler, {
  Resource,
  SchedulerTypes,
} from "devextreme-react/scheduler";
import { Switch, SwitchTypes } from "devextreme-react/switch";
import { NumberBox, NumberBoxTypes } from "devextreme-react/number-box";

import { data, moviesData } from "./data.ts";
import AppointmentTemplate from "./AppointmentTemplate.tsx";
import { Text, Title } from "@mantine/core";

const currentDate = new Date();
const views: SchedulerTypes.ViewType[] = ["week", "timelineWeek"];

const intervalLabel = { "aria-label": "Interval" };

const onContentReady = (e: SchedulerTypes.ContentReadyEvent) => {
  e.component.scrollTo(new Date());
};

const onAppointmentClick = (e: SchedulerTypes.AppointmentClickEvent) => {
  e.cancel = true;
};

const onAppointmentDblClick = (e: SchedulerTypes.AppointmentDblClickEvent) => {
  e.cancel = true;
};

const CurrentTimeIndicator = () => {
  const [showCurrentTimeIndicator, setShowCurrentTimeIndicator] =
    useState(true);
  const [shadeUntilCurrentTime, setShadeUntilCurrentTime] = useState(true);
  const [updateInterval, setUpdateInterval] = useState(10);

  const onShowCurrentTimeIndicatorChanged = useCallback(
    (e: SwitchTypes.ValueChangedEvent) => {
      setShowCurrentTimeIndicator(e.value);
    },
    []
  );

  const onShadeUntilCurrentTimeChanged = useCallback(
    (e: SwitchTypes.ValueChangedEvent) => {
      setShadeUntilCurrentTime(e.value);
    },
    []
  );

  const onUpdateIntervalChanged = useCallback(
    (e: NumberBoxTypes.ValueChangedEvent) => {
      setUpdateInterval(e.value);
    },
    []
  );

  return (
    <div className="pr-10 pl-10">
      <Title size={"40px"} pb={"10px"}>
        Current Time Indicator
      </Title>
      <Text pb={"xs"}>
        The Scheduler indicates the current time if you enable the{" "}
        <a
          style={{ color: "#09b5e1", textDecoration: "underline" }}
          href="https://js.devexpress.com/React/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#showCurrentTimeIndicator"
          target="_blank"
        >
          showCurrentTimeIndicator
        </a>{" "}
        property. Use the{" "}
        <a
          style={{ color: "#09b5e1", textDecoration: "underline" }}
          href="https://js.devexpress.com/React/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#indicatorUpdateInterval"
          target="_blank"
        >
          indicatorUpdateInterval
        </a>{" "}
        property to specify how frequently the indicator should change its
        position.
      </Text>
      <Text pb={"xs"}>
        You can also shade the timetable up to the current time. To enable this
        feature, set the{" "}
        <a
          style={{ color: "#09b5e1", textDecoration: "underline" }}
          href="https://js.devexpress.com/React/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#shadeUntilCurrentTime"
          target="_blank"
        >
          shadeUntilCurrentTime
        </a>{" "}
        property to <strong>true</strong>.
      </Text>
      <Text pb={"xs"}>
        In this example, you can use the controls under the Scheduler to change
        the above mentioned properties at runtime.
      </Text>

      <React.Fragment>
        <Scheduler
          dataSource={data}
          views={views}
          defaultCurrentView="week"
          showCurrentTimeIndicator={showCurrentTimeIndicator}
          indicatorUpdateInterval={updateInterval * 1000}
          showAllDayPanel={false}
          shadeUntilCurrentTime={shadeUntilCurrentTime}
          defaultCurrentDate={currentDate}
          editing={false}
          height={600}
          appointmentComponent={AppointmentTemplate}
          onContentReady={onContentReady}
          onAppointmentClick={onAppointmentClick}
          onAppointmentDblClick={onAppointmentDblClick}
        >
          <Resource dataSource={moviesData} fieldExpr="movieId" />
        </Scheduler>
        <div className="options">
          <div className="column">
            <div className="option">
              <div className="label">Current time indicator </div>{" "}
              <div className="value">
                <Switch
                  id="show-indicator"
                  value={showCurrentTimeIndicator}
                  onValueChanged={onShowCurrentTimeIndicatorChanged}
                />
              </div>
            </div>
            <div className="option">
              <div className="label">Shading until current time </div>{" "}
              <div className="value">
                <Switch
                  id="allow-shading"
                  value={shadeUntilCurrentTime}
                  onValueChanged={onShadeUntilCurrentTimeChanged}
                />
              </div>
            </div>
          </div>{" "}
          <div className="column">
            <div className="option">
              <div className="label">Update position in </div>{" "}
              <div className="value">
                <NumberBox
                  min={1}
                  max={1200}
                  value={updateInterval}
                  step={10}
                  showSpinButtons={true}
                  width={100}
                  format="#0 s"
                  inputAttr={intervalLabel}
                  onValueChanged={onUpdateIntervalChanged}
                />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    </div>
  );
};

export default CurrentTimeIndicator;
