'use client'

import { useState } from 'react'
import {
  Box, Grid, Heading, Text, FormControl, FormLabel,
  Input, Textarea, Select, Button,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import SectionLabel from './SectionLabel'

const ease = [0.22, 1, 0.36, 1] as const

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 22 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true as const },
    transition: { duration: 0.75, delay, ease },
  }
}

export default function ContactSection() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <Box
      id="contact"
      as="section"
      className="contact-section"
      scrollMarginTop="80px"
      px={{ base: 8, md: 16 }}
      py={{ base: 20, md: 32 }}
    >
      <SectionLabel>Contact</SectionLabel>

      <Grid
        className="contact-body"
        templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
        gap={{ base: 10, lg: 28 }}
        mt={4}
      >
        {/* Left */}
        <motion.div {...fadeUp()}>
          <Box className="contact-info">
            <Heading
              className="contact-headline"
              fontFamily="heading"
              fontWeight="300"
              fontSize={{ base: '2.2rem', md: '3.2rem', lg: '3.8rem' }}
              lineHeight={1.15}
              color="ivory"
            >
              Let&apos;s discuss
              <br />
              your{' '}
              <Box as="em" fontStyle="italic" color="gold">project.</Box>
            </Heading>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              style={{
                transformOrigin: 'left',
                width: '40px',
                height: '1px',
                background: 'rgba(184,115,51,0.4)',
                margin: '40px 0',
              }}
            />

            <Text fontSize="0.95rem" color="muted" lineHeight={1.9} fontWeight="300" maxW="420px">
              Buba Consultancy works with a select number of clients at any one time to
              ensure every engagement receives the attention it deserves. If you are
              planning a new restaurant or looking to strengthen an existing operation,
              Bubker would be glad to hear from you.
            </Text>

            <Box className="contact-details" mt={12} display="flex" flexDirection="column" gap={6}>
              {[
                { label: 'Based in',  value: 'London, United Kingdom' },
                { label: 'Operating', value: 'Globally' },
                { label: 'Enquiries', value: 'info@bubaconsultancy.com' },
              ].map((item) => (
                <Box key={item.label}>
                  <Text fontSize="0.6rem" letterSpacing="0.25em" textTransform="uppercase" color="smMuted" mb={1}>
                    {item.label}
                  </Text>
                  <Text fontFamily="heading" fontSize="1.1rem" fontWeight="400" color="ivory">
                    {item.value}
                  </Text>
                </Box>
              ))}
            </Box>
          </Box>
        </motion.div>

        {/* Form */}
        <motion.div {...fadeUp(0.15)}>
          <Box className="contact-form" as="form" onSubmit={handleSubmit} display="flex" flexDirection="column" gap={6}>
            <Grid templateColumns={{ base: '1fr', sm: '1fr 1fr' }} gap={4}>
              <FormControl isRequired>
                <FormLabel
                  fontSize="0.6rem"
                  letterSpacing="0.25em"
                  textTransform="uppercase"
                  color="smMuted"
                  mb={2}
                >
                  Full Name
                </FormLabel>
                <Input placeholder="Your name" borderRadius={0} />
              </FormControl>

              <FormControl isRequired>
                <FormLabel
                  fontSize="0.6rem"
                  letterSpacing="0.25em"
                  textTransform="uppercase"
                  color="smMuted"
                  mb={2}
                >
                  Email Address
                </FormLabel>
                <Input type="email" placeholder="your@email.com" borderRadius={0} />
              </FormControl>
            </Grid>

            <FormControl>
              <FormLabel
                fontSize="0.6rem"
                letterSpacing="0.25em"
                textTransform="uppercase"
                color="smMuted"
                mb={2}
              >
                Company / Project Name
              </FormLabel>
              <Input placeholder="Restaurant or group name" borderRadius={0} />
            </FormControl>

            <FormControl>
              <FormLabel
                fontSize="0.6rem"
                letterSpacing="0.25em"
                textTransform="uppercase"
                color="smMuted"
                mb={2}
              >
                Area of Interest
              </FormLabel>
              <Select placeholder="Select a service" borderRadius={0}>
                <option value="new-opening">New Restaurant Opening</option>
                <option value="menu">Menu Design &amp; Development</option>
                <option value="staffing">Back-Office &amp; Staffing</option>
                <option value="full">Full Consultancy Engagement</option>
                <option value="other">Other</option>
              </Select>
            </FormControl>

            <FormControl>
              <FormLabel
                fontSize="0.6rem"
                letterSpacing="0.25em"
                textTransform="uppercase"
                color="smMuted"
                mb={2}
              >
                Tell us about your project
              </FormLabel>
              <Textarea
                placeholder="A brief overview of your project, timeline, and what you're looking to achieve…"
                minH="140px"
                borderRadius={0}
                resize="vertical"
              />
            </FormControl>

            <Button
              className="contact-submit-btn"
              type="submit"
              alignSelf="flex-start"
              bg={sent ? '#4a7c59' : 'gold'}
              color={sent ? 'ivory' : 'black'}
              borderRadius={0}
              px={10}
              py={6}
              fontSize="0.7rem"
              fontWeight="500"
              letterSpacing="0.2em"
              textTransform="uppercase"
              _hover={{ bg: sent ? '#4a7c59' : 'goldLight' }}
              transition="background 0.2s"
            >
              {sent ? 'Message Sent ✓' : 'Send Enquiry →'}
            </Button>
          </Box>
        </motion.div>
      </Grid>
    </Box>
  )
}
