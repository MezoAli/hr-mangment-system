import { Flex } from "@chakra-ui/react";
import Header from "./Header";
import Navbar from "./Navbar";

function Sidebar() {
	return (
		<Flex
			flexDir="column"
			justifyContent="space-between"
			alignItems="center"
			position={{ md: "fixed" }}
		>
			<Header />
			<Navbar />
		</Flex>
	);
}

export default Sidebar;
