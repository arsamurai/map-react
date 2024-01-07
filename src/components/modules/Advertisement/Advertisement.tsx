import React from 'react';
import s from './Advertisement.module.scss';
import { AdvertisementProps } from './types';

const Advertisement: React.FC<AdvertisementProps> = ({advertisement, onSetActiveAdvertisement}) => {
	const {id, img, title, description} = advertisement;

	return <div className={s.item} onClick={() => onSetActiveAdvertisement(id)}>
		<img src={img} alt="advertisement-img" className={s.img} />
		<div className={s.info}>
			<h5 className={s.title}>{title}</h5>
			<p className={s.description}>{description}</p>
			<p className={s.descriptionFull}>{description}</p>
		</div>
	</div>;
}

export default Advertisement;
