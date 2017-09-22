import App from './App.html';

const app = new App({
	target: document.body,
	data: {
		title: 'inkichat-svelte',
		testGreeting: 'Hello'
		// "dialogTurns": [
		// 	{
		// 		"id": 1,
		// 		"actor": "friend",
		// 		"actionType": "SAYS",
		// 		"text": "r u going to sam’s party?" 
		// 	},
		// 	{
		// 		"id": 2,
		// 		"actor": "girl",
		// 		"actionType": "SAYS",
		// 		"text": "no I’m grounded" 
		// 	},
		// 	{
		// 		"id": 3,
		// 		"actor": "friend",
		// 		"actionType": "SAYS",
		// 		"text": "grounded? oh girl, that sucks! Why? What did you do?" 
		// 	},
		// 	{
		// 		"id": 4,
		// 		"actor": "girl",
		// 		"actionType": "OPTIONS",
		// 		"text":"I sneaked out wearing Mum’s giant gold hoops and lost one",
		// 	},
		// 	{
		// 		"id": 5,
		// 		"actor": "friend",
		// 		"actionType": "REPLIES",
		// 		"text":"omg"
		// 	},
		// 	{
		// 		"id": 6,
		// 		"actor": "girl",
		// 		"actionType": "SAYS",
		// 		"text": "Yeah. So mean, they took away my mobile, restricted internet to exam revision sites. Boring!" 
		// 	},
		// 	{
		// 		"id": 7,
		// 		"actor": "friend",
		// 		"actionType": "SAYS",
		// 		"text": "how you chatting to me then?" 
		// 	},
		// 	{
		// 		"id": 8,
		// 		"actor": "girl",
		// 		"actionType": "SAYS",
		// 		"text": "I have ways & means ha ha ha" 
		// 	},
		// 	{
		// 		"id": 9,
		// 		"actor": "friend",
		// 		"actionType": "SAYS",
		// 		"text": "like what?" 
		// 	},
		// 	{
		// 		"id": 10,
		// 		"actor": "girl",
		// 		"actionType": "SAYS",
		// 		"text": "I looked up how to hack around parental controls. Connection bit dodgy but ok" 
		// 	},
		// 	{
		// 		"id": 11,
		// 		"actor": "friend",
		// 		"actionType": "SAYS",
		// 		"text": "Wow! You’re like a real hacker. You’ll be in Anonymous next" 
		// 	}
		// ]
	}
});

export default app;