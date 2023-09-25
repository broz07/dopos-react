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

const MenuValues: string[] = [
	'home',
	'sluzby',
	'o-nas',
	'reference',
	'kontakt',
];

const MobileMenu: React.FC = () => {
	const { currentPage, setCurrentPage } = usePageContext();

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
				>
					<BottomNavigationAction label="Domů" icon={<HomeIcon />} href="#" />
					<BottomNavigationAction
						label="Služby"
						icon={<HomeRepairServiceIcon />}
						href="#sluzby"
					/>
					<BottomNavigationAction
						label="O nás"
						icon={<InfoIcon />}
						href="#o-nas"
					/>
					<BottomNavigationAction
						label="Reference"
						icon={<CoPresentIcon />}
						href="#reference"
					/>
					<BottomNavigationAction
						label="Kontakt"
						icon={<PhoneIcon />}
						href="#kontakt"
					/>
				</BottomNavigation>
			</Paper>
		</Box>
	);
};

export default MobileMenu;
