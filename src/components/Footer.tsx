import Link from "next/link";

import { Emteka } from "./icons/Emteka";
import { Instagram } from "./icons/Instagram";
import { LinkedIn } from "./icons/LinkedIn";

export function Footer() {
  return (
    <footer className="bg-secondary-500 py-6">
      <div className="mx-8 lg:mx-16 xl:w-[1200px] xl:mx-auto">
        <div className="lg:flex lg:justify-between lg:gap-x-6">
          <div className="flex flex-col justify-center items-center gap-y-6 px-6 mb-6 lg:justify-start lg:items-start lg:px-0 lg:mb-0 lg:w-[262px]">
            <strong className="text-neutral-0 font-semibold flex justify-between items-center lg:text-xl lg:gap-x-1">
              <Emteka className="w-6 h-6 lg:w-10 lg:h-10" />
              Emteka
            </strong>

            <p className="text-neutral-200 text-center text-sm border-b border-neutral-200 pb-6 lg:text-left lg:border-none lg:pb-0">
              Buka Potensi Matematika mu bersama Emteka!
            </p>

            <ul className="flex justify-center items-center gap-x-4">
              <li>
                <Link
                  href="https://www.linkedin.com/company/emteka-id/"
                  target="_blank"
                >
                  <LinkedIn className="fill-neutral-0 w-7 h-7 lg:w-8 lg:h-8" />
                </Link>
              </li>

              <li>
                <Link
                  href="https://www.instagram.com/emteka_frh/"
                  target="_blank"
                >
                  <Instagram className="fill-neutral-0 w-7 h-7 lg:w-8 lg:h-8" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:flex lg:justify-between lg:gap-x-8">
            <div className="border-b border-neutral-200 pb-6 mb-6 lg:border-none lg:pb-0 lg:mb-0">
              <h3 className="text-neutral-0 font-medium mb-3">Link</h3>

              <ul className="flex flex-col gap-y-2">
                <li>
                  <Link href="/" className="text-neutral-200 text-sm block">
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    href="/about-us"
                    className="text-neutral-200 text-sm block"
                  >
                    About Us
                  </Link>
                </li>

                <li>
                  <Link
                    href="/#mailing-list"
                    className="text-neutral-200 text-sm block"
                    scroll={false}
                  >
                    Waiting List
                  </Link>
                </li>
              </ul>
            </div>

            <div className="border-b border-neutral-200 pb-6 mb-6 lg:border-none lg:pb-0 lg:mb-0">
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

            <div className="border-b border-neutral-200 pb-6 lg:border-none lg:pb-0 lg:w-[224px]">
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

        <p className="text-neutral-200 text-center text-sm mt-6 lg:mt-10">
          &copy; {new Date().getFullYear()} Emteka. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
