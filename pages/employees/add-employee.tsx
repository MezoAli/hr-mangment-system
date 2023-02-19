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

const SpecificEmployee: NextPage = () => {
	return (
		<Container my="40px">
			<Heading size="md" textAlign="center" my={8} colorScheme="teal">
				Add New Employee
			</Heading>

			<FormControl isRequired>
				<FormLabel>First Name</FormLabel>
				<Input type="text" />
			</FormControl>
			<FormControl isRequired>
				<FormLabel>Last Name</FormLabel>
				<Input type="text" />
			</FormControl>
			<FormControl>
				<FormLabel>User Name</FormLabel>
				<Input type="text" />
			</FormControl>
			<FormControl isRequired>
				<FormLabel>Email address</FormLabel>
				<Input type="email" />
			</FormControl>
			<FormControl isRequired>
				<FormLabel>Salary</FormLabel>
				<Input type="number" />
			</FormControl>
			<FormControl isRequired>
				<FormLabel>Add Role</FormLabel>
				<Input type="text" />
			</FormControl>
			<FormControl isRequired my={6}>
				<FormLabel>Select Branch</FormLabel>
				<Select placeholder="Select Branch">
					<option value="option1">Option 1</option>
					<option value="option2">Option 2</option>
					<option value="option3">Option 3</option>
				</Select>
			</FormControl>
			<FormControl isRequired>
				<FormLabel>Select Department</FormLabel>
				<Select placeholder="Select Department">
					<option value="option1">Option 1</option>
					<option value="option2">Option 2</option>
					<option value="option3">Option 3</option>
				</Select>
			</FormControl>
			<Box textAlign="center" my="20px">
				<Button type="submit" colorScheme="teal" w="100%" p="10px">
					Add
				</Button>
			</Box>
		</Container>
	);
};

export default SpecificEmployee;
