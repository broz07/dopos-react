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
			<ul className="desktop:flex laptop:flex h-full hidden">
				<a
					href="#"
					onClick={() => setPage('home')}
					className={`menu-button bounce-to-bottom ${
						currentPage === 'home' ? 'current-page' : ''
					}`}
				>
					Domů
				</a>
				<a
					href="#o-nas"
					onClick={() => setPage('o-nas')}
					className={`menu-button bounce-to-bottom ${
						currentPage === 'o-nas' ? 'current-page' : ''
					}`}
				>
					O nás
				</a>
				<a
					href="#sluzby"
					onClick={() => setPage('sluzby')}
					className={`menu-button bounce-to-bottom ${
						currentPage === 'sluzby' ? 'current-page' : ''
					}`}
				>
					Naše služby
				</a>
				<a
					href="#reference"
					onClick={() => setPage('reference')}
					className={`menu-button bounce-to-bottom ${
						currentPage === 'reference' ? 'current-page' : ''
					}`}
				>
					Reference
				</a>
				<a
					href="#kontakt"
					onClick={() => setPage('kontakt')}
					className={`menu-button bounce-to-bottom ${
						currentPage === 'kontakt' ? 'current-page' : ''
					}`}
				>
					Kontakt
				</a>
			</ul>
		</nav>
	);
};
export default Menu;
