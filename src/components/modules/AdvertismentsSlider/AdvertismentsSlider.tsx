import React from 'react';

// Import Swiper settings
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import s from './AdvertismentsSlider.module.scss';

import { AdvertismentsSliderProps } from './types';
import { Advertisement } from '../Advertisement';

const AdvertismentsSlider: React.FC<AdvertismentsSliderProps> = ({
	advertisements,
	activeAdvertisement,
	onSetActiveAdvertisement,
}) => {
	return (
		<div className={s.slider}>
			<Swiper
				slidesPerView={3.25}
				direction="vertical"
			>
				{advertisements.map((item) => {
					return activeAdvertisement ? (
						activeAdvertisement === item.id ? (
							<SwiperSlide key={item.id} className={s.swiperSlide}>
								<Advertisement
									advertisement={item}
									onSetActiveAdvertisement={onSetActiveAdvertisement}
								/>
							</SwiperSlide>
						) : null
					) : (
						<SwiperSlide key={item.id} className={s.swiperSlide}>
							<Advertisement
								advertisement={item}
								onSetActiveAdvertisement={onSetActiveAdvertisement}
							/>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
};

export default AdvertismentsSlider;
