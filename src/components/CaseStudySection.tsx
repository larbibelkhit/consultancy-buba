'use client'

import { Box, Grid, Heading, Text, Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import SectionLabel from './SectionLabel'

const locations = [
  { city: 'London, United Kingdom',  detail: 'Est. 2002' },
  { city: 'Moscow, Russia',          detail: 'Est. 1996' },
  { city: 'Courchevel, France',      detail: 'Six Senses Residences' },
  { city: 'Montenegro',              detail: 'Dukley Hotel & Resort' },
  { city: 'Berlin, Germany',         detail: 'KaDeWe Berlin' },
  { city: 'Riyadh, Saudi Arabia',    detail: 'Est. 2022' },
  { city: 'Bahrain',                 detail: 'Est. 2024' },
  { city: 'Athens, Greece',          detail: 'Est. 2025' },
  { city: 'Crete, Greece',           detail: 'Elounda Crete' },
  { city: 'Nicosia, Cyprus',         detail: 'Est. 2026' },
]

const ease = [0.22, 1, 0.36, 1] as const

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 22 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true as const },
    transition: { duration: 0.75, delay, ease },
  }
}

export default function CaseStudySection() {
  return (
    <Box
      id="case-study"
      as="section"
      className="case-study-section"
      scrollMarginTop="80px"
      px={{ base: 8, md: 16 }}
      py={{ base: 20, md: 32 }}
      bg="deep"
      borderTop="1px solid"
      borderBottom="1px solid"
      borderColor="border"
    >
      <SectionLabel>Case Study</SectionLabel>

      {/* Header row */}
      <Grid
        className="case-study-header"
        templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
        gap={{ base: 8, lg: 20 }}
        alignItems="end"
        mb={16}
      >
        <motion.div {...fadeUp()}>
          <Heading
            className="case-study-headline"
            fontFamily="heading"
            fontWeight="300"
            fontSize={{ base: '2.2rem', md: '3.2rem', lg: '3.8rem' }}
            lineHeight={1.15}
            color="ivory"
          >
            A partnership
            <br />
            built on{' '}
            <Box as="em" fontStyle="italic" color="gold">trust.</Box>
          </Heading>
        </motion.div>

        <motion.div {...fadeUp(0.1)}>
          <Box className="case-study-client">
            <Text
              fontSize="0.85rem"
              fontWeight="400"
              letterSpacing="0.2em"
              textTransform="uppercase"
              color="gold"
              mb={3}
            >
              Sumosan &nbsp;·&nbsp; 25+ Years
            </Text>
            <Text fontSize="0.85rem" color="muted" lineHeight={1.7} maxW="400px" fontWeight="300">
              From a single London address to a globally recognised Japanese restaurant
              group — Bubker has been the culinary architect behind every opening.
            </Text>
          </Box>
        </motion.div>
      </Grid>

      {/* Body */}
      <Grid
        className="case-study-body"
        templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
        gap={{ base: 10, lg: 20 }}
        alignItems="start"
      >
        {/* Narrative */}
        <Box className="case-study-narrative">
          <motion.div {...fadeUp(0.05)}>
            <Text
              fontFamily="heading"
              fontSize={{ base: '1.1rem', md: '1.25rem' }}
              fontWeight="400"
              color="ivory"
              lineHeight={1.6}
              mb={6}
            >
              In 2002, Bubker joined the Sumosan group at their celebrated Albemarle
              Street address in London — the restaurant that would become the foundation
              for one of the world&apos;s most recognised contemporary Japanese brands.
            </Text>
          </motion.div>

          <motion.div {...fadeUp(0.1)}>
            <Text fontSize="0.95rem" color="muted" lineHeight={1.9} mb={6} fontWeight="300">
              Over more than two decades, he has served as Executive Head Chef and Global
              Executive Head Chef, leading the development of the culinary programme
              across each new territory the group entered. His role extended far beyond
              the kitchen: overseeing the operational setup of new venues, building and
              training local teams, developing location-specific menus, and ensuring
              consistency across a portfolio spanning multiple continents.
            </Text>
          </motion.div>

          <motion.div {...fadeUp(0.15)}>
            <Text fontSize="0.95rem" color="muted" lineHeight={1.9} fontWeight="300">
              The relationship is a testament to what sustained, deep consultancy looks
              like — not a brief engagement, but a genuine long-term partnership that has
              shaped the identity of an entire hospitality brand.
            </Text>
          </motion.div>
        </Box>

        {/* Location table */}
        <motion.div {...fadeUp(0.1)}>
          <Box className="case-study-locations">
            <Text
              fontSize="0.65rem"
              letterSpacing="0.2em"
              textTransform="uppercase"
              color="smMuted"
              mb={4}
            >
              Locations opened or operated
            </Text>
            <Box
              className="case-study-locations-table"
              display="flex"
              flexDirection="column"
              gap="1px"
              bg="border"
              border="1px solid"
              borderColor="border"
            >
              {locations.map((loc) => (
                <Flex
                  key={loc.city}
                  className="case-study-location-row"
                  bg="panel"
                  px={7}
                  py={5}
                  justify="space-between"
                  align="center"
                  gap={5}
                  transition="all 0.2s ease"
                  _hover={{
                    bg: 'rgba(184,115,51,0.06)',
                    boxShadow: 'inset 2px 0 0 rgba(184,115,51,0.7)',
                    cursor: 'default',
                  }}
                >
                  <Text fontFamily="heading" fontSize="1.05rem" fontWeight="400" color="ivory">
                    {loc.city}
                  </Text>
                  {loc.detail && (
                    <Text fontSize="0.65rem" letterSpacing="0.2em" color="smMuted" whiteSpace="nowrap">
                      {loc.detail}
                    </Text>
                  )}
                </Flex>
              ))}
            </Box>
          </Box>
        </motion.div>
      </Grid>
    </Box>
  )
}
