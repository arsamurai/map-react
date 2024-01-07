import React from 'react';
import { TextAreaProps } from './types';
import cn from "classnames";
import s from './TextArea.module.scss';

const TextArea: React.FC<TextAreaProps> = ({name, error, className, ...props}) => {
  return <div className={cn(s.textarea__wrapper, { [s.error]: error }, className)}>
	<textarea
		className={s.textarea}
		name={name}
		rows={8}
		{...props}
	/>
</div>;
}

export default TextArea;