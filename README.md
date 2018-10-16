# vue-uix

> A vue component library based on the [JUI components](http://uiplay.jui.io) available in vuejs.

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/made-with-vue.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/uses-js.svg)](http://forthebadge.com)

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
import UixCombo from 'vue-uix/src/components/combo'

Vue.component(UixCombo.name, UixCombo);
```

##### Components

```js
import Vue from 'vue'
import UixCombo from 'vue-uix/src/components/combo.classic'
// import UixCombo from 'vue-uix/src/components/combo.dark'

Vue.component(UixCombo.name, UixCombo);
```
