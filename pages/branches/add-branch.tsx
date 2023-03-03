import type { NextPage } from "next";
import { useState } from "react";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
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

const AddBranch: NextPage = () => {
	// const dispatch = useAppDispatch();
	const token = useAppSelector((state) => state.user.token);
	const [branchName, setBranchName] = useState("");
	const toast = useToast();
	const router = useRouter();

	const handleSubmit = async (e: React.SyntheticEvent) => {
		e.preventDefault();
		const headers = {
			Authorization: `Bearer ${token}`,
		};
		const response = await fetch(`https://hrsystem.eraasoft.com/api/branches`, {
			method: "POST",
			body: JSON.stringify({
				name: branchName,
			}),
			headers,
		});

		const { data, status, message } = await response.json();

		if (status > 300) {
			console.log(status, message);
			return;
		}
		toast({
			title: `Branch ${branchName} created.`,
			description: `We've created ${branchName} branch for you.`,
			status: "success",
			duration: 3000,
			isClosable: true,
		});
		router.push("/branches");
		// return data;
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
