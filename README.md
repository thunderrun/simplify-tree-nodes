# simplify-tree-nodes

Replace child nodes' keys with top level parent node's key by given tree.

## Example

```js
import simplifyTreeNodes from 'simplify-tree-nodes'

const treeData = [
  {
    key: '0-0',
    children: [{
      key: '0-0-0',
    }, {
      key: '0-0-1',
    }],
  }, {
    key: '0-1',
    children: [{
      key: '0-1-0',
    }, {
      key: '0-1-1',
    }, {
      key: '0-1-2',
    }],
  }
];

const childKeys = ['0-0-0', '0-1-0', '0-1-1', '0-1-2'];

const keys = simplifyTreeNodes(childKeys, treeData);

// keys: ['0-0-0']
```