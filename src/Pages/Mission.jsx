import React from 'react';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Container, Image, Heading, Text, Divider } from '@chakra-ui/react';
import Footer from '../Components/Footer';

function Mission() {
  return (
    <div>
      <section className="bsb-about-6 py-3 py-md-5 py-xl-8">
        <Container maxW="container.lg">
          <Heading as="h2" mb="4" size="2xl" textAlign="center">
            Why Choose Us
          </Heading>
          <Text color="gray.600" mb="5" textAlign="center" fontSize="lg">
            Our commitment to excellence is evident in every project we undertake, ensuring that you receive nothing but the highest quality products and services.
          </Text>
          <Divider borderColor="gray.300" mb="5" mx="auto" w="50%" />

          <Container maxW="container.lg" mt="8">
            <Box display={{ base: 'block', lg: 'flex' }} alignItems="center">
              <Box flex="1" mb={{ base: '4', lg: '0' }}>
                <Image
                  borderRadius="md"
                  border="1px"
                  borderColor="gray.300"
                  src="https://cdnjs.angroos.com/wp-content/uploads/2024/01/1-1.jpg"
                  alt="About 6"
                />
              </Box>
              <Box flex="1" ml={{ lg: '8' }}>
                <Accordion allowToggle>
                  <AccordionItem border="1px solid" borderColor="gray.300">
                    <h2>
                      <AccordionButton _expanded={{ bg: 'gray.100', fontWeight: 'bold' }}>
                        <Box flex="1" textAlign="left" fontSize="lg">
                          Low Price Guarantee
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Our Low Price Guarantee isn't just a promise; it's a commitment to providing you with unbeatable value and peace of mind when you shop with us. Trust us to deliver quality products and services without breaking the bank.
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem border="1px solid" borderColor="gray.300">
                    <h2>
                      <AccordionButton _expanded={{ bg: 'gray.100', fontWeight: 'bold' }}>
                        <Box flex="1" textAlign="left" fontSize="lg">
                          Life-Time Warranty
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Discover unparalleled peace of mind with our business's lifetime warranty commitment. We stand behind the quality and durability of our products like no other.
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem border="1px solid" borderColor="gray.300">
                    <h2>
                      <AccordionButton _expanded={{ bg: 'gray.100', fontWeight: 'bold' }}>
                        <Box flex="1" textAlign="left" fontSize="lg">
                          Genuine Spare Parts
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Our commitment to authenticity ensures that you receive parts manufactured to the highest standards, guaranteeing optimal performance and longevity for your equipment. From small components to intricate pieces, we have everything you need to keep your machinery running smoothly.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Box>
            </Box>
          </Container>
        </Container>
      </section>

      <Footer/>
    </div>
  );
}

export default Mission;
