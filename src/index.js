import simplifyTreeNodes from "../index";

const treeData = [
  {
    key: "0-0",
    children: [
      {
        key: "0-0-0"
      },
      {
        key: "0-0-1"
      }
    ]
  },
  {
    key: "0-1",
    children: [
      {
        key: "0-1-0"
      },
      {
        key: "0-1-1"
      },
      {
        key: "0-1-2",
        children: [
          {
            key: "0-1-2-0"
          },
          {
            key: "0-1-2-1"
          }
        ]
      }
    ]
  }
];

const childKeys = ["0-0-0", "0-1-0", "0-1-1", "0-1-2-0", "0-1-2-1"];

const keys = simplifyTreeNodes(childKeys, treeData);

console.log(keys);
