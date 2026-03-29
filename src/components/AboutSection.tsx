import { Box, Grid, Heading, Text } from '@chakra-ui/react'
import SectionLabel from './SectionLabel'

const stats = [
  { number: '25+', label: 'Years in the industry' },
  { number: '10+', label: 'Countries worked in' },
  { number: '20+', label: 'Restaurant openings' },
  { number: '3',   label: 'Continents' },
]

export default function AboutSection() {
  return (
    <Box
      id="about"
      as="section"
      className="about-section"
      scrollMarginTop="80px"
      px={{ base: 8, md: 16 }}
      py={{ base: 20, md: 32 }}
      bg="deep"
      borderTop="1px solid"
      borderBottom="1px solid"
      borderColor="border"
    >
      <SectionLabel>About</SectionLabel>

      <Heading
        className="about-headline"
        fontFamily="heading"
        fontWeight="300"
        fontSize={{ base: '2.2rem', md: '3.2rem', lg: '3.8rem' }}
        lineHeight={1.15}
        color="ivory"
      >
        A career built across
        <br />
        <Box as="em" fontStyle="italic" color="gold">continents and kitchens.</Box>
      </Heading>

      <Grid
        className="about-body"
        templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
        gap={{ base: 10, lg: 20 }}
        mt={14}
        alignItems="start"
      >
        {/* Copy */}
        <Box className="about-copy">
          <Text
            fontFamily="heading"
            fontSize={{ base: '1.1rem', md: '1.35rem' }}
            fontWeight="400"
            color="ivory"
            lineHeight={1.6}
            mb={6}
          >
            Bubker Belkhit is one of the most experienced restaurant operators working
            in hospitality consultancy today — a chef who has spent more than two
            decades not just cooking, but building.
          </Text>
          <Text fontSize="0.95rem" color="muted" lineHeight={1.9} mb={6} fontWeight="300">
            Born in Morocco and shaped by the demanding standards of London's fine
            dining circuit, Bubker rose to become Global Executive Head Chef for the
            acclaimed Sumosan group, overseeing the opening and operation of
            restaurants across Europe, the Middle East, and beyond.
          </Text>
          <Text fontSize="0.95rem" color="muted" lineHeight={1.9} mb={6} fontWeight="300">
            His expertise spans every dimension of the restaurant: from the creative
            architecture of a menu to the invisible infrastructure that keeps a
            kitchen — and a business — running at the highest level. He now brings
            that knowledge to bear through Buba Consultancy.
          </Text>
          <Box w="40px" h="1px" bg="gold" opacity={0.4} my={10} />
          <Text fontSize="0.95rem" color="muted" lineHeight={1.9} fontWeight="300">
            Bubker's approach is hands-on and uncompromising. He believes that a
            restaurant's lasting success is built in the details — in the quality of
            the team assembled, the coherence of the menu, and the operational rigour
            behind every service.
          </Text>
        </Box>

        {/* Stats grid */}
        <Grid className="about-stats" templateColumns="1fr 1fr" gap="1px" bg="border" border="1px solid" borderColor="border">
          {stats.map((s) => (
            <Box key={s.label} className="about-stat-item" bg="panel" px={8} py={9}>
              <Text
                fontFamily="heading"
                fontSize="3.2rem"
                fontWeight="300"
                color="gold"
                lineHeight={1}
              >
                {s.number}
              </Text>
              <Text
                mt={2}
                fontSize="0.65rem"
                letterSpacing="0.2em"
                textTransform="uppercase"
                color="muted"
              >
                {s.label}
              </Text>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Box>
  )
}
