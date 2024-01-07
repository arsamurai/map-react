import React, { useLayoutEffect, useRef } from 'react';
import cn from "classnames";
import { DefaultInputProps } from "./types";
import s from "./Input.module.scss"

const Input: React.FC<DefaultInputProps> = ({
  className,
  name,
  error,
  type = 'text',
  forceFocus,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
	useLayoutEffect(() => {
		setTimeout(() => {
			forceFocus && inputRef?.current?.focus();
		}, 20)
	}, [forceFocus])

  return (
    <div className={cn(s.input__wrapper, { [s.error]: error }, className)}>
      <input
        ref={inputRef}
        className={s.input}
        name={name}
        type={type}
        {...props}
      />
    </div>
  );
};
export default Input;
