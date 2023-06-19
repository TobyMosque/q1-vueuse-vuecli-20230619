import Vue from "vue";

import "./styles/quasar.scss";
import "quasar/dist/quasar.ie.polyfills";
import "@quasar/extras/material-icons/material-icons.css";
import Quasar, {
  QLayout,
  QHeader,
  QToolbar,
  QToolbarTitle,
  QDrawer,
  QList,
  QItem,
  QItemLabel,
  QItemSection,
  QInput,
  QBtn,
} from "quasar";

Vue.use(Quasar, {
  config: {},
  plugins: {},
});

Vue.component(QLayout.name, QLayout);
Vue.component(QHeader.name, QHeader);
Vue.component(QToolbar.name, QToolbar);
Vue.component(QToolbarTitle.name, QToolbarTitle);
Vue.component(QDrawer.name, QDrawer);
Vue.component(QList.name, QList);
Vue.component(QItem.name, QItem);
Vue.component(QItemLabel.name, QItemLabel);
Vue.component(QItemSection.name, QItemSection);
Vue.component(QInput.name, QInput);
Vue.component(QBtn.name, QBtn);
