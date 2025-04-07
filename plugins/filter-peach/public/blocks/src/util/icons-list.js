const iconsList = [
    'search-1',
    'down-open-big',
    'left-open-big',
    'right-open-big',
    'up-open-big',
    'calender',
    'delivery',
    'quality',
    'sustainable',
    'discounts',
    'returns',
    'check',
    'twitter-x',
    'sofa',
    'table',
    'plant',
    'light',
    'youtube-play',
    'instagram-1',
    'spotify',
    'facebook-circled',
    'linkedin-rect',
    'cart-outline',
];

const toTitleCase = (phrase) => {
    return phrase
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
};

let iconOptions = iconsList.map( (icon) => {

    return {
        value: `icon-${icon}`,
		label: toTitleCase( icon.replaceAll( '-', ' ' ) ),
    }

});

export default iconOptions;