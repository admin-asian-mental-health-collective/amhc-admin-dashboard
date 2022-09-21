const style = () => ({
	display: 'inline-block',
	color: 'var(--blue)',
	border: 'solid var(--xxsm) var(--blue)',
	padding: 'var(--sm) var(--lg)',
	borderRadius: '2em',
	backgroundColor: 'rgba(0, 0, 0, 0)',
	cursor: 'pointer',
	transition: '0.5s',
	':hover': {
		transition: '0.5s',
		padding: 'var(--sm) var(--xlg)',
	},
});

export default style;