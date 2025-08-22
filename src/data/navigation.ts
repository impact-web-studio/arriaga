import client from '~/data/client/client.json';

export type NavigationLink = {
	text: string;
	href?: string;
	target?: string;
	ariaLabel?: string;
	icon?: string;
	scrollTo?: string; // For smooth scrolling to sections
	links?: NavigationLink[]; // For dropdown menus
};

export type ContactInfo = {
	type: 'phone' | 'email' | 'address';
	value: string;
	href?: string;
	icon?: string;
};

export type NavigationAction = {
	text: string;
	href?: string;
	target?: string;
	variant?: 'primary' | 'secondary' | 'tertiary' | 'link';
	scrollTo?: string;
	ariaLabel?: string;
};

export const navigationData = {
	// Contact information for top bar
	contactInfo: [
		{
			type: 'phone' as const,
			value: client.phoneDisplay ? client.phoneDisplay : '+1 (316) 330-4092',
			href: client.phone ? `tel:${client.phone}` : 'tel:+13163304092',
			icon: 'lucide:phone',
		},
		{
			type: 'email' as const,
			value: client.email ? client.email : 'portfolio@worksiteleads.com',
			href: client.email
				? `mailto:${client.email}`
				: 'mailto:portfolio@worksiteleads.com',
			icon: 'lucide:mail',
		},
	] as ContactInfo[],

	// Main navigation links
	mainNavigation: [
		{
			text: 'Home',
			scrollTo: 'home',
			ariaLabel: 'Go to home section',
		},
		{
			text: 'About',
			scrollTo: 'about',
			ariaLabel: 'Learn about our company',
		},
		{
			text: 'Services',
			scrollTo: 'services',
			ariaLabel: 'View our services',
			links: [
				{
					text: 'Kitchen Remodeling',
					scrollTo: 'services',
					ariaLabel: 'Kitchen renovation services',
				},
				{
					text: 'Bathroom Renovation',
					scrollTo: 'services',
					ariaLabel: 'Bathroom renovation services',
				},
				{
					text: 'Home Additions',
					scrollTo: 'services',
					ariaLabel: 'Home addition services',
				},
				{
					text: 'Flooring',
					scrollTo: 'services',
					ariaLabel: 'Flooring installation services',
				},
			],
		},
		{
			text: 'Projects',
			scrollTo: 'projects',
			ariaLabel: 'View our portfolio',
		},
		{
			text: 'Reviews',
			scrollTo: 'testimonials',
			ariaLabel: 'Read customer testimonials',
		},
	] as NavigationLink[],

	// CTA actions
	actions: [
		{
			text: 'Get Free Estimate',
			scrollTo: 'contact',
			variant: 'primary' as const,
			ariaLabel: 'Get a free project estimate',
		},
	] as NavigationAction[],

	// Brand/Logo configuration
	brand: {
		name: client.logoConfig.defaultColor
			? client.logoConfig.defaultColor
			: 'Premier',
		accent: client.logoConfig.altColor
			? client.logoConfig.altColor
			: 'Renovations',
		href: '/',
		ariaLabel: 'Premier Renovations - Home',
	},
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
					value: client.phoneDisplay,
					href: `tel:${client.phone}`,
				},
				{
					type: 'email',
					value: client.email,
					href: `mailto:${client.email}`,
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
	footNote: `© 2025 ${client.companyName}. All rights reserved.`,
};
