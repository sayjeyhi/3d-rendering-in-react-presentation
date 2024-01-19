import React from 'react'
import { createRoot } from 'react-dom/client'
import {
  FlexBox,
  Heading,
  CodeSpan,
  OrderedList,
  ListItem,
  Appear,
  Slide,
  Deck,
  Text,
  Grid,
  Box,
  Image,
  CodePane,
  MarkdownSlide,
  MarkdownSlideSet,
  codePaneThemes,
  FullScreen,
  fadeTransition,
  useSteps,
} from 'spectacle'

import { Intro } from './examples/0-intro'
import Geometry from './examples/0-Geomertry'
import { CameraView } from './examples/CameraView'

const SlideFragments = () => {
  const step = useSteps()
  return (
    <>
      <Text>This is also a slide fragment. {step.placeholder}</Text>
      <Appear>
        <Text>This item shows up!</Text>
      </Appear>
      <Appear>
        <Text>This item also shows up!</Text>
      </Appear>
    </>
  )
}

const theme = {
  colors: {
    primary: '#ea6868',
    secondary: '#fff',
    tertiary: '#000',
  },
}

const Presentation = () => (
  <Deck
    transition={fadeTransition}
    theme={theme}
    template={({ slideNumber, numberOfSlides }) => (
      <FlexBox
        justifyContent="space-between"
        position="absolute"
        bottom={0}
        width={1}
      >
        <Box padding="0 1em">
          <FullScreen />
        </Box>
        <Box
          padding="1em"
          style={{ position: 'relative', bottom: '-20px', opacity: '0.5' }}
        >
          <Text color="#fff" fontSize={12}>
            Slide {slideNumber} of {numberOfSlides}
          </Text>
        </Box>
      </FlexBox>
    )}
  >
    <Slide>
      <FlexBox height="100%">
        <Heading>3D Rendering in react</Heading>
      </FlexBox>
      <FlexBox paddingTop={0} flex={1}>
        <Image
          style={{
            borderRadius: '50%',
            overflow: 'hidden',
            filter: 'grayscale(1)',
          }}
          src={'https://avatars.githubusercontent.com/u/6254009?v=4'}
          width={60}
        />
        <Text height color="#fff" fontSize={22}>
          Jafar Rezaei <br />
          <span style={{ fontSize: 14, opacity: 0.6 }}>January 2024</span>
        </Text>
      </FlexBox>
    </Slide>

    <Slide>
      <Text style={{ position: 'absolute' }} color="#fff">
        WebGL JavaScript API for rendering interactive 2D and 3D graphics inside
        an HTML &lt;canvas&gt; element. Browser Support WebGL is supported in
        the following browsers:
        <ul>
          <li>Chrome 9+</li>
          <li>Firefox 4+</li>
          <li>Opera 12+</li>
          <li>Safari 5.1+</li>
          <li>Internet Explorer 11+</li>
        </ul>
      </Text>
    </Slide>

    <Slide>
      <Text
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -70%)',
          fontWeight: 900,
        }}
        color="yellow"
      >
        Thanks!
      </Text>
      <CameraView />
    </Slide>

    <Slide>
      <Geometry />
      <Text style={{ position: 'absolute' }} color="#fff">
        Geometries
      </Text>
    </Slide>

    <Slide>
      <iframe
        style={{ height: '100%' }}
        src="https://threejs.org"
        frameBorder="0"
      />
    </Slide>

    <Slide>
      <Intro />
      <Text style={{ position: 'absolute' }} color="#fff">
        Web Ge El
      </Text>
    </Slide>

    <Slide>
      <Heading>Animated Elements</Heading>
      <OrderedList>
        <Appear>
          <ListItem>Elements can animate in!</ListItem>
        </Appear>
        <Appear>
          <ListItem>Out of order</ListItem>
        </Appear>
        <Appear priority={0}>
          <ListItem>
            Just identify the order with the prop <CodeSpan>priority</CodeSpan>!
          </ListItem>
        </Appear>
      </OrderedList>
    </Slide>
    <Slide>
      <FlexBox>
        <Text>These</Text>
        <Text>Text</Text>
        <Text color="secondary">Items</Text>
        <Text fontWeight="bold">Flex</Text>
      </FlexBox>
      <Grid gridTemplateColumns="1fr 2fr" gridColumnGap={15}>
        <Box backgroundColor="primary">
          <Text color="secondary">Single-size Grid Item</Text>
        </Box>
        <Box backgroundColor="secondary">
          <Text>Double-size Grid Item</Text>
        </Box>
      </Grid>
      <Grid
        gridTemplateColumns="1fr 1fr 1fr"
        gridTemplateRows="1fr 1fr 1fr"
        gridRowGap={1}
      >
        {Array(9)
          .fill('')
          .map((_, index) => (
            <FlexBox paddingTop={0} key={`formidable-logo-${index}`} flex={1}>
              <Image
                src={'https://avatars.githubusercontent.com/u/6254009?v=4'}
                width={100}
              />
            </FlexBox>
          ))}
      </Grid>
    </Slide>
    <Slide>
      <SlideFragments />
    </Slide>
    <Slide>
      <CodePane language="jsx" theme={codePaneThemes.a11yDark}>{`
        import { createClient, Provider } from 'urql';

        const client = createClient({ url: 'https://0ufyz.sse.codesandbox.io' });

        const App = () => (
          <Provider value={client}>
            <Todos />
          </Provider>
        );
        `}</CodePane>
      <Box height={20} />
      <CodePane language="java" showLineNumbers={false}>{`
        public class NoLineNumbers {
          public static void main(String[] args) {
            System.out.println("Hello");
          }
        }
        `}</CodePane>
    </Slide>
    <div>
      <Slide>
        <Heading>This is a slide embedded in a div</Heading>
      </Slide>
    </div>
    <MarkdownSlide componentProps={{ color: 'yellow' }}>
      {`
        # This is a Markdown Slide

        - You can pass props down to all elements on the slide.
        - Just use the \`componentProps\` prop.
        `}
    </MarkdownSlide>
    <MarkdownSlide animateListItems>
      {`
       # This is also a Markdown Slide

       It uses the \`animateListItems\` prop.

       - Its list items...
       - ...will appear...
       - ...one at a time.
      `}
    </MarkdownSlide>
    <Slide>
      <Grid
        gridTemplateColumns="50% 50%"
        gridTemplateRows="50% 50%"
        height="100%"
      >
        <FlexBox alignItems="center" justifyContent="center">
          <Heading>This is a 4x4 Grid</Heading>
        </FlexBox>
        <FlexBox alignItems="center" justifyContent="center">
          <Text textAlign="center">
            With all the content aligned and justified center.
          </Text>
        </FlexBox>
        <FlexBox alignItems="center" justifyContent="center">
          <Text textAlign="center">
            It uses Spectacle <CodeSpan>{'<Grid />'}</CodeSpan> and{' '}
            <CodeSpan>{'<FlexBox />'}</CodeSpan> components.
          </Text>
        </FlexBox>
        <FlexBox alignItems="center" justifyContent="center">
          <Box width={200} height={200} backgroundColor="secondary" />
        </FlexBox>
      </Grid>
    </Slide>
    <MarkdownSlideSet>
      {`
        # This is the first slide of a Markdown Slide Set
        ---
        # This is the second slide of a Markdown Slide Set
        `}
    </MarkdownSlideSet>
  </Deck>
)

createRoot(document.getElementById('app')!).render(<Presentation />)
