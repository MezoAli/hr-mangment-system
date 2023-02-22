import type { NextPage } from "next";
import { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { getAllBranches } from "../../store/slices/branchSlice";
import {
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	TableCaption,
	TableContainer,
	Heading,
	Button,
	Text,
	HStack,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	FormControl,
	FormLabel,
	Input,
} from "@chakra-ui/react";

const Branches: NextPage = () => {
	const branchList = useAppSelector((state) => state.branchs.branchList);
	const token = useAppSelector((state) => state.user.token);
	const dispatch = useAppDispatch();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [UpdatedBranchName, setUpdatedBranchName] = useState("");
	const [UpdatedBranchLocation, setUpdatedBranchLocation] = useState("");
	const [id, setId] = useState("");

	const getBranches = async () => {
		const headers = {
			Authorization: `Bearer ${token}`,
		};
		const response = await fetch("https://hrsystem.eraasoft.com/api/branches", {
			method: "GET",
			headers: headers,
		});

		if (response.status === 200) {
			const { data } = await response.json();
			dispatch(getAllBranches(data));
		} else {
			console.error("Failed to get branches");
		}
	};

	useEffect(() => {
		getBranches();
	}, []);

	return (
		<>
			<Heading color="teal.400" textAlign="center" my="40px">
				Branchs List
			</Heading>
			{branchList?.length === 0 ? (
				<Text fontWeight="semibold" color="red.400" textAlign="center">
					You Dont Have Any Branches Yes
				</Text>
			) : (
				<TableContainer>
					<Table variant="simple">
						<TableCaption>Branch List</TableCaption>
						<Thead>
							<Tr>
								<Th>Branch Name</Th>
								<Th>Actions</Th>
							</Tr>
						</Thead>
						<Tbody>
							{branchList?.map((item) => {
								return (
									<Tr key={item.id}>
										<Td fontWeight="bold">{item.name}</Td>
										<Td>
											<HStack spacing={4}>
												<Button
													color="red.300"
													// onClick={() =>
													// 	dispatch(removeBranch({ name: item.name }))
													// }
												>
													Delete Branch
												</Button>
												<Button
													color="blue.300"
													onClick={() => {
														onOpen();
														setId(item.name);
														setUpdatedBranchName(item.name);
													}}
												>
													Update Branch
												</Button>
											</HStack>
										</Td>
									</Tr>
								);
							})}
						</Tbody>
					</Table>
				</TableContainer>
			)}
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Update Branch ({id})</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<form>
							<FormControl isRequired>
								<FormLabel>Branch Name</FormLabel>
								<Input
									as="input"
									type="text"
									value={UpdatedBranchName}
									onChange={(e) => setUpdatedBranchName(e.target.value)}
								/>
							</FormControl>
							<FormControl isRequired>
								<FormLabel>Branch Location</FormLabel>
								<Input
									as="input"
									type="text"
									value={UpdatedBranchLocation}
									onChange={(e) => setUpdatedBranchLocation(e.target.value)}
								/>
							</FormControl>
						</form>
					</ModalBody>

					<ModalFooter>
						<Button colorScheme="blue" mr={3} onClick={onClose}>
							Close
						</Button>
						<Button
							variant="ghost"
							// onClick={() => {
							// 	dispatch(
							// 		updateBranch({
							// 			id: id,
							// 			name: UpdatedBranchName,
							// 			location: UpdatedBranchLocation,
							// 		})
							// 	);
							// 	onClose();
							// }}
						>
							Save Changes
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default Branches;
