
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  
{
  path: '/',
  component: ComponentCreator('/'),
  exact: true,
  
},
{
  path: '/blog',
  component: ComponentCreator('/blog'),
  exact: true,
  
},
{
  path: '/blog/hello-world',
  component: ComponentCreator('/blog/hello-world'),
  exact: true,
  
},
{
  path: '/blog/hola',
  component: ComponentCreator('/blog/hola'),
  exact: true,
  
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags'),
  exact: true,
  
},
{
  path: '/blog/tags/docusaurus',
  component: ComponentCreator('/blog/tags/docusaurus'),
  exact: true,
  
},
{
  path: '/blog/tags/facebook',
  component: ComponentCreator('/blog/tags/facebook'),
  exact: true,
  
},
{
  path: '/blog/tags/hello',
  component: ComponentCreator('/blog/tags/hello'),
  exact: true,
  
},
{
  path: '/blog/tags/hola',
  component: ComponentCreator('/blog/tags/hola'),
  exact: true,
  
},
{
  path: '/blog/welcome',
  component: ComponentCreator('/blog/welcome'),
  exact: true,
  
},
{
  path: '/docs/:route',
  component: ComponentCreator('/docs/:route'),
  
  routes: [
{
  path: '/docs/Button',
  component: ComponentCreator('/docs/Button'),
  exact: true,
  
},
{
  path: '/docs/Input',
  component: ComponentCreator('/docs/Input'),
  exact: true,
  
},
{
  path: '/docs/components/Alert',
  component: ComponentCreator('/docs/components/Alert'),
  exact: true,
  
},
{
  path: '/docs/components/Button',
  component: ComponentCreator('/docs/components/Button'),
  exact: true,
  
},
{
  path: '/docs/components/Checkbox',
  component: ComponentCreator('/docs/components/Checkbox'),
  exact: true,
  
},
{
  path: '/docs/components/Heading',
  component: ComponentCreator('/docs/components/Heading'),
  exact: true,
  
},
{
  path: '/docs/components/Icon',
  component: ComponentCreator('/docs/components/Icon'),
  exact: true,
  
},
{
  path: '/docs/components/Image',
  component: ComponentCreator('/docs/components/Image'),
  exact: true,
  
},
{
  path: '/docs/components/Input',
  component: ComponentCreator('/docs/components/Input'),
  exact: true,
  
},
{
  path: '/docs/components/InputField',
  component: ComponentCreator('/docs/components/InputField'),
  exact: true,
  
},
{
  path: '/docs/components/Link',
  component: ComponentCreator('/docs/components/Link'),
  exact: true,
  
},
{
  path: '/docs/components/Modal',
  component: ComponentCreator('/docs/components/Modal'),
  exact: true,
  
},
{
  path: '/docs/components/PseudoBox',
  component: ComponentCreator('/docs/components/PseudoBox'),
  exact: true,
  
},
{
  path: '/docs/components/Radio',
  component: ComponentCreator('/docs/components/Radio'),
  exact: true,
  
},
{
  path: '/docs/components/Select',
  component: ComponentCreator('/docs/components/Select'),
  exact: true,
  
},
{
  path: '/docs/components/Spinner',
  component: ComponentCreator('/docs/components/Spinner'),
  exact: true,
  
},
{
  path: '/docs/components/Stack',
  component: ComponentCreator('/docs/components/Stack'),
  exact: true,
  
},
{
  path: '/docs/components/Table',
  component: ComponentCreator('/docs/components/Table'),
  exact: true,
  
},
{
  path: '/docs/components/Tag',
  component: ComponentCreator('/docs/components/Tag'),
  exact: true,
  
},
{
  path: '/docs/components/TagsInput',
  component: ComponentCreator('/docs/components/TagsInput'),
  exact: true,
  
},
{
  path: '/docs/components/Text',
  component: ComponentCreator('/docs/components/Text'),
  exact: true,
  
},
{
  path: '/docs/doc1',
  component: ComponentCreator('/docs/doc1'),
  exact: true,
  
},
{
  path: '/docs/doc2',
  component: ComponentCreator('/docs/doc2'),
  exact: true,
  
},
{
  path: '/docs/doc3',
  component: ComponentCreator('/docs/doc3'),
  exact: true,
  
},
{
  path: '/docs/examples/Buttons',
  component: ComponentCreator('/docs/examples/Buttons'),
  exact: true,
  
},
{
  path: '/docs/examples/Cards',
  component: ComponentCreator('/docs/examples/Cards'),
  exact: true,
  
},
{
  path: '/docs/examples/Forms',
  component: ComponentCreator('/docs/examples/Forms'),
  exact: true,
  
},
{
  path: '/docs/examples/Modals',
  component: ComponentCreator('/docs/examples/Modals'),
  exact: true,
  
},
{
  path: '/docs/examples/Navigation',
  component: ComponentCreator('/docs/examples/Navigation'),
  exact: true,
  
},
{
  path: '/docs/getting-started',
  component: ComponentCreator('/docs/getting-started'),
  exact: true,
  
},
{
  path: '/docs/mdx',
  component: ComponentCreator('/docs/mdx'),
  exact: true,
  
}],
},
  
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
