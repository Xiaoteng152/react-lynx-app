const { reactLynxPlugin } = require('@byted-lynx/react/speedy-plugin');
const { signTasmSpeedyPlugin } = require('@byted-lynx/speedy-plugin-sign-tasm');

/**
 * @type {import('@byted-lynx/lynx-speedy').UserConfig}
 */
module.exports = {
  dsl: 'react',
  dslPlugin: reactLynxPlugin({
    ignoreLepusSideEffects: true,
  }),
  input: {
    demo1: './src/index.tsx',
  },
  // runtime configs
  pageConfig: {
    // @see https://lynx.bytedance.net/docs/frontend/css/css-inheritance/
    enableCSSInheritance: true,
  },
  // build-time configs
  encode: {
    enableCSSSelector: true,
    useLepusNG: true,
    targetSdkVersion: '2.10',
  },
  plugins: [
    // signTasmSpeedyPlugin docs: https://bytedance.larkoffice.com/docx/KBrAdiKdHoWtbaxTplxc7LzZnqc
    process.env.NODE_ENV === 'production' && signTasmSpeedyPlugin(),
  ].filter(Boolean),
};
