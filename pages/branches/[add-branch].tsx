import type { NextPage } from "next";
import { useState } from "react";
import { useRouter } from "next/router";
import { useAppDispatch } from "../../store/hooks";
import { addBranch, BranchItem } from "../../store/slices/branchSlice";
import {
	Heading,
	FormControl,
	FormLabel,
	Input,
	Button,
	Container,
	Box,
	useToast,
} from "@chakra-ui/react";

const initalState: BranchItem = {
	name: "",
	location: "",
};

const AddBranch: NextPage = () => {
	const dispatch = useAppDispatch();
	const [branchName, setBranchName] = useState("");
	const [branchLocation, setBranchLocation] = useState("");
	const toast = useToast();
	const router = useRouter();

	const handleSubmit = (e: React.SyntheticEvent): void => {
		e.preventDefault();
		dispatch(addBranch({ name: branchName, location: branchLocation }));
		toast({
			title: `Branch ${branchName} created.`,
			description: "We've created your branch for you.",
			status: "success",
			duration: 3000,
			isClosable: true,
		});
		router.push("/branches");
	};
	return (
		<Container my="40px">
			<Heading size="md" textAlign="center" my={8} colorScheme="teal">
				Create New Branch
			</Heading>
			<form onSubmit={handleSubmit}>
				<FormControl isRequired>
					<FormLabel>Branch Name</FormLabel>
					<Input
						as="input"
						type="text"
						value={branchName}
						onChange={(e) => setBranchName(e.target.value)}
					/>
				</FormControl>
				<FormControl isRequired>
					<FormLabel>Branch Location</FormLabel>
					<Input
						as="input"
						type="text"
						value={branchLocation}
						onChange={(e) => setBranchLocation(e.target.value)}
					/>
				</FormControl>
				<Box textAlign="center" my="20px">
					<Button type="submit" colorScheme="teal" w="100%" p="10px">
						Create Branch
					</Button>
				</Box>
			</form>
		</Container>
	);
};

export default AddBranch;
