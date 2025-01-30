"use client";

import Image from "next/image";
import Landing from "@/assets/images/Element.png";
import Footer from "@/assets/images/Footer.png";
import subLanding_1 from "@/assets/images/Landing-1.jpg";
import subLanding_2 from "@/assets/images/Landing-2.png";
import subLanding_3 from "@/assets/images/Landing-3.png";
import CardBlog from "@/components/UI/CardBlog";
import { Avatar, Button } from "@mui/material";

const BlogPage: React.FC = () => {
  return (
    <main className="bg-[#F7F7FC]">
      {/* Landing Section  */}
      <section className="mb-5">
        <div className="relative">
          <Image
            className="z-0 bg-primary"
            src={Landing}
            layout="responsive"
            width={100}
            height={100}
            alt="Landing Image"
          />
          <div className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 pt-3">
            <div className="container mx-auto px-6 lg:max-w-[1170px]">
              <div className="relative flex items-center justify-center gap-5 xl:justify-between">
                <div className="flex-1 text-center">
                  <h1 className="mb-6 text-4xl text-white md:text-8xl">
                    Welcome to JoeDaily
                  </h1>
                  <p className="text-sm text-white md:text-lg">
                    Travel | Productivity | Motivation | Relationship
                  </p>
                </div>
                <div className="relative hidden h-full w-full flex-1 items-center justify-center xl:flex">
                  <Image
                    className="w-[350px] rounded-lg"
                    src={subLanding_1}
                    alt="SubLanding Image"
                  />
                  <Image
                    className="absolute -bottom-32 -left-12 w-[250px] rounded-lg"
                    src={subLanding_2}
                    alt="SubLanding Image"
                  />
                  <Image
                    className="absolute -right-20 -top-16 w-[250px] rounded-lg"
                    src={subLanding_3}
                    alt="SubLanding Image"
                  />
                </div>
                <div className="absolute bottom-0 left-32 hidden gap-5 xl:flex">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border text-white opacity-40">
                    Fb
                  </div>
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border text-white opacity-40">
                    Fb
                  </div>
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border text-white opacity-40">
                    Fb
                  </div>
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border text-white opacity-40">
                    Fb
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F7F7FC] py-16">
        <div className="container mx-auto px-6 lg:max-w-[1170px]">
          <h1 className="my-2 mb-8 border-l-4 border-primary pl-2 font-sans text-2xl font-bold uppercase md:text-3xl">
            Latest Post
          </h1>
          {/* blog Cards Grid  */}
          <div className="flex flex-col justify-between gap-5 md:flex-row">
            <div>
              <div className="mb-4 grid w-full grid-cols-1 gap-4 lg:grid-cols-2">
                <CardBlog />
                <CardBlog />
                <CardBlog />
                <CardBlog />
                <CardBlog />
                <CardBlog />
              </div>
              <div className="flex w-full justify-center">
                <Button variant="contained" className="">
                  Load More
                </Button>
              </div>
            </div>
            <div className="w-full md:w-[700px]">
              {/* Search Content  */}
              <div className="mb-4 box-content">
                <h1 className="text-xl">Search</h1>
                <div className="relative mt-6">
                  <input
                    type="Search"
                    placeholder="Enter Keyword"
                    aria-label="Search"
                    className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
                  />
                  <div className="absolute inset-y-1 right-1 flex justify-end">
                    <button
                      type="submit"
                      aria-label="Submit"
                      className="flex aspect-square h-full items-center justify-center rounded-xl bg-primary text-white transition hover:bg-neutral-800"
                    >
                      <svg
                        viewBox="0 0 16 6"
                        aria-hidden="true"
                        className="w-4"
                      >
                        <path
                          fill="currentColor"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M16 3 10 .5v2H0v1h10v2L16 3Z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              {/* Popular Posts List  */}
              <div className="mb-4 box-content">
                <h1 className="text-xl">Popular Posts</h1>
                <div>
                  <div className="my-3 flex h-full items-center justify-start gap-2">
                    <Avatar
                      src="https://s3-alpha-sig.figma.com/img/3d5c/b72f/ae1e058c2ed75ab981a9f8bb62e96a13?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a18VE~FGFT~v8D9-O~88JSK~y9SE~MefKeuzvSlS0w4mGSL22pIspT3NCxcrlQRWIA7Jm9l5T06ss0sTIxZvYVNnjXZsXNS6-vJjjzvlei5he8HJx4rRgyI3A7IhiSRow90EBIWTjk-SHnh0pZ2M6UurtH5ydxPtGDJyLGaG8vjZo86gmxyeJoYXYIHXsyn5~ILsGVMSiXohp5M0oSdpiR4TTYuPpycTV-qtUMqaq9bjDVZNHP9hfy5Ekip9IInRsI8MfB5jJJ-GCtMirfH0lO2s8IX9GjvtB1aSEuV7rcdHolzjeWoLX3KQeTFwAbDCkNZ5NWDVsYYEvhw91DyaJw__"
                      alt="Ralph Edwards"
                      sx={{ width: 45, height: 45, mr: 1, borderRadius: 2 }}
                    />
                    <div className="flex flex-col items-start">
                      <h3 className="mb-1 text-sm">
                        Top 5 Destination in Japan
                      </h3>
                      <p className="text-xs leading-none">Sept 10, 2020</p>
                    </div>
                  </div>
                  <div className="my-3 flex h-full items-center justify-start gap-2">
                    <Avatar
                      src="https://s3-alpha-sig.figma.com/img/3d5c/b72f/ae1e058c2ed75ab981a9f8bb62e96a13?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a18VE~FGFT~v8D9-O~88JSK~y9SE~MefKeuzvSlS0w4mGSL22pIspT3NCxcrlQRWIA7Jm9l5T06ss0sTIxZvYVNnjXZsXNS6-vJjjzvlei5he8HJx4rRgyI3A7IhiSRow90EBIWTjk-SHnh0pZ2M6UurtH5ydxPtGDJyLGaG8vjZo86gmxyeJoYXYIHXsyn5~ILsGVMSiXohp5M0oSdpiR4TTYuPpycTV-qtUMqaq9bjDVZNHP9hfy5Ekip9IInRsI8MfB5jJJ-GCtMirfH0lO2s8IX9GjvtB1aSEuV7rcdHolzjeWoLX3KQeTFwAbDCkNZ5NWDVsYYEvhw91DyaJw__"
                      alt="Ralph Edwards"
                      sx={{ width: 45, height: 45, mr: 1, borderRadius: 2 }}
                    />
                    <div className="flex flex-col items-start">
                      <h3 className="mb-1 text-sm">
                        Top 5 Destination in Japan
                      </h3>
                      <p className="text-xs leading-none">Sept 10, 2020</p>
                    </div>
                  </div>
                  <div className="my-3 flex h-full items-center justify-start gap-2">
                    <Avatar
                      src="https://s3-alpha-sig.figma.com/img/3d5c/b72f/ae1e058c2ed75ab981a9f8bb62e96a13?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a18VE~FGFT~v8D9-O~88JSK~y9SE~MefKeuzvSlS0w4mGSL22pIspT3NCxcrlQRWIA7Jm9l5T06ss0sTIxZvYVNnjXZsXNS6-vJjjzvlei5he8HJx4rRgyI3A7IhiSRow90EBIWTjk-SHnh0pZ2M6UurtH5ydxPtGDJyLGaG8vjZo86gmxyeJoYXYIHXsyn5~ILsGVMSiXohp5M0oSdpiR4TTYuPpycTV-qtUMqaq9bjDVZNHP9hfy5Ekip9IInRsI8MfB5jJJ-GCtMirfH0lO2s8IX9GjvtB1aSEuV7rcdHolzjeWoLX3KQeTFwAbDCkNZ5NWDVsYYEvhw91DyaJw__"
                      alt="Ralph Edwards"
                      sx={{ width: 45, height: 45, mr: 1, borderRadius: 2 }}
                    />
                    <div className="flex flex-col items-start">
                      <h3 className="mb-1 text-sm">
                        Top 5 Destination in Japan
                      </h3>
                      <p className="text-xs leading-none">Sept 10, 2020</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Category box */}
              <div className="mb-4 box-content">
                <h1 className="mb-2 text-xl">Categories</h1>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  <div className="relative overflow-hidden">
                    <Image
                      className="w-[350px] rounded-lg brightness-50"
                      src="https://s3-alpha-sig.figma.com/img/3f7a/0304/438005306087b52a0e1c41362231d97b?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RMneTBN7ejfNJkADzt5YRdYh4-2GZtbar6NVEtuEvt1AaqCrqWlvOFprAIuBBJrJ7DpWdxvH3Tn0wCIqqcKWafS-bIXkFlJN7tCfO9BZ5ZIIV-nhZvDbU4nwhc1lchvhiNJSADeTe6Xb0VQ4sZG1JNhFIHC3LV77xTE90d~NEMPy0izxKbxkAqw3FaN7QFEzonh6oCtli9qw5PhMovxbG0MCZ7wZS28xtIM3YwsmdfoWxUMgKupefSZNWC7DQG3cuIDvHaZrq8vAukEzvNJ7haCMsQuA2vXn0MnSZgaOvhyjk4iLppkk1QXsrC3u2hw0wOgypEkLuwhgFWyAPGiO7Q__"
                      layout="responsive"
                      width={100}
                      height={100}
                      alt="Categories Image"
                    />
                    <div>
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 text-white">
                        Travel
                      </span>
                      <span className="absolute -top-1 right-2 flex h-10 w-10 items-center justify-center rounded-md bg-primary text-white">
                        1
                      </span>
                    </div>
                  </div>
                  <div className="relative overflow-hidden">
                    <Image
                      className="w-[350px] rounded-lg brightness-50"
                      src="https://s3-alpha-sig.figma.com/img/3f7a/0304/438005306087b52a0e1c41362231d97b?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RMneTBN7ejfNJkADzt5YRdYh4-2GZtbar6NVEtuEvt1AaqCrqWlvOFprAIuBBJrJ7DpWdxvH3Tn0wCIqqcKWafS-bIXkFlJN7tCfO9BZ5ZIIV-nhZvDbU4nwhc1lchvhiNJSADeTe6Xb0VQ4sZG1JNhFIHC3LV77xTE90d~NEMPy0izxKbxkAqw3FaN7QFEzonh6oCtli9qw5PhMovxbG0MCZ7wZS28xtIM3YwsmdfoWxUMgKupefSZNWC7DQG3cuIDvHaZrq8vAukEzvNJ7haCMsQuA2vXn0MnSZgaOvhyjk4iLppkk1QXsrC3u2hw0wOgypEkLuwhgFWyAPGiO7Q__"
                      layout="responsive"
                      width={100}
                      height={100}
                      alt="Categories Image"
                    />
                    <div>
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 text-white">
                        Travel
                      </span>
                      <span className="absolute -top-1 right-2 flex h-10 w-10 items-center justify-center rounded-md bg-primary text-white">
                        1
                      </span>
                    </div>
                  </div>
                  <div className="relative overflow-hidden">
                    <Image
                      className="w-[350px] rounded-lg brightness-50"
                      src="https://s3-alpha-sig.figma.com/img/3f7a/0304/438005306087b52a0e1c41362231d97b?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RMneTBN7ejfNJkADzt5YRdYh4-2GZtbar6NVEtuEvt1AaqCrqWlvOFprAIuBBJrJ7DpWdxvH3Tn0wCIqqcKWafS-bIXkFlJN7tCfO9BZ5ZIIV-nhZvDbU4nwhc1lchvhiNJSADeTe6Xb0VQ4sZG1JNhFIHC3LV77xTE90d~NEMPy0izxKbxkAqw3FaN7QFEzonh6oCtli9qw5PhMovxbG0MCZ7wZS28xtIM3YwsmdfoWxUMgKupefSZNWC7DQG3cuIDvHaZrq8vAukEzvNJ7haCMsQuA2vXn0MnSZgaOvhyjk4iLppkk1QXsrC3u2hw0wOgypEkLuwhgFWyAPGiO7Q__"
                      layout="responsive"
                      width={100}
                      height={100}
                      alt="Categories Image"
                    />
                    <div>
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 text-white">
                        Travel
                      </span>
                      <span className="absolute -top-1 right-2 flex h-10 w-10 items-center justify-center rounded-md bg-primary text-white">
                        1
                      </span>
                    </div>
                  </div>
                  <div className="relative overflow-hidden">
                    <Image
                      className="w-[350px] rounded-lg brightness-50"
                      src="https://s3-alpha-sig.figma.com/img/3f7a/0304/438005306087b52a0e1c41362231d97b?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RMneTBN7ejfNJkADzt5YRdYh4-2GZtbar6NVEtuEvt1AaqCrqWlvOFprAIuBBJrJ7DpWdxvH3Tn0wCIqqcKWafS-bIXkFlJN7tCfO9BZ5ZIIV-nhZvDbU4nwhc1lchvhiNJSADeTe6Xb0VQ4sZG1JNhFIHC3LV77xTE90d~NEMPy0izxKbxkAqw3FaN7QFEzonh6oCtli9qw5PhMovxbG0MCZ7wZS28xtIM3YwsmdfoWxUMgKupefSZNWC7DQG3cuIDvHaZrq8vAukEzvNJ7haCMsQuA2vXn0MnSZgaOvhyjk4iLppkk1QXsrC3u2hw0wOgypEkLuwhgFWyAPGiO7Q__"
                      layout="responsive"
                      width={100}
                      height={100}
                      alt="Categories Image"
                    />
                    <div>
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 text-white">
                        Travel
                      </span>
                      <span className="absolute -top-1 right-2 flex h-10 w-10 items-center justify-center rounded-md bg-primary text-white">
                        1
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-4 box-content bg-primary">
                <Image
                  className="mb-3 w-[350px] rounded-lg"
                  src="https://s3-alpha-sig.figma.com/img/6e11/b7aa/edac4d2fa978162ca8ab628e8a4eb05c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PyjGSB9S1vszEQTv335gG~A9KCancjzKiSqZ0sJj-Kga9Xfpg409hgug3peRAQTHlwwlhXlFIwztYEH7tH3kkjah8Rfdfn7OF27h3FsLve5-9LLQo8~vowboQX4vtl1OWw5x-BrZmcECHgQkDtIgtzjSbPgF5dUHZgGQc3gx-WcxCI2e7UlRRP2DAurM2r2aZgOER~qLdgOUIsFJ26AjcEDGlUfT2i9gqxKqrH37oh552XQzccTmXSO1ydEIm1kTENEE-x6W1PYsMpbCerA8qKEb42yqAVVp641CA4G3FVhlY3hHp~2tiO2-5ZsgpUJgjr4Dh6x3ueqIZJgyQS5URQ__"
                  layout="responsive"
                  width={100}
                  height={100}
                  alt="Categories Image"
                />
                <h1 className="mb-2 text-center text-xl text-white">
                  Joe Iskandar
                </h1>
                <p className="text-center text-sm text-white">
                  Leverage agile frameworks to provide a robust synopsis for
                  high level overviews.
                </p>
                <div className="my-4 flex justify-center gap-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border text-white">
                    Fb
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border text-white">
                    Fb
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border text-white">
                    Fb
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border text-white">
                    Fb
                  </div>
                </div>
              </div>
              {/* Subscribe Content  */}
              <div className="mb-4 box-content bg-primary">
                <h1 className="text-xl text-white">Subscribe JoeDaily</h1>
                <div className="relative mt-6">
                  <input
                    type="email"
                    placeholder="Enter email here"
                    aria-label="email"
                    className="block w-full rounded-2xl border border-neutral-300 bg-transparent bg-white py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
                  />
                  <div className="absolute inset-y-1 right-1 flex justify-end">
                    <button
                      type="submit"
                      aria-label="Submit"
                      className="flex aspect-square h-full items-center justify-center rounded-xl bg-primary text-white transition hover:bg-neutral-800"
                    >
                      <svg
                        viewBox="0 0 16 6"
                        aria-hidden="true"
                        className="w-4"
                      >
                        <path
                          fill="currentColor"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M16 3 10 .5v2H0v1h10v2L16 3Z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer Section  */}
      <footer className="relative max-h-[250px] overflow-hidden">
        <Image
          className="z-0 bg-primary"
          src={Footer}
          layout="responsive"
          width={100}
          height={100}
          alt="Landing Image"
        />
        <div className="absolute bottom-4 left-1/2 flex w-full -translate-x-1/2">
          <div className="container mx-auto px-6 lg:max-w-[1170px]">
            <div className="flex items-center justify-between border-t pt-5">
              <p className="text-white">
                2021 | All rights reserved by JoeDaily.
              </p>
              <div className="my-4 flex justify-center gap-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border text-white">
                  Fb
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border text-white">
                  Fb
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border text-white">
                  Fb
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border text-white">
                  Fb
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};
export default BlogPage;
