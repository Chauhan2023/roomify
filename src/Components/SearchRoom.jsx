import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Button,
  Switch,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Tooltip
} from "@chakra-ui/react";
import { LiaSearchSolid } from "react-icons/lia";
import { FaAngleDown } from "react-icons/fa6";
import Typewriter from "typewriter-effect";

const SearchRoom = ({ content }) => {
  const [selectedAge, setSelectedAge] = useState(18);
  const [showAdvanced, setShowAdvanced] = useState(false); // Add state for showing advanced options

  return (
    <div className="d-flex justify-content-center">
      <Accordion allowToggle className="border-1 col-10">
        <AccordionItem className="border-0">
          {({ isExpanded }) => (
            <>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Typewriter
                    options={{
                      strings: [
                        "Search Roommates",
                        "Search Room Partner",
                        "Search Your Roomies",
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 50,
                      pauseFor: 1500,
                    }}
                  />
                </Box>
                <AccordionIcon
                  as={FaAngleDown}
                  className={`e-font-icon-svg ${
                    isExpanded ? "e-opened" : "e-closed"
                  }`}
                />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <div className="w-100">
                  <div className="d-flex justify-content-between gap-3 align-items-center mb-3">
                    <span>City </span>
                    <select className="form-control" style={{ width: "300px" }}>
                      {content[0]?.citynames?.map((data, index) => (
                        <option key={index} value={data}>
                          {data}
                        </option>
                      )) || <option value="">No options available</option>}
                    </select>
                  </div>

                  <div className="d-flex justify-content-between gap-3 align-items-center mb-3">
                    <span className="text-nowrap">Show me</span>
                    <select
                      className="form-control"
                      style={{ width: "300px" }}
                    >
                      {content[1]?.types?.map((data, index) => (
                        <option key={index} value={data}>
                          {data}
                        </option>
                      )) || <option value="">No options available</option>}
                    </select>
                  </div>

                  <div className="d-flex justify-content-between gap-3 align-items-center mt-3">
                    <span className="text-nowrap">Age</span>
                    <Slider
                      defaultValue={18}
                      min={18}
                      max={100}
                      step={1}
                      aria-label="age-slider"
                      colorScheme="blue"
                      width="300px"
                      onChange={(value) => setSelectedAge(value)}
                    >
                      <SliderMark value={18} mt="1" ml="-2.5" fontSize="sm">
                        18
                      </SliderMark>
                      <SliderMark value={100} mt="1" ml="-2.5" fontSize="sm">
                        100
                      </SliderMark>
                      <SliderTrack>
                        <SliderFilledTrack />
                      </SliderTrack>
                      <Tooltip label={selectedAge} placement="top">
                        <SliderThumb />
                      </Tooltip>
                    </Slider>
                  </div>

                  <div className="d-flex justify-content-between gap-3 align-items-center mt-4">
                    <span className="text-nowrap">Living as</span>
                    <select
                      className="form-control"
                      style={{ width: "300px" }}
                    >
                      {content[4]?.buttons?.map((data, index) => (
                        <option key={index} value={data}>
                          {data}
                        </option>
                      )) || <option value="">No options available</option>}
                    </select>
                  </div>

                  <div className="d-flex justify-content-between gap-3 align-items-center mt-3">
                    <span className="text-nowrap">Status</span>
                    <select
                      className="form-control"
                      style={{ width: "300px" }}
                    >
                      {content[5]?.buttons?.map((data, index) => (
                        <option key={index} value={data}>
                          {data}
                        </option>
                      )) || <option value="">No options available</option>}
                    </select>
                  </div>

                  <div className="d-flex justify-content-between gap-3 align-items-center py-2">
                    <span className="text-nowrap">Advance Search</span>
                    <Switch
                      size='md'
                      isChecked={showAdvanced}
                      onChange={() => setShowAdvanced(!showAdvanced)}
                    />
                  </div>

                  <div className={`col-12 p-2 border-dashed border-1 advance options ${showAdvanced ? 'd-block' : 'd-none'}`}>
                    <button className="btn btn-sm btn-outline-primary mx-2 mb-2">No smoking</button>
                    <button className="btn btn-sm btn-outline-primary mx-2 mb-2">TV</button>
                    <button className="btn btn-sm btn-outline-primary mx-2 mb-2">Fridge</button>
                    <button className="btn btn-sm btn-outline-primary mx-2 mb-2">Washing machine</button>
                    <button className="btn btn-sm btn-outline-primary mx-2 mb-2">Microwave</button>
                    <button className="btn btn-sm btn-outline-primary mx-2 mb-2">Vegetarian</button>
                    <button className="btn btn-sm btn-outline-primary mx-2 mb-2">Non-vegetarian</button>
                  </div>

                  <div className="text-center mt-4">
                    <Button colorScheme="blue">Search  &nbsp; <span className="text-white"> <LiaSearchSolid /></span></Button>
                  </div>
                </div>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default SearchRoom;
