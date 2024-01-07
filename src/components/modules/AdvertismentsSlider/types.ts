import { IAdvertisement } from "../Advertisement/types";

export interface AdvertismentsSliderProps {
	advertisements: IAdvertisement[];
	activeAdvertisement: number | null;
	onSetActiveAdvertisement: (marker: number | null) => void;
}