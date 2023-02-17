import { Flex } from "@chakra-ui/react";
import Header from "./Header";
import Navbar from "./Navbar";

function Sidebar() {
	return (
		<Flex flexDir="column" justifyContent="space-between" alignItems="center">
			<Header />
			<Navbar />
		</Flex>
	);
}

export default Sidebar;
