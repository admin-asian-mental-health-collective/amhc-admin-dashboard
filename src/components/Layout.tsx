import Header from '@components/Header';
import Footer from '@components/Footer';

type Props = {
    children: JSX.Element;
};

const Layout = ({ children }: Props) => {
    return (
        <div className="content">
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
