import { memo, FC } from "react";
import { Routes, Route } from "react-router-dom";

import { Login } from "../components/pages/Login";
import { Page404 } from "../components/pages/Page404";
import { HomeRoutes } from "./HomeRoutes";
import { HeaderLayout } from "../components/templates/HeaderLayout";
import { LoginUserProvider } from "../providers/LoginUserProvider";

export const Router: FC = memo(() => {
  return (
    <LoginUserProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home">
          {HomeRoutes.map((router) => (
            <Route key={router.path}>
              <Route
                path={router.path}
                element={<HeaderLayout children={router.element} />}
              />
            </Route>
          ))}
        </Route>
        <Route path="/*" element={<Page404 />}></Route>
      </Routes>
    </LoginUserProvider>
  );
});
