// module.exports = {
//    "stories": [
//      "../src/**/*.stories.mdx",
//      "../src/**/*.stories.@(js|jsx|ts|tsx)"
//    ],
//    "addons": [
//      "@storybook/addon-links",
//      "@storybook/addon-essentials",
//      "@storybook/addon-interactions",
//      "@storybook/preset-create-react-app",
//      "storybook-addon-styled-component-theme/dist/preset"
//    ],
//    "framework": "@storybook/react",
//    "core": {
//      "builder": "@storybook/builder-webpack5"
//    }
//  }

module.exports = {
   "core": {
      builder: "webpack5"
   },
   "stories": [
      "../stories/**/*.stories.mdx",
      "../stories/**/*.stories.@(js|jsx|ts|tsx)",
      '@storybook/preset-create-react-app'
   ],
   "addons": [
      "@storybook/addon-links",
      "@storybook/addon-essentials"
   ],
   "framework": "@storybook/react",
   typescript: {
      check: false,
      checkOptions: {},
      reactDocgen: false,
      reactDocgenTypescriptOptions: {
         shouldExtractLiteralValuesFromEnum: true,
         propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
      },
   },
}