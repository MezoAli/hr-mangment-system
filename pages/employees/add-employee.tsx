import type { NextPage } from "next";
import {
	Heading,
	Select,
	FormControl,
	FormLabel,
	Input,
	Button,
} from "@chakra-ui/react";

const SpecificEmployee: NextPage = () => {
	return (
		<>
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
				<FormLabel>Select Role</FormLabel>
				<Select placeholder="Select Role">
					<option value="option1">Option 1</option>
					<option value="option2">Option 2</option>
					<option value="option3">Option 3</option>
				</Select>
			</FormControl>
			<Button type="submit" colorScheme="teal">
				Add
			</Button>
		</>
	);
};

export default SpecificEmployee;
