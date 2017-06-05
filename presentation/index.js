// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Heading,
  Image,
  Link,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  crying: require("../assets/crying.jpg"),
  feels: require("../assets/feels.jpg"),
  fine: require("../assets/fine.jpg"),
  omg: require("../assets/omg.jpg"),
  ouch: require("../assets/ouch.jpg"),
  title: require("../assets/title.jpg")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#d65470",
  tertiary: "#1F2022",
  quaternary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>

        <Slide transition={["zoom"]} bgImage={images.title} />

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary" caps>What & why?</Heading>
          <Appear>
            <Image src={images.crying} />
          </Appear>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Link href="https://github.com/react-community/create-react-native-app" target="_blank">
            <Heading size={4} textColor="tertiary">Create React Native App</Heading>
          </Link>
          <Appear>
            <Heading size={4}>🎉</Heading>
          </Appear>
          <Appear>
            <List>
              <ListItem>Facebook & Expo</ListItem>
              <ListItem>create-react-app</ListItem>
              <Link textColor="tertiary" href="https://facebook.github.io/react-native/blog/2017/03/13/introducing-create-react-native-app.html" target="_blank">
                <ListItem>⚡Talk at React Conf '17</ListItem>
              </Link>
            </List>
          </Appear>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Link href="https://github.com/react-community/create-react-native-app" target="_blank">
            <Heading size={4} textColor="tertiary">Create React Native App</Heading>
          </Link>
          <Heading size={4}>🎉</Heading>
          <List>
            <ListItem>Minimal setup</ListItem>
            <ListItem>Test on your mobile</ListItem>
            <ListItem>Get started quickly</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Image src={images.fine} />
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
            <Link href="https://nodejs.org/en/download/" target="_blank">
              <Heading size={4} textColor="primary">node</Heading>
            </Link>
            <Heading size={4} textColor="primary">+</Heading>
            <Link href="https://expo.io/tools" target="_blank">
              <Heading size={4} textColor="primary">
                Expo 📱
              </Heading>
            </Link>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <CodePane lang="bash" source={require("raw-loader!../assets/crna-installation.example")} />
          <Appear>
            <CodePane lang="bash" source={require("raw-loader!../assets/crna-installation-npm.example")} />
          </Appear>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>How long does it take to get it running?</Quote>
            <Cite>You</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          {/* TODO: decide whether to remove or change this slide */}
          <Heading size={4} textColor="secondary" caps>Let's get started</Heading>
          <Appear>
            <Image src={images.ouch} width="50%" />
          </Appear>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Link href="http://facebook.github.io/react-native/docs/tutorial.html" target="_blank">
            <Heading size={4} textColor="primary">Official docs tutorial</Heading>
          </Link>
          <Link href="https://www.udemy.com/the-complete-react-native-and-redux-course" target="_blank">
            <Heading size={4} textColor="primary">Stephen's course</Heading>
          </Link>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Link href="https://facebook.github.io/react-native/docs/getting-started.html" target="_blank">
            <Heading size={4} textColor="primary">RN Components</Heading>
          </Link>
          <Link href="https://docs.expo.io/versions/latest/sdk/index.html" target="_blank">
            <Heading size={4} textColor="primary">Expo API</Heading>
          </Link>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Link href="https://github.com/she-dev/reactconfbr-app" target="_blank">
            <Heading size={4} textColor="primary">React Conf BR app</Heading>
            <Heading size={4} textColor="primary">made with CRNA</Heading>
          </Link>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary" caps>Limitations</Heading>
          <List textColor="primary">
            <ListItem>react-native link</ListItem>
            <ListItem>Pure JS</ListItem>
            <Appear>
              <ListItem>Eject</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary" caps>You got this, let's do it</Heading>
          {/* TODO: add image */}
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <List textColor="tertiary">
            <ListItem>Make it simple!</ListItem>
            <ListItem>Break your idea into parts</ListItem>
            <ListItem>Learn just enough to get started</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          {/* TODO: deploy on now.sh */}
          <Link href="" target="_blank">
            <Heading size={4} textColor="primary" caps>Link to this presentation</Heading>
          </Link>
          <Link href="https://github.com/she-dev/react-native-intro-feat-crna" target="_blank">
            <Heading size={4} textColor="primary" caps>Slides on GitHub</Heading>
          </Link>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary">Thank you!  💁🏼💕</Heading>
          {/* TODO: insert line break */} TODO: check them!
          <Appear>
            <Link href="https://she-dev.com" target="_blank">
              <Heading size={4} textColor="secondary">Heloá Meneses</Heading>
              <Heading size={4} textColor="primary">she-dev.com</Heading>
            </Link>
          </Appear>
          {/* TODO: check colors! */}
        </Slide>

      </Deck>
    );
  }
}


