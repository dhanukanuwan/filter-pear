import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, useInnerBlocksProps, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';
import { PanelBody, PanelRow, SelectControl, Button } from '@wordpress/components';
import colorOptions from '../util/color-options';

import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {

	const { bgType, bgColor, bgImage, hPadding, alignColumns  } = attributes;

	const onChangeBgType = ( newBgType ) => {
		setAttributes( { bgType: newBgType } );
	}

	const onChangeBgColor = ( newBgColor ) => {
		setAttributes( { bgColor: newBgColor } );
	}

	const onChangeColumnAlign = ( newAlign ) => {
		setAttributes( { alignColumns: newAlign } );
	}

	const onChangeHPadding = ( newhPadding ) => {
		setAttributes( { hPadding: newhPadding } );
	}

	const onSelectMedia = (media) => {
		setAttributes({
			bgImage: {
				mediaId: media.id,
				mediaUrl: media.url
			}
		});

		//console.log( media );
	}

	const removeMedia = () => {
		setAttributes({
			bgImage: {
				mediaId: 0,
				mediaUrl: ''
			}
		});
	}

	let sectionClasses = '';

	let paddingClasses = 'pt-5 pb-5';

	if ( hPadding && hPadding.length > 0 ) {
		paddingClasses = `pt-${hPadding} pb-${hPadding}`;

	}

	if ( bgColor && ( bgType && bgType === 'color' ) ) {
		sectionClasses = `${sectionClasses} ${paddingClasses} bg-${bgColor}`;

	} else {
		sectionClasses = 'position-relative';
	}

	if ( !bgType || ( bgType && bgType.length === 0 ) ) {
		sectionClasses = paddingClasses;
	}

	let alignClasses = '';

	if ( alignColumns && alignColumns.length !== 0 ) {
		alignClasses = `justify-content-${alignColumns}`;
	}

	const blockProps = useBlockProps( {
		className: sectionClasses,
	} );

	const innerBlocksProps = useInnerBlocksProps({
		className: `row ${alignClasses}`,
	});

	return (

		<Fragment>
			<InspectorControls>

				<PanelBody title={ __( 'Settings', 'filter-peach-blocks' ) } initialOpen={ true }>

					<PanelRow>
						<fieldset>
							<SelectControl
								label={ __('Background Type','filter-peach-blocks') }
								value={ bgType }
								onChange={ onChangeBgType }
								options={ [
									{
										value: '',
										label: __('Default','filter-peach-blocks'),
									},
									{
										value: 'color',
										label: __('Color','filter-peach-blocks'),
									},
									{
										value: 'image',
										label: __('Image','filter-peach-blocks'),
									},
								] }
							/>
						</fieldset>
					</PanelRow>

					{ bgType === 'color' &&
						<PanelRow>
							<fieldset>
								<SelectControl
									label={ __('Background Color','filter-peach-blocks') }
									value={ bgColor }
									onChange={ onChangeBgColor }
									options={ colorOptions }
								/>
							</fieldset>
						</PanelRow>
					}

					{ bgType === 'image' &&
						<>
							<PanelRow>
								<h2 className="components-panel__body-title">{__('Background image','filter-peach-blocks')}</h2>
							</PanelRow>
							<PanelRow>
								<MediaUploadCheck>
									<MediaUpload
										onSelect={onSelectMedia}
										multiple={false}
										allowedTypes={ ['image'] }
										value={bgImage.mediaId}
										render={({ open }) => (
											<>
												<Button className={bgImage.mediaId == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview'} onClick={open} >
														{bgImage.mediaId == 0 && __('Choose an image', 'filter-peach-blocks')}

														{bgImage.mediaUrl &&
															<img src={bgImage.mediaUrl} />
														}
														
												</Button>
											</>
										)}
									/>
								</MediaUploadCheck>

							</PanelRow>

							{ bgImage.mediaId != 0 &&
								<PanelRow>
									<MediaUploadCheck>
										<MediaUpload
											title={__('Replace image', 'filter-peach-blocks')}
											value={bgImage.mediaId}
											onSelect={onSelectMedia}
											allowedTypes={['image']}
											render={({open}) => (
												<Button onClick={open} variant="secondary" isLarge>{__('Replace image', 'filter-peach-blocks')}</Button>
											)}
										/>
									</MediaUploadCheck>
								</PanelRow>
								
							}

							{bgImage.mediaId != 0 && 
								<PanelRow>
									<MediaUploadCheck>
										<Button onClick={removeMedia} variant="link" isDestructive>{__('Remove image', 'filter-peach-blocks')}</Button>
									</MediaUploadCheck>
								</PanelRow>
							}
						</>
					}

					<PanelRow>
						<fieldset>
							<SelectControl
								label={ __('Top and Bottom Spacing','filter-peach-blocks') }
								value={ hPadding }
								onChange={ onChangeHPadding }
								options={ [
									{
										value: '',
										label: __('Default','filter-peach-blocks'),
									},
									{
										value: '6',
										label: __('6','filter-peach-blocks'),
									},
									{
										value: '5',
										label: __('5','filter-peach-blocks'),
									},
									{
										value: '4',
										label: __('4','filter-peach-blocks'),
									},
									{
										value: '3',
										label: __('3','filter-peach-blocks'),
									},
									{
										value: '2',
										label: __('2','filter-peach-blocks'),
									},
									{
										value: '1',
										label: __('1','filter-peach-blocks'),
									},
									{
										value: '0',
										label: __('0','filter-peach-blocks'),
									},
								] }
							/>
						</fieldset>
					</PanelRow>

					<PanelRow>
						<fieldset>
							<SelectControl
								label={ __('Align Content Columns','filter-peach-blocks') }
								value={ alignColumns }
								onChange={ onChangeColumnAlign }
								options={ [
									{
										value: '',
										label: __('Default','filter-peach-blocks'),
									},
									{
										value: 'left',
										label: __('Left','filter-peach-blocks'),
									},
									{
										value: 'center',
										label: __('Center','filter-peach-blocks'),
									},
									{
										value: 'right',
										label: __('Right','filter-peach-blocks'),
									},
								] }
							/>
						</fieldset>
					</PanelRow>

				</PanelBody>
				
			</InspectorControls>

			<section { ...blockProps }>
				
				{ bgType === 'image' && bgImage.mediaId && 
					<>
						<div className="violator-bg position-absolute top-0 w-100 h-100 overflow-hidden z-0">
							<img src={bgImage.mediaUrl} className="m-0 h-100 w-100" />
						</div>
						<div className="hero-content position-relative pt-5 pb-5 z-1">
							<div className="container">
								<div {...innerBlocksProps} />
							</div>
						</div>
					</>
				}

				{ bgType !== 'image' &&
					<div className="container">
						<div {...innerBlocksProps} />
					</div>
				}
			</section>
		</Fragment>
		
	);
}
