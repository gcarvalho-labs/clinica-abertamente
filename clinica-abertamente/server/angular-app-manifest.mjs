
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: false,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 738, hash: 'cb0a7cab029acc7b94db92b55694c40d65a0ad2a07d16a2503f23cfa6e400e4b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1278, hash: '1974b4cbff38cbdcabc1577e08539419723e30f08c857276ef67420d0df5f3a0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 109242, hash: '08ac8ea1c59f08d9c1f97ef3f9a7ab32590b64b22fc4088e04113c4ef937732c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}
  },
};
