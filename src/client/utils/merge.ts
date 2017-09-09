import { uniq, isArray, mergeWith } from 'lodash';

function customizer(objValue: any, srcValue: any) {
  if (isArray(objValue)) {
    return uniq(objValue.concat(srcValue));
  }
}

export default function merge(a: any, b: any) {
  return mergeWith({}, a, b, customizer);
}
