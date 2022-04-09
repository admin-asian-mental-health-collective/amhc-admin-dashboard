import Header from '@components/Header';
import Footer from '@components/Footer';
import Box from '@components/Box';

type Props = {
	children: JSX.Element;
};

const Layout = ({ children }: Props) => {
	return (
		<Box>
			<Header />
			{children}
			<Footer />
		</Box>
	);
};

export default Layout;
