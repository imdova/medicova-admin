"use client";
import NotFoundPage from "@/app/not-found";
import Landing from "@/assets/images/Element-2.png";
import subLanding from "@/assets/images/Landing-4.jpg";
import { ShareOutlined } from "@mui/icons-material";
import Footer from "@/assets/images/Footer.png";
import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Checkbox,
  FormControlLabel,
  InputLabel,
  TextField,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

type SingleBlogProps = {
  params: { blogID: string };
};
type BlogPost = {
  title: string;
  content: string;
};

export default function BlogPage({ params }: SingleBlogProps) {
  const { handleSubmit } = useForm();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const { blogID } = params;

  // Simulated blog data (replace with actual fetching logic)
  const blogPosts: Record<string, BlogPost> = {
    "1": {
      title: "Next.js App Router",
      content: "Learn about the new App Router in Next.js!",
    },
    "2": {
      title: "React Server Components",
      content: "React Server Components are powerful...",
    },
  };

  const post = blogPosts[blogID];

  if (!post) return NotFoundPage(); // 404 page if post is not found

  const onSubmit = (data: any) => {
    console.log("Form Data Submitted:", data);
    setName("");
    setEmail("");
    setComment("");
  };

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
          <div className="absolute -bottom-20 left-1/2 flex w-full -translate-x-1/2 pt-3">
            <div className="container mx-auto px-6 lg:max-w-[1170px]">
              <Image
                className="z-0 rounded-lg border bg-primary"
                src={subLanding}
                layout="responsive"
                width={100}
                height={100}
                alt="Landing Image"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F7F7FC] py-28">
        <div className="container mx-auto px-6 lg:max-w-[1170px]">
          {/* blog Cards Grid  */}
          <div className="flex flex-col justify-between gap-5 md:flex-row">
            <div className="w-full">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-semibold md:text-5xl">
                    New Year Resolution
                  </h1>
                  <span className="flex gap-3">
                    <div className="my-3 flex h-full items-center justify-start gap-2">
                      <Avatar
                        src="https://s3-alpha-sig.figma.com/img/3d5c/b72f/ae1e058c2ed75ab981a9f8bb62e96a13?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a18VE~FGFT~v8D9-O~88JSK~y9SE~MefKeuzvSlS0w4mGSL22pIspT3NCxcrlQRWIA7Jm9l5T06ss0sTIxZvYVNnjXZsXNS6-vJjjzvlei5he8HJx4rRgyI3A7IhiSRow90EBIWTjk-SHnh0pZ2M6UurtH5ydxPtGDJyLGaG8vjZo86gmxyeJoYXYIHXsyn5~ILsGVMSiXohp5M0oSdpiR4TTYuPpycTV-qtUMqaq9bjDVZNHP9hfy5Ekip9IInRsI8MfB5jJJ-GCtMirfH0lO2s8IX9GjvtB1aSEuV7rcdHolzjeWoLX3KQeTFwAbDCkNZ5NWDVsYYEvhw91DyaJw__"
                        alt="Ralph Edwards"
                        sx={{ width: 45, height: 45, mr: 1 }}
                      />
                      <div className="flex items-center gap-10">
                        <h3 className="text-lg text-secondary">By Joe</h3>
                        <p className="relative text-xs leading-none before:absolute before:-left-4 before:top-1/2 before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-full before:bg-secondary">
                          Sept 10, 2020
                        </p>
                      </div>
                    </div>
                  </span>
                </div>
                <button className="h-10 w-10 rounded-full bg-[#43cc7356] text-[#43CC74] md:h-12 md:w-12">
                  <ShareOutlined className="text-lg md:text-2xl" />
                </button>
              </div>
              <div className="mt-4">
                {/* paragraph one */}
                <p className="mx-auto max-w-3xl text-sm leading-relaxed text-gray-700 md:text-lg md:leading-loose">
                  Leverage agile frameworks to provide a robust synopsis for
                  high-level overviews. Iterative approaches to corporate
                  strategy foster collaborative thinking to further the overall
                  value proposition. Organically grow the holistic world view of
                  disruptive innovation via workplace diversity and empowerment.
                  Bring to the table win-win survival strategies to ensure
                  proactive domination. At the end of the day, going forward, a
                  new normal that has evolved from generation X is on the runway
                  heading towards a streamlined cloud solution. User-generated
                  content in real-time will have multiple touchpoints for
                  offshoring. Leverage agile frameworks to provide a robust
                  synopsis for high-level overviews. Iterative approaches to
                  corporate strategy foster collaborative thinking to further
                  the overall value proposition. Organically grow the holistic
                  world view of disruptive innovation via workplace diversity
                  and empowerment. Bring to the table win-win survival
                  strategies to ensure proactive domination. At the end of the
                  day, going forward, a new normal that has evolved from
                  generation X is on the runway heading towards a streamlined
                  cloud solution. User-generated content in real-time will have
                  multiple touchpoints for offshoring.
                </p>
                {/* heading one  */}
                <h3 className="my-6 text-xl font-semibold md:text-3xl">
                  Motivation Letter for My Self
                </h3>
                {/* paragraph Two */}
                <p className="mx-auto max-w-3xl text-sm leading-relaxed text-gray-700 md:text-lg md:leading-loose">
                  Leverage agile frameworks to provide a robust synopsis for
                  high level overviews. Iterative approaches to corporate
                  strategy foster collaborative thinking to further the overall
                  value proposition. Organically grow the holistic world view of
                  disruptive innovation via workplace diversity and
                  empowerment.Bring to the table win-win survival strategies to
                  ensure proactive domination. At the end of the day, going
                  forward, a new normal that has evolved from generation X is on
                  the runway heading towards a streamlined cloud solution. User
                  generated content in real-time will have multiple touchpoints
                  for offshoring.Leverage agile frameworks to provide a robust
                  synopsis for high level overviews. Iterative approaches to
                  corporate strategy foster collaborative thinking to further
                  the overall value proposition. Organically grow the holistic
                  world view of disruptive innovation via workplace diversity
                  and empowerment.
                </p>
                {/* Image One */}
                <div className="my-3">
                  <div className="max-h-[300px] overflow-hidden">
                    <Image
                      className="z-0 bg-primary"
                      src="https://s3-alpha-sig.figma.com/img/f232/5065/40058e54ac7a5913c6b8789e9ce075f3?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bFuxKtBTNOOi3rucQsnj8cDkAPQP428zprbPanIvoneVjvP4-ro2mvtrD5ozGjeSZEl95m2TIPuklyYGvDFlyWhRHN6EHOsE32VpWN2XBtle3u9504vCA~5suoUBBTFU6NUHD53PYsyALZVwnScsS9KcE5T-3Sn7oDinCCzENHHt6vKPlL77YBqHKisX8jUjFdIkeq3hLF7kuhOYSmaHeLlWL5XCvgIj--b4W5qDceg0jbBx6u5c79fy3qtsP5Du-TAO2ENByfYxMEu~nmB3SaYrO88f7DzMD8lGwc2TY798lSmVHWJfe0j5wjiMCHSk6NNclBaGEJFvR8sfK2kcpQ__"
                      layout="responsive"
                      width={100}
                      height={100}
                      alt="blog image"
                    />
                  </div>
                  {/* capture Image  */}
                  <span className="my-2 block text-center text-sm text-secondary">
                    Image Holdiay in Bali since March 14, 2021
                  </span>
                </div>
                {/* heading Two  */}
                <h3 className="my-6 text-xl font-semibold md:text-3xl">
                  Preparing for New Year Work Life Balance
                </h3>
                {/* paragraph Three */}
                <p className="mx-auto max-w-3xl text-sm leading-relaxed text-gray-700 md:text-lg md:leading-loose">
                  Leverage agile frameworks to provide a robust synopsis for
                  high level overviews. Iterative approaches to corporate
                  strategy foster collaborative thinking to further the overall
                  value proposition. Organically grow the holistic world view of
                  disruptive innovation via workplace diversity and
                  empowerment.Bring to the table win-win survival strategies to
                  ensure proactive domination. At the end of the day, going
                  forward, a new normal that has evolved from generation X is on
                  the runway heading towards a streamlined cloud solution. User
                  generated content in real-time will have multiple touchpoints
                  for offshoring.Leverage agile frameworks to provide a robust
                  synopsis for high level overviews. Iterative approaches to
                  corporate strategy foster collaborative thinking to further
                  the overall value proposition. Organically grow the holistic
                  world view of disruptive innovation via workplace diversity
                  and empowerment.
                </p>
                {/* Image Two */}
                <div className="my-3">
                  <div className="flex max-h-[200px] justify-center gap-3 overflow-hidden">
                    <div className="h-full w-full">
                      <Image
                        className="z-0 flex-1 bg-primary object-cover"
                        src="https://s3-alpha-sig.figma.com/img/84d7/002b/2d2bce82a834ae8c555602b12021adc6?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KlkwgvyOu5078EcBlVcepCNGSHiAnWs7yimRQ2ja9DMhdHiXuUI7RPp-SZdQkVYHwLEGAjaaDKH7dhQcNw-gsDRscjYr8BfxtBK0QpvqfyEutBDZ3IOl9vods4B25PFoDe1Xyer~e4JFjhKinwjEqg~5pJg5xMhUhCwFuWb17oG7Mc22DcLKKldICtnGyJNZBYZDNDBZIRt9NFE6v3HcfwEHryzBCba6A2SrhWwso6dEYvYIsFbGCFRIVsmmzDC5-4zcJmlp6hjXnLBhPi7fDGw9cc~wU4Ez6U68BQqLho7~qjdvKxD2mkHmCihC9TMNkHSstZcrU1PeMmME5UQw5A__"
                        layout="responsive"
                        width={100}
                        height={100}
                        alt="blog image"
                      />
                    </div>
                    <div className="h-full w-full">
                      <Image
                        className="z-0 h-full flex-1 bg-primary object-cover"
                        src="https://s3-alpha-sig.figma.com/img/3f7a/0304/438005306087b52a0e1c41362231d97b?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RMneTBN7ejfNJkADzt5YRdYh4-2GZtbar6NVEtuEvt1AaqCrqWlvOFprAIuBBJrJ7DpWdxvH3Tn0wCIqqcKWafS-bIXkFlJN7tCfO9BZ5ZIIV-nhZvDbU4nwhc1lchvhiNJSADeTe6Xb0VQ4sZG1JNhFIHC3LV77xTE90d~NEMPy0izxKbxkAqw3FaN7QFEzonh6oCtli9qw5PhMovxbG0MCZ7wZS28xtIM3YwsmdfoWxUMgKupefSZNWC7DQG3cuIDvHaZrq8vAukEzvNJ7haCMsQuA2vXn0MnSZgaOvhyjk4iLppkk1QXsrC3u2hw0wOgypEkLuwhgFWyAPGiO7Q__"
                        layout="responsive"
                        width={100}
                        height={100}
                        alt="blog image"
                      />
                    </div>
                  </div>
                  {/* capture Image  */}
                  <span className="my-2 block text-center text-sm text-secondary">
                    Image Holdiay in Bali since March 14, 2021
                  </span>
                </div>
                {/* paragraph Four */}
                <p className="mx-auto max-w-3xl text-sm leading-relaxed text-gray-700 md:text-lg md:leading-loose">
                  Leverage agile frameworks to provide a robust synopsis for
                  high level overviews. Iterative approaches to corporate
                  strategy foster collaborative thinking to further the overall
                  value proposition. Organically grow the holistic world view of
                  disruptive innovation via workplace diversity and
                  empowerment.Bring to the table win-win survival strategies to
                  ensure proactive domination. At the end of the day, going
                  forward, a new normal that has evolved from generation X is on
                  the runway heading towards a streamlined cloud solution. User
                  generated content in real-time will have multiple touchpoints
                  for offshoring.Leverage agile frameworks to provide a robust
                  synopsis for high level overviews. Iterative approaches to
                  corporate strategy foster collaborative thinking to further
                  the overall value proposition. Organically grow the holistic
                  world view of disruptive innovation via workplace diversity
                  and empowerment.
                </p>
                {/* Tags Content  */}
                <div className="my-20">
                  <h3 className="my-6 text-xl font-semibold md:text-3xl">
                    Tags
                  </h3>
                  <div className="flex w-full flex-wrap gap-3">
                    <span className="flex items-center justify-center rounded-lg bg-[#2ba1482c] p-2 uppercase text-primary">
                      New Year
                    </span>
                    <span className="flex items-center justify-center rounded-lg bg-[#2ba1482c] p-2 uppercase text-primary">
                      New Year
                    </span>
                    <span className="flex items-center justify-center rounded-lg bg-[#2ba1482c] p-2 uppercase text-primary">
                      New Year
                    </span>
                    <span className="flex items-center justify-center rounded-lg bg-[#2ba1482c] p-2 uppercase text-primary">
                      New Year
                    </span>
                  </div>
                </div>
                {/* More Blogs  */}
                <div className="my-8">
                  <h3 className="my-6 text-xl font-semibold md:text-3xl">
                    More Blogs
                  </h3>
                  <div className="flex flex-col gap-5 md:flex-row">
                    <Card sx={{ padding: 2 }}>
                      <Link href="#">
                        <h2 className="mb-3">Previous</h2>
                        <CardMedia
                          sx={{
                            height: 140,
                            backgroundColor: "#eee",
                            borderRadius: 1,
                          }}
                          image="/static/images/cards/contemplative-reptile.jpg"
                          title="green iguana"
                        />
                        <CardContent>
                          <h1 className="mb-3 text-center text-xl">
                            Top 5 Destination in Japan
                          </h1>
                        </CardContent>
                      </Link>
                    </Card>
                    <Card sx={{ padding: 2 }}>
                      <Link href="#">
                        <h2 className="mb-3">Next</h2>
                        <CardMedia
                          sx={{
                            height: 140,
                            backgroundColor: "#eee",
                            borderRadius: 1,
                          }}
                          image="/static/images/cards/contemplative-reptile.jpg"
                          title="green iguana"
                        />
                        <CardContent>
                          <h1 className="mb-3 text-center text-xl">
                            Top 5 Destination in Japan
                          </h1>
                        </CardContent>
                      </Link>
                    </Card>
                  </div>
                </div>
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
      {/* comments area  */}
      <section className="min-h-[400px] bg-[#2BA149CC] p-10">
        <div className="container mx-auto px-6 lg:max-w-[1170px]">
          <div className="flex flex-col md:flex-row">
            <div className="mb-3 flex-1">
              <h1 className="w-full text-center text-2xl font-semibold text-white md:w-[300px] md:text-start md:text-5xl">
                Leave a Comment
              </h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex-1">
              <div>
                <p className="mb-5 w-full text-xs text-white md:w-1/2">
                  Have a project in mind that you think we’d be a great fit for
                  it? We’d love to know what you’re thinking
                </p>
                <div className="flex w-full gap-3">
                  <div className="w-full">
                    <InputLabel className="mb-2 text-xs text-white">
                      Name
                    </InputLabel>
                    <TextField
                      placeholder="input your name here"
                      sx={{
                        ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                          display: "none",
                        },
                        border: "1px solid #eee",
                      }}
                      fullWidth
                      rows={3}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="mb-4 rounded-xl bg-white text-xs"
                    />
                  </div>
                  <div className="w-full">
                    <InputLabel className="mb-2 text-xs text-white">
                      Email
                    </InputLabel>
                    <TextField
                      placeholder="input your email here"
                      sx={{
                        ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                          display: "none",
                        },
                        border: "1px solid #eee",
                      }}
                      fullWidth
                      rows={3}
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mb-4 rounded-xl bg-white"
                    />
                  </div>
                </div>
              </div>

              <div>
                <InputLabel className="mb-2 text-xs text-white">
                  Comment
                </InputLabel>
                <textarea
                  id="comment"
                  rows={4}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full resize-none rounded-lg border border-[#eee] p-3 outline-none"
                  placeholder="Type your comment here..."
                />
              </div>
              <div className="mb-3">
                <FormControlLabel
                  sx={{
                    ".MuiFormControlLabel-label": {
                      color: "#",
                      fontSize: "12px",
                    },
                  }}
                  control={
                    <Checkbox
                      sx={{
                        color: "white",
                        "&.Mui-checked": {
                          color: "white",
                        },
                      }}
                    />
                  }
                  label="Save my name and email in this browser for the next time I comment."
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-md border p-3 text-white hover:border-black hover:bg-black"
              >
                Submit Comment
              </button>
            </form>
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
        <div className="absolute bottom-4 left-1/2 flex w-full -translate-x-1/2 pt-3">
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
}
