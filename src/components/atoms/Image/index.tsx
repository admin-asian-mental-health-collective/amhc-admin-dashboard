import './style.css';
import concatClassName from '../../../helpers/classNameConcat';
import Base from '../../../interfaces/base';

interface Props extends Base {
	src: string;
}

const Image = ({ src, className, ...rest }: Props) => (
	<img src={src} className={concatClassName('image', className)} {...rest} />
);

export default Image;
