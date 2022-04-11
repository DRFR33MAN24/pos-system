// import React from 'react';
// import { StyleSheet } from 'react-native';
// import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';

// export const FontAwesomePack = {
//   name: 'fontAwesome',
//   icons: createIconsMap(),
// };

// function createIconsMap() {
//   return new Proxy({}, {
//     get(target, name) {
//       return IconProvider(name);
//     },
//   });
// }

// const IconProvider = (name) => ({
//   toReactElement: (props) => FontAwesome({ name, ...props }),
// });

// function FontAwesome({ name, style }) {
//   const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
//   return (
//     <FontAwesome name={name} size={height} color={tintColor} style={iconStyle} />
//   );
// }
