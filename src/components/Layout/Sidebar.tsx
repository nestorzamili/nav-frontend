import { NavLink, Group, Image, Text, Stack } from "@mantine/core";
import {
  IconHome,
  IconUsers,
  IconBox,
  IconChartBar,
  IconChevronDown,
} from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [expandedMenus, setExpandedMenus] = useState<string[]>([]);
  const navigate = useNavigate();

  const toggleMenu = (menuId: string) => {
    setExpandedMenus((prev) =>
      prev.includes(menuId)
        ? prev.filter((id) => id !== menuId)
        : [...prev, menuId]
    );
  };

  return (
    <Stack gap="xl">
      <Group>
        <Image src="/logo.png" width={32} height={32} />
        <Text fw={700} size="lg">
          Company Name
        </Text>
      </Group>

      <Stack gap="xs">
        <NavLink
          label="Dashboard"
          leftSection={<IconHome size={20} />}
          onClick={() => navigate("/")}
        />

        <NavLink
          label="Customers"
          leftSection={<IconUsers size={20} />}
          rightSection={<IconChevronDown size={16} />}
          opened={expandedMenus.includes("customers")}
          onClick={() => toggleMenu("customers")}
        >
          <NavLink
            label="Customer List"
            pl={32}
            onClick={() => navigate("/customers/list")}
          />
          <NavLink
            label="Customer Groups"
            pl={32}
            onClick={() => navigate("/customers/groups")}
          />
        </NavLink>

        <NavLink
          label="Products"
          leftSection={<IconBox size={20} />}
          rightSection={<IconChevronDown size={16} />}
          opened={expandedMenus.includes("products")}
          onClick={() => toggleMenu("products")}
        >
          <NavLink
            label="Product List"
            pl={32}
            onClick={() => navigate("/products/list")}
          />
          <NavLink
            label="Categories"
            pl={32}
            onClick={() => navigate("/products/categories")}
          />
        </NavLink>

        <NavLink
          label="Analytics"
          leftSection={<IconChartBar size={20} />}
          onClick={() => navigate("/analytics")}
        />
      </Stack>
    </Stack>
  );
};

export default Sidebar;
