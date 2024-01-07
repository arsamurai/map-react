import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import s from './AddAdvertisementForm.module.scss';
import { Input, TextArea } from '../../ui/Inputs';
import { Button } from '../../ui/Buttons';
import { IAdvertisement } from '../Advertisement/types';
import { MapModal } from '../MapModal';
import { useAddAdvertisementMutation } from '../../../store/api';
import { AddAdvertisementFormProps } from './types';
import { Loading } from '../../ui/Loading';

const AddAdvertismentForm: React.FC<AddAdvertisementFormProps> = ({onClose}) => {
	const [addAdvertisement, { isLoading }] = useAddAdvertisementMutation();
	const [openMapModal, setOpenMapModal] = useState(false);
	const [advertisement, setAdvertisement] = useState<IAdvertisement>({
		id: Math.random(),
		img: '',
		title: '',
		description: '',
		position: { lat: 0, lng: 0 },
	});
	const [address, setAddress] = useState('');
	const isReady = advertisement.img && advertisement.title && advertisement.description && advertisement.position.lat && advertisement.position.lng;

	const handleChangeImg = (e: ChangeEvent<HTMLInputElement>) => {
		setAdvertisement({...advertisement, img: e.target.value});
	};

	const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
		setAdvertisement({...advertisement, title: e.target.value});
	};

	const handleChangeDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setAdvertisement({...advertisement, description: e.target.value});
	};

	const onSetMarker = (coordinates: { lat: number; lng: number }) => {
		setAdvertisement({...advertisement, position: { lat: coordinates.lat, lng: coordinates.lng }});
	};

	const handleOpenMapModal = () => {
		setOpenMapModal(true);
	};

	const handleCloseMapModal = () => {
		setOpenMapModal(false);
	};

	const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		addAdvertisement({ title: advertisement.title, description: advertisement.description, img: advertisement.img, position: advertisement.position }).then(() => onClose());
	};

	useEffect(() => {
    const geocoder = new window.google.maps.Geocoder();

    advertisement.position.lat && geocoder.geocode({ location: advertisement.position }, (results, status) => {
      if (status === 'OK') {
        if (results?.[0]) {
					const components = results[0].address_components;
          const addressArray = components.map(component => component.long_name);
          const formattedAddress = addressArray.join(', ');
					setAddress(formattedAddress)
        }
      } else {
        console.error('Помилка геокодування:', status);
      }
    });
  }, [advertisement.position]);

	return (
		<form className={s.form} onSubmit={handleFormSubmit}>
			<div className={s.field}>
			<Input
					name="img"
					value={advertisement.img}
					onChange={handleChangeImg}
					placeholder="Посилання на картинку"
				/>
			</div>
			<div className={s.field}>
				<Input
					name="title"
					value={advertisement.title}
					onChange={handleChangeTitle}
					placeholder="Назва"
				/>
			</div>
			<div className={s.field}>
				<TextArea
					name="description"
					value={advertisement.description}
					onChange={handleChangeDescription}
					placeholder="Опис"
				/>
			</div>
			{address && <div className={s.field}>
				Позиція: {address}
			</div>}
			<div className={s.buttons}>
				<Button onClick={handleOpenMapModal}>Обрати мітку</Button>
				<Button type="submit" disabled={!isReady}>Створити</Button>
			</div>
			{isLoading && <Loading absolute />}
			<MapModal
				open={openMapModal}
				onClose={handleCloseMapModal}
				marker={advertisement}
				setMarker={onSetMarker}
			/>
		</form>
	);
};

export default AddAdvertismentForm;
