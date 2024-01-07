import { useLoadScript } from '@react-google-maps/api';
import React from 'react';
import Map from '../Map/Map';
import { Modal } from '../../ui/Modals';
import { MapModalProps } from './types';
import { Button } from '../../ui/Buttons';
import s from './MapModal.module.scss';
import { Modes } from '../../../constants';

const MapModal: React.FC<MapModalProps> = ({open, onClose, marker, setMarker}) => {
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: process.env.REACT_APP_MAP_KEY ?? '',
	});

	return <Modal title='Оберіть мітку' open={open} onClose={onClose}>
		{isLoaded ? <div className={s.map}>
			<Map markers={marker && [marker]} mode={Modes.SET_MARKER} fixedHeight onSetMarker={setMarker} activeAdvertisement={null} onSetActiveAdvertisement={() => undefined} />
		</div> : null}
		{marker && <Button onClick={onClose} centered>Готово</Button>}
	</Modal>;
};

export default MapModal;
