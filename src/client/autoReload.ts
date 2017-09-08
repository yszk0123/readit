/**
 * ref. https://github.com/fuse-box/fuse-box-ts-react-reflux-seed/blob/master/src/client/hmr.ts
 */
declare var FuseBox: any;

const customizedHMRPlugin = {
  hmrUpdate: ({ type, path, content }: any) => {
    if (type === 'js') {
      window.location.reload();
    }

    return true;
  },
};

let alreadyRegistered = false;

export function enableAutoReload() {
  if (!alreadyRegistered) {
    alreadyRegistered = true;
    FuseBox.addPlugin(customizedHMRPlugin);
  }
}
