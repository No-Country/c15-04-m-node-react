const Sustainableworld = () => {
	return (
		<div className="flex flex-wrap mt-8 justify-center items-center">
			<div className="md:w-1/2 order-1 py-4">
				<img
					src="src/assets/img/hands.jpg"
					className="object-cover rounded-xl overflow-hidden"
					alt="colorfull graphics"
					width={"500px"}
				/>
			</div>
			<div className="md:w-1/2">
				<h3 className="font-bold text-2xl md:text-start md:px-10 py-2">Por un mundo más sustentable</h3>
				<p className="text-md text-left font-semibold  md:px-10">
					Nuestra webapp te permite registrar y visualizar tu huella de carbono de forma sencilla. Descubre cuánto CO2
					generas con tus actividades diarias y obtén consejos para reducirla. Contribuye a un futuro más sostenible con
					acciones simples. ¡Comienza a hacer la diferencia hoy!
				</p>
			</div>
		</div>
	);
};
export default Sustainableworld;
