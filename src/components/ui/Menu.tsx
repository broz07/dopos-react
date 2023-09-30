'use client';

import { useTranslation } from 'react-i18next';

interface MenuProps {
	currentPage: string;
	setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}

const Menu: React.FC<MenuProps> = ({ currentPage, setCurrentPage }) => {
	const setPage = (page: string) => {
		if (page === currentPage) return;

		setCurrentPage(page);
	};

	const { t } = useTranslation();

	return (
		<nav className={`desktop:block laptop:block hidden h-full`}>
			<ul className="desktop:flex laptop:flex h-full hidden uppercase tracking-wide">
				<a
					href="#"
					onClick={() => setPage('home')}
					className={`menu-button bounce-to-bottom ${
						currentPage === 'home' ? 'current-page' : ''
					}`}
					aria-label={t('menu.home')}
					aria-current={currentPage === 'home' ? 'page' : undefined}
				>
					{t('menu.home')}
				</a>
				<a
					href="#sluzby"
					onClick={() => setPage('sluzby')}
					className={`menu-button bounce-to-bottom ${
						currentPage === 'sluzby' ? 'current-page' : ''
					}`}
					aria-label={t('menu.services')}
					aria-current={currentPage === 'sluzby' ? 'page' : undefined}
				>
					{t('menu.services')}
				</a>
				<a
					href="#o-nas"
					onClick={() => setPage('o-nas')}
					className={`menu-button bounce-to-bottom ${
						currentPage === 'o-nas' ? 'current-page' : ''
					}`}
					aria-label={t('menu.about')}
					aria-current={currentPage === 'o-nas' ? 'page' : undefined}
				>
					{t('menu.about')}
				</a>
				<a
					href="#portfolio"
					onClick={() => setPage('portfolio')}
					className={`menu-button bounce-to-bottom ${
						currentPage === 'portfolio' ? 'current-page' : ''
					}`}
					aria-label={t('menu.portfolio')}
					aria-current={currentPage === 'portfolio' ? 'page' : undefined}
				>
					{t('menu.portfolio')}
				</a>
				<a
					href="#kontakt"
					onClick={() => setPage('kontakt')}
					className={`menu-button bounce-to-bottom ${
						currentPage === 'kontakt' ? 'current-page' : ''
					}`}
					aria-label={t('menu.contact')}
					aria-current={currentPage === 'kontakt' ? 'page' : undefined}
				>
					{t('menu.contact')}
				</a>
			</ul>
		</nav>
	);
};
export default Menu;
