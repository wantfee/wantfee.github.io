---
slug: react-cascader-calendar-integration
title: React实战案例：操作数据将其应用到antd的Cascader组件中并通过Cascader组件选项切换日历数据
authors: [JeffWang]
tags: [react, antd, cascader, calendar]
---

## 一、需求

将获得的数据转换为antd中Cascader组件的option选项数据，然后再通过Cascader组件某一选项过滤日历的传入数据，在日历上显示。

## 二、思路

我们先来看看获得的原始数据，calendarEvents是包含着对象的数组类型：

```json
[{
    "id": "11ec-b68b-1df198ede54e",
    "start": "2022-03-09T05:00:00.000Z",
    "end": "2022-03-10T04:59:59.999Z",
    "visible_title": null,
    "status": "not_started",
    "notes": null,
    "site_links": [],
    "cycle": {
        "id": "afb444a0-b68b-1df198ede54e",
        "name": "1941",
        "__typename": "Cycle"
    },
    "task_type": {
        "id": "ad3f075b-960f789-f74a7e816e7e",
        "name": "Scouting B6",
        "__typename": "TaskType"
    },
    "schedule_events": [],
    "__typename": "CycleEvent",
    "title": "Scouting B6 - 1941",
    "allDay": true
},
...
]
```

而antd的Cascader组件需要的选项Option数据格式是一个有特定键值的数组：

```javascript
const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
```

根据需求我们分为两步：

**第一步：** 我们需要把calendarEvents中键值为"__typename"的值取出，包装成Option数据格式，附上新的键值，传给Cascader组件。

**第二步：** 获取Cascader组件选择的值，使用它对calendarEvents原始数据进行过滤，获取新的数组，传递给日历组件。当然，此时我们需要声明一个新的组件状态。

## 三、涉及到的技术

- lodash中的`_.filter`、`_.uniqBy`、`_.orderBy`、`_.map`方法
- react-big-calendar库的使用

## 四、解决方案

### 1. mapTaskTypesToCascadeOptions函数将calendarEvents转换为Cascader需要的格式

```javascript
function mapTaskTypesToCascadeOptions() {
    // 过滤原始数据，将calendarEvents中对象task_type属性值不为空的对象取出，形成新数组
    const calendarEventsWithTaskType = _.filter(calendarEvents, obj => obj.task_type !== null);
    // 再将id重复的去掉
    let allTaskTypes = _.uniqBy(_.map(calendarEventsWithTaskType, obj => obj.task_type), 'id');
    // 接下来对数组进行排序，按照name升序排序
    allTaskTypes = _.orderBy(allTaskTypes, 'name', 'asc');
    // 最后赋予新的键值将该数组映射为符合Cascade选项的数组
    return _.map(allTaskTypes, task => {
      return {
        id: _.get(task, 'id', ''),
        value: _.get(task, 'name', ''),
        label: _.get(task, 'name', ''),
      }
    })
};

const actionItemCascadeOptions = mapTaskTypesToCascadeOptions();
```

### 2. 给Cascader组件传入准备好的数据

```jsx
<Cascader
    {...classes('calendar-filter')}
    // 这里option就可以使用已经整理好的数据了
    options={actionItemCascadeOptions}
    expandTrigger='hover'
    onChange={onActionItemChange}
    changeOnSelect={true}
    placeholder='Select Task Type'
    showSearch={{ filter }}
/>
```

### 3. 在Cascader的回调函数中，对calendarEvents进行过滤

```javascript
function onActionItemChange(value) {
    // 如果value有值
    if (value.length === 1) {
      // 对calendarEvents进行过滤，返回其中的对象的task_type.name和值和选择的value值相等的数组
      const filteredEvents = _.filter(calendarEvents, (event) => {
        return _.get(event, 'task_type.name', '') === value[0];
      });
      // 更改日历的数据为filteredEvents
      setCalendarData(filteredEvents);
    } else {
      // 否则日历使用原来的calendarEvents
      setCalendarData(calendarEvents);
    }
};
```

### 4. 声明一个新的状态

```javascript
// 用来保存日历数据的状态
let [calendarData, setCalendarData] = useState(calendarEvents);
```

### 5. 给日历组件传递数据

```jsx
<Calendar
    ref={printableRef}
    // 将calendarData传入组件中
    events={calendarData}
    step={60}
    showMultiDayTimes
    localizer={localizer}
/>
```

