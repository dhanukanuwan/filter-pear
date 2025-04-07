import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export default function save( { attributes } ) {

	const { btnText, url, btnColor, align, openNewTab  } = attributes;

	let btnClasses = `btn btn${ btnColor ? `-${btnColor}`: ''}`;

	let wrapperClasses = 'mt-3 d-inline-block';

	if ( align ) {
		
		if ( align === 'right' ) {
			wrapperClasses = `${wrapperClasses} justify-content-end`;
		}

		if ( align === 'center' ) {
			wrapperClasses = `${wrapperClasses} justify-content-center`;
		}
	}

	const blockProps = useBlockProps.save( {
		className: wrapperClasses,
	} );

	const classNames = blockProps.className;
	
	return (
		<div {...useBlockProps.save()} className={classNames}>
			{ openNewTab ? (
				<a className={btnClasses} href={url} target="_blank" rel="nofollow noopener">{btnText}</a>
			) : (
				<a className={btnClasses}  href={url} >{btnText}</a>
			)}
			
		</div>
		
	);
}
