<h1 align="center">
  🦉 Minerva UI
</h1>

![npm](https://img.shields.io/npm/v/minerva-ui) ![size](https://badgen.net/bundlephobia/minzip/minerva-ui) ![license](https://img.shields.io/github/license/cratebind/minerva-ui)

# [Documentation](https://minerva-ui.netlify.com)

[![Edit minerva-ui-demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/vigorous-chatterjee-y1zi5?fontsize=14&hidenavigation=1&theme=dark)

## Get started

Minerva UI is a reusable component library to help build UIs faster. This library aims to be highly composable, declarative and accessible.

## Install
`npm install --save minerva-ui`
or
`yarn add minerva-ui`

### Goals:
- Highly Composable
- Easy to customize

## Usage

First add the `<ThemeProvider />` and `<GlobalStyles />` to the root of your app:

GlobalStyles is optional but highly recommended, it includes the CSS reset and styles from [Tailwind CSS.](https://tailwindcss.com/docs/preflight)

```jsx live=false
const App = () => (
  <ThemeProvider>
    {/* optional but recommended */}
    <GlobalStyles />
  </ThemeProvider>
)
```

Then import components you want into your UI:

```js
import { Checkbox } from 'minerva-ui';
```

And use them:

```jsx
() => {
  const [checked, setChecked] = React.useState(false);
  return (
    <Checkbox
      checked={checked}
      onChange={() => setChecked(!checked)}
    >
      Stay Logged In
    </Checkbox>
  )
}
```

## Utility Props

Utility props are provided as aliases for most components. The style is heavily influenced by [Tailwind CSS](https://tailwindcss.com/docs/font-size).

For example:
```jsx
() => (
  <>
    {/* enter a custom pixel value */}
    <Button fontSize="12px">Save</Button>
    {/* or enter the value named "sm" in the theme, which is .875rem by default */}
    <Button fontSize="lg">Save</Button>
  </>
)
```

## Styling Props Example

Here's the ["Card" example](https://tailwindcss.com/components/cards) by Tailwind recreated using this API:

```jsx
() => (
  <Flex
    flexDirection="column"
    boxShadow="lg"
    borderRadius="md"
    maxWidth="24rem"
    overflow="hidden"
  >
    <img
      src="https://tailwindcss.com/img/card-top.jpg"
      alt="Sunset in the mountains"
    />
    <Flex flexDirection="column" px={6} py={4}>
      <Text fontWeight="bold" fontSize="xl" mb={2} color="gray.700">The Coldest Sunset</Text>
      <Text color="gray.700" lineHeight="normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</Text>
    </Flex>
    <Flex px={6} py={4}>
      <Block color="gray.700" bg="gray.200" borderRadius="full" px={3} py={1} mr={2}>
        #photography
      </Block>
      <Block color="gray.700" bg="gray.200" borderRadius="full" px={3} py={1} mr={2}>
        #travel
      </Block>
      <Block color="gray.700" bg="gray.200" borderRadius="full" px={3} py={1}>
        #winter
      </Block>
    </Flex>
  </Flex>
)
```

Once you've settled on your styles, you can then easily extract components into your own custom components without sacrificing control:

```jsx isManual=true
// make sure to pass children and "forward" all props to your component
const Tag = ({ children, ...props }) => (
  <Block color="gray.700" bg="gray.200" borderRadius="full" px={3} py={1} {...props}>
    {children}
  </Block>
)

render(
  <Flex>
    <Tag>High Priority</Tag>
    {/* by passing props down we can still style our custom component */}
    <Tag bg="indigo.600" color="#fff" ml={2}>Customized Tag</Tag>
  </Flex>
);
```

### Local Development

1. Clone Repo
2. Run `yarn install`
3. Run `yarn storybook` to open a local storybook server for development

### Influences:

[Ryan Florence "Reach UI" Guidelines](https://gist.github.com/ryanflorence/e5c794e6093d16a69fa88d2112a292f7) - Great guidelines for making composable / declarative React APIs
[Tailwind CSS](https://tailwindcss.com/) - Utility-based CSS framework without pre-packaged styles
[Chakra UI](https://chakra-ui.com/) - Batteries-included React Component library

### Tools:
[Styled Components](https://styled-components.com/)
[Styled System](https://styled-system.com/)
[Jest](https://jestjs.io/)
[Typescript](https://www.typescriptlang.org/)
[TSDX](https://github.com/jaredpalmer/tsdx)
