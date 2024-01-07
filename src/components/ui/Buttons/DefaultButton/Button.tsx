import React from "react";
import cn from "classnames";
import s from './Button.module.scss';
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({className, children, centered, type='button', ...props}) => {
  return (
    <button
      className={cn(s.button, className, {[s.centered]: centered})}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
