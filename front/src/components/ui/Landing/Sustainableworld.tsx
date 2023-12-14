import Colorfulgraphics from "../../../assets/img/colorfulgraphics.svg";

const Sustainableworld = () => {
	return (
		<div className="px-6 py-2 md:w-3/4 ">
			<div className="flex ">
				<div className="md:flex">
					<img src={Colorfulgraphics} className="py-4" alt="colorfull graphics" width={"500px"} />
					<div className="justify-between w-25">
						<h3 className="font-bold text-2xl md:text-start md:px-10 px-6">Por un mundo más sustentable</h3>
						<p className="text-md text-left font-semibold p-6 md:px-10">
							Hemos desarrollado una webapp donde puedes llevar un registro de tu emisión de carbono para conocer tu
							huella. Cada actividad diaria afecta a nuestro planeta, algunas más que otras. Utiliza nuestra calculadora
							de huella de carbono para descubrir qué actividades tienen un mayor impacto y cuáles menos. Registra tus
							actividades y la calculadora te mostrará cuánto CO2 has generado. Desde el panel de control, podrás
							visualizar gráficamente tu historial de huella de carbono y descubrir las actividades que más CO2 generan,
							así como aprender cómo reducirlo. Además, encontrarás diversas actividades para contribuir a un planeta
							más sostenible. Recuerda, ¡por cada árbol plantado, se reduce entre 10 kg y 30 kg de CO2 al año! ¡Únete a
							nosotros en la construcción de un futuro más sustentable!
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Sustainableworld;
