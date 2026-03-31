'use client'

import { Flex, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'

export default function SectionLabel({ children }: { children: string }) {
  return (
    <Flex className="section-label" align="center" gap={5} mb={14}>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{
          transformOrigin: 'left',
          width: '30px',
          height: '1px',
          background: 'rgba(184,115,51,0.6)',
          flexShrink: 0,
        }}
      />
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
