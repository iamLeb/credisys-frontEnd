
// import React from "react";
// import { motion } from "framer-motion";
// import {
//   Navbar,
//   Collapse,
//   Typography,
//   Button,
//   IconButton,
//   List,
//   ListItem,
//   Menu,
//   MenuHandler,
//   MenuList,
//   MenuItem,
// } from "@material-tailwind/react";
// import {
//   ChevronDownIcon,
//   Bars3Icon,
//   XMarkIcon,
// } from "@heroicons/react/24/outline";
// import {
//   Bars4Icon,
//   GlobeAmericasIcon,
//   NewspaperIcon,
//   PhoneIcon,
//   RectangleGroupIcon,
//   SquaresPlusIcon,
//   SunIcon,
//   TagIcon,
//   UserGroupIcon,
// } from "@heroicons/react/24/solid";

// const navListMenuItems = [
//   {
//     title: "Products",
//     description: "Find the perfect solution for your needs.",
//     icon: SquaresPlusIcon,
//   },
//   {
//     title: "About Us",
//     description: "Meet and learn about our dedication",
//     icon: UserGroupIcon,
//   },
//   {
//     title: "Blog",
//     description: "Find the perfect solution for your needs.",
//     icon: Bars4Icon,
//   },
//   {
//     title: "Services",
//     description: "Learn how we can help you achieve your goals.",
//     icon: SunIcon,
//   },
//   {
//     title: "Support",
//     description: "Reach out to us for assistance or inquiries",
//     icon: GlobeAmericasIcon,
//   },
//   {
//     title: "Contact",
//     description: "Find the perfect solution for your needs.",
//     icon: PhoneIcon,
//   },
//   {
//     title: "News",
//     description: "Read insightful articles, tips, and expert opinions.",
//     icon: NewspaperIcon,
//   },
//   {
//     title: "Products",
//     description: "Find the perfect solution for your needs.",
//     icon: RectangleGroupIcon,
//   },
//   {
//     title: "Special Offers",
//     description: "Explore limited-time deals and bundles",
//     icon: TagIcon,
//   },
// ];


function NavListMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const renderItems = navListMenuItems.map(
        ({ icon, title, description }, key) => (
            <a href="#" key={key}>
                <MenuItem className="flex items-center gap-3 ">
                    <div className="flex items-center justify-center  !bg-blue-gray-50 p-2 ">
                        {" "}
                        {React.createElement(icon, {
                            strokeWidth: 2,
                            className: "h-6 text-gray-900 w-6",
                        })}
                    </div>
                    <div>
                        <Typography
                            variant="h6"
                            color="blue-gray"
                            className="flex items-center text-sm font-bold"
                        >
                            {title}
                        </Typography>
                        <Typography
                            variant="paragraph"
                            className="text-xs !font-medium text-blue-gray-500"
                        >
                            {description}
                        </Typography>
                    </div>
                </MenuItem>
            </a>
        )
    );


//   return (
//     <React.Fragment>
//       <Menu
//         open={isMenuOpen}
//         handler={setIsMenuOpen}
//         offset={{ mainAxis: 20 }}
//         placement="bottom"
//         allowHover={true}
//       >
//         <MenuHandler>
//           <Typography
//             as="div"
//             variant="small"
//             className="  text-xl font-medium"
//           >
//             <ListItem
//               className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
//               selected={isMenuOpen || isMobileMenuOpen}
//               onClick={() => setIsMobileMenuOpen((cur) => !cur)}
//             >
//               Resources
//               <ChevronDownIcon
//                 strokeWidth={2.5}
//                 className={`hidden h-3 w-3 transition-transform lg:block ${
//                   isMenuOpen ? "rotate-180" : ""
//                 }`}
//               />
//               <ChevronDownIcon
//                 strokeWidth={2.5}
//                 className={`block h-3 w-3 transition-transform lg:hidden ${
//                   isMobileMenuOpen ? "rotate-180" : ""
//                 }`}
//               />
//             </ListItem>
//           </Typography>
//         </MenuHandler>
//         <MenuList className="hidden max-w-screen-xl  lg:block">
//           <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
//             {renderItems}
//           </ul>
//         </MenuList>
//       </Menu>
//       <div className="block lg:hidden">
//         <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
//       </div>
//     </React.Fragment>
//   );
// }


function NavList() {
    return (
        <List className=" mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
            <Typography
                as="a"
                href="#"
                variant="small"
                color="blue-gray"
                className="font-medium"
            >
                <ListItem className="  text-xl flex items-center gap-2 py-2 pr-4">
                    Property Manager/Landlord
                </ListItem>
            </Typography>
            {/* <NavListMenu /> */}
            <Typography
                as="a"
                href="#"
                variant="small"
                color="blue-gray"
                className="  text-xl font-medium"
            >
                <ListItem className="flex items-center gap-2 py-2 pr-4">
                    Tenants
                </ListItem>
            </Typography>

            <Typography
                as="a"
                href="#"
                variant="small"
                color="blue-gray"
                className="  text-xl font-medium"
            >

                <ListItem className="flex items-center gap-2 py-2 pr-4">


                    Log In

                </ListItem>
            </Typography>
            <Typography
                as="a"
                href="#"
                variant="small"
                color="blue-gray"
                className="  text-xl font-medium"
            >
                <ListItem className="flex items-center gap-2 py-2 pr-4">
                    About Us
                </ListItem>
            </Typography>
            <Typography
                as="a"
                href="#"
                variant="small"
                color="blue-gray"
                className="  text-xl font-medium"
            >
                <ListItem className="flex  items-center gap-2 py-2 pr-4">Blog</ListItem>
            </Typography>
        </List>
    );
}

// export default function Nav() {
//   const [openNav, setOpenNav] = React.useState(false);
//   React.useEffect(() => {
//     window.addEventListener(
//       "resize",
//       () => window.innerWidth >= 960 && setOpenNav(false)
//     );
//   }, []);

    return (
        <motion.div
            className="  z-50  mt-8 flex justify-center text-5xl
             items-center  h-55  w-full "
                >
            <div className="  px-4 py-2  bg-primary-1 text-head-cred ">
                <div className="flex justify-around items-stretch text-blue-gray-900  rounded-none border-none shadow-none">
                    <div className="ml-44">
                        <Typography
                            as="a"
                            href="#"
                            variant="h6"
                            className="mr-4 cursor-pointer py-1.5 lg:ml-2"
                        >
                            CredSys
                        </Typography>
                    </div>
                    <div className=" items-center flex gap-2 mr-80 ml-3 text-black ">
                        <div className="hidden lg:block">
                            <NavList />
                        </div>
                        <div className="gap-2 lg:flex">
                            <Button variant="contained" className=" bg-slate-700 size-lg w-32 text-white font-bold  " >
                                Log In / Signup
                            </Button>

                        <div className="gap-1 ">
                            <button
                                type="button"
                                className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                            >
                                Log In
                            </button>
                        </div>

                        <div className="gap-1 ">
                            <button
                                type="button"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                            >
                                SignUP
                            </button>
                        </div>
                    </div>
                    {/* <IconButton
                      variant="text"
                      color="blue-gray"
                      className="lg:hidden"
                      onClick={() => setOpenNav(!openNav)}
                    >
                      {openNav ? (
                        <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                      ) : (
                        <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                      )}
                    </IconButton> */}
                </div>
            </div>
            </div>
        </motion.div>
    );
}