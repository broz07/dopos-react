import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';

import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import PhoneIcon from '@mui/icons-material/Phone';
import { usePageContext } from '@dopos/contexts/PageContext';
import { useTranslation } from 'react-i18next';

const MenuValues: string[] = [
	'home',
	'sluzby',
	'o-nas',
	'portfolio',
	'kontakt',
];

const MobileMenu: React.FC = () => {
	const { currentPage, setCurrentPage } = usePageContext();
	const { t } = useTranslation();

	return (
		<Box className={`desktop:hidden laptop:hidden pb-14`}>
			<Paper
				sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
				elevation={3}
			>
				<BottomNavigation
					showLabels
					value={MenuValues.indexOf(currentPage)}
					onChange={(event, newValue) => {
						setCurrentPage(MenuValues[newValue]);
					}}
					style={{
						fontFamily: 'inherit !important',
					}}
				>
					<BottomNavigationAction
						label={t('menu.home')}
						icon={<HomeIcon />}
						href="#"
						aria-label={t('menu.home')}
						aria-current={currentPage === 'home' ? 'page' : undefined}
						sx={{
							span: {
								fontFamily: 'inherit !important',
							},
							'&.Mui-selected': {
								color: '#009ee0 !important',
							},
						}}
					/>
					<BottomNavigationAction
						label={t('menu.mobile-services')}
						icon={<HomeRepairServiceIcon />}
						href="#sluzby"
						aria-label={t('menu.services')}
						aria-current={currentPage === 'sluzby' ? 'page' : undefined}
						sx={{
							span: {
								fontFamily: 'inherit !important',
							},
							'&.Mui-selected': {
								color: '#009ee0 !important',
							},
						}}
					/>
					<BottomNavigationAction
						label={t('menu.about')}
						icon={<InfoIcon />}
						href="#o-nas"
						aria-label={t('menu.about')}
						aria-current={currentPage === 'o-nas' ? 'page' : undefined}
						sx={{
							span: {
								fontFamily: 'inherit !important',
							},
							'&.Mui-selected': {
								color: '#009ee0 !important',
							},
						}}
					/>
					<BottomNavigationAction
						label={t('menu.portfolio')}
						icon={<CoPresentIcon />}
						href="#portfolio"
						aria-label={t('menu.portfolio')}
						aria-current={currentPage === 'portfolio' ? 'page' : undefined}
						sx={{
							span: {
								fontFamily: 'inherit !important',
							},
							'&.Mui-selected': {
								color: '#009ee0 !important',
							},
						}}
					/>
					<BottomNavigationAction
						label={t('menu.contact')}
						icon={<PhoneIcon />}
						href="#kontakt"
						aria-label={t('menu.contact')}
						aria-current={currentPage === 'kontakt' ? 'page' : undefined}
						sx={{
							span: {
								fontFamily: 'inherit !important',
							},
							'&.Mui-selected': {
								color: '#009ee0 !important',
							},
						}}
					/>
				</BottomNavigation>
			</Paper>
		</Box>
	);
};

export default MobileMenu;
