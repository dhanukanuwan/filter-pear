import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';


export default function save( { attributes } ) {

	const { bgType, bgColor, bgImage, hPadding, alignColumns  } = attributes;

	let paddingClasses = 'pt-5 pb-5';

	if ( hPadding && hPadding.length > 0 ) {
		paddingClasses = `pt-${hPadding} pb-${hPadding}`;
	}

	let sectionClasses = paddingClasses;

	if ( bgColor && ( bgType && bgType === 'color' ) ) {
		sectionClasses = `${sectionClasses} ${paddingClasses} bg-${bgColor}`;

	} else {
		sectionClasses = 'position-relative';
	}

	if ( !bgType || ( bgType && bgType.length === 0 ) ) {
		sectionClasses = paddingClasses;
	} 

	const blockProps = useBlockProps.save( {
		className: sectionClasses,
	} );

	const classNames = blockProps.className;

	let alignClasses = '';

	if ( alignColumns && alignColumns.length !== 0 ) {
		alignClasses = `justify-content-${alignColumns}`;
	}


	return (
		<section {...useBlockProps.save()} className={classNames}>

			{ bgType === 'image' && bgImage.mediaId && 
				<>
					<div className="violator-bg position-absolute top-0 w-100 h-100 overflow-hidden z-0">
						<img data-src={bgImage.mediaUrl} className="m-0 h-100 w-100 lazyload" loading='lazy' alt="Background Image" />
					</div>
					<div class="hero-content position-relative pt-5 pb-5 z-1">
						<div className="container">
							<div className={`row ${alignClasses}`}>
								<InnerBlocks.Content />
							</div>
						</div>
					</div>
				</>
			}

			{ bgType !== 'image' &&
				<div className="container">
					<div className={`row ${alignClasses}`}>
						<InnerBlocks.Content />
					</div>
				</div>
			}
			
		</section>
	);
}
