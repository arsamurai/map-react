import React, { useEffect, useMemo } from 'react';
import { ModalProps } from './types';
import { createPortal } from 'react-dom';
import s from './Modal.module.scss';

const modalElement = document.querySelector('#modal');

const Modal: React.FC<React.PropsWithChildren<ModalProps>> = ({
	title,
	open,
	onClose,
	children,
}) => {
	const element = useMemo(() => document.createElement('div'), []);

	useEffect(() => {
		if (open) {
			modalElement?.appendChild(element);
			return () => {
				modalElement?.removeChild(element);
			};
		}
	});

	const modalBody = open ? (
		<div>
			<div className={s.modal} onClick={onClose}>
				<div className={s.content} onClick={(e) => e.stopPropagation()}>
					<div className={s.header}>
						<h3 className={s.title}>{title}</h3>
						<button className={s.close} onClick={onClose}>
							<span></span>
							<span></span>
						</button>
					</div>
					<div className={s.body}>{children}</div>
				</div>
			</div>
		</div>
	) : null;

	return createPortal(modalBody, element);
};

export default Modal;
