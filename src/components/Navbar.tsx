import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import { Emteka } from "./icons/Emteka";
import { Menu } from "./icons/Menu";
import { useDelayedUnmount } from "@hooks/useDelayedUnmount";
import { useClickOutside } from "@hooks/useClickOutside";

export function Navbar() {
  const [isOpened, setIsOpened] = useState(false);
  const { isMounted, setIsMounted, animationOnUnmount } = useDelayedUnmount();
  const { pathname } = useRouter();

  const buttonRef = useClickOutside<HTMLButtonElement>(() =>
    animationOnUnmount(() => setIsOpened(false), 250)
  );

  function openMenu() {
    if (isMounted === false) {
      setIsMounted(true);
    }

    isOpened
      ? animationOnUnmount(() => setIsOpened(false), 250)
      : setIsOpened(true);
  }

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-20">
        <div
          className={`${
            pathname === "/" ? "bg-secondary-500" : "bg-neutral-0"
          }`}
        >
          <div className="flex justify-between items-center py-4 mx-8 lg:mx-16 xl:w-[1200px] xl:mx-auto">
            <strong
              className={`${
                pathname === "/" ? "text-neutral-0" : "text-neutral-900"
              } font-semibold flex justify-between items-center gap-x-1 lg:text-xl`}
            >
              <Emteka className="w-6 h-6 lg:w-8 lg:h-8" />
              Emteka
            </strong>

            <button
              ref={buttonRef}
              onClick={openMenu}
              type="button"
              aria-label="Navigation Menu"
              className="lg:hidden"
            >
              <Menu
                className={`${
                  pathname === "/" ? "fill-neutral-0" : "fill-neutral-900"
                } w-7 h-7`}
              />
            </button>

            <DesktopNavbar pathname={pathname} />
          </div>
        </div>

        {isOpened ? (
          <MobileNavbar isMounted={isMounted} pathname={pathname} />
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

function DesktopNavbar({ pathname }: { pathname: string }) {
  return (
    <>
      <nav className="hidden lg:flex lg:justify-between lg:items-center">
        <ul className="lg:flex lg:justify-between lg:items-center lg:gap-x-6 xl:gap-x-8">
          <li>
            <Link
              href="/"
              className={`${
                pathname === "/"
                  ? "text-neutral-0 font-bold"
                  : "text-neutral-900"
              }`}
            >
              Beranda
            </Link>
          </li>

          <li>
            <Link
              href="/about-us"
              className={`${
                pathname === "/about-us"
                  ? "text-neutral-900 font-bold"
                  : "text-neutral-0"
              }`}
            >
              Tentang Kami
            </Link>
          </li>

          <li>
            <Link
              href="/#mailing-list"
              scroll={false}
              className={`${
                pathname === "/" ? "text-neutral-0" : "text-neutral-900"
              }`}
            >
              Waiting List
            </Link>
          </li>
        </ul>
      </nav>

      <button
        aria-disabled
        disabled
        type="button"
        className="btn-primary hidden cursor-not-allowed lg:block lg:px-16"
      >
        Join us
      </button>
    </>
  );
}

function MobileNavbar({
  isMounted,
  pathname,
}: {
  isMounted: boolean;
  pathname: string;
}) {
  return (
    <nav>
      <ul
        className={`${
          isMounted ? "animate-scaleIn" : "animate-scaleOut"
        } bg-neutral-0 flex flex-col lg:hidden`}
      >
        <li>
          <Link
            href="/"
            className={`${
              pathname === "/" ? "font-bold" : ""
            } text-neutral-900 font-medium inline-block text-sm pt-4 pb-2 px-6`}
          >
            Beranda
          </Link>
        </li>

        <li>
          <Link
            href="/about-us"
            className={`${
              pathname === "/about-us" ? "font-bold" : ""
            } text-neutral-900 font-medium inline-block text-sm py-2 px-6`}
          >
            Tentang Kami
          </Link>
        </li>

        <li>
          <Link
            href="/#mailing-list"
            scroll={false}
            className="text-neutral-900 font-medium inline-block text-sm pt-2 pb-4 px-6"
          >
            Waiting List
          </Link>
        </li>
      </ul>
    </nav>
  );
}
