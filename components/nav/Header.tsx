import { Avatar, Heading, Flex, Button } from "@chakra-ui/react";
import Link from "next/link";
function Header() {
	return (
		<Flex flexDir="column" alignItems="center">
			<Avatar
				src="../../image.jpeg"
				size="lg"
				my={8}
				name="moutaz ali"
				bg="gray.400"
			/>
			<Heading as="h3" fontSize="sm" mb="20px">
				Wellcome, Moutaz Ali
			</Heading>
			<Link href="/login">
				<Button color="blue.300" mb="40px">
					Login
				</Button>
			</Link>
		</Flex>
	);
}

export default Header;
