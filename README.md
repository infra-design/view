# infra-view

Create your UI in a simple way.

## Installation

```
npm install infra-view
```

```
yarn add infra-view
```

```
pnpm add infra-view
```

## Components

### Base

#### View

Try to use full spellings instead of abbreviations, which will reduce the mental burden when developing. And we provide intelligent completions, so the time spent using abbreviations and full spellings is not too different.

```jsx
import { View } from 'infra-view'

export const App = () => {
  return (
    <View
      display='block'
      margin={100}
      width={20}
      height={20}
      background='black'
      hover={{
        background: 'red',
      }}
      md={{
        margin: 200,
        width: 30,
        height: 30,
      }}
      lg={{
        margin: 300,
        width: 30,
        height: 30,
      }}>
      UI
    </View>
  )
}
```

##### Merge and extend

```jsx
import { View } from 'infra-view'

const Component = (props) => {
  return <View margin={20} md={{ margin: 30 }} externalProps={props} />
}

export const App = () => {
  return (
    <Component padding={10} md={{ margin: 20 }}>
      UI
    </Component>
  )
}
```

##### Responsive

```jsx
import { View } from 'infra-view'

export const App = () => {
  return (
    <View
      margin={1}
      padding={1}
      md={{ margin: 2, padding: 2 }}
      lg={{ margin: 3, padding: 3 }}
      xl={{ margin: 4, padding: 4 }}
    />
  )
}
```

##### DisplayName

```jsx
import { View } from 'infra-view'

export const App = () => {
  return <View displayName='test'></View>
}
```

##### Selector

```jsx
import { Button } from 'infra-view'

export const App = (props) => {
  return (
    <Button
      color='gray'
      background='red'
      hover={{ background: 'blue' }}
      active={{ background: 'yellow' }}
      focus={{ borderColor: 'green' }}>
      {props.children}
    </Button>
  )
}
```

##### As

Easy switch between components. Defaults to `div`.

```jsx
import { View } from 'infra-view'

export const App = () => {
  return (
    <View as='div'>
      <View as='button'>Button</View>
    </View>
  )
}
```

##### Alias

```js
import { P, Span } from 'infra-view'

export const App = () => {
  return (
    <P>
      Same as use <Span>View</Span> as p.
    </P>
  )
}
```

#### Combo

```jsx
import { View } from 'infra-view'

export const App = () => {
  return (
    <>
      <View padding={[1, 2, 3, 4]}></View>
      <View
        text={{
          family: 'sans-serif',
          size: 16,
          align: 'left',
          color: 'red',
        }}>
        Text
      </View>
      <View
        background={{
          color: 'gray',
          image: 'http://www.demo.com/demo.jpg',
          repeat: 'no-repeat',
          position: 'center',
          size: 'cover',
        }}>
        Background
      </View>
      <View
        border={{
          color: 'red',
          width: 1,
          style: 'solid',
        }}>
        Border
      </View>
    </>
  )
}
```

#### Conditional

```jsx
import { View } from 'infra-view'

export const App = () => {
  return (
    <>
      <View if={true}>If</View>
      <View show={true}>Show</View>
      <View hidden={true}>Hidden</View>
    </>
  )
}
```

### Layout

We recommend to use `Layout` components to create your layout without direct use of `View` component.

#### Flex

```jsx
import { Flex } from 'infra-view'

export const App = () => {
  return (
    <Flex
      alignItems='center'
      justifyContent='space-between'
      flexDirection='row'
      md={{
        flexDirection: 'column',
      }}>
      <div>1</div>
      <div>2</div>
    </Flex>
  )
}
```

#### Grid

```jsx
import { Grid } from 'infra-view'

export const App = () => {
  return (
    <Grid
      columns={1}
      gap={20}
      md={{ columns: 2, gap: 30 }}
      lg={{ columns: 3, gap: 40 }}
      xm={{ columns: 4, gap: 50 }}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </Grid>
  )
}
```

#### Center

```jsx
import { Center } from 'infra-view'

export const App = () => {
  return (
    <Center width={20} height={20}>
      <div>UI</div>
    </Center>
  )
}
```

#### Absolute

```jsx
import { Absolute } from 'infra-view'

export const App = () => {
  return (
    <Absolute top={10} left={10}>
      <div>UI</div>
    </Absolute>
  )
}
```

#### Fixed

```jsx
import { Fixed } from 'infra-view'

export const App = () => {
  return (
    <Fixed top={0} left={0} right={0} height={200}>
      <div>UI</div>
    </Fixed>
  )
}
```

#### Container

```jsx
import { Container, View } from 'infra-view'

export const App = () => {
  return (
    <Container
      padding={10}
      margin={10}
      md={{
        padding: 20,
        margin: 20,
      }}
      lg={{
        padding: 30,
        margin: 30,
      }}>
      <View>UI</View>
    </Container>
  )
}
```

### Theme

#### Usage

```jsx
import { View, useTheme } from 'infra-view'

export const App = () => {
  const { fontSize, lineHeight } = useTheme()

  return (
    <View
      fontSize={fontSize[0]}
      lineHeight={lineHeight[1]}
      md={{
        fontSize: fontSize[2],
        lineHeight: lineHeight[3],
      }}>
      Theme
    </View>
  )
}
```

#### Create theme

```jsx
import { createTheme, baseTheme } from 'infra-view'

export const theme = createTheme(baseTheme, {
  margin: [2, 10, 20, 30],
  padding: [10, 20, 30, 40],
  fontSize: [12, 14, 16, 18],
  lineHeight: [1.5, 1.7, 1.9, 2.1],
  breakpoints: [0, 768, 1024, 1440],
})
```

#### Update theme

```jsx
import theme from 'your-theme'

theme.update({
  margin: [1, 2, 3, 4],
})
```
