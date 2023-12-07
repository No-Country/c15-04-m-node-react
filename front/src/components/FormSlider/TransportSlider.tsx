import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css";
import { Pagination } from "swiper/modules";
import ButtonQuestions from "./ButtonQuestions";
import InputQuestions from "./InputQuestions";

const TransportSlider = () => {
	const pagination = {
		clickable: true,
		renderBullet: function (index: number, className: string) {
			return '<span class="' + className + '">' + (index + 1) + "</span>";
		},
	};
	const options1 = [
		{ label: "Si", value: "true" },
		{ label: "No", value: "false" },
	];
	const options2 = [
		{ label: "ida", value: "false" },
		{ label: "ida y vuelta", value: "true" },
	];

	const handleInputSubmit = (value: number) => {
		console.log("Respuesta enviada:", value);
	};

	return (
		<div className=" bg-white-500 h-screen flex items-center justify-center">
			<Swiper pagination={pagination} modules={[Pagination]} className="w-3/4 h-3/5 flex rounded-lg">
				<SwiperSlide className=" bg-white h-20">
					<h3 className="text-center m-4 text-black text-2xl">
						¿Utiliza el transporte público? <hr />
					</h3>
					<ButtonQuestions options={options1} onClick={(option) => console.log(option)} />
				</SwiperSlide>

				<SwiperSlide className=" bg-white h-20">
					<h3 className="text-center m-4 text-black text-2xl">
						¿Cuántas veces utiliza el transporte público?
						<hr />
					</h3>
					<InputQuestions onSubmit={handleInputSubmit} />
				</SwiperSlide>
				<SwiperSlide className=" bg-white h-20">
					<h3 className="text-center m-4 text-black text-2xl">
						¿Cuántos kilómetros ha recorrido usando el bus? <hr />{" "}
						<small className="text-lg">
							Si no conoce la cifra exacta, puede ingresar una estimación que usted crea sea el valor más aproximado.
						</small>
					</h3>
					<InputQuestions onSubmit={handleInputSubmit} />
				</SwiperSlide>
				<SwiperSlide className=" bg-white h-20">
					<h3 className="text-center m-4 text-black text-2xl">
						¿Cuántos kilómetros ha recorrido usando taxi o auto? <hr />{" "}
						<small className="text-lg">
							Si no conoce la cifra exacta, puede ingresar una estimación que usted crea sea el valor más aproximado.
						</small>
					</h3>
					<InputQuestions onSubmit={handleInputSubmit} />
				</SwiperSlide>
				<SwiperSlide className=" bg-white h-20">
					<h3 className="text-center m-4 text-black text-2xl">
						¿Cuántos kilómetros ha recorrido usando el metro? <hr />{" "}
						<small className="text-lg">
							Si no conoce la cifra exacta, puede ingresar una estimación que usted crea sea el valor más aproximado.
						</small>
					</h3>
					<InputQuestions onSubmit={handleInputSubmit} />
				</SwiperSlide>
				<SwiperSlide className=" bg-white h-20">
					<h3 className="text-center m-4 text-black text-2xl">
						¿Cuántos kilómetros ha recorrido usando taxi o auto? <hr />{" "}
						<small className="text-lg">
							Si no conoce la cifra exacta, puede ingresar una estimación que usted crea sea el valor más aproximado.
						</small>
					</h3>
					<InputQuestions onSubmit={handleInputSubmit} />
				</SwiperSlide>
				<SwiperSlide className=" bg-white h-20">
					<h3 className="text-center m-4 text-black text-2xl">
						¿Ha realizado algún viaje en avión hacia otro estado, país o continente?
						<hr />
					</h3>
					<ButtonQuestions options={options1} onClick={(option) => console.log(option)} />
				</SwiperSlide>

				<SwiperSlide className=" bg-white h-20">
					<h3 className="text-center m-4 text-black text-2xl">
						¿Qué cantidad de asientos ocupó?
						<hr /> <small className="text-lg">Si viajó en compañía, ingrese la cantidad ocupada.</small>
					</h3>
					<InputQuestions onSubmit={handleInputSubmit} />
				</SwiperSlide>
				<SwiperSlide className=" bg-white h-20">
					<h3 className="text-center m-4 text-black text-2xl">
						¿De cuantos kilómetros fue el viaje?
						<hr />
					</h3>
					<small className="text-lg">
						Si no conoce la cifra exacta, puede ingresar una estimación que usted crea sea el valor más aproximado.
					</small>
					<InputQuestions onSubmit={handleInputSubmit} />
				</SwiperSlide>
				<SwiperSlide className=" bg-white h-20">
					<h3 className="text-center m-4 text-black text-2xl">
						¿Su viaje consistió en ida y vuelta o solo ida?
						<hr />
					</h3>
					<ButtonQuestions options={options2} onClick={(option) => console.log(option)} />
				</SwiperSlide>
			</Swiper>
		</div>
	);
};
export default TransportSlider;
