import React from 'react';

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	type?: 'button' | 'submit';
	children: React.ReactNode;
	centered?: boolean;
}
