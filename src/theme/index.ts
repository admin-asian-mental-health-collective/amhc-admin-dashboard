import colors from '@/theme/colors';
import breakpoints from '@/theme/breakpoints';
import fonts from '@/theme/fonts';
import spacings from '@/theme/spacings';

class Theme {
	colors: any = { ...colors };
	spacings: any = { ...spacings };
	breakpoints: any = { ...breakpoints };
	fonts: any = { ...fonts };
}

export default new Theme();
