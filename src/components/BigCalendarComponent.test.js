/**
 * ListComponent tests
 * Testing DD events and actions integrety
 */

import BigCalendarComponent, { events, triggers, config } from './BigCalendarComponent'
import BigCalendar from './Calendar'

import { util } from 'modelui-core-runtime';
import { layout } from 'modelui-core-runtime'
import registerComponents from './Components';
import renderer from 'react-test-renderer';

describe('BigCalendarComponent protocol', () => {
  const tests =  util.TestUtil.createComponentClassTests(
    layout.Manager.ComponentManager.getInstance(),
    registerComponents,
    renderer,    
    config,
    [
      'submit',
      'enable',
      'disable',
      'clear',
      'populate'
    ], [
    'submitted',
    'changed',
    'invalidated',
    'validated',
    'enabled',
    'disabled',
    'populated',
    'cleared'
  ]
  );
  tests.forEach((t) => { test(t.title, t.test); });
});

describe('BigCalendarComponent registration', () => {
  const tests = util.TestUtil.createComponentRegisterTests(
    layout.Manager.ComponentManager.getInstance(),
    registerComponents,    
    'calendar-big',
    BigCalendar,
    triggers,
    events,
    config,
    {}
  );
  tests.forEach((t) => { test(t.title, t.test); });
});
