import { Avatar, Heading, Flex, Button } from "@chakra-ui/react";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { removeActiveUser } from "../../store/slices/userSlice";
import { useRouter } from "next/router";
import Link from "next/link";
function Header() {
	const userState = useAppSelector((state) => state.user);
	const dispatch = useAppDispatch();
	const router = useRouter();
	const logOut = async () => {
		const token = userState.token;
		const headers = {
			Authorization: `Bearer ${token}`,
		};
		const response = await fetch("https://hrsystem.eraasoft.com/api/logout", {
			method: "POST",
			headers: headers,
		});

		if (response.status === 200) {
			console.log("Logged out successfully");
			dispatch(removeActiveUser());
			router.push("/login");
		} else {
			console.error("Failed to log out");
		}
	};

	return (
		<Flex flexDir="column" alignItems="center">
			<Avatar
				src={userState.user.image || ""}
				size="lg"
				my={8}
				name={userState.user.name}
				bg="gray.400"
			/>
			<Heading as="h3" fontSize="sm" mb="20px">
				Wellcome, {userState && userState.user.name}
			</Heading>
			{userState.user.name ? (
				<Button color="blue.300" mb="40px" onClick={logOut}>
					Log Out
				</Button>
			) : (
				<Link href="/login">
					<Button color="blue.300" mb="40px">
						Login
					</Button>
				</Link>
			)}
		</Flex>
	);
}

export default Header;
