import React, { useState } from 'react';

const Projects = () => {
	const [activeFilter, setActiveFilter] = useState('all');

	const filters = [
		{ id: 'all', label: 'All Projects' },
		{ id: 'kitchen', label: 'Kitchens' },
		{ id: 'bathroom', label: 'Bathrooms' },
		{ id: 'basement', label: 'Basements' },
		{ id: 'whole-home', label: 'Whole Home' },
	];

	const projects = [
		{
			id: 1,
			title: 'Modern Kitchen Transformation',
			location: 'Westfield, NJ',
			category: 'kitchen',
			image:
				'https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
			description:
				'Complete kitchen renovation with custom cabinets and quartz countertops',
		},
		{
			id: 2,
			title: 'Luxury Master Bathroom',
			location: 'Summit, NJ',
			category: 'bathroom',
			image:
				'https://images.pexels.com/photos/342800/pexels-photo-342800.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
			description:
				'Spa-inspired bathroom with walk-in shower and double vanity',
		},
		{
			id: 3,
			title: 'Entertainment Basement',
			location: 'Millburn, NJ',
			category: 'basement',
			image:
				'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
			description: 'Finished basement with home theater and wet bar',
		},
		{
			id: 4,
			title: 'Colonial Home Renovation',
			location: 'Chatham, NJ',
			category: 'whole-home',
			image:
				'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
			description:
				'Complete home renovation with open floor plan and modern amenities',
		},
		{
			id: 5,
			title: 'Contemporary Kitchen Design',
			location: 'Berkeley Heights, NJ',
			category: 'kitchen',
			image:
				'https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
			description: 'Sleek contemporary kitchen with waterfall island',
		},
		{
			id: 6,
			title: 'Guest Bathroom Makeover',
			location: 'New Providence, NJ',
			category: 'bathroom',
			image:
				'https://images.pexels.com/photos/3935350/pexels-photo-3935350.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
			description:
				'Small bathroom transformed with modern fixtures and smart storage',
		},
	];

	const filteredProjects =
		activeFilter === 'all'
			? projects
			: projects.filter((project) => project.category === activeFilter);

	return (
		<section
			id="projects"
			className="py-20 bg-white"
		>
			<div className="container mx-auto px-4">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="font-heading text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
							Featured Projects
						</h2>
						<p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
							Explore our portfolio of beautiful renovations and see how we've
							helped homeowners transform their spaces throughout the region.
						</p>
					</div>

					{/* Filter buttons */}
					<div className="flex flex-wrap items-center justify-center gap-4 mb-12">
						<div className="flex items-center space-x-2 text-secondary-600 mb-4 md:mb-0">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width={24}
								height={24}
								viewBox="0 0 24 24"
							>
								<path
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M22 3H2l8 9.46V19l4 2v-8.54z"
								></path>
							</svg>
							<span className="font-medium">Filter by:</span>
						</div>
						{filters.map((filter) => (
							<button
								key={filter.id}
								onClick={() => setActiveFilter(filter.id)}
								className={`project-filter-btn px-6 py-2 rounded-lg font-medium transition-all ${
									activeFilter === filter.id
										? 'active'
										: 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
								}`}
							>
								{filter.label}
							</button>
						))}
					</div>

					{/* Projects grid */}
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{filteredProjects.map((project) => (
							<div
								key={project.id}
								className="group cursor-pointer"
							>
								<div className="relative overflow-hidden rounded-2xl shadow-lg">
									<img
										src={project.image}
										alt={project.title}
										className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
										<div className="absolute bottom-6 left-6 right-6 text-white">
											<h3 className="font-heading text-xl font-bold mb-2">
												{project.title}
											</h3>
											<p className="text-sm opacity-90 mb-2">
												{project.description}
											</p>
											<p className="text-sm text-accent-400 font-medium">
												{project.location}
											</p>
										</div>
									</div>
								</div>

								<div className="mt-4">
									<h3 className="font-heading text-xl font-bold text-secondary-900 mb-2">
										{project.title}
									</h3>
									<p className="text-secondary-600 text-sm mb-1">
										{project.description}
									</p>
									<p className="text-primary-600 text-sm font-medium">
										{project.location}
									</p>
								</div>
							</div>
						))}
					</div>

					{/* <div className="text-center mt-12">
						<p className="text-secondary-600 mb-6">
							Want to see more of our work? View our complete portfolio or
							schedule a consultation.
						</p>
						<button className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors shadow-lg">
							View Complete Portfolio
						</button>
					</div> */}
				</div>
			</div>
		</section>
	);
};

export default Projects;
