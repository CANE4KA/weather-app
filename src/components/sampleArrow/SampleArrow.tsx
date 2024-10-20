import { FC, MouseEventHandler } from 'react'

interface SamplePrevArrowProps {
	className?: string
	style?: React.CSSProperties
	onClick?: MouseEventHandler<HTMLDivElement>
	color: string
}

export const SampleArrow: FC<SamplePrevArrowProps> = ({
	className,
	style,
	onClick,
	color
}) => {
	return (
		<div
			className={className}
			style={{
				...style,
				display: 'block',
				backgroundColor: `${color}`,
				borderRadius: '50%'
			}}
			onClick={onClick}
		/>
	)
}
