import Sidebar from "../nav/Sidebar";
import { Grid, GridItem } from "@chakra-ui/react";

function Layout({ children }: { children: React.ReactNode }) {
	return (
		<Grid templateColumns="repeat(6,1fr)" gap={4}>
			<GridItem
				minH={{ lg: "100vh" }}
				as="aside"
				bg="gray.200"
				colSpan={{ base: 6, md: 2, xl: 1 }}
			>
				<Sidebar />
			</GridItem>
			<GridItem colSpan={{ base: 6, md: 4, xl: 5 }} minH="100vh" as="main">
				{children}
			</GridItem>
		</Grid>
	);
}

export default Layout;
