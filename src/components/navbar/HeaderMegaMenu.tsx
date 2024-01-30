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
    link: "data-binding/simple-array",
  },
  {
    title: "Web Api Service",
    link: "data-binding/web-api-service",
  },
  {
    title: "SignalR Service",
    link: "data-binding/signalr-service",
  },
  {
    title: "Google Calendar Integration",
    link: "data-binding/google-calendar-integration",
  },
];

const views = [
  {
    title: "Basic Views",
    link: "views/basic-views",
  },
  {
    title: "Timelines",
    link: "views/timelines",
  },
  {
    title: "Agenda",
    link: "views/agenda",
  },
];

const features = [
  {
    title: "Current Time Indicator",
    link: "features/current-time-indicator",
  },
  {
    title: "Time Zone Support",
    link: "features/time-zone-support",
  },
  {
    title: "Recurring Appointments",
    link: "features/recurring-appointments",
  },
  {
    title: "Editing",
    link: "features/editing",
  },
  {
    title: "Custom Drag & Drop",
    link: "features/custom-drag-drop",
  },
  {
    title: "Resources",
    link: "features/resources",
  },
  {
    title: "All Day Panel Mode",
    link: "features/all-day-panel-mode",
  },
  {
    title: "Work Shifts",
    link: "features/work-shifts",
  },
];

const grouping = [
  {
    title: "Group Orientation",
    link: "grouping/group-orientation",
  },
  {
    title: "Grouping By Date",
    link: "grouping/grouping-by-date",
  },
];

const customization = [
  {
    title: "Custom Templates",
    link: "customization/custom-templates",
  },
  {
    title: "Disabled Date/Time Ranges",
    link: "customization/disabled-date-time-ranges",
  },
  {
    title: "Customize Individual Views",
    link: "customization/customize-individual-views",
  },
  {
    title: "Increased View Duration",
    link: "customization/increased-view-duration",
  },
  {
    title: "Limit the Appointment Count per Cell",
    link: "customization/limit-the-appointment-count-per-cell",
  },
  {
    title: "Context Menu Integration",
    link: "customization/context-menu-integration",
  },
];

export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  const dataBindingLinks = dataBinding.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <NavLink
          to={item.link}
         style={({ isActive, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  background: isActive ? "#f5f5f5" : "",
                  viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}
        >
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
        <NavLink
          to={item.link}
         style={({ isActive, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  background: isActive ? "#f5f5f5" : "",
                  viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}
        >
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
        <NavLink
          to={item.link}
         style={({ isActive, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  background: isActive ? "#f5f5f5" : "",
                  viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}
        >
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
        <NavLink
          to={item.link}
         style={({ isActive, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  background: isActive ? "#f5f5f5" : "",
                  viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}
        >
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
        <NavLink
          to={item.link}
         style={({ isActive, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  background: isActive ? "#f5f5f5" : "",
                  viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}
        >
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
            <NavLink
              to="/"
              className={classes.link}
              style={({ isActive, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  background: isActive ? "#f5f5f5" : "",
                  viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}
            >
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
                <SimpleGrid spacing={0}>{dataBindingLinks}</SimpleGrid>
              </HoverCard.Dropdown>
            </HoverCard>
            <HoverCard position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <NavLink to="#" className={classes.link} >
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
          <Collapse in={linksOpened}>{dataBindingLinks}</Collapse>
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
