import Link from "next/link";

import { EmtekaIcon } from "./(icons)/emteka";
import { LinkedInIcon } from "./(icons)/linkedIn";
import { InstagramIcon } from "./(icons)/instagram";

export function Footer() {
  return (
    <footer className="bg-secondary-500 p-6 desktop:py-10 desktop:px-20">
      <div className="desktop:flex desktop:justify-between desktop:gap-x-6">
        <div className="flex flex-col justify-center items-center gap-y-6 px-6 mb-6 desktop:justify-start desktop:items-start desktop:px-0 desktop:mb-0 desktop:w-[262px]">
          <h2 className="text-neutral-0 font-semibold flex justify-between items-center desktop:text-xl desktop:gap-x-1">
            <EmtekaIcon className="w-6 h-6 desktop:w-10 desktop:h-10" />
            Emteka
          </h2>

          <p className="text-neutral-200 text-center text-sm border-b border-neutral-200 pb-6 desktop:text-left desktop:border-none desktop:pb-0">
            Buka Potensi Matematika mu bersama Emteka!
          </p>

          <ul className="flex justify-center items-center gap-x-4">
            <li>
              <Link
                href="https://www.linkedin.com/company/emteka-id/"
                target="_blank"
              >
                <LinkedInIcon className="fill-neutral-0 w-7 h-7 desktop:w-8 desktop:h-8" />
              </Link>
            </li>

            <li>
              <Link
                href="https://www.instagram.com/emteka_frh/"
                target="_blank"
              >
                <InstagramIcon className="fill-neutral-0 w-7 h-7 desktop:w-8 desktop:h-8" />
              </Link>
            </li>
          </ul>
        </div>

        <div className="desktop:flex desktop:justify-between desktop:gap-x-8">
          <div className="border-b border-neutral-200 pb-6 mb-6 desktop:border-none desktop:pb-0 desktop:mb-0">
            <h3 className="text-neutral-0 font-medium mb-3">Link</h3>

            <ul className="flex flex-col gap-y-2">
              <li>
                <Link href="/" className="text-neutral-200 text-sm block">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/tentang-kami"
                  className="text-neutral-200 text-sm block"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/#waiting-list"
                  className="text-neutral-200 text-sm block"
                >
                  Waiting List
                </Link>
              </li>
            </ul>
          </div>

          <div className="border-b border-neutral-200 pb-6 mb-6 desktop:border-none desktop:pb-0 desktop:mb-0">
            <h3 className="text-neutral-0 font-medium mb-3">Kontak</h3>

            <ul className="flex flex-col gap-y-2">
              <li>
                <Link
                  href="mailto:info@furahasystems.com"
                  target="_blank"
                  className="text-neutral-200 text-sm block"
                >
                  info@furahasystems.com
                </Link>
              </li>

              <li>
                <Link
                  href="https://wa.me/6282211000129"
                  target="_blank"
                  className="text-neutral-200 text-sm block"
                >
                  0822 1100 0129
                </Link>
              </li>
            </ul>
          </div>

          <div className="border-b border-neutral-200 pb-6 desktop:border-none desktop:pb-0 desktop:w-[224px]">
            <h3 className="text-neutral-0 font-medium mb-3">Lokasi</h3>

            <Link
              href="https://www.google.com/maps/place/Griya+Gregah/@-6.3361279,106.7329851,18.39z/data=!4m6!3m5!1s0x2e69ef84f14f3a63:0x4360af03831bfdce!8m2!3d-6.3362697!4d106.7327165!16s%2Fg%2F11cs2hp3_t?hl=in&entry=ttu"
              target="_blank"
              className="text-neutral-200 text-sm block"
            >
              Blok A30, Jl. Pamulang Permai Bar. 1 No.23, Pamulang Bar., Kec.
              Pamulang, Kota Tangerang Selatan
            </Link>
          </div>
        </div>
      </div>

      <p className="text-neutral-200 text-center text-sm mt-6 desktop:mt-10">
        &copy; {new Date().getFullYear()} Emteka. All Rights Reserved
      </p>
    </footer>
  );
}