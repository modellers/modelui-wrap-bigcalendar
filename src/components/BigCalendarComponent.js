/**
 * BigCalendar Component
 * 
 * TODO:
 *  - use https://jquense.github.io/react-big-calendar/examples/index.html#prop-eventPropGetter (to control selectable)
 *  - use https://jquense.github.io/react-big-calendar/examples/index.html#prop-slotPropGetter (to control background color for free-time)
 *  - use https://jquense.github.io/react-big-calendar/examples/index.html#prop-dayPropGetter (to control background color for free-time)
 */
import React from 'react';
// styles
// import { withStyles } from '@mui/styles';

// https://stackblitz.com/edit/big-calendar-demo-o6t6ha?file=index.js
// https://jquense.github.io/react-big-calendar/examples/index.html
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// event handler
// input base
import { structs } from 'modelui-core-runtime';

const calendarEvents = {
  period: {
    alias: [],
    info: {
      name: 'period',
      description: 'Period'
    },
    schema: {}
  },
  viewing: {
    alias: [],
    info: {
      name: 'viewing',
      description: 'Period viewed'
    },
    schema: {}
  },
}

export const options = {
  "id": "calendar-big",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Big Calendar",
  "description": "Calendar options",
  "x-layout": "component",
  "type": "object",
  "version": 0.1,
  "properties": {
    "views": {
      "title": "Views",
      "description": "TBD",
      "type": "string",
      "enum": ['month', 'week', 'work_week', 'day', 'agenda'],
      "default": "work_week"
    },
    "config": {
      "title": "Config",
      "description": "TBD",
      "type": "string",
      "enum": ['month', 'week', 'day', 'agenda'],
      "default": 'month'
    },
    "selectable": {
      "description": "Selectable color",
      "type": "boolean",
      "default": true
    },
  },
  "required": ["buttonVariant", "size", "color"]
}

export const events = { ...structs.ListBase.events, ...calendarEvents };
export const triggers = structs.ListBase.triggers;

export const config = {

  name: "Big Calendar",
  type: "calendar-big",
  author: "Kjartan Jónsson",
  description: "Big Calendar component",
  version: 0.1,
  relation: {
    contains: [],
    within: "component" // parent
  },
  options: options,
  state: structs.ListBase.StateList
}


// FIXME: not working styling, test by moving font family to style 
const style = (theme) => ({
  root: {
    // fontFamily: 'sans-serif'
  }
});

const localizer = momentLocalizer(moment);

class BigCalendarComponent extends structs.ListBase.ListBase {
  /**
   * Used to manage internal state of avatars
   */
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
  }

  handleSelectSlot = (evt, event_name) => {
    event_name = event_name || 'period';
    // selecting the calendar slots where no event exists
    this.triggerEvent(this.props.id, event_name, {
      start: evt.start,
      end: evt.end,
      slots: evt.slots
    }, {});
  }

  showSelected = (id, idx) => {
    // parent implementation to update the visual representation
    if (this.containerRef && this.containerRef.current) {
      // FIXME: should higlight the event https://jquense.github.io/react-big-calendar/examples/index.html#api
      const sel = { "id": id };
      this.containerRef.current.handleSelectEvent(sel);
    }
    return true; // returns true to update state. Else do not update state.
  }

  handleSelectEvent(evt, event_name) {
    this.handleSelect(evt.id, evt, undefined, evt);
  }

  handleViewing(evt, event_name) {
    this.triggerEvent(this.props.id, 'viewing', {
      start: evt.start,
      end: evt.end,
      slots: evt.slots || null,
      type: event_name
    }, {});

  }

  render() {
    // style
    const { classes } = this.props;
    const viewStyle = this.props.config.options;

    return (
      <div classes={classes}>
        <Calendar
          ref={this.containerRef}
          /*
          config={viewStyle.config}
          */
          events={this.state.data}
          startAccessor="start"
          endAccessor="end"
          style={{ height: "100vh" }}
          localizer={localizer}

          // views={viewStyle.views}
          defaultView={viewStyle.config}
          // scrollToTime={new Date(2022, 1, 1, 1)}

          defaultDate={moment().toDate()} // defaultDate={new Date(2015, 3, 12)}

          selectable={viewStyle.selectable}
          onSelectEvent={(evt) => {
            this.handleSelectSlot(evt, 'selected');
          }}
          onSelectSlot={(evt) => {
            this.handleSelectSlot(evt);
          }}
          onDoubleClickEvent={(evt) => {
            this.handleSelectEvent(evt, 'dblclick');
          }}
          onDrillDown={(evt) => {
            this.handleViewing(evt, 'drilldown');
          }}
          onKeyPressEvent={(evt) => {
            console.info(evt); // this.handleSelectSlot(evt);
          }}
          onNavigate={(evt) => {
            this.handleViewing(evt, 'navigate');
          }}
          onSelecting={(evt) => {
            console.info(evt); // this.handleSelectSlot(evt);
          }}
          onRangeChange={(evt) => {
            const range = {
              start: evt.start || undefined,
              ends: evt.ends || undefined,
              slots: evt
            }
            if (evt.length) {
              range.start = evt[0];
              range.ends = evt[evt.length - 1];
            }
            this.handleViewing(range, 'range');
          }}
          onShowMore={(evt) => {
            console.info(evt); // this.handleSelectSlot(evt);
          }}
          onView={(evt) => {
            // shows actions when pressing different views (day, agenda, work_week, month)
          }}
        />
      </div>
    )
  }

}

// export default withStyles(style, { withTheme: true })(BigCalendarComponent);
export default BigCalendarComponent;