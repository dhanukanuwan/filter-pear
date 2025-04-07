import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, AlignmentControl, BlockControls } from '@wordpress/block-editor';
import { TextControl, PanelBody, PanelRow, SelectControl, ToggleControl } from '@wordpress/components';
import colorOptions from '../util/color-options';

import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {

	const { btnText, url, btnColor, align, openNewTab  } = attributes;

	const onChangeBtnText = ( newText ) => {
		setAttributes( { btnText: newText } );
	};

	const onChangeUrl = ( newUrl ) => {
		setAttributes( { url: newUrl } );
	};

	const onChangeBtnColor = ( newColor ) => {
		setAttributes( { btnColor: newColor } );
	};

	const onChangeAlign = ( newAlign ) => {
		setAttributes( {
			align: newAlign === undefined ? '' : newAlign,
		} );
	};

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

	const blockProps = useBlockProps({
		className: wrapperClasses,
	});

	return (
		<>
			<InspectorControls>

				<PanelBody title={ __( 'Settings', 'filter-peach-blocks' ) } initialOpen={ true }>

					<PanelRow>
						<fieldset className="w-100">
							<TextControl
								label={ __( 'Button Text', 'filter-peach-blocks' ) }
								value={ btnText }
								onChange={ onChangeBtnText }
							/>
						</fieldset>
					</PanelRow>

					<PanelRow>
						<fieldset className="w-100">
							<TextControl
								label={ __( 'Button Link', 'filter-peach-blocks' ) }
								value={ url }
								onChange={ onChangeUrl }
							/>
						</fieldset>
					</PanelRow>

					<PanelRow>
						<fieldset className="w-100">
							<ToggleControl
								__nextHasNoMarginBottom
								label={ __( 'Open in new tab?', 'filter-peach-blocks' )}
								checked={ openNewTab }
								onChange={ () => setAttributes( { openNewTab: !openNewTab}) }
							/>
						</fieldset>
					</PanelRow>

					<PanelRow>
						<fieldset className="w-100">
							<SelectControl
								label={ __('Button Color','filter-peach-blocks') }
								value={ btnColor }
								onChange={ onChangeBtnColor }
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
				<a className={btnClasses} href={url} onClick={(e) => { e.preventDefault() } }>{btnText}</a>
			</div>

		</>
	);
}
