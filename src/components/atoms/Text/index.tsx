import './style.css';
import concatClassName from '../../../helpers/classNameConcat';
import Base from '../../../interfaces/base';

interface Props extends Base {
	as?: 'p'
}

function Text({ as, className, children, ...rest }: Props) {
	const Elem = as ? as : 'p';
	return (
		<Elem className={concatClassName('text', className)} {...rest}>
			{children}
		</Elem>
	);
}

export default Text;
