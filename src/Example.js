import React from 'react';
import { IconSettings, BuilderHeader, BuilderHeaderNav, BuilderHeaderNavDropdown, BuilderHeaderNavLink } from "@salesforce/design-system-react"



const Example = (props) => (
	<IconSettings iconPath="/assets/icons">
		<BuilderHeader
			assistiveText={{
				icon: 'Builder',
				backIcon: 'Back',
				helpIcon: 'Help',
			}}
			events={{
				onClickBack: () => console.log('onClickBack'),
				onClickHelp: () => console.log('onClickHelp'),
			}}
			labels={{
				back: 'Back',
				help: 'Help',
				pageType: 'Page Type',
				title: 'App Name',
			}}
			style={{ position: 'relative' }}
		>
			<BuilderHeaderNav>
				<BuilderHeaderNavLink
					assistiveText={{ label: 'Link' }}
					iconCategory="utility"
					iconName="settings"
					label="Link"
					onClick={() => console.log('link/onClick')}
				/>
				<BuilderHeaderNavDropdown
					assistiveText={{ icon: 'Dropdown' }}
					iconCategory="utility"
					iconName="page"
					id="dropdown"
					label="Dropdown"
					options={[
						{ label: 'Menu Item One', value: 'A0' },
						{ label: 'Menu Item Two', value: 'B0' },
					]}
					onSelect={() => console.log('dropdown/onSelect')}
				/>
			</BuilderHeaderNav>
		</BuilderHeader>
	</IconSettings>
);
Example.displayName = 'BuilderHeaderBase';
export default Example;