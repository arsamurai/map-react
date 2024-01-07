import React from 'react';
import { GoogleMap, InfoWindowF, MarkerF } from '@react-google-maps/api';
import { MapProps } from './types';
import { Modes } from '../../../constants';

const Map: React.FC<MapProps> = ({
	markers,
	mode,
	fixedHeight,
	onSetMarker,
	activeAdvertisement,
	onSetActiveAdvertisement,
}) => {
	const handleActiveAdvertisement = (marker: number | null) => {
		if (marker === activeAdvertisement) {
			return;
		}
		onSetActiveAdvertisement(marker);
	};

	const handleGoogleMapClick = (coordinates: google.maps.MapMouseEvent) => {
		if (mode === Modes.SET_MARKER) {
			onSetActiveAdvertisement(null);
			const lat = coordinates.latLng?.lat();
			const lng = coordinates.latLng?.lng();
			lat && lng && onSetMarker({ lat, lng });
		}
	};

	return (
		<GoogleMap
			center={{ lat: 48.3794, lng: 31.1656 }}
			zoom={6}
			onClick={handleGoogleMapClick}
			mapContainerStyle={{
				width: '100%',
				height: fixedHeight ? '400px' : '75vh',
				maxHeight: '800px',
			}}
		>
			{markers?.map(({ id, title, position }) => (
				<MarkerF
					key={id}
					position={position}
					onClick={() => handleActiveAdvertisement(id)}
				>
					{activeAdvertisement === id ? (
						<InfoWindowF onCloseClick={() => onSetActiveAdvertisement(null)}>
							<div>
								<p>{title}</p>
							</div>
						</InfoWindowF>
					) : null}
				</MarkerF>
			))}
		</GoogleMap>
	);
};

export default Map;
