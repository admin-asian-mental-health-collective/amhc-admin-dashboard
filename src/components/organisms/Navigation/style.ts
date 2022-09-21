const style = () => ({
	backgroundColor: 'var(--white)',
	'> .box:nth-child(1)': {
		backgroundColor: 'var(--blue)',
		padding: 'var(--md)',
		color: 'var(--white)',
		textAlign: 'center',
		fontWeight: 'bold',
	},
	'> .grid': {
		display: 'grid',
		padding: 'var(--md)',
		gridTemplateColumns: 'auto 1fr auto',
		gridGap: 'var(--lg)',
		justifySelf: 'center',
		alignItems: 'center',
	},
	'> .grid > .box:nth-child(2)': { textAlign: 'right' },
	'> .grid > .box:nth-child(2) > .link': {
		color: 'var(--blue)',
		marginLeft: 'var(--md)',
	},
	'> .grid > .box > .link > .logo': { width: '170px' },
	'@media (max-width: 700px)': {
		'> .grid > .box:nth-child(2) > .link': { display: 'none' },
		'> .grid > .box:nth-child(3) > .link': { display: 'none' },
	},
});

export default style;
