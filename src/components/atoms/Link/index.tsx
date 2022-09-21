import { Link as ReactRouterLink } from 'react-router-dom';
import concatClassName from '../../../helpers/classNameConcat';
import './style.css';
import Base from '../../../interfaces/base';

interface Props extends Base {
	to: string;
}

const Link = ({ to, className, children, ...rest }: Props) =>
	/(http(s?)):\/\//i.test(to) ? (
		<a
			href={to}
			className={concatClassName('link', className)}
			target="_blank"
			{...rest}
		>
			{children}
		</a>
	) : (
		<ReactRouterLink
			to={to}
			className={concatClassName('link', className)}
			{...rest}
		>
			{children}
		</ReactRouterLink>
	);

export default Link;
