import { Box, Flex, Text, Avatar } from "@chakra-ui/react";
import millify from "millify";
import Image from "next/image";
import Link from "next/link";
import { BsGridFill } from "react-icons/bs";
import { FaBed, FaBath } from "react-icons/fa";
import { GoVerified } from "react-icons/go";
import defaultImage from "../assets/img/nug2.jpg"

const Property = ({property: {coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID}}) => {
  return (
    <Link href={`property/${externalID}`} >
        <Flex flexWrap="wrap" w="420px" p="5" paddingTop="0" justifyContent="flex-start" cursor="pointer" >
            <Box>
                <Image src={coverPhoto ? coverPhoto.url : defaultImage} width={400} height={260} alt="Desain Rumah" />
            </Box>
            <Box w="full">
                <Flex paddingTop="4" alignItems="center" justifyContent="space-between">
                    <Flex alignItems="center">
                        <Box paddingRight="3" color="green.400">{isVerified && <GoVerified />}</Box>
                        <Text fontWeight="bold" fontSize="bold">AED {millify(price)}{rentFrequency && `/${rentFrequency}`}</Text>
                    </Flex>
                    <Box>
                        <Avatar size="sm" src={agency?.logo?.url}/>
                    </Box>
                </Flex>
                <Flex alignItems="center" p="1" justifyContent="space-between" w="250px" color="blue.400">
                    {rooms} <FaBed/> | {baths} <FaBath/> | {millify(area)} sqft <BsGridFill/>
                </Flex>
                <Text fontSize="lg">
                    {title.length > 40 ? `${title.substring(0, 40)}...` : title}
                </Text>
            </Box>
        </Flex>
    </Link>
  )
}

export default Property