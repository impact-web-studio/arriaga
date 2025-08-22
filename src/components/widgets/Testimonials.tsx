import React, { useState, useEffect } from 'react';

const Testimonials = () => {
	const [currentTestimonial, setCurrentTestimonial] = useState(0);

	const testimonials = [
		{
			name: 'Sarah & Michael Johnson',
			location: 'Westfield, NJ',
			rating: 5,
			text: "Premier Renovations transformed our dated kitchen into a modern masterpiece. The team was professional, punctual, and the quality exceeded our expectations. We couldn't be happier with the results!",
			project: 'Kitchen Renovation',
			image:
				'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
		},
		{
			name: 'Robert Chen',
			location: 'Summit, NJ',
			rating: 5,
			text: 'From start to finish, the basement renovation was handled with incredible attention to detail. The project was completed on time and within budget. I would recommend them to anyone without hesitation.',
			project: 'Basement Finishing',
			image:
				'https://images.pexels.com/photos/3768912/pexels-photo-3768912.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
		},
		{
			name: 'Emily Rodriguez',
			location: 'Millburn, NJ',
			rating: 5,
			text: 'The master bathroom renovation was absolutely stunning. The team listened to our vision and brought it to life beautifully. The craftsmanship is outstanding and the materials are top quality.',
			project: 'Bathroom Remodel',
			image:
				'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
		},
		{
			name: 'David & Lisa Thompson',
			location: 'Chatham, NJ',
			rating: 5,
			text: 'Our whole home renovation was a massive undertaking, but Premier Renovations made it seamless. Their communication was excellent and the final result is our dream home. Worth every penny!',
			project: 'Whole Home Renovation',
			image:
				'https://images.pexels.com/photos/3808843/pexels-photo-3808843.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
		},
	];

	const nextTestimonial = () => {
		setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
	};

	const prevTestimonial = () => {
		setCurrentTestimonial(
			(prev) => (prev - 1 + testimonials.length) % testimonials.length
		);
	};

	useEffect(() => {
		const timer = setInterval(nextTestimonial, 5000);
		return () => clearInterval(timer);
	}, []);

	return (
		<section
			id="testimonials"
			className="py-20 testimonial-gradient bg-secondary-50"
		>
			<div className="container mx-auto px-4">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="font-heading text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
							What Our Clients Say
						</h2>
						<p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
							Don't just take our word for it. Here's what our satisfied
							customers have to say about their renovation experience.
						</p>
					</div>

					<div className="relative max-w-4xl mx-auto">
						<div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width={24}
								height={24}
								viewBox="0 0 24 24"
								className="justify-self-end"
							>
								<path
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
									className="h-12 w-12 text-primary-200 mb-6"
								></path>
							</svg>

							<div className="flex items-center mb-6 justify-self-center">
								{[...Array(testimonials[currentTestimonial].rating)].map(
									(_, i) => (
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
												d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
												className="h-5 w-5 fill-accent-400 text-accent-400"
											></path>
										</svg>
									)
								)}
							</div>

							<blockquote className="text-xl md:text-2xl text-secondary-700 mb-8 leading-relaxed italic max-w-4/5 justify-self-center">
								"{testimonials[currentTestimonial].text}"
							</blockquote>

							<div className="flex items-center space-x-4">
								<img
									src={testimonials[currentTestimonial].image}
									alt={testimonials[currentTestimonial].name}
									className="w-16 h-16 rounded-full object-cover"
								/>
								<div>
									<div className="font-heading font-bold text-secondary-900 text-lg">
										{testimonials[currentTestimonial].name}
									</div>
									<div className="text-secondary-600">
										{testimonials[currentTestimonial].location}
									</div>
									<div className="text-primary-600 font-medium text-sm">
										{testimonials[currentTestimonial].project}
									</div>
								</div>
							</div>
						</div>

						{/* Navigation buttons */}
						<button
							onClick={prevTestimonial}
							className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-secondary-50 transition-colors"
						>
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
									d="m15 18l-6-6l6-6"
									className="h-6 w-6 text-secondary-700"
								></path>
							</svg>
						</button>

						<button
							onClick={nextTestimonial}
							className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-secondary-50 transition-colors"
						>
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
									d="m9 18l6-6l-6-6"
									className="h-6 w-6 text-secondary-700"
								></path>
							</svg>
						</button>

						{/* Dots indicator */}
						<div className="flex justify-center space-x-2 mt-8">
							{testimonials.map((_, index) => (
								<button
									key={index}
									onClick={() => setCurrentTestimonial(index)}
									className={`w-3 h-3 rounded-full transition-colors ${
										index === currentTestimonial
											? 'bg-primary-600'
											: 'bg-secondary-300'
									}`}
								/>
							))}
						</div>
					</div>

					{/* Trust indicators */}
					<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
						<div className="text-center">
							<div className="font-heading text-3xl font-bold text-secondary-900 mb-2">
								500+
							</div>
							<div className="text-secondary-600">Happy Customers</div>
						</div>
						<div className="text-center">
							<div className="font-heading text-3xl font-bold text-secondary-900 mb-2">
								5.0
							</div>
							<div className="text-secondary-600">Average Rating</div>
						</div>
						<div className="text-center">
							<div className="font-heading text-3xl font-bold text-secondary-900 mb-2">
								98%
							</div>
							<div className="text-secondary-600">Referral Rate</div>
						</div>
						<div className="text-center">
							<div className="font-heading text-3xl font-bold text-secondary-900 mb-2">
								A+
							</div>
							<div className="text-secondary-600">BBB Rating</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
