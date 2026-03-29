'use client'

import { useEffect, useState } from 'react'
import { Box, Flex, Text, Link, HStack } from '@chakra-ui/react'

const links = [
  { label: 'About',    href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work',     href: '#case-study' },
  { label: 'Contact',  href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <Box
      as="nav"
      className="navbar"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={100}
      px={{ base: 8, md: 16 }}
      py={7}
      transition="background 0.4s"
      bg={
        scrolled
          ? 'rgba(14,13,12,0.97)'
          : 'linear-gradient(to bottom, rgba(14,13,12,0.95) 0%, rgba(14,13,12,0) 100%)'
      }
    >
      <Flex className="navbar-inner" justify="space-between" align="center">
        <Link
          className="navbar-logo"
          href="#hero"
          fontFamily="heading"
          fontSize="sm"
          fontWeight="normal"
          letterSpacing="0.15em"
          textTransform="uppercase"
          color="gold"
          _hover={{ textDecoration: 'none', color: 'goldLight' }}
        >
          Buba Consultancy
        </Link>

        <HStack className="navbar-links" spacing={10} display={{ base: 'none', md: 'flex' }}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              fontSize="0.65rem"
              letterSpacing="0.2em"
              textTransform="uppercase"
              color="muted"
              _hover={{ textDecoration: 'none', color: 'gold' }}
              transition="color 0.2s"
            >
              {l.label}
            </Link>
          ))}
        </HStack>
      </Flex>
    </Box>
  )
}
