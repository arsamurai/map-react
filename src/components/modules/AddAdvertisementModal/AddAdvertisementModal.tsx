import React from 'react';
import { Modal } from '../../ui/Modals';
import { AddAdvertismentForm } from '../AddAdvertisementForm';
import { AddAdvertismentModalProps } from './types';

const AddAdvertismentModal: React.FC<AddAdvertismentModalProps> = ({open, onClose}) => {
	return <Modal title='Створити оголошення' open={open} onClose={onClose}>
		<AddAdvertismentForm onClose={onClose} />
	</Modal>;
};

export default AddAdvertismentModal;
