import {
  HoverCard,
  Group,
  UnstyledButton,
  Text,
  SimpleGrid,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown } from "@tabler/icons-react";
import classes from "./HeaderMegaMenu.module.css";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const dataBinding = [
  {
    title: "Simple Array",
    link: "simple-array",
  },
  {
    title: "Web Api Service",
    link: "web-api-service",
  },
  {
    title: "SignalR Service",
    link: "signalR-service",
  },
  {
    title: "Google Calendar Integration",
    link: "google-calendar-integration",
  },
];

const views = [
  {
    title: "Basic Views",
    link: "basic-views",
  },
  {
    title: "Timelines",
    link: "timelines",
  },
  {
    title: "Agenda",
    link: "agenda",
  },
];

const features = [
  {
    title: "Current Time Indicator",
    link: "current-time-indicator",
  },
  {
    title: "Time Zone Support",
    link: "time-zone-support",
  },
  {
    title: "Recurring Appointments",
    link: "recurring-appointments",
  },
  {
    title: "Editing",
    link: "editing",
  },
  {
    title: "Custom Drag & Drop",
    link: "custom-drag-drop",
  },
  {
    title: "Resources",
    link: "resources",
  },
  {
    title: "All Day Panel Mode",
    link: "all-day-panel-mode",
  },
  {
    title: "Work Shifts",
    link: "work-shifts",
  },
];

const grouping = [
  {
    title: "Group Orientation",
    link: "group-orientation",
  },
  {
    title: "Grouping By Date",
    link: "grouping-by-date",
  },
];

const customization = [
  {
    title: "Custom Templates",
    link: "custom-templates",
  },
  {
    title: "Disabled Date/Time Ranges",
    link: "disabled-date-time-ranges",
  },
  {
    title: "Customize Individual Views",
    link: "customize-individual-views",
  },
  {
    title: "Increased View Duration",
    link: "increased-view-duration",
  },
  {
    title: "Limit the Appointment Count per Cell",
    link: "limit-the-appointment-count-per-cell",
  },
  {
    title: "Context Menu Integration",
    link: "context-menu-integration",
  },
];

export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  const dataBindinglinks = dataBinding.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <NavLink to={item.link}>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
        </NavLink>
      </Group>
    </UnstyledButton>
  ));
  const viewsLinks = views.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <NavLink to={item.link}>
          {" "}
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
        </NavLink>
      </Group>
    </UnstyledButton>
  ));
  const featuresLink = features.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <NavLink to={item.link}>
          {" "}
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
        </NavLink>
      </Group>
    </UnstyledButton>
  ));
  const groupingLinks = grouping.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <NavLink to={item.link}>
          {" "}
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
        </NavLink>
      </Group>
    </UnstyledButton>
  ));
  const customizationLink = customization.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <NavLink to={item.link}>
          {" "}
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
        </NavLink>
      </Group>
    </UnstyledButton>
  ));

  const [header, setHeader] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 30) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <Box pb={80}>
      <header className={header ? classes.fixedHeader : classes.header}>
        <Group justify="center" h="100%">
          <Group h="100%" gap={0} visibleFrom="sm">
            <NavLink to="/" className={classes.link}>
              Overview
            </NavLink>
            <HoverCard position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <NavLink to="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Data Binding
                    </Box>
                    <IconChevronDown
                      style={{ width: rem(16), height: rem(16) }}
                      color={theme.colors.blue[6]}
                    />
                  </Center>
                </NavLink>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: "hidden" }}>
                <SimpleGrid spacing={0}>{dataBindinglinks}</SimpleGrid>
              </HoverCard.Dropdown>
            </HoverCard>
            <HoverCard position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <NavLink to="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Views
                    </Box>
                    <IconChevronDown
                      style={{ width: rem(16), height: rem(16) }}
                      color={theme.colors.blue[6]}
                    />
                  </Center>
                </NavLink>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: "hidden" }}>
                <SimpleGrid spacing={0}>{viewsLinks}</SimpleGrid>
              </HoverCard.Dropdown>
            </HoverCard>
            <HoverCard position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <NavLink to="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Features
                    </Box>
                    <IconChevronDown
                      style={{ width: rem(16), height: rem(16) }}
                      color={theme.colors.blue[6]}
                    />
                  </Center>
                </NavLink>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: "hidden" }}>
                <SimpleGrid spacing={0}>{featuresLink}</SimpleGrid>
              </HoverCard.Dropdown>
            </HoverCard>
            <NavLink to="virtual-scrolling" className={classes.link}>
              Virtual Scrolling
            </NavLink>
            <HoverCard position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <NavLink to="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Grouping
                    </Box>
                    <IconChevronDown
                      style={{ width: rem(16), height: rem(16) }}
                      color={theme.colors.blue[6]}
                    />
                  </Center>
                </NavLink>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: "hidden" }}>
                <SimpleGrid spacing={0}>{groupingLinks}</SimpleGrid>
              </HoverCard.Dropdown>
            </HoverCard>
            <HoverCard position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <NavLink to="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Customization
                    </Box>
                    <IconChevronDown
                      style={{ width: rem(16), height: rem(16) }}
                      color={theme.colors.blue[6]}
                    />
                  </Center>
                </NavLink>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: "hidden" }}>
                <SimpleGrid spacing={0}>{customizationLink}</SimpleGrid>
              </HoverCard.Dropdown>
            </HoverCard>
            <NavLink to="adaptability" className={classes.link}>
              Adaptability
            </NavLink>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
          />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <NavLink to="#" className={classes.link}>
            Home
          </NavLink>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Features
              </Box>
              <IconChevronDown
                style={{ width: rem(16), height: rem(16) }}
                color={theme.colors.blue[6]}
              />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{dataBindinglinks}</Collapse>
          <NavLink to="#" className={classes.link}>
            Learn
          </NavLink>
          <NavLink to="#" className={classes.link}>
            Academy
          </NavLink>

          <Divider my="sm" />
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
