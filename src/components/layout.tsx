import { Outlet} from "react-router-dom";
import { Navbar, Typography} from "@material-tailwind/react";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Layout = () => {
    return (
        <div className="min-h-screen flex flex-col">
          <Navbar 
            className="sticky top-0 z-10 mx-auto w-screen bg-zinc-900 px-4 py-2"
          >
            <div className="flex flex-wrap items-center justify-start gap-y-4 text-white ml-7">
              <Typography
                as="a"
                href="/"
                variant="h5"
                className="mr-4 cursor-pointer py-1.5 font-medium"
              >
                Home
              </Typography>
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-zinc-900 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300">
                    Applications
                    <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute mt-2 w-32 origin-top-right rounded-md bg-zinc-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/colorflipper"
                            className={classNames(
                              active ? 'bg-zinc-900 text-gray-500' : 'text-gray-300',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            Color Flipper
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/calculator"
                            className={classNames(
                              active ? 'bg-zinc-900 text-gray-500' : 'text-gray-300',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            Calculator
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/rps"
                            className={classNames(
                              active ? 'bg-zinc-900 text-gray-500' : 'text-gray-300',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            Rock Paper Scissors
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </Navbar>

          <Outlet />
          <div className="relative flex flex-grow bg-zinc-700"></div>
        </div>
    )
}

export default Layout;