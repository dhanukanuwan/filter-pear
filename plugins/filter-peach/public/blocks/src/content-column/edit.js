import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, AlignmentControl, BlockControls, InnerBlocks, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { PanelBody, PanelRow, SelectControl, Button } from '@wordpress/components';
import './editor.scss';
import colorOptions from '../util/color-options';

export default function Edit( { attributes, setAttributes } ) {

	const { columnSize, columnBg, columnPaddingY, columnPaddingX, align, bgType, bgImage  } = attributes;

	const onChangeColumnSize = ( newColumnSize ) => {
		setAttributes( { columnSize: newColumnSize } );
	}

	const onChangeColumnBg = ( newBg ) => {
		setAttributes( { columnBg: newBg } );
	}

	const onChangeColumnPadding = ( newPadding ) => {
		setAttributes( { columnPaddingY: newPadding } );
	}

	const onChangeColumnPaddingX = ( newPadding ) => {
		setAttributes( { columnPaddingX: newPadding } );
	}

	const onChangeAlign = ( newAlign ) => {

		let alignClass = newAlign;

		setAttributes( {
			align: newAlign === undefined ? '' : alignClass,
		} );
	};

	const onSelectMedia = (media) => {
		setAttributes({
			bgImage: {
				id: media.id,
				url: media.url,
				alt: media.alt,
			}
		});

		//console.log( media );
	}

	const removeMedia = () => {
		setAttributes({
			bgImage: {
				id: 0,
				url: '',
				alt: '',
			}
		});
	}

	let sectionClasses = 'col-12 position-relative mb-4';
	let columnInnerClasses = 'h-100 position-relative z-1';

	if ( bgType === 'color' && columnBg ) {
		columnInnerClasses = `${columnInnerClasses} bg-${columnBg} ${ columnBg !== 'transparent' ? 'rounded-lg' : ''} `;

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

	const blockProps = useBlockProps( {
		className: sectionClasses,
	} );

	const COLUMN_TEMPLATE = [
		[ 'core/paragraph', { placeholder: 'Lorem Ipsum ....' } ],
	];

	return (
		<>
			<InspectorControls>

				<PanelBody title={ __( 'Settings', 'filter-peach-blocks' ) } initialOpen={ true }>

					<PanelRow>
						<fieldset className="w-100">
							<SelectControl
								label={ __('Column size','filter-peach-blocks') }
								value={ columnSize }
								onChange={ onChangeColumnSize }
								options={ [
									{
										value: 'auto',
										label: __('Auto','filter-peach-blocks'),
									},
									{
										value: '12',
										label: __('12 ( 100% )','filter-peach-blocks'),
									},
									{
										value: '9',
										label: __('9 ( 75% )','filter-peach-blocks'),
									},
									{
										value: '8',
										label: __('8 ( 66.66% )','filter-peach-blocks'),
									},
									{
										value: '7',
										label: __('7 ( 58.33% )','filter-peach-blocks'),
									},
									{
										value: '6',
										label: __('6 ( 50% )','filter-peach-blocks'),
									},
									{
										value: '5',
										label: __('5 ( 41.66% )','filter-peach-blocks'),
									},
									{
										value: '4',
										label: __('4 ( 33.33% )','filter-peach-blocks'),
									},
									{
										value: '3',
										label: __('3 ( 25% )','filter-peach-blocks'),
									},
									{
										value: '2',
										label: __('2 ( 12.5% )','filter-peach-blocks'),
									}
								] }
							/>
						</fieldset>
					</PanelRow>

					<PanelRow>
						<fieldset className="w-100">
							<SelectControl
								label={ __('Background Type','filter-peach-blocks') }
								value={ bgType }
								onChange={ ( value ) => setAttributes({bgType: value}) }
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

					{ bgType === 'color' && (
						<PanelRow>
							<fieldset className="w-100">
								<SelectControl
									label={ __('Background Color','filter-peach-blocks') }
									value={ columnBg }
									onChange={ onChangeColumnBg }
									options={ colorOptions }
								/>
							</fieldset>
						</PanelRow>
					)}

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
										value={bgImage.id}
										render={({ open }) => (
											<>
												<Button className={bgImage.id == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview'} onClick={open} >
														{bgImage.id == 0 && __('Choose an image', 'filter-peach-blocks')}

														{bgImage.url &&
															<img src={bgImage.url} />
														}
														
												</Button>
											</>
										)}
									/>
								</MediaUploadCheck>

							</PanelRow>

							{ bgImage.id != 0 &&
								<PanelRow>
									<MediaUploadCheck>
										<MediaUpload
											title={__('Replace image', 'filter-peach-blocks')}
											value={bgImage.id}
											onSelect={onSelectMedia}
											allowedTypes={['image']}
											render={({open}) => (
												<Button onClick={open} variant="secondary" isLarge>{__('Replace image', 'filter-peach-blocks')}</Button>
											)}
										/>
									</MediaUploadCheck>
								</PanelRow>
								
							}

							{bgImage.id != 0 && 
								<PanelRow>
									<MediaUploadCheck>
										<Button onClick={removeMedia} variant="link" isDestructive>{__('Remove image', 'filter-peach-blocks')}</Button>
									</MediaUploadCheck>
								</PanelRow>
							}
						</>
					}

					<PanelRow>
						<fieldset className="w-100">
							<SelectControl
								label={ __('Padding Top & Bottom','filter-peach-blocks') }
								value={ columnPaddingY }
								onChange={ onChangeColumnPadding }
								options={ [
									{
										value: '0',
										label: __('Default','filter-peach-blocks'),
									},
									{
										value: '1',
										label: __('1','filter-peach-blocks'),
									},
									{
										value: '2',
										label: __('2','filter-peach-blocks'),
									},
									{
										value: '3',
										label: __('3','filter-peach-blocks'),
									},
									{
										value: '4',
										label: __('4','filter-peach-blocks'),
									},
									{
										value: '5',
										label: __('5','filter-peach-blocks'),
									},
									{
										value: '6',
										label: __('6','filter-peach-blocks'),
									},
								] }
							/>
						</fieldset>
					</PanelRow>

					<PanelRow>
						<fieldset className="w-100">
							<SelectControl
								label={ __('Padding Left & Right','filter-peach-blocks') }
								value={ columnPaddingX }
								onChange={ onChangeColumnPaddingX }
								options={ [
									{
										value: '0',
										label: __('Default','filter-peach-blocks'),
									},
									{
										value: '1',
										label: __('1','filter-peach-blocks'),
									},
									{
										value: '2',
										label: __('2','filter-peach-blocks'),
									},
									{
										value: '3',
										label: __('3','filter-peach-blocks'),
									},
									{
										value: '4',
										label: __('4','filter-peach-blocks'),
									},
									{
										value: '5',
										label: __('5','filter-peach-blocks'),
									},
									{
										value: '6',
										label: __('6','filter-peach-blocks'),
									},
								] }
							/>
						</fieldset>
					</PanelRow>

				</PanelBody>

			</InspectorControls>

			<BlockControls group="block">
				<AlignmentControl value={ align } onChange={ onChangeAlign } />
			</BlockControls>

			<div { ...blockProps }>
				
				{ bgType === 'image' && bgImage.id !== 0 && (
					<div className="position-absolute top-0 w-100 h-100 overflow-hidden z-0 pl-3 pr-3">
						<img src={bgImage.url} className="m-0 h-100 w-100" />
					</div>
				)}

				<div className={columnInnerClasses}>
					<InnerBlocks
						template={ COLUMN_TEMPLATE }
						allowedBlocks={[
							'core/heading',
							'core/paragraph',
							'filter-peach-blocks/button',
							'core/image',
							'core/video',
							'core/embed',
							'core/file',
							'core/shortcode',
							'core/gallery',
							'filter-peach-blocks/filter-peach-icon']} 
					/>
				</div>
			</div>
		</>
	);
}
