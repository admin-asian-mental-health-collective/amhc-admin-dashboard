import styled, { StyledComponent } from 'styled-components';
import style from './style';
import concatClassName from '../../../helpers/classNameConcat';
import Base from '../../../interfaces/base';

interface Props extends Base {
	src: string;
}

const Image: StyledComponent = styled(({ src, className, ...rest }: Props) => (
	<img src={src} className={concatClassName('image', className)} {...rest} />
))(style);

export default Image;
