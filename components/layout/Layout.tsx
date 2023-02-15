import Sidebar from "../nav/Sidebar";
import { Flex } from "@chakra-ui/react";

function Layout({ children }: { children: React.ReactNode }) {
	return (
		<Flex>
			<Sidebar />
			<main>{children}</main>
		</Flex>
	);
}

export default Layout;
