import { Avatar, Heading, Flex } from "@chakra-ui/react";
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
			<Heading as="h3" fontSize="sm" mb="40px">
				Wellcome, Moutaz Ali
			</Heading>
		</Flex>
	);
}

export default Header;
