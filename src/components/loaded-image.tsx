import * as React from "react";
import { Box, Center, Image, Spinner } from "@chakra-ui/react";

class LoadedImage extends React.Component<any, { loaded: boolean }> {
  constructor(props: any) {
    super(props);
    this.setState({ loaded: false });

    this.removeSpinner = this.removeSpinner.bind(this);
  }

  removeSpinner() {
    setTimeout(() => {
      this.setState({ loaded: false });
    }, 4000);
  }

  render() {
    const usedProps = {
      ...((!this.state || this.state.loaded) ? {} : { filter: "blur(4px)" }),
      ...this.props,
    };

    return <Box position="relative">
      {this.state && !this.state.loaded &&
        <Center position="absolute" w="100%" height="100%" zIndex="modal">
          <Spinner />
        </Center>}
      <Image
        {...usedProps}
        onLoad={this.removeSpinner}
      />
    </Box>;
  }
}

export default LoadedImage;