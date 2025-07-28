export const headerData = {
	links: [
		{
			text: 'Home',
			href: '/',
		},
		{
			text: 'About',
			href: '/about',
		},
		{
			text: 'Services',
			href: '/services',
			links: [
				{
					text: 'Kitchen Remodeling',
					href: '/services/kitchen-remodeling',
				},
				{
					text: 'Bathroom Renovation',
					href: '/services/bathroom-renovation',
				},
				{
					text: 'Home Additions',
					href: '/services/home-additions',
				},
				{
					text: 'Flooring Installation',
					href: '/services/flooring',
				},
			],
		},
		{
			text: 'Projects',
			href: '/projects',
		},
		{
			text: 'Reviews',
			href: '/reviews',
		},
	],
	actions: [
		{
			text: 'Get Free Estimate',
			href: '/estimate',
			target: '_blank',
		},
	],
	information: [
		{
			type: 'phone',
			value: '+1 (316) 330-4092',
			href: 'tel:+13163304092',
		},
		{
			type: 'email',
			value: 'portfolio@worksiteleads.com',
		},
	],
};

export const footerData = {
	description:
		'Transforming homes throughout the Greater Metropolitan area for over 25 years. Licensed, insured, and committed to excellence in every project.',
	links: [
		{
			title: 'Services',
			links: [
				{
					text: 'Kitchen Renovation',
					href: '/services/kitchen',
				},
				{
					text: 'Bathroom Remodel',
					href: '/services/bathroom',
				},
				{
					text: 'Basement Finishing',
					href: '/services/basement',
				},
				{
					text: 'Full Home Remodels',
					href: '/services/full-home',
				},
				{
					text: 'Emergency Services',
					href: '/services/emergency',
				},
			],
		},
	],
	contact: [
		{
			title: 'Contact',
			links: [
				{
					type: 'phone',
					value: '+1 (316) 330-4092',
					href: 'tel:+13163304092',
				},
				{
					type: 'email',
					value: 'portfolio@worksiteleads.com',
					href: 'mailto:portfolio@worksiteleads.com',
				},
				{
					type: 'location',
					value: 'Greater Metropolitan Area',
					href: '#', // or Google Maps link
				},
			],
		},
	],
	socials: [
		{
			type: 'facebook',
			href: 'https://facebook.com/premierrenovations',
		},
		{
			type: 'instagram',
			href: 'https://instagram.com/premierrenovations',
		},
		{
			type: 'linkedin',
			href: 'https://linkedin.com/company/premierrenovations',
		},
	],
	secondaryLinks: [
		{
			text: 'Privacy Policy',
			href: '/privacy-policy',
		},
		{
			text: 'Terms of Service',
			href: '/terms-of-service',
		},
		{
			text: 'License Info',
			href: '/license',
		},
	],
	footNote: '© 2025 Premier Renovations. All rights reserved.',
};
