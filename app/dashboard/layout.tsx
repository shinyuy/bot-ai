import { RequireAuth } from '../../components/utils';
import SideNav from '../../components/common/side-nav';
import MarginWidthWrapper from '../../components/common/margin-width-wrapper';
import Header from '../../components/common/header';
import HeaderMobile from '../../components/common/header-mobile';
import PageWrapper from '../../components/common/page-wrapper';

interface Props {
	children: React.ReactNode;
}

export default function Layout({ children }: Props) {
	return (
		<RequireAuth>
			<div className="flex">
				<SideNav />
				<main className="flex-1">
					<MarginWidthWrapper>
						<Header />
						<HeaderMobile />
						<PageWrapper>{children}</PageWrapper>
					</MarginWidthWrapper>
				</main>
			</div>
		</RequireAuth>
	)
}
