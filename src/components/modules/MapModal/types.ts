import { IAdvertisement } from "../Advertisement/types";

export interface MapModalProps {
	open: boolean;
	onClose: () => void;
	marker?: IAdvertisement;
	setMarker: (coordinates: {lat: number, lng: number}) => void;
}