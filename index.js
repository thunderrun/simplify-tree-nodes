import TreeModel from "tree-model";
import arrayIncludesAll from 'array-includes-all';
import { pull } from 'lodash';

export default (childKeys, treeData) => {
  let keys = childKeys;
  const tree = new TreeModel();
  const root = tree.parse({
    key: "root",
    children: treeData
  });
  root.walk({ strategy: "post" }, node => {
    
    if (node.children.length > 0 && node.model.key !== "root") {
      const nodeChildKeys = node.children.map(child => child.model.key);
      if (arrayIncludesAll(keys, nodeChildKeys)) {
        pull(keys, ...nodeChildKeys);
        keys.push(node.model.key);
      }
    }
  });
  return keys;
};
