import type { NextPage } from "next";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { removeBranch } from "../../store/slices/branchSlice";
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
} from "@chakra-ui/react";

const Branches: NextPage = () => {
	const branchList = useAppSelector((state) => state.branchs.branchList);
	const dispatch = useAppDispatch();

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
								<Th>Branch Location</Th>
								<Th textAlign="center">Actions</Th>
							</Tr>
						</Thead>
						<Tbody>
							{branchList?.map((item, index) => {
								return (
									<Tr key={index}>
										<Td fontWeight="bold">{item.name}</Td>
										<Td fontWeight="bold">{item.location}</Td>
										<Td>
											<HStack spacing={4}>
												<Button
													color="red.300"
													onClick={() =>
														dispatch(removeBranch({ name: item.name }))
													}
												>
													Delete Branch
												</Button>
												<Button
													color="blue.300"
													onClick={() =>
														dispatch(removeBranch({ name: item.name }))
													}
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
			{/* <OrderedList>
				{branchList?.map((item, index) => {
					return <ListItem key={index}>{item.name}</ListItem>;
				})}
			</OrderedList> */}
		</>
	);
};

export default Branches;
