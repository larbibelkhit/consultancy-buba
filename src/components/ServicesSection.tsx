'use client'

import { Box, Grid, Heading, Text, List, ListItem } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import SectionLabel from './SectionLabel'

const services = [
  {
    number: '01',
    title: 'Restaurant Setup & New Openings',
    desc: 'End-to-end consultancy for new restaurant projects, from initial concept definition through to opening night and beyond.',
    items: [
      'Concept development & positioning',
      'Kitchen design & equipment specification',
      'Pre-opening operational planning',
      'Launch strategy & soft opening management',
      'Supplier sourcing & procurement',
    ],
  },
  {
    number: '02',
    title: 'Menu Design & Development',
    desc: 'Menus that reflect a clear culinary identity, balance commercial performance with creativity, and evolve with your business.',
    items: [
      'Signature menu creation',
      'Seasonal menu planning',
      'Food cost analysis & GP optimisation',
      'Kitchen workflow design',
      'Tasting & sign-off process management',
    ],
  },
  {
    number: '03',
    title: 'Back-Office & Staffing',
    desc: 'The team and the systems behind a successful restaurant are as important as what happens on the plate. Bubker builds both.',
    items: [
      'Senior kitchen hire & team structuring',
      'Front-of-house staffing strategy',
      'Training programmes & SOPs',
      'Operational systems & reporting',
      'Ongoing operational review',
    ],
  },
]

const ease = [0.22, 1, 0.36, 1] as const

export default function ServicesSection() {
  return (
    <Box
      id="services"
      as="section"
      className="services-section"
      scrollMarginTop="80px"
      px={{ base: 8, md: 16 }}
      py={{ base: 20, md: 32 }}
    >
      <SectionLabel>Services</SectionLabel>

      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.75, ease }}
      >
        <Heading
          className="services-headline"
          fontFamily="heading"
          fontWeight="300"
          fontSize={{ base: '2.2rem', md: '3.2rem', lg: '3.8rem' }}
          lineHeight={1.15}
          color="ivory"
        >
          What{' '}
          <Box as="em" fontStyle="italic" color="gold">Buba Consultancy</Box>
          <br />brings to your project.
        </Heading>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.75, delay: 0.08, ease }}
      >
        <Text
          className="services-intro"
          mt={6}
          mb={16}
          maxW="600px"
          fontSize="0.95rem"
          color="muted"
          lineHeight={1.9}
          fontWeight="300"
        >
          Every engagement is bespoke. Whether you are opening your first restaurant
          or scaling a group, the consultancy is structured around your specific
          needs — from pre-launch strategy through to operational handover.
        </Text>
      </motion.div>

      <Grid
        className="services-grid"
        templateColumns={{ base: '1fr', md: '1fr 1fr', lg: 'repeat(3, 1fr)' }}
        gap="1px"
        bg="border"
        border="1px solid"
        borderColor="border"
      >
        {services.map((s, i) => (
          <motion.div
            key={s.number}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: i * 0.1, ease }}
          >
            <Box
              className="services-card"
              bg="deep"
              px={{ base: 8, md: 10 }}
              py={{ base: 10, md: 14 }}
              position="relative"
              overflow="hidden"
              role="group"
              transition="background 0.3s"
              _hover={{ bg: 'panel' }}
              _before={{
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '2px',
                height: 0,
                bg: 'gold',
                transition: 'height 0.4s ease',
              }}
              sx={{ '&:hover::before': { height: '100%' } }}
            >
              <Text
                fontFamily="heading"
                fontSize="4rem"
                fontWeight="300"
                color="border"
                lineHeight={1}
                mb={8}
                transition="color 0.3s"
                _groupHover={{ color: 'smMuted' }}
              >
                {s.number}
              </Text>

              <Heading
                as="h3"
                className="services-card-title"
                fontFamily="heading"
                fontSize="1.5rem"
                fontWeight="400"
                color="ivory"
                lineHeight={1.2}
                mb={5}
              >
                {s.title}
              </Heading>

              <Text fontSize="0.85rem" color="muted" lineHeight={1.8} fontWeight="300">
                {s.desc}
              </Text>

              <List className="services-card-list" mt={6} spacing={0}>
                {s.items.map((item) => (
                  <ListItem
                    key={item}
                    fontSize="0.8rem"
                    color="smMuted"
                    py="10px"
                    borderBottom="1px solid"
                    borderColor="border"
                    display="flex"
                    alignItems="center"
                    gap={3}
                    letterSpacing="0.03em"
                  >
                    <Box
                      as="span"
                      display="block"
                      w="4px"
                      h="4px"
                      borderRadius="full"
                      bg="gold"
                      opacity={0.6}
                      flexShrink={0}
                    />
                    {item}
                  </ListItem>
                ))}
              </List>
            </Box>
          </motion.div>
        ))}
      </Grid>
    </Box>
  )
}
