import { createApp } from 'vue'
import App from './App.vue'

// import ParentComponent from './components/ParentComponent.vue';
// import ChildComponent from './components/ChildComponent.vue';

const app = createApp(App);

// app.component('parent-component', ParentComponent);
// app.component('child-component', ChildComponent);

app.mount('#app');
