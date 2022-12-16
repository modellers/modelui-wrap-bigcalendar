import React from 'react';

import BigCalendarComponent, { events, triggers, config } from './BigCalendarComponent'

export default function BigCalendar(props) {
    // lets enumerate schema to extract uiSchema and validation
    return (<BigCalendarComponent {...props} />);
}

export function registerBigCalendar(component_manager) {
    // self register component to layout manager
    component_manager.registerComponent({
        component: BigCalendar,
        type: config.type,
        events: events,
        triggers: triggers,
        config: config
    });
}