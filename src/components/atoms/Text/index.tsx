import styled, { StyledComponent } from 'styled-components';
import style from './style';
import concatClassName from '../../../helpers/classNameConcat';
import Base from '../../../interfaces/base';

interface Props extends Base {
	as?: 'p';
}

const Text: StyledComponent = styled(
	({ as, className, children, ...rest }: Props) => {
		const Elem = as ? as : 'p';
		return (
			<Elem className={concatClassName('text', className)} {...rest}>
				{children}
			</Elem>
		);
	}
)(style);

export default Text;
