import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export default function save( { attributes } ) {

	const { iconClass, iconSize, iconColor, align  } = attributes;

	let iconClasses = '';

	if ( iconClass ) {
		iconClasses = iconClass;
	}

	if ( iconSize ) {
		iconClasses = `${iconClasses} ${iconSize}`;
	}

	if ( iconColor ) {
		iconClasses = `${iconClasses} color-${iconColor}`;
	}

	let wrapperClasses = 'd-flex';

	if ( align ) {
		wrapperClasses = `${wrapperClasses} justify-content-${align}`;
	}

	const blockProps = useBlockProps.save( {
		className: wrapperClasses,
	} );

	const classNames = blockProps.className;
	
	return (
		<div {...useBlockProps.save()} className={classNames}>
			<span className={iconClasses} aria-hidden="true"></span>
		</div>
		
	);
}
