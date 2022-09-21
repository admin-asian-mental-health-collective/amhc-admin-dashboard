import './style.css';
import concatClassName from '../../../helpers/classNameConcat';
import Base from '../../../interfaces/base';

interface Props extends Base {
	to?: string;
}

const Button = ({ className, children, ...rest }: Props) => (
	<button className={concatClassName('button', className)} {...rest}>
		{children}
	</button>
);

export default Button;
