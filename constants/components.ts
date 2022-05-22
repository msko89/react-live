export const COMPONENTS = [
  {
    key: 'button',
    name: 'Button',
    documents: [
      {
        name: 'width',
        type: 'string',
        defaultValue: '100',
        description: '버튼의 가로길이를 설정합니다.',
      },
      {
        name: 'height',
        type: 'string',
        defaultValue: '100',
        description: '버튼의 세로길이를 설정합니다.',
      },
      {
        name: 'color',
        type: 'string',
        defaultValue: '#000',
        description: '버튼의 글자색을 설정합니다.',
      },
      {
        name: 'backgroundColor',
        type: 'string',
        defaultValue: '#fff',
        description: '버튼의 배경색을 설정합니다.',
      },
    ],
  },
  {
    key: 'header',
    name: 'Header',
  },
  {
    key: 'footer',
    name: 'Footer',
  },
];
