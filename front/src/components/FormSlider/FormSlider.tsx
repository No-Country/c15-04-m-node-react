


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import ButtonQuestions from './ButtonQuestions';
import InputQuestions from './InputQuestions';


const FormSlider = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index: number, className: string) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        }


    }
    const options1 = [
        { label: 'Opción 1', value: 1 },
        { label: 'Opción 2', value: 2 },
        { label: 'Opción 2', value: 2 },
        { label: 'Opción 2', value: 2 },

    ];

    const handleInputSubmit = (value) => {
        console.log('Respuesta enviada:', value);
        
      };

    return (


        <div className=" bg-white-500 h-screen flex items-center justify-center">


            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className='w-3/4 h-3/5 flex rounded-lg'
            >


                <SwiperSlide className=" bg-white h-20">

                    <h3 className="text-center m-4 text-black text-2xl">
                        ¿Cuantas personas viven en tu casa?
                    </h3>
                    <ButtonQuestions options={options1} onClick={(option) => console.log(option)} />
                </SwiperSlide>

                <SwiperSlide className=" bg-white h-20">
                    <h3 className="text-center m-4 text-black text-2xl">
                        ¿Cual es el consumo de electricidad que aparece en tu factura?
                    </h3>
                    <InputQuestions onSubmit={handleInputSubmit} />
                </SwiperSlide>
                <SwiperSlide className=" bg-white h-20">Slide 3</SwiperSlide>
                <SwiperSlide className=" bg-white h-20">Slide 4</SwiperSlide>
                <SwiperSlide className=" bg-white h-20">Slide 5</SwiperSlide>
                <SwiperSlide className=" bg-white h-20">Slide 6</SwiperSlide>
                



            </Swiper>
        </div>

    );
};
export default FormSlider;