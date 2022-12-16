import React from 'react';
import { action } from '@storybook/addon-actions'
// test utils
import { util } from 'modelui-core-runtime'
import registerComponents from './Components';
// components
import BigCalendarComponent, { triggers, events, config } from './BigCalendarComponent'
import { layout } from 'modelui-core-runtime';


/// Event addon
export default {
  title: 'Extras/BigCalendar',
  component: BigCalendarComponent,
  argTypes: util.StoryUtil.createLayoutViewArgumentTypes(config)
};

export const BigCalendarBasic = (args) => {
  
  const props = {
    id: 'BigCalendarBasic_id',
    type: 'calendar-big',
    data: calendar_events,
    config: { options: args },
    schema: {}
  }

  const override_actions = {
    triggers: {
      replace: [
        {
          id: 'replace_id0',
          title: 'NEW - All Day Event very long title',
          allDay: true,
          start: new Date(now.getFullYear(), now.getMonth(), 0),
          end: new Date(now.getFullYear(), now.getMonth(), 1),
        }, {
          id: 'replace_id1',
          title: 'Longer Event',
          start: new Date(now.getFullYear(), now.getMonth(), 7),
          end: new Date(now.getFullYear(), now.getMonth(), 15),
        }
      ]
    }
  }

  return (
    <div>
      {util.StoryUtil.prepStoryComponent(
        layout.Manager.ComponentManager.getInstance(), action, registerComponents,
        props, triggers, events, override_actions)}
      <BigCalendarComponent {...props} />
    </div>
  );
};
BigCalendarBasic.args = {
  config: config.options.properties.config.default,
  views: config.options.properties.views.default,
  selectable: config.options.properties.selectable.default,
}



const now = new Date();
const calendar_events = [
  {
    id: 'id0',
    title: 'All Day Event very long title',
    allDay: true,
    start: new Date(now.getFullYear(), now.getMonth(), 0),
    end: new Date(now.getFullYear(), now.getMonth(), 1),
  },
  {
    id: 'id1',
    title: 'Long Event',
    start: new Date(now.getFullYear(), now.getMonth(), 7),
    end: new Date(now.getFullYear(), now.getMonth(), 10),
  },

  {
    id: 'id2',
    title: 'DTS STARTS',
    start: new Date(now.getFullYear(), now.getMonth() - 1, 13, 0, 0, 0),
    end: new Date(now.getFullYear(), now.getMonth() - 1, 20, 0, 0, 0),
  },

  {
    id: 'id3',
    title: 'DTS ENDS',
    start: new Date(now.getFullYear(), now.getMonth() + 1, 6, 0, 0, 0),
    end: new Date(now.getFullYear(), now.getMonth() + 1, 13, 0, 0, 0),
  },

  {
    id: 'id4',
    title: 'Some Event',
    start: new Date(now.getFullYear(), now.getMonth(), 9, 0, 0, 0),
    end: new Date(now.getFullYear(), now.getMonth(), now.getMonth() + 1, 0, 0, 0),
  },
  {
    id: 'select_value',
    title: 'Conference',
    start: new Date(now.getFullYear(), now.getMonth(), 11),
    end: new Date(now.getFullYear(), now.getMonth(), 13),
    desc: 'Big conference for important people'
  },
  {
    id: 'id6',
    title: 'Meeting',
    start: new Date(now.getFullYear(), now.getMonth(), 12, 10, 30, 0, 0),
    end: new Date(now.getFullYear(), now.getMonth(), 12, 12, 30, 0, 0),
    desc: 'Pre-meeting meeting, to prepare for the meeting',
  },
  {
    id: 'id7',
    title: 'Lunch',
    start: new Date(now.getFullYear(), now.getMonth(), 12, 12, 0, 0, 0),
    end: new Date(now.getFullYear(), now.getMonth(), 12, 13, 0, 0, 0),
    desc: 'Power lunch',
  },
  {
    id: 'id8',
    title: 'Meeting',
    start: new Date(now.getFullYear(), now.getMonth(), 12, 14, 0, 0, 0),
    end: new Date(now.getFullYear(), now.getMonth(), 12, 15, 0, 0, 0),
  },
  {
    id: 'delete_value',
    title: 'Happy Hour',
    start: new Date(now.getFullYear(), now.getMonth(), 12, 17, 0, 0, 0),
    end: new Date(now.getFullYear(), now.getMonth(), 12, 17, 30, 0, 0),
    desc: 'Most important meal of the day',
  },
  {
    id: 'id10',
    title: 'Dinner',
    start: new Date(now.getFullYear(), now.getMonth(), 12, 20, 0, 0, 0),
    end: new Date(now.getFullYear(), now.getMonth(), 12, 21, 0, 0, 0),
  },
  {
    id: 'id11',
    title: 'Birthday Party',
    start: new Date(now.getFullYear(), now.getMonth(), 13, 7, 0, 0),
    end: new Date(now.getFullYear(), now.getMonth(), 13, 10, 30, 0),
    allDay: true,
  },
  {
    id: 'id12',
    title: 'Late Night Event',
    start: new Date(now.getFullYear(), now.getMonth(), 17, 19, 30, 0),
    end: new Date(now.getFullYear(), now.getMonth(), 18, 2, 0, 0),
  },
  {
    id: 'id12.5',
    title: 'Late Same Night Event',
    start: new Date(now.getFullYear(), now.getMonth(), 17, 19, 30, 0),
    end: new Date(now.getFullYear(), now.getMonth(), 17, 23, 30, 0),
  },
  {
    id: 'id13',
    title: 'Multi-day Event',
    start: new Date(now.getFullYear(), now.getMonth(), 20, 19, 30, 0),
    end: new Date(now.getFullYear(), now.getMonth(), 22, 2, 0, 0),
  },
  {
    id: 'id14',
    title: 'Today',
    start: new Date(new Date().setHours(new Date().getHours() - 3)),
    end: new Date(new Date().setHours(new Date().getHours() + 3)),
  },
  {
    id: 'id15',
    title: 'Point in Time Event',
    start: now,
    end: now,
  },
];