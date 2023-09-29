'use client';

interface MenuProps {
	currentPage: string;
	setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}

const Menu: React.FC<MenuProps> = ({ currentPage, setCurrentPage }) => {
	const setPage = (page: string) => {
		if (page === currentPage) return;

		setCurrentPage(page);
	};

	return (
		<nav className={`desktop:block laptop:block hidden h-full`}>
			<ul className="desktop:flex laptop:flex h-full hidden uppercase tracking-wide">
				<a
					href="#"
					onClick={() => setPage('home')}
					className={`menu-button bounce-to-bottom ${
						currentPage === 'home' ? 'current-page' : ''
					}`}
					aria-label="Domů"
					aria-current={currentPage === 'home' ? 'page' : undefined}
				>
					Domů
				</a>
				<a
					href="#sluzby"
					onClick={() => setPage('sluzby')}
					className={`menu-button bounce-to-bottom ${
						currentPage === 'sluzby' ? 'current-page' : ''
					}`}
					aria-label="Naše služby"
					aria-current={currentPage === 'sluzby' ? 'page' : undefined}
				>
					Naše služby
				</a>
				<a
					href="#o-nas"
					onClick={() => setPage('o-nas')}
					className={`menu-button bounce-to-bottom ${
						currentPage === 'o-nas' ? 'current-page' : ''
					}`}
					aria-label="O nás"
					aria-current={currentPage === 'o-nas' ? 'page' : undefined}
				>
					O nás
				</a>
				<a
					href="#portfolio"
					onClick={() => setPage('portfolio')}
					className={`menu-button bounce-to-bottom ${
						currentPage === 'portfolio' ? 'current-page' : ''
					}`}
					aria-label="Portfolio"
					aria-current={currentPage === 'portfolio' ? 'page' : undefined}
				>
					Portfolio
				</a>
				<a
					href="#kontakt"
					onClick={() => setPage('kontakt')}
					className={`menu-button bounce-to-bottom ${
						currentPage === 'kontakt' ? 'current-page' : ''
					}`}
					aria-label="Kontakt"
					aria-current={currentPage === 'kontakt' ? 'page' : undefined}
				>
					Kontakt
				</a>
			</ul>
		</nav>
	);
};
export default Menu;
