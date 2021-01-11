import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Software Bastards test'
	}
});

export default app;