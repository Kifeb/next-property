import { Flex, Select, Box, Text, Input, Spinner, Icon, Button } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MdCancel } from "react-icons/md";
import { filterData, getFilterValues } from "../utils/filterData";

const SearchFilter = () => {
  
  const [filters, setFilters] = useState(filterData);
  const router = useRouter()

  const searchProperties = (filterValues) => {
    const path = router.pathname
    const {query} = router

    const values = getFilterValues(filterValues)

    values.forEach((item) => {
      if (item.value && filterValues?.[item.name]) {
        query[item.name] = item.value
      }
    })

    router.push({pathName: path, query})
  }

  return (
    <Flex bg="gray.100" flexWrap="wrap">
      {filters?.map((filter) => (
        <Box key={filter.queryName}>
          <Select onChange={(e) => searchProperties({ [filter.queryName]: e.target.value })} placeholder={filter.placeholder} w='fit-content' p='2' >
            {filter?.items?.map((item) => (
              <option value={item.value} key={item.value}>
                {item.name}
              </option>
            ))}
          </Select>
        </Box>
      ))}
    </Flex>
  )
}

export default SearchFilter

