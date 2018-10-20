# vue-uix

> A vue component library based on the [JUI components](http://uiplay.jui.io) available in vuejs.

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/made-with-vue.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/uses-js.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/uses-css.svg)](http://forthebadge.com)

## Installation

### NPM
```bash
npm install --save vue-uix
```

### Browser (Legacy)
If you are using an existing JUI style, Just download `dist/vue-uix.base.js` and include it in your HTML file:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.16/vue.js"></script>
<script src="dist/vue-uix.base.js"></script>
<link rel="stylesheet" href="jui-ui.classic.css" />
<!--<link rel="stylesheet" href="jui-ui.dark.css" />-->
```

### Browser
Download the `dist/vue-uix.classic.js` and `dist/vue-uix.css` and include it in your HTML file:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.16/vue.js"></script>
<script src="dist/vue-uix.classic.js"></script>
<!--<script src="dist/vue-uix.dark.js"></script>-->
<link rel="stylesheet" href="dist/vue-uix.css" />
```

### ES Modules

##### Plug-In

```js
import Vue from 'vue'
import VueUix from 'vue-uix'

Vue.use(VueUix, { theme: 'classic' })
```

##### Components (Legacy)
If you are using an existing JUI style, You must load a non-styled view component.

```js
import Vue from 'vue'
import UixComboBox from 'vue-uix/src/components/combobox'

Vue.component(UixComboBox.name, UixComboBox);
```

##### Components

```js
import Vue from 'vue'
import UixComboBox from 'vue-uix/src/components/combobox.classic'
// import UixComboBox from 'vue-uix/src/components/combobox.dark'

Vue.component(UixComboBox.name, UixComboBox);
```


## Implemented components

- [Accordion](https://codepen.io/seogi1004/pen/OBEXqd)
- [Auto Complete](https://codepen.io/seogi1004/pen/GYGqaw)
- [Button](https://codepen.io/seogi1004/pen/ePKzwd)
- [Date Picker](https://codepen.io/seogi1004/pen/yREagV)
- [Calendar](https://codepen.io/seogi1004/pen/xyzOoL)
- [Combo Box](https://codepen.io/seogi1004/pen/aRKZew)
- [Color Picker](https://codepen.io/seogi1004/pen/XxYjjg)
- [Dropdown](https://codepen.io/seogi1004/pen/VEdKpE)
- [Modal](https://codepen.io/seogi1004/pen/QZxKvy)
- [Notification](https://codepen.io/seogi1004/pen/MPXjmp)
- [Switch](https://codepen.io/seogi1004/pen/aRKmWq)
- [Tab](https://codepen.io/seogi1004/pen/oayzWP)
- [Tree](https://codepen.io/seogi1004/pen/OBEROJ)


## API


### [Accordion](https://codepen.io/seogi1004/pen/OBEXqd)

#### Props

| Name | Type | Required | Watch | Default | Description |
| ---- | ---- | -------- | ----- | ------- | ----------- |
| type | String | false | false | `` | Additional styles of accordion (**simple**) |
| items | Array | true | false | `undefined` | A list of accordion headers |
| index | Number | false | false | `null` | Sets the accordion header to be activated |
| autoFold | Boolean | false | false | false | Hide the content area when you click on the active accordion header again |
| width | Number, String | false | true | `100%` | The width of the component |

#### Events

| Name | Arguments | Description |
| ---- | --------- | ----------- |
| open | index | Events that occur when an accordion content is opened |
| fold | index | Events that occur when an accordion content is closed |


### [Auto Complete](https://codepen.io/seogi1004/pen/GYGqaw)

#### Props

| Name | Type | Required | Watch | Default | Description |
| ---- | ---- | -------- | ----- | ------- | ----------- |
| icon | String | false | false | `` | When you want to use the icon, you can set the name of the icon provided by [JUI](http://uiplay.jui.io/?p=icons) (However, you do not need to use the prefix 'icon-') |
| width | Number | false | true | 150 | The width of the component |
| size | String | false | false | `small` | The size styles of the component (**mini**, **small**, **large**) |
| template | String | false | false | `skip...` | |
| items | Array | true | true | `undefined` | Auto-complete word list |
| value | String | false | false | `` | Props to set the selected word |

#### Events

| Name | Arguments | Description |
| ---- | --------- | ----------- |
| change | text, event | Events that occur when you select a word in the Auto-complete list |


### [Button](https://codepen.io/seogi1004/pen/ePKzwd)

#### Props

| Name | Type | Required | Watch | Default | Description |
| ---- | ---- | -------- | ----- | ------- | ----------- |
| type | String | false | false | `radio` | It is a button selection option. Radio is single and Check is multi-selectable. (**radio**, **check**) |
| index | Number | false | true | 0 | Sets the button to be activated |
| value | String, Array | false | true | `` | Selected value. Radio is string type, Check is array type |
| size | String | false | false | `small` | The size styles of the component (**mini**, **small**, **large**) |
| items | Array | true | true | `undefined` | Button list |

#### Events

| Name | Arguments | Description |
| ---- | --------- | ----------- |
| change | item, event | Events that occur when you click a button |


### [Color Picker](https://codepen.io/seogi1004/pen/XxYjjg)

#### Props

| Name | Type | Required | Watch | Default | Description |
| ---- | ---- | -------- | ----- | ------- | ----------- |
| color | String, Object | true | false | `#FFF` | Default color code, which can be set to a hex string or an RGB object |

#### Events

| Name | Arguments | Description |
| ---- | --------- | ----------- |
| change | hex, rgb | Events that occur when you select a color |


### [Combo Box](https://codepen.io/seogi1004/pen/aRKZew)

#### Props

| Name | Type | Required | Watch | Default | Description |
| ---- | ---- | -------- | ----- | ------- | ----------- |
| index | Number | false | true | 0 | Sets the item to be activated |
| value | String | false | true | `` | Selected value |
| width | Number | false | false | 100 | The width of the component |
| height | Number | false | false | 100 | The width of the component |
| size | String | false | false | `small` | The size styles of the component (**mini**, **small**, **large**) |
| keydown | Boolean | false | false | false | Option to select items with up/down arrow keys |
| flex | Boolean | false | false | true | Option that match the width of the drop-down menu to the width of the combo box |
| position | String | false | false | `bottom` | Option to set where the drop-down menu is shown (**top**, **bottom**) |
| title | String | false | false | `Selected...` | When there are no items, the default message shown in the combo box |
| items | Array | false | false | `null` | Item list of combo box |
| active | String | false | true | false | Options showing a drop-down menu |

#### Events

| Name | Arguments | Description |
| ---- | --------- | ----------- |
| change | item, event | Events that occur when you select a item |


### [Date Picker](https://codepen.io/seogi1004/pen/yREagV)

#### Props

| Name | Type | Required | Watch | Default | Description |
| ---- | ---- | -------- | ----- | ------- | ----------- |
| titleFormat | String | false | false | `yyyy.MM` | Set the current year/month title format |
| dateFormat | String | false | false | `yyyy-MM-dd` | Set the format for selected date |
| date | String | false | true | null | Set the | Select the default date |
| template | String | false | false | `<td><!= date !></td>` | A template for markup that prints out the date |

#### Events

| Name | Arguments | Description |
| ---- | --------- | ----------- |
| change | dateStr, event | Events that occur when you select a date |
| prev | event | Events that occur when you change to the previous month |
| next | event | Events that occur when you change to the next month |


### [Calendar](https://codepen.io/seogi1004/pen/xyzOoL) (extends Date Picker)

#### Props

| Name | Type | Required | Watch | Default | Description |
| ---- | ---- | -------- | ----- | ------- | ----------- |
| width | String, Number | false | false | `100%` | Set calendar width |
| height | String, Number | false | false | `100%` | Set calendar height |


### [Dropdown](https://codepen.io/seogi1004/pen/VEdKpE)

#### Props

| Name | Type | Required | Watch | Default | Description |
| ---- | ---- | -------- | ----- | ------- | ----------- |
| index | Number | false | false | 0 | Sets the item to be activated |
| width | Number | false | false | 100 | The width of the component |
| height | Number | false | false | 100 | The height of the component |
| left | Number | false | false | 0 | The left position value of the component |
| top | Number | false | false | 0 | The top position value of the component |
| size | String | false | false | `small` | The size styles of the component (**mini**, **small**, **large**) |
| keydown | Boolean | false | false | false | Option to select items with up/down arrow keys |
| items | String | false | true | `undefined` | Item list of drop-down menu |
| active | Boolean | false | true | false | Options showing a drop-down menu |
| anchor | Boolean | false | false | false | Set options to display anchor style |

#### Events

| Name | Arguments | Description |
| ---- | --------- | ----------- |
| change | item, event | Events that occur when you select a item |


### [Modal](https://codepen.io/seogi1004/pen/QZxKvy)

#### Props

| Name | Type | Required | Watch | Default | Description |
| ---- | ---- | -------- | ----- | ------- | ----------- |
| root | String | false | true | `null` | Selector for the modal background element |
| target | String | false | true | `null` | Selector of targeted element |
| active | Boolean | false | true | false | Options showing a modal |
| color | String | false | false | `black` | Background color of modal |
| opacity | Number | false | false | 0.4 | Background opacity of modal |
| zIndex | Number | false | false | 0 | Z-index value of modal |
| autoHide | Boolean | false | false | false | Option to automatically hide modal on background clicking |


### [Notification](https://codepen.io/seogi1004/pen/MPXjmp)

#### Props

| Name | Type | Required | Watch | Default | Description |
| ---- | ---- | -------- | ----- | ------- | ----------- |
| root | String | false | true | `null` | Selector for the modal background element |
| position | String | false | false | `bottom` | Option to set where the drop-down menu is shown (**top**, **bottom**) |
| items | Array | false | true | `undefined` | Item list of drop-down menu |
| template | String | false | false | `<td><!= date !></td>` | A template for markup that prints out the date |
| icon | String | false | false | `` | When you want to use the icon, you can set the name of the icon provided by [JUI](http://uiplay.jui.io/?p=icons) (However, you do not need to use the prefix 'icon-') |
| delay | Number | false | false | 3000 | After the notification is shown, delay time |
| showDuration | Number | false | false | 500 | Duration of effect in which notifications are shown |
| hideDuration | Number | false | false | 500 | Duration of effect in which notifications are hidden |
| padding | Number | false | false | 12 | Padding between notification and notification |
| distance | Number | false | false | 5 | Distance between notification and notification |


#### Events

| Name | Arguments | Description |
| ---- | --------- | ----------- |
| change | item, event | Events that occur when you select a item |
| show | index | Events that occur when an notification is shown |
| hide | index | Events that occur when an notification is hidden |


### [Switch](https://codepen.io/seogi1004/pen/aRKmWq)

#### Props

| Name | Type | Required | Watch | Default | Description |
| ---- | ---- | -------- | ----- | ------- | ----------- |
| inside | Boolean | false | false | true | Sets the inside style option for the switch |
| size | String | false | false | `small` | The size styles of the component (**mini**, **small**, **large**) |
| checked | Boolean | false | false | false | Sets the check state of the switch |


#### Events

| Name | Arguments | Description |
| ---- | --------- | ----------- |
| change | checked, event | Events that occur when you change a switch |


### [Tab](https://codepen.io/seogi1004/pen/oayzWP)

#### Props

| Name | Type | Required | Watch | Default | Description |
| ---- | ---- | -------- | ----- | ------- | ----------- |
| type | String | false | false | `tab` | Set tab style type (**tab**, **pill**) |
| position | String | false | false | `top` | Sets the position of the tab (**top**, **bottom**) |
| items | Array | false | true | `undefined` | Item list of tab |
| index | Number | false | true | 0 | Sets the item to be activated |
| disable | Array | false | true | `null` | Sets the index of the tab to be disabled |


#### Events

| Name | Arguments | Description |
| ---- | --------- | ----------- |
| change | checked, event | Events that occur when you change a activated tab |


### [Tree](https://codepen.io/seogi1004/pen/OBEROJ)

#### Props

| Name | Type | Required | Watch | Default | Description |
| ---- | ---- | -------- | ----- | ------- | ----------- |
| type | String | false | false | `line` | Set tree style type (**line**, **line-file**, **arrow**, **arow-file**) |
| rootName | String | false | false | `null` | Sets the name of the root node |
| rootHide | Boolean | false | false | false | Option to hide root node by default |
| rootFold | Boolean | false | false | false | Option to hide fold node by default |
| template | String | false | false | `<li><div><i></i> <!= text !></div><ul></ul></li>` | A template for markup that prints out the node |
| items | Array | false | true | `undefined` | Node list of tree |
| item | Object | false | true | `null` | Sets the node to be activated |

#### Events

| Name | Arguments | Description |
| ---- | --------- | ----------- |
| change | item, event | Events that occur when you select a node |
| open | item, event | Events that occur when the child nodes of the selected node are opened |
| fold | item, event | Events that occur when the child nodes of the selected node are folded |
