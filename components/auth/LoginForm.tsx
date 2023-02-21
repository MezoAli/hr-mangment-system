import { Flex, Heading, Input, Button } from "@chakra-ui/react";
import { useAppDispatch } from "../../store/hooks";
import { setActiveUser } from "../../store/slices/userSlice";
import { useRouter } from "next/router";
import { useState } from "react";
function LoginForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useAppDispatch();
	const router = useRouter();

	const handleSubmit = async (e: React.SyntheticEvent) => {
		e.preventDefault();
		const response = await fetch("https://hrsystem.eraasoft.com/api/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email,
				password,
			}),
		});

		if (response.ok) {
			const { data } = await response.json();
			dispatch(setActiveUser({ token: data.token, user: data.user }));
			router.push("/");
			return data;
		}
	};

	return (
		<Flex h="100vh" alignItems="center" justifyContent="center">
			<form onSubmit={handleSubmit}>
				<Flex flexDir="column" rounded={6} bg="gray.200" p={12}>
					<Heading mb={6} textAlign="center" as="h3">
						Log In
					</Heading>
					<Input
						type="email"
						mb={6}
						placeholder="moutaz.ali@gmail.com"
						variant="filled"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<Input
						type="password"
						mb={3}
						placeholder="****************"
						variant="filled"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<Button type="submit" colorScheme="teal">
						Login
					</Button>
				</Flex>
			</form>
		</Flex>
	);
}

export default LoginForm;
