import { Box, FlexBox, FullScreen, Text } from 'spectacle'
import React from 'react'

type Props = {
  slideNumber: number
  numberOfSlides: number
}

export function Template({ slideNumber, numberOfSlides }: Props) {
  if (slideNumber === 1 || slideNumber === numberOfSlides) {
    return null
  }
  return (
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
  )
}
