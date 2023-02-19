import type { NextPage } from "next";
import {
	Heading,
	Select,
	FormControl,
	FormLabel,
	Input,
	Button,
	Container,
	Box,
} from "@chakra-ui/react";

const AddDepartment: NextPage = () => {
	return (
		<Container my="40px">
			<Heading size="md" textAlign="center" my={8} colorScheme="teal">
				Create New Department
			</Heading>

			<FormControl isRequired>
				<FormLabel>Department Name</FormLabel>
				<Input type="text" />
			</FormControl>
			<FormControl isRequired>
				<FormLabel>Select Branch</FormLabel>
				<Select placeholder="Select Branch">
					<option value="option1">Option 1</option>
					<option value="option2">Option 2</option>
					<option value="option3">Option 3</option>
				</Select>
			</FormControl>

			<Box textAlign="center" my="20px">
				<Button type="submit" colorScheme="teal" w="100%" p="10px">
					Create New Department
				</Button>
			</Box>
		</Container>
	);
};

export default AddDepartment;
