import { CSSProperties, ReactNode } from 'react';

import './stats-row.scss';

interface Props {
	children: ReactNode;
	caption?: string;
	captionExtra?: ReactNode;
	accent?: string;
	style?: CSSProperties;
	onClick?: () => void;
}

export const StatsRow = (props: Props) => {
	const classes = [ 'stats-row' ];
	if (props.onClick) {
		classes.push('clickable');
	}
	if (props.accent) {
		classes.push('has-accent');
	}
	const style = props.accent ? { ...props.style, '--stats-row-accent': props.accent } as CSSProperties : props.style;

	return (
		<div className={classes.join(' ')} style={style} onClick={props.onClick}>
			<div className='stats-row-content'>
				{props.children}
			</div>
			{
				props.caption ?
					<div className='stats-row-caption'>
						<div className='stats-row-caption-text'>{props.caption}</div>
						{props.captionExtra}
					</div>
					: null
			}
		</div>
	);
};
