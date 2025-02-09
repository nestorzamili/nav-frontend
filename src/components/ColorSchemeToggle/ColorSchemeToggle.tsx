import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";

export function ColorSchemeToggle() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  return (
    <ActionIcon
      onClick={() => setColorScheme(colorScheme === "light" ? "dark" : "light")}
      variant="default"
      size="md"
      aria-label="Toggle color scheme"
    >
      {colorScheme === "light" ? (
        <IconMoon style={{ width: 18, height: 18 }} />
      ) : (
        <IconSun style={{ width: 18, height: 18 }} />
      )}
    </ActionIcon>
  );
}
