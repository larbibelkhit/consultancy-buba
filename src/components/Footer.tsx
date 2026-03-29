import { Box, Flex, Text } from '@chakra-ui/react'

export default function Footer() {
  return (
    <Box
      as="footer"
      className="footer"
      borderTop="1px solid"
      borderColor="border"
      px={{ base: 8, md: 16 }}
      py={10}
    >
      <Flex
        className="footer-inner"
        justify="space-between"
        align="center"
        flexDirection={{ base: 'column', md: 'row' }}
        gap={4}
        textAlign={{ base: 'center', md: 'left' }}
      >
        <Text
          className="footer-brand"
          fontFamily="heading"
          fontSize="0.85rem"
          letterSpacing="0.15em"
          textTransform="uppercase"
          color="muted"
        >
          Buba Consultancy &nbsp;·&nbsp; Bubker Belkhit
        </Text>
        <Text className="footer-copyright" fontSize="0.65rem" letterSpacing="0.1em" color="smMuted">
          &copy; {new Date().getFullYear()} Buba Consultancy. All rights reserved.
        </Text>
      </Flex>
    </Box>
  )
}
