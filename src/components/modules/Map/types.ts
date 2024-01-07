import { Modes } from "../../../constants";
import { IAdvertisement } from "../Advertisement/types";

export interface MapProps {
	mode: Modes.DEFAULT | Modes.SET_MARKER;
	markers?: IAdvertisement[];
	onSetMarker: (coordinates: {lat: number, lng: number}) => void;
	fixedHeight?: boolean;
	activeAdvertisement: number | null;
	onSetActiveAdvertisement: (marker: number | null) => void;
}