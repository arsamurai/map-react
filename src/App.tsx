import { useLoadScript } from '@react-google-maps/api';
import { useState } from 'react';
import { Map } from './components/modules/Map';
import { useGetAdvertisementsQuery } from './store/api';
import { Button } from './components/ui/Buttons';
import { AddAdvertismentModal } from './components/modules/AddAdvertisementModal';
import { Modes } from './constants';
import { AdvertismentsSlider } from './components/modules/AdvertismentsSlider';
import cn from 'classnames';
import { Loading } from './components/ui/Loading';

const App: React.FC = () => {
	const { data, isLoading: isLoadingOnData } = useGetAdvertisementsQuery();
	const reversedData = data && [...data].reverse();
	const [openAddModal, setOpenAddModal] = useState(false);
	const [activeAdvertisement, onSetActiveAdvertisement] = useState<number | null>(null);

	const { isLoaded: isLoadedOnMap } = useLoadScript({
		googleMapsApiKey: process.env.REACT_APP_MAP_KEY ?? '',
	});

	const handleOpenAddModal = () => {
		setOpenAddModal(true);
	};

	const handleCloseAddModal = () => {
		setOpenAddModal(false);
	};

	const handleSetActiveMarker = (marker: number | null) => {
		onSetActiveAdvertisement(marker);
	};

	return (
		<div className="app">
			<div className="container">
				<div className="app__header">
					<h1 className='app__title'>Advertisement Map | Test</h1>
					<Button onClick={handleOpenAddModal}>Додати оголошення</Button>
				</div>
				{!isLoadingOnData ? <div className="app__content">
					<div className={cn('map__wrapper', {'w-80': !!reversedData?.length})}>
						{isLoadedOnMap && reversedData ? (
							<Map markers={reversedData} mode={Modes.DEFAULT} onSetMarker={() => undefined} activeAdvertisement={activeAdvertisement} onSetActiveAdvertisement={handleSetActiveMarker} />
						) : null}
					</div>
					{!!reversedData?.length && <div className="advertisments__wrapper">
						<AdvertismentsSlider advertisements={reversedData} activeAdvertisement={activeAdvertisement} onSetActiveAdvertisement={handleSetActiveMarker} />
					</div>}
				</div> : <Loading />}
				<AddAdvertismentModal
					open={openAddModal}
					onClose={handleCloseAddModal}
				/>
			</div>
		</div>
	);
};

export default App;
