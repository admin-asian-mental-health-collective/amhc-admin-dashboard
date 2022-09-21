const style = () => ({
	backgroundColor: 'var(--pink)',
	color: 'var(--white)',
	padding: 'var(--xlg) 0',
	'> .grid': {
		gridTemplateColumns: '1fr 1fr',
		gridGap: 'var(--lg)',
		display: 'grid',
		maxWidth: '900px',
		margin: '0 auto',
		justifySelf: 'center',
		alignItems: 'center',
		padding: 'var(--md)',
	},
	'> .grid > .box > .image': {
		width: '100%',
	},
	'> .grid > .box > .button': {
		marginBottom: 'var(--md)',
		color: 'var(--white)',
		borderColor: 'var(--white)',
	},
	'> .grid > .box > h1': {
		marginTop: '0',
	},
	'@media (max-width: 700px)': {
		'> .grid': {
			gridTemplateColumns: '1fr',
			textAlign: 'center',
		},
		'> .grid > .box > .image': {
			width: '75%',
			display: 'block',
			margin: '0 auto',
		},
		'> .grid > .box > .button': {
			display: 'block',
			width: '100%'
		},
	},
});

export default style;
