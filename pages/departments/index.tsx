import type { NextPage } from "next";
import { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { getDepartments } from "../../store/slices/departmentSlice";
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

const Departments: NextPage = () => {
	const token = useAppSelector((state) => state.user.token);
	const departmentList = useAppSelector(
		(state) => state.departments.departmentList
	);
	const loading = useAppSelector((state) => state.departments.loading);
	const dispatch = useAppDispatch();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [UpdatedDepartmentName, setUpdatedDepartmentName] = useState("");
	const [identifier, setIdentifier] = useState("");
	const [id, setId] = useState(0);

	// const getBranches = async () => {
	// 	const headers = {
	// 		Authorization: `Bearer ${token}`,
	// 	};
	// 	const response = await fetch("https://hrsystem.eraasoft.com/api/branches", {
	// 		method: "GET",
	// 		headers: headers,
	// 	});

	// 	if (response.ok) {
	// 		const { data } = await response.json();
	// 		dispatch(getAllBranches(data));
	// 	} else {
	// 		console.error("Failed to get branches");
	// 	}
	// };

	useEffect(() => {
		// getBranches();
		dispatch(getDepartments(token));
	}, [dispatch, token]);

	const updateDepartment = async (id: number) => {
		const headers = {
			Authorization: `Bearer ${token}`,
		};
		const response = await fetch(
			`https://hrsystem.eraasoft.com/api/departments/${id}`,
			{
				method: "PUT",
				headers: headers,
				body: JSON.stringify({
					// id: id,
					name: UpdatedDepartmentName,
				}),
			}
		);

		if (response.ok) {
			const { data, message } = await response.json();
		} else {
			console.error("Failed to update branch");
		}
	};

	const deleteDepartment = async (id: number) => {
		const headers = {
			Authorization: `Bearer ${token}`,
		};
		const response = await fetch(
			`https://hrsystem.eraasoft.com/api/departments/${id}`,
			{
				method: "DELETE",
				headers: headers,
			}
		);

		if (response.ok) {
			const { data, message } = await response.json();
			console.log(data, message);
		} else {
			console.error("Failed to delete branch");
		}
	};

	return (
		<>
			<Heading color="teal.400" textAlign="center" my="40px">
				Departments List
			</Heading>
			{loading ? <p>Loading</p> : null}
			{departmentList?.length === 0 ? (
				<Text fontWeight="semibold" color="red.400" textAlign="center">
					You Dont Have Any Departments Yet
				</Text>
			) : (
				<TableContainer>
					<Table variant="simple">
						<TableCaption>Departments List</TableCaption>
						<Thead>
							<Tr>
								<Th>Department Name</Th>
								<Th>Actions</Th>
							</Tr>
						</Thead>
						<Tbody>
							{departmentList?.map((item) => {
								return (
									<Tr key={item.id}>
										<Td fontWeight="bold">{item.name}</Td>
										<Td>
											<HStack spacing={4}>
												<Button
													color="red.300"
													onClick={() => deleteDepartment(item.id)}
												>
													Delete Branch
												</Button>
												<Button
													color="blue.300"
													onClick={() => {
														onOpen();
														setIdentifier(item.name);
														setId(item.id);
														setUpdatedDepartmentName(item.name);
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
					<ModalHeader>Update Branch ({identifier})</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<form>
							<FormControl isRequired>
								<FormLabel>Branch Name</FormLabel>
								<Input
									as="input"
									type="text"
									value={UpdatedDepartmentName}
									onChange={(e) => setUpdatedDepartmentName(e.target.value)}
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
							onClick={() => {
								updateDepartment(id);
								onClose();
							}}
						>
							Save Changes
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default Departments;
