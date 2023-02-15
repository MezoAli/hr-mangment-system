import { Flex } from "@chakra-ui/react";
import Header from "./Header";
import Navbar from "./Navbar";

function Sidebar() {
	return (
		<>
			<Flex
				flexDir="column"
				justifyContent="space-between"
				alignItems="center"
				w="20%"
				h="100vh"
				bg="#e5e5e5"
			>
				<Header />
				<Navbar />
			</Flex>
		</>
	);
}

export default Sidebar;
