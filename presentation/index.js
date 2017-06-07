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
  Slide
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
  fine: require("../assets/fine.jpg"),
  github: require("../assets/github.png"),
  rn: require("../assets/react-native-icon.png"),
  title: require("../assets/title.jpg"),
  twitter: require("../assets/twitter.png"),
  homeandroid: require("../assets/home-android.png"),
  homedraft: require("../assets/homedraft.jpg"),
  homeios: require("../assets/home-ios.png"),
  locationandroid: require("../assets/location-android.png"),
  locationdraft: require("../assets/location-draft.jpg"),
  locationios: require("../assets/location-ios.png"),
  scheduleandroid: require("../assets/schedule-android.png"),
  scheduledraft: require("../assets/schedule-draft.jpg")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#df2668",
  tertiary: "#1F2022"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={450} theme={theme}>

        <Slide transition={["zoom"]} bgColor="tertiary" bgImage={images.title} />

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary" caps>What & why?</Heading>
          <Appear>
            <Image src={images.rn} />
          </Appear>
          <Heading size={4} textColor="tertiary">hey there dude/gal/person</Heading>
        </Slide>

        <Slide transition={["none"]} bgColor="tertiary">
          <Heading size={4} textColor="primary" caps>What & why?</Heading>
          <Image src={images.rn} />
          <Link href="https://www.facebook.com/events/120474378503412/permalink/126750267875823/" target="_blank">
            <Heading size={4} textColor="primary">@sseraphini talk on RN</Heading>
          </Link>
        </Slide>

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
            <Appear><ListItem>Minimal setup</ListItem></Appear>
            <Appear><ListItem>Test on your mobile</ListItem></Appear>
            <Appear><ListItem>Get started quickly</ListItem></Appear>
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
          <Heading size={4} textColor="secondary" caps>Let's talk code</Heading>
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

        <Slide transition={["fade"]} bgColor="primary">
          <Link href="https://github.com/she-dev/reactconfbr-app" target="_blank">
            <Heading size={4} textColor="secondary">React Conf BR app</Heading>
            <Heading size={4} textColor="secondary">with CRNA</Heading>
          </Link>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Appear>
            <Image src={images.homedraft} padding="0 50px" />
          </Appear>
          <Appear>
            <Image src={images.locationdraft} />
          </Appear>
        </Slide>

        <Slide transition={["none"]} bgColor="tertiary" >
          <Appear>
            <Image src={images.scheduledraft} padding="0 50px 50px" />
          </Appear>
          <Appear>
            <Image src={images.scheduleandroid} />
          </Appear>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Appear>
            <Image src={images.homeandroid} padding="0 50px" />
          </Appear>
          <Appear>
            <Image src={images.homeios} />
          </Appear>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Appear>
            <Image src={images.locationandroid} padding="0 50px" />
          </Appear>
          <Appear>
            <Image src={images.locationios} />
          </Appear>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary" caps>Limitations</Heading>
          <List textColor="primary">
            <Appear>
              <ListItem>react-native link</ListItem>
            </Appear>
            <Appear>
              <ListItem>Pure JS</ListItem>
            </Appear>
            <Appear>
              <ListItem>Eject</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} textColor="secondary" caps>You got this, let's do it</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <List textColor="primary">
            <Appear>
              <ListItem>Make it simple!</ListItem>
            </Appear>
            <Appear>
              <ListItem>Break your idea into parts</ListItem>
            </Appear>
            <Appear>
              <ListItem>Learn just enough to get started</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Link href="https://intro-create-react-native-app.now.sh" target="_blank">
            <Heading size={4} textColor="primary" caps>Link to this presentation</Heading>
          </Link>
          <Link href="https://github.com/she-dev/react-native-intro-feat-crna" target="_blank">
            <Heading size={4} textColor="primary" caps>Slides on GitHub</Heading>
          </Link>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary">
          <Appear>
            <Heading size={4} textColor="primary">Thank you!  💁🏼💕</Heading>
          </Appear>
          <Heading size={4} textColor="secondary">follow me on GitHub</Heading>
          <Link href="https://she-dev.com" target="_blank">
            <Heading size={4} textColor="primary">Heloá Meneses</Heading>
            <Heading size={4} textColor="primary">she-dev.com</Heading>
          </Link>
          <Link href="https://twitter.com/_shedev" target="_blank">
            <Heading size={4} textColor="primary"><Image src={images.twitter} margin="-0.5rem 0.8rem" width="6%" />_shedev</Heading>
          </Link>
          <Link href="https://github.com/she-dev" target="_blank">
            <Heading size={4} textColor="primary"><Image src={images.github} margin="-0.5rem 1rem" width="6%" />she-dev</Heading>
          </Link>
        </Slide>

      </Deck>
    );
  }
}


