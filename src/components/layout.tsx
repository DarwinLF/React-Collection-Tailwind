import { Outlet} from "react-router-dom";
import { Navbar, Typography} from "@material-tailwind/react";

const Layout = () => {
    return (
        <>
          <Navbar 
            className="mx-auto max-w-screen-xl bg-zinc-900 px-4 py-3"
          >
            <div className="flex flex-wrap items-center justify-between gap-y-4 text-white">
              <Typography
                as="a"
                href="/"
                variant="h5"
                className="mr-4 cursor-pointer py-1.5 font-medium"
              >
                Home
              </Typography>
            </div>
          </Navbar>

          <Outlet />
        </>
    )
}

export default Layout;