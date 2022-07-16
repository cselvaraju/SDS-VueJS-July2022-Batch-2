import { createApp } from 'vue';
import App from './App.vue';

// Add Bootstrap and Font-Awesome
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// Import all our components
import WelcomePage from "./components/WelcomePage.vue";
import EventHandling from "./components/EventHandling.vue";
import GreetUser from './components/GreetUser.vue';
import DefaultValue from './components/DefaultValue.vue';
import MessageComponent from "./components/MessageComponent.vue";
import ActorList from './components/ActorList.vue';
import ActorTable from './components/ActorTable.vue';

const app = createApp(App);

// Register the components
app.component('welcome-page', WelcomePage);
app.component('event-handling', EventHandling);
app.component('greet-user', GreetUser);
app.component('default-value', DefaultValue);
app.component('message-component', MessageComponent);
app.component('actor-list', ActorList);
app.component('actor-table', ActorTable);

app.mount('#app');
