import {
  ActionIcon,
  TextInput,
  Group,
  UnstyledButton,
  Avatar,
  useMantineColorScheme,
} from "@mantine/core";
import { IconSearch, IconBell, IconMenu2 } from "@tabler/icons-react";
import { ColorSchemeToggle } from "../ColorSchemeToggle/ColorSchemeToggle";

interface TopbarProps {
  onToggleSidebar: () => void;
}

const Topbar = ({ onToggleSidebar }: TopbarProps) => {
  const { colorScheme } = useMantineColorScheme();

  return (
    <Group
      justify="space-between"
      h={60}
      px="md"
      bg={colorScheme === "dark" ? "dark.7" : "white"}
      className="border-b border-gray-200 dark:border-gray-700"
    >
      <Group>
        <ActionIcon variant="subtle" onClick={onToggleSidebar}>
          <IconMenu2 />
        </ActionIcon>
        <TextInput
          placeholder="Search..."
          leftSection={<IconSearch size={16} />}
          variant="filled"
        />
      </Group>

      <Group>
        <ActionIcon variant="subtle">
          <IconBell />
        </ActionIcon>

        <ColorSchemeToggle />

        <UnstyledButton>
          <Avatar radius="xl" size="sm" />
        </UnstyledButton>
      </Group>
    </Group>
  );
};

export default Topbar;
