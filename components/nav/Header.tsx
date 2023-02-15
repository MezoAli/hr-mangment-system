import { Avatar, Heading } from "@chakra-ui/react";
function Header() {
	return (
		<>
			<Avatar src="../../image.jpeg" size="lg" my={8} />
			<Heading as="h3">Wellcome, Moutaz Ali</Heading>
		</>
	);
}

export default Header;
