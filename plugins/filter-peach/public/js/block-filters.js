
function setHeadingMarginClassName( className, blockName ) {
    return blockName === 'core/heading' ? `${className} mt-3` : className;
}

// Adding the filter.
wp.hooks.addFilter(
    'blocks.getBlockDefaultClassName',
    'filter-peach-blocks/set-heading-margin-class-name',
    setHeadingMarginClassName
);