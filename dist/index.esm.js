import { structs, layout } from 'modelui-core-runtime';
import React from 'react';
import moment from 'moment';
import { momentLocalizer, Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

var calendarEvents = {
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
  }
};
var options = {
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
    }
  },
  "required": ["buttonVariant", "size", "color"]
};
var events = _objectSpread2(_objectSpread2({}, structs.ListBase.events), calendarEvents);
var triggers = structs.ListBase.triggers;
var config = {
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
}; // FIXME: not working styling, test by moving font family to style 

var localizer = momentLocalizer(moment);

var BigCalendarComponent = /*#__PURE__*/function (_structs$ListBase$Lis) {
  _inherits(BigCalendarComponent, _structs$ListBase$Lis);

  var _super = _createSuper(BigCalendarComponent);

  /**
   * Used to manage internal state of avatars
   */
  function BigCalendarComponent(props) {
    var _this;

    _classCallCheck(this, BigCalendarComponent);

    _this = _super.call(this, props);

    _this.handleSelectSlot = function (evt, event_name) {
      event_name = event_name || 'period'; // selecting the calendar slots where no event exists

      _this.triggerEvent(_this.props.id, event_name, {
        start: evt.start,
        end: evt.end,
        slots: evt.slots
      }, {});
    };

    _this.showSelected = function (id, idx) {
      // parent implementation to update the visual representation
      if (_this.containerRef && _this.containerRef.current) {
        // FIXME: should higlight the event https://jquense.github.io/react-big-calendar/examples/index.html#api
        var sel = {
          "id": id
        };

        _this.containerRef.current.handleSelectEvent(sel);
      }

      return true; // returns true to update state. Else do not update state.
    };

    _this.containerRef = /*#__PURE__*/React.createRef();
    return _this;
  }

  _createClass(BigCalendarComponent, [{
    key: "handleSelectEvent",
    value: function handleSelectEvent(evt, event_name) {
      this.handleSelect(evt.id, evt, undefined, evt);
    }
  }, {
    key: "handleViewing",
    value: function handleViewing(evt, event_name) {
      this.triggerEvent(this.props.id, 'viewing', {
        start: evt.start,
        end: evt.end,
        slots: evt.slots || null,
        type: event_name
      }, {});
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      // style
      var classes = this.props.classes;
      var viewStyle = this.props.config.options;
      return /*#__PURE__*/React.createElement("div", {
        classes: classes
      }, /*#__PURE__*/React.createElement(Calendar, {
        ref: this.containerRef
        /*
        config={viewStyle.config}
        */
        ,
        events: this.state.data,
        startAccessor: "start",
        endAccessor: "end",
        style: {
          height: "100vh"
        },
        localizer: localizer // views={viewStyle.views}
        ,
        defaultView: viewStyle.config // scrollToTime={new Date(2022, 1, 1, 1)}
        ,
        defaultDate: moment().toDate() // defaultDate={new Date(2015, 3, 12)}
        ,
        selectable: viewStyle.selectable,
        onSelectEvent: function onSelectEvent(evt) {
          _this2.handleSelectSlot(evt, 'selected');
        },
        onSelectSlot: function onSelectSlot(evt) {
          _this2.handleSelectSlot(evt);
        },
        onDoubleClickEvent: function onDoubleClickEvent(evt) {
          _this2.handleSelectEvent(evt, 'dblclick');
        },
        onDrillDown: function onDrillDown(evt) {
          _this2.handleViewing(evt, 'drilldown');
        },
        onKeyPressEvent: function onKeyPressEvent(evt) {
          console.info(evt); // this.handleSelectSlot(evt);
        },
        onNavigate: function onNavigate(evt) {
          _this2.handleViewing(evt, 'navigate');
        },
        onSelecting: function onSelecting(evt) {
          console.info(evt); // this.handleSelectSlot(evt);
        },
        onRangeChange: function onRangeChange(evt) {
          var range = {
            start: evt.start || undefined,
            ends: evt.ends || undefined,
            slots: evt
          };

          if (evt.length) {
            range.start = evt[0];
            range.ends = evt[evt.length - 1];
          }

          _this2.handleViewing(range, 'range');
        },
        onShowMore: function onShowMore(evt) {
          console.info(evt); // this.handleSelectSlot(evt);
        },
        onView: function onView(evt) {// shows actions when pressing different views (day, agenda, work_week, month)
        }
      }));
    }
  }]);

  return BigCalendarComponent;
}(structs.ListBase.ListBase); // export default withStyles(style, { withTheme: true })(BigCalendarComponent);

function BigCalendar(props) {
  // lets enumerate schema to extract uiSchema and validation
  return /*#__PURE__*/React.createElement(BigCalendarComponent, props);
}
function registerBigCalendar(component_manager) {
  // self register component to layout manager
  component_manager.registerComponent({
    component: BigCalendar,
    type: config.type,
    events: events,
    triggers: triggers,
    config: config
  });
}

// Managers and factories
function registerComponents(component_manager) {
  if (!component_manager) {
    component_manager = layout.Manager.ComponentManager.getInstance();
  }
  /*
  if (component_manager.constructor.name !== 'ComponentManager') {
      throw `Constructor must be component manager. Got type ${component_manager.constructor.name}`;
  }
  */


  registerBigCalendar(component_manager);
}

export { registerComponents };
//# sourceMappingURL=index.esm.js.map
