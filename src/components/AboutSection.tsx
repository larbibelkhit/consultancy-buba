'use client'

import { useRef, useEffect, useState } from 'react'
import { Box, Grid, Heading, Text } from '@chakra-ui/react'
import { motion, useInView } from 'framer-motion'
import SectionLabel from './SectionLabel'

const stats = [
  { number: '25+', label: 'Years in the industry' },
  { number: '10+', label: 'Countries worked in' },
  { number: '20+', label: 'Restaurant openings' },
  { number: '3',   label: 'Continents' },
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

function useCountUp(target: number, inView: boolean) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!inView) return
    const duration = 1400
    const startTime = performance.now()
    function tick(now: number) {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - (1 - progress) ** 3
      setValue(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, target])
  return value
}

function StatCard({ stat }: { stat: { number: string; label: string } }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })
  const numericTarget = parseInt(stat.number.replace(/\D/g, ''), 10)
  const suffix = stat.number.replace(/\d/g, '')
  const count = useCountUp(numericTarget, inView)

  return (
    <Box ref={ref} className="about-stat-item" bg="panel" px={8} py={9}>
      <Text
        fontFamily="heading"
        fontSize="3.2rem"
        fontWeight="300"
        color="gold"
        lineHeight={1}
      >
        {count}{suffix}
      </Text>
      <Text
        mt={2}
        fontSize="0.65rem"
        letterSpacing="0.2em"
        textTransform="uppercase"
        color="muted"
      >
        {stat.label}
      </Text>
    </Box>
  )
}

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

      <motion.div {...fadeUp()}>
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
      </motion.div>

      <Grid
        className="about-body"
        templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
        gap={{ base: 10, lg: 20 }}
        mt={14}
        alignItems="start"
      >
        {/* Copy */}
        <Box className="about-copy">
          <motion.div {...fadeUp(0.05)}>
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
          </motion.div>

          <motion.div {...fadeUp(0.1)}>
            <Text fontSize="0.95rem" color="muted" lineHeight={1.9} mb={6} fontWeight="300">
              Born in Morocco and shaped by the demanding standards of London&apos;s fine
              dining circuit, Bubker rose to become Global Executive Head Chef for the
              acclaimed Sumosan group, overseeing the opening and operation of
              restaurants across Europe, the Middle East, and beyond.
            </Text>
          </motion.div>

          <motion.div {...fadeUp(0.15)}>
            <Text fontSize="0.95rem" color="muted" lineHeight={1.9} mb={6} fontWeight="300">
              His expertise spans every dimension of the restaurant: from the creative
              architecture of a menu to the invisible infrastructure that keeps a
              kitchen — and a business — running at the highest level. He now brings
              that knowledge to bear through Buba Consultancy.
            </Text>
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{
              transformOrigin: 'left',
              width: '40px',
              height: '1px',
              background: 'rgba(184,115,51,0.4)',
              margin: '40px 0',
            }}
          />

          <motion.div {...fadeUp(0.2)}>
            <Text fontSize="0.95rem" color="muted" lineHeight={1.9} fontWeight="300">
              Bubker&apos;s approach is hands-on and uncompromising. He believes that a
              restaurant&apos;s lasting success is built in the details — in the quality of
              the team assembled, the coherence of the menu, and the operational rigour
              behind every service.
            </Text>
          </motion.div>
        </Box>

        {/* Stats grid */}
        <Grid className="about-stats" templateColumns="1fr 1fr" gap="1px" bg="border" border="1px solid" borderColor="border">
          {stats.map((s) => (
            <StatCard key={s.label} stat={s} />
          ))}
        </Grid>
      </Grid>
    </Box>
  )
}
