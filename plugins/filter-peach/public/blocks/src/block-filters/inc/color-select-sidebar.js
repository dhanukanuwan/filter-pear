import { __ } from '@wordpress/i18n';
import { createHigherOrderComponent } from '@wordpress/compose';
import { Fragment } from '@wordpress/element';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl } from '@wordpress/components';
import { addFilter } from '@wordpress/hooks';
import clsx from 'clsx';
import colorOptions from '../../util/color-options';


const enableSidebarSelectOnBlocks = [
    'core/paragraph',
    'core/heading'
];

/**
 * Declare custom attribute
 */
const setTextColorAttribute = ( settings, name ) => {
    // Do nothing if it's another block than defined ones.
    if ( ! enableSidebarSelectOnBlocks.includes( name ) ) {
        return settings;
    }

    return Object.assign( {}, settings, {
        attributes: Object.assign( {}, settings.attributes, {
            textColor: { type: 'string' }
        } ),
    } );
};

addFilter(
    'blocks.registerBlockType',
    'mariadb-block-attributes/set-text-color-attribute',
    setTextColorAttribute
);

/**
 * Add Custom Select to Sidebar
 */
const withTextColorSelect = createHigherOrderComponent( ( BlockEdit ) => {
    return ( props ) => {

        // If current block is not allowed
    	if ( ! enableSidebarSelectOnBlocks.includes( props.name ) ) {
            return (
                <BlockEdit { ...props } />
            );
        }

        const { attributes, setAttributes } = props;
        const { textColor } = attributes;

        return (
            <Fragment>
                <BlockEdit { ...props } />
                <InspectorControls>
                	<PanelBody
    	                title={ __( 'Block Settings', 'filter-peach-blocks' ) }
    	            >
	                    <SelectControl
                            label={ __( 'Text Color', 'filter-peach-blocks' ) }
                            value={ textColor }
                            options={ colorOptions }
                            onChange={ ( value ) => {
                                setAttributes( {
                                    textColor: value,
                                } );
                            } }
                        /> 
	                </PanelBody>
                </InspectorControls>
            </Fragment>
        );
    };
}, 'withTextColorSelect' );

addFilter(
    'editor.BlockEdit',
    'mariadb-block-attributes/with-text-color-select',
    withTextColorSelect
);

/**
 * Add custom class to block on Edit
 */
const withTextColorSelectProp = createHigherOrderComponent( ( BlockListBlock ) => {
    return ( props ) => {

        // If current block is not allowed
        if ( ! enableSidebarSelectOnBlocks.includes( props.name ) ) {
            return (
                <BlockListBlock { ...props } />
            );
        }

        const { attributes } = props;
        const { textColor } = attributes;

        if ( textColor ) {
            return <BlockListBlock { ...props } className={ 'color-' + textColor } />
        } else {
            return <BlockListBlock { ...props } />
        }
    };
}, 'withTextColorSelectProp' );

addFilter(
    'editor.BlockListBlock',
    'mariadb-block-attributes/with-text-color-select-prop',
    withTextColorSelectProp
);

/**
 * Save custom attribute
 */
const saveTextColorAttribute = ( extraProps, blockType, attributes ) => {
    // Do nothing if it's another block than defined ones.
    if ( enableSidebarSelectOnBlocks.includes( blockType.name ) ) {
        const { textColor } = attributes;
        if ( textColor ) {
            extraProps.className = clsx( extraProps.className, 'color-' + textColor )
        }
    }    

    return extraProps;

};

addFilter(
    'blocks.getSaveContent.extraProps',
    'mariadb-block-attributes/save-text-color-attribute',
    saveTextColorAttribute
);