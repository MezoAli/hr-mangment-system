import {
	Flex,
	Text,
	IconButton,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Box,
} from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";
import { RiGitBranchFill } from "react-icons/ri";
import Link from "next/link";
function Navbar() {
	return (
		<Flex as="nav" flexDir="column" justifyContent="center" alignItems="center">
			{/* <Link href="/">
				<Flex justifyContent="center" alignItems="center" w="100%">
					<IconButton
						aria-label="dashboard"
						icon={<FaXbox />}
						colorScheme="teal"
						size="sm"
						variant="outline"
					/>
					<Text m={2} fontWeight="thin">
						Dashboard
					</Text>
				</Flex>
			</Link>

			<Link href="/branches">
				<Flex justifyContent="center" alignItems="center">
					<IconButton
						aria-label="dashboard"
						icon={<RiGitBranchFill />}
						colorScheme="teal"
						size="sm"
						variant="outline"
					/>
					<Text m={2} fontWeight="thin">
						Branches
					</Text>
				</Flex>
			</Link>
			<Text>Categories</Text> */}
			<Accordion allowToggle>
				<AccordionItem>
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left">
								<Text m={2} fontWeight="thin">
									Dashboard
								</Text>
							</Box>
							<AccordionIcon color="teal" />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
						<Link href="/">
							<Text textAlign="center" colorScheme="gray">
								Home
							</Text>
						</Link>
					</AccordionPanel>
				</AccordionItem>
				<AccordionItem>
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left">
								<Text m={2} fontWeight="thin">
									Branches
								</Text>
							</Box>
							<AccordionIcon color="teal" />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
						<Link href="/branches">
							<Text textAlign="center" colorScheme="gray">
								All Branches
							</Text>
						</Link>
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</Flex>
	);
}

export default Navbar;
