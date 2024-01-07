export interface IAdvertisement {
	id: number;
	img: string;
	title: string;
	description: string;
	position: { lat: number, lng: number };
}

export interface AdvertisementProps {
	advertisement: IAdvertisement;
	onSetActiveAdvertisement: (marker: number | null) => void;
}