import App from './App.html';

const app = new App({
	target: document.body,
	data: {
		title: 'inkichat-svelte',
		testGreeting: 'Hello'
	}
});

export default app;