import { memo, FC, useCallback } from "react";
import { Flex, Heading, Link, Box, useDisclosure } from "@chakra-ui/react";

import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";
import { useNavigate } from "react-router-dom";

export const Header: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const nav = useNavigate();

  const onClickHome = useCallback(() => {
    nav("/home");
  }, [nav]);
  const onClickUserManagement = useCallback(() => {
    nav("/home/user_management");
  }, [nav]);
  const onClickSetting = useCallback(() => {
    nav("/home/setting");
  }, [nav]);

  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }}>
          <Heading
            as="h1"
            fontSize={{ base: "md", md: "lg" }}
            onClick={onClickHome}
          >
            ユーザ管理アプリ
          </Heading>
        </Flex>
        <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          display={{ base: "none", md: "flex" }}
        >
          <Box pr={4}>
            <Link onClick={onClickUserManagement}>ユーザ一覧</Link>
          </Box>
          <Box pr={4}>
            <Link onClick={onClickSetting}>設定</Link>
          </Box>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
        <MenuDrawer
          onClose={onClose}
          isOpen={isOpen}
          onClickHome={onClickHome}
          onClickUserManagement={onClickUserManagement}
          onClickSetting={onClickSetting}
        />
      </Flex>
    </>
  );
});
