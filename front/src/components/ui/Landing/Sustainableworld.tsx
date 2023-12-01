const Sustainableworld = () => {
	return (
		<div className="px-6 py-2 md:w-3/4 ">
			<div className="flex justify-center bg-white shadow-lg rounded-lg p-4 x border border-gray-200 text-center w-full">
				<div className="md:flex">
					<img src="./src/assets/img/colorfulgraphics.svg" className="py-4" alt="colorfull graphics" width={"500px"} />
					<div className="justify-between w-25">
						<h3 className="font-bold text-2xl dark:text-black md:text-start md:px-10">Por un mundo mas sustentable</h3>
						<p className="text-md text-left font-semibold p-6 md:px-10 dark:text-black">
							Desarrollamos una webapp donde podrás llevar un registro de tu emisión de carbono y asi poder conocer tu
							huella, cada actividad que realizas en tu dia a dia afecta a nuestro planeta, algunas mas y otras menos.
							Para conocer cuales son las actividades que mas afectan y cuales menos te invitamos a que utilices nuestra
							calculadora de huella de carbono, en la cual vos podrás registrar tus actividades y te dirá cuanto CO2 han
							generado. Luego desde el panel de control podrás ver todo el registro de tu huella y asi poder ver
							gráficamente cuales son las actividades que mas CO2 generan y como puedes reducirlo. También vas a
							encontrar distintas actividades para poder ayudar y aportar para que todos tengamos un planeta mas
							sustentable. ¡Y recuerda, por cada árbol reduces entre 10kg y 30 Kg de CO2 al año!
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Sustainableworld;
