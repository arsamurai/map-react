import React from 'react';
import cn from 'classnames';
import s from './Loading.module.scss';
import { LoadingProps } from './types';

const Loading: React.FC<LoadingProps> = ({absolute}) => {
  return <div className={cn(s.loading, {[s.absolute]: absolute})}>
			<div className={s.roller}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
	</div>;
}

export default Loading;
