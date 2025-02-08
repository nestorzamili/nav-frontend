import { useState } from "react";
import useAuthStore from "../../stores/authStore";
import { axiosInstance } from "../../utils";
import {
  Anchor,
  Button,
  Checkbox,
  Container,
  Group,
  Paper,
  PasswordInput,
  TextInput,
  Title,
  Alert,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconAlertCircle } from "@tabler/icons-react";
import classes from "./style.module.css";

interface LoginForm {
  email: string;
  password: string;
  rememberMe: boolean;
}

interface ApiError {
  response?: {
    data?: {
      message?: string;
    };
  };
}

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const login = useAuthStore((state) => state.login);

  const form = useForm<LoginForm>({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validate: {
      email: (value) => {
        if (!value) return "Email is required";
        if (!/^\S+@\S+\.\S+$/.test(value)) return "Invalid email format";
        return null;
      },
      password: (value) => {
        if (!value) return "Password is required";
        if (value.length < 6) return "Password must be at least 6 characters";
        return null;
      },
    },
  });

  const handleSubmit = async (values: LoginForm) => {
    setError("");
    setIsLoading(true);

    try {
      const response = await axiosInstance.post("/auth/login", {
        email: values.email,
        password: values.password,
      });
      const { accessToken, refreshToken } = response.data;
      login(accessToken, refreshToken, values.rememberMe);
    } catch (error: unknown) {
      const apiError = error as ApiError;
      setError(
        apiError.response?.data?.message || "Login failed. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Welcome back!
      </Title>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={form.onSubmit(handleSubmit)}>
          {error && (
            <Alert
              icon={<IconAlertCircle size={16} />}
              color="red"
              mb="md"
              title="Error"
            >
              {error}
            </Alert>
          )}

          <TextInput
            label="Email"
            placeholder="you@example.com"
            required
            {...form.getInputProps("email")}
          />

          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            mt="md"
            {...form.getInputProps("password")}
          />

          <Group justify="space-between" mt="lg">
            <Checkbox
              label="Remember me"
              {...form.getInputProps("rememberMe", { type: "checkbox" })}
            />
            <Anchor component="button" size="sm">
              Forgot password?
            </Anchor>
          </Group>

          <Button fullWidth mt="xl" type="submit" loading={isLoading}>
            Sign in
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
