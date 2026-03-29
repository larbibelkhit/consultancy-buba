import { Flex, Box, Text } from '@chakra-ui/react'

export default function SectionLabel({ children }: { children: string }) {
  return (
    <Flex className="section-label" align="center" gap={5} mb={14}>
      <Box className="section-label-line" w="30px" h="1px" bg="gold" opacity={0.6} />
      <Text
        className="section-label-text"
        fontSize="0.6rem"
        letterSpacing="0.35em"
        textTransform="uppercase"
        color="gold"
      >
        {children}
      </Text>
    </Flex>
  )
}
