import { Box, Heading, Text, Link } from '@chakra-ui/react'

export default function HeroSection() {
  return (
    <Box
      id="hero"
      as="section"
      className="hero-section"
      minH="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="flex-end"
      px={{ base: 8, md: 16 }}
      pt="80px"
      pb={{ base: 20, md: 28 }}
      position="relative"
      overflow="hidden"
    >
      {/* Background glow */}
      <Box
        className="hero-bg-glow"
        position="absolute"
        inset={0}
        bgGradient="radial(ellipse at 70% 40%, rgba(184,115,51,0.07) 0%, transparent 60%)"
        pointerEvents="none"
      />
      <Box
        position="absolute"
        inset={0}
        bgGradient="radial(ellipse at 20% 80%, rgba(184,115,51,0.04) 0%, transparent 50%)"
        pointerEvents="none"
      />

      <Text
        className="hero-tagline"
        fontSize="0.65rem"
        letterSpacing="0.35em"
        textTransform="uppercase"
        color="gold"
        mb={5}
      >
        Restaurant Consultancy &nbsp;·&nbsp; London
      </Text>

      <Heading
        as="h1"
        className="hero-headline"
        fontFamily="heading"
        fontWeight="300"
        fontSize={{ base: '3.5rem', md: '5rem', lg: '7rem' }}
        lineHeight={1.05}
        letterSpacing="-0.01em"
        color="ivory"
        maxW="800px"
      >
        Building restaurants
        <br />
        that{' '}
        <Box as="em" fontStyle="italic" color="gold">
          endure.
        </Box>
      </Heading>

      <Text
        className="hero-description"
        mt={10}
        maxW="480px"
        fontSize="0.9rem"
        color="muted"
        lineHeight={1.8}
        fontWeight="300"
      >
        Bubker Belkhit brings over two decades of global expertise to independent
        investors and restaurant groups looking to launch, refine, or expand their
        hospitality ventures.
      </Text>

      <Link
        className="hero-cta"
        href="#contact"
        mt={12}
        display="inline-flex"
        alignItems="center"
        gap={4}
        fontSize="0.7rem"
        letterSpacing="0.25em"
        textTransform="uppercase"
        color="gold"
        _hover={{ textDecoration: 'none', gap: '24px' }}
        transition="gap 0.3s"
        role="group"
      >
        Begin a conversation
        <Box
          as="span"
          display="block"
          w="40px"
          h="1px"
          bg="gold"
          transition="width 0.3s"
          _groupHover={{ width: '56px' }}
        />
      </Link>

      {/* Scroll hint */}
      <Text
        className="hero-scroll-hint"
        position="absolute"
        bottom={10}
        right={16}
        sx={{ writingMode: 'vertical-rl' }}
        fontSize="0.6rem"
        letterSpacing="0.3em"
        textTransform="uppercase"
        color="smMuted"
        display={{ base: 'none', md: 'block' }}
      >
        Scroll
      </Text>
    </Box>
  )
}
