import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';


export default function save( { attributes } ) {

	const { columnSize, columnBg, columnPaddingY, columnPaddingX, align, bgType, bgImage  } = attributes;

	let sectionClasses = 'col-12 position-relative mb-4';
	let columnInnerClasses = 'h-100 position-relative z-1 column-content-wrap';

	if ( bgType === 'color' && columnBg ) {
		columnInnerClasses = `${columnInnerClasses} bg-${columnBg} ${ columnBg !== 'transparent' ? 'rounded-lg' : ''}`;

		if ( columnBg === 'primary' || columnBg === 'dark-text' ) {
			columnInnerClasses = `${columnInnerClasses} text-white`;
		}
	}

	if ( columnPaddingY ) {
		columnInnerClasses = `${columnInnerClasses} pt-${columnPaddingY} pb-${columnPaddingY}`;
	}

	if ( columnPaddingX ) {
		columnInnerClasses = `${columnInnerClasses} pl-${columnPaddingX} pr-${columnPaddingX}`;
	}

	if ( columnSize ) {
		sectionClasses = `${sectionClasses} ${ parseInt( columnSize, 10 ) === 3 ? 'col-md-6' : ''} ${ parseInt( columnSize, 10 ) === 2 ? 'col-md-4' : ''} col-lg-${columnSize}`;
	}

	if ( align ) {
		columnInnerClasses = `${columnInnerClasses} text-${align} align-items-${align}`;
	}

	if ( bgType === 'image' ) {
		sectionClasses = `${sectionClasses} has-bg-image`;
	}

	if ( bgType === 'color' ) {
		sectionClasses = `${sectionClasses} has-bg-color`;
	}

	const blockProps = useBlockProps.save( {
		className: sectionClasses,
	} );

	const classNames = blockProps.className;

	return (
		<div {...useBlockProps.save()} className={classNames}>

			{ bgType === 'image' && bgImage.id !== 0 && (
				<div className="position-absolute start-0 top-0 w-100 h-100 overflow-hidden z-0 pl-3 pr-3">
					<img data-src={bgImage.url} loading="lazy" className="m-0 h-100 w-100 lazyload" alt={bgImage.alt} />
				</div>
			)}

			<div className={columnInnerClasses}>
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
