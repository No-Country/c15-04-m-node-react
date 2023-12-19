import { team } from "./users";

const TeamSection = () => {
	return (
		<section id="team" className="body-font">
			<div className="container px-5 py-24 mx-auto">
				<div className="flex flex-col text-center w-full mb-20">
					<h2 className="text-xs tracking-widest font-medium title-font mb-1">NUESTRO EQUIPO</h2>
					<h1 className="sm:text-3xl text-2xl font-medium title-font">Conoce a los Profesionales</h1>
				</div>
				<div className="flex flex-wrap -m-4">
					{team.map((user) => (
						<div className="p-2 lg:w-1/3 md:w-1/2 text-center">
							<div className="p-6 rounded-lg max-w-sm">
								<img
									className="rounded-full w-full h-full object-cover object-center mb-6 max-w-[60%] mx-auto aspect-square"
									src={user.img}
									alt={user.name}
								/>
								<h3 className="text-lg font-medium">{user.name}</h3>
								<span className="text-gray-500 mb-3 block">{user.role}</span>
								<p className="text-gray-600 text-sm">{user.description}</p>
								<div className="flex items-center justify-center mt-4">
									{user.social.map((social, index) => (
										<a href={social.url} key={index} className="mx-2" target="_blank" rel="noopener noreferrer">
											<social.icon className="w-5 h-5 text-gray-400" />
										</a>
									))}
								</div>
							</div>
						</div>
					))}

					{/* <!-- Repite los divs anteriores para cada miembro del equipo --> */}
				</div>
			</div>
		</section>
	);
};

export default TeamSection;
