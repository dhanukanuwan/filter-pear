import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, AlignmentControl, BlockControls } from '@wordpress/block-editor';
import { PanelBody, PanelRow, SelectControl } from '@wordpress/components';
import { Fragment } from '@wordpress/element';
import iconsOptions from '../util/icons-list';
import colorOptions from '../util/color-options';

export default function Edit( { attributes, setAttributes } ) {

	const { iconClass, iconSize, iconColor, align  } = attributes;

	const onChangeIconClass = ( newClass ) => {
		setAttributes( { iconClass: newClass } );
	};

	const onChangeIconSize = ( newSize ) => {
		setAttributes( { iconSize: newSize } );
	};

	const onChangeIconColor = ( newColor ) => {
		setAttributes( { iconColor: newColor } );
	};

	const onChangeAlign = ( newAlign ) => {

		let alignClass = '';

		if ( newAlign === 'right' ) {
			alignClass = 'end';
		} else if ( newAlign === 'left' ) {
			alignClass = 'start';
		} else {
			alignClass = newAlign;
		}

		setAttributes( {
			align: newAlign === undefined ? '' : alignClass,
		} );
	};

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

	const blockProps = useBlockProps({
		className: wrapperClasses,
	});

	return (
		<Fragment>

			<InspectorControls>

				<PanelBody title={ __( 'Icon Settings', 'filter-peach-blocks' ) } initialOpen={ true }>

					<PanelRow>
						<fieldset>
							<SelectControl
								label={ __('Select Icon','filter-peach-blocks') }
								value={ iconClass }
								onChange={ onChangeIconClass }
								options={ iconsOptions }
								__nextHasNoMarginBottom={true}
							/>
						</fieldset>
					</PanelRow>

					<PanelRow>
						<fieldset>
							<SelectControl
								label={ __('Icon Size','filter-peach-blocks') }
								value={ iconSize }
								onChange={ onChangeIconSize }
								__nextHasNoMarginBottom={true}
								options={ [
									{
										value: '',
										label:  __( 'Default', 'filter-peach-blocks' )
									},
									{
										value: 'icon-medium',
										label:  __( 'Medium', 'filter-peach-blocks' )
									},
									{
										value: 'icon-large',
										label:  __( 'Large', 'filter-peach-blocks' )
									}
								] }
							/>
						</fieldset>
					</PanelRow>

					<PanelRow>
						<fieldset>
							<SelectControl
								label={ __('Icon Color','filter-peach-blocks') }
								value={ iconColor }
								onChange={ onChangeIconColor }
								__nextHasNoMarginBottom={true}
								options={ colorOptions }
							/>
						</fieldset>
					</PanelRow>

				</PanelBody>

			</InspectorControls>

			<BlockControls group="block">
				<AlignmentControl value={ align } onChange={ onChangeAlign } />
			</BlockControls>

			<div { ...blockProps }>
				<span className={iconClasses} aria-hidden="true"></span>
			</div>

		</Fragment>
	);
}
