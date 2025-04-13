import AboutImg_1 from "@/assets/images/about-1.jpg";
import AboutImg_2 from "@/assets/images/about-2.jpg";
import AboutImg_3 from "@/assets/images/Section-Img.jpg";
import {
  AccountCircleOutlined,
  ArrowForward,
  SupportOutlined,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
const AboutUSPage: React.FC = () => {
  return (
    <main>
      <div className="container mx-auto px-6 lg:max-w-[1170px]">
        {/* About us Section */}
        <section className="relative min-h-[700px]">
          <div className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-14 pt-40 lg:flex-row lg:gap-5 lg:pt-0">
            <div className="w-full text-center lg:text-start">
              <h1 className="my-2 mb-8 font-sans text-4xl font-bold uppercase text-primary md:text-6xl">
                About Us
              </h1>
              <p className="mb-2 text-xl md:text-2xl">
                Welcome to
                <span className="ml-1 text-2xl font-semibold text-primary">
                  Medicova
                </span>
                where Arab healthcare professionals connect, grow, and thrive!
              </p>
              <p className="mb-3 w-full text-sm leading-7 lg:max-w-[400px]">
                At Medicova, we are more than just a platform—we are a vibrant
                community dedicated to empowering doctors, nurses, pharmacists,
                and all healthcare providers across the Arab world. Whether you
                are searching for career defining job opportunities or looking
                to upskill with cutting-edge courses, Medicova is your gateway
                to success.
              </p>
              <Button
                className="rounded-full"
                variant="contained"
                endIcon={<ArrowForward />}
              >
                Join US
              </Button>
            </div>
            <div className="relative flex w-full items-center justify-center">
              <div className="h-[300px] w-[300px] rounded-lg bg-[#2BA149B2] md:h-[400px] md:w-[400px]"></div>
              <Image
                className="absolute -top-7 right-0 w-[250px] rounded-lg md:w-[320px]"
                src={AboutImg_1}
                alt="About-Img"
              />
              <Image
                className="absolute -bottom-3 -left-2 w-[250px] rounded-lg md:left-6 md:w-[320px]"
                src={AboutImg_2}
                alt="About-Img"
              />
            </div>
          </div>
        </section>
        <section className="my-40 md:my-14">
          <div className="flex flex-col-reverse items-center justify-center gap-4 lg:flex-row">
            <div className="relative flex w-full items-center justify-center">
              <div className="h-[300px] w-[300px] rounded-lg bg-[#2BA149B2] md:h-[370px] md:w-[370px]"></div>
              <Image
                className="absolute -bottom-3 w-[250px] rounded-lg md:w-[320px]"
                src={AboutImg_3}
                alt="About-Img"
              />
            </div>
            <div className="w-full text-center lg:text-start">
              <h1 className="my-2 mb-3 font-sans text-2xl font-bold uppercase text-primary md:text-4xl">
                Vision
              </h1>
              <p className="mb-3 text-sm leading-6">
                To be the leading hub for Arab healthcare professionals,
                transforming careers and advancing the future of healthcare
                through education, innovation, and opportunity.
              </p>
              <h1 className="my-2 mb-3 font-sans text-2xl font-bold uppercase text-primary md:text-4xl">
                mission
              </h1>
              <p className="mb-3 text-sm leading-6">
                Our mission is simple to bridge the gap between talent and
                opportunity in the healthcare industry. We bring together top
                tier employers, world class educators, and passionate
                professionals to create a dynamic ecosystem of growth and
                innovation.
              </p>
              <Button
                className="rounded-full"
                variant="contained"
                endIcon={<ArrowForward />}
              >
                Learn More
              </Button>
            </div>
          </div>
        </section>
        <section>
          <h1 className="my-2 mb-8 font-sans text-2xl font-bold uppercase text-primary md:text-4xl">
            Our Values
          </h1>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="flex justify-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E8F6F5] text-[#13A093]">
                <AccountCircleOutlined className="text-4xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold md:text-xl">Excellence</h3>
                <p className="max-w-[300px] text-sm md:text-lg">
                  We strive for the highest standards in everything we do.
                </p>
              </div>
            </div>
            <div className="flex justify-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E8F6F5] text-[#13A093]">
                <AccountCircleOutlined className="text-4xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold md:text-xl">Excellence</h3>
                <p className="max-w-[300px] text-sm md:text-lg">
                  We strive for the highest standards in everything we do.
                </p>
              </div>
            </div>
            <div className="flex justify-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FEFBF3] text-[#FEAF43]">
                <SupportOutlined className="text-4xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold md:text-xl">
                  Empowerment
                </h3>
                <p className="max-w-[300px] text-sm md:text-lg">
                  We strive for the highest standards in everything we do.
                </p>
              </div>
            </div>
            <div className="flex justify-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FEFBF3] text-[#FEAF43]">
                <SupportOutlined className="text-4xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold md:text-xl">
                  Empowerment
                </h3>
                <p className="max-w-[300px] text-sm md:text-lg">
                  We strive for the highest standards in everything we do.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Our Team Section  */}
        <section className="my-14">
          <div className="m-auto w-fit pb-16 text-center md:text-start">
            <span className="mb-3 block text-primary">Our Team</span>
            <h1 className="mb-3 text-xl font-semibold">
              Some of the people you will be working with
            </h1>
            <p className="text-secondary">
              Were a 100% remote team spread all across the world. Join us!
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Link href="#">
              <Image
                src="https://s3-alpha-sig.figma.com/img/67da/9fdd/d372b1b5b44ffef41eed6ceb810ddf8a?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZtbgPu1XcPrkbLIseWNB4wXWbMBXqXRFAHl2pZNMSwTAwhNGApCoQ5sBlTIuTPuuwMMhmmWcpzOW0WYdbNBre~tR4xiGLzbbeXGTJOWfGJzoFkKvzTG0RaE9jCnIOchLHaCcaI6gkFQRMzW1NYtRnjNJBMsTHsUXBbxV98l4LWX-cBiH~v9wj5UFrBUk80zg6P-YUnm9RqO7qmL8OAgoB52GOAFq9KmjpWpNdzwJjiZ52t3lmnz0TbPLYeZoRH4tggKxK1dFOpd497rrMo8tRFCIYccrGDPT3Xv3uAeaM4d9RM4YxSxfow5Oi6WIRBj51h~DQTpn5sUw2Q3QK12ayw__"
                alt="About-Img"
                width={200}
                height={200}
                layout="responsive"
              />
              <h2 className="mt-3 font-semibold">Olivia Rhye</h2>
              <span className="text-sm text-primary">Founder & CEO</span>
            </Link>
            <Link href="#">
              <Image
                src="https://s3-alpha-sig.figma.com/img/67da/9fdd/d372b1b5b44ffef41eed6ceb810ddf8a?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZtbgPu1XcPrkbLIseWNB4wXWbMBXqXRFAHl2pZNMSwTAwhNGApCoQ5sBlTIuTPuuwMMhmmWcpzOW0WYdbNBre~tR4xiGLzbbeXGTJOWfGJzoFkKvzTG0RaE9jCnIOchLHaCcaI6gkFQRMzW1NYtRnjNJBMsTHsUXBbxV98l4LWX-cBiH~v9wj5UFrBUk80zg6P-YUnm9RqO7qmL8OAgoB52GOAFq9KmjpWpNdzwJjiZ52t3lmnz0TbPLYeZoRH4tggKxK1dFOpd497rrMo8tRFCIYccrGDPT3Xv3uAeaM4d9RM4YxSxfow5Oi6WIRBj51h~DQTpn5sUw2Q3QK12ayw__"
                alt="About-Img"
                width={200}
                height={200}
                layout="responsive"
              />
              <h2 className="mt-3 font-semibold">Olivia Rhye</h2>
              <span className="text-sm text-primary">Founder & CEO</span>
            </Link>
            <Link href="#">
              <Image
                src="https://s3-alpha-sig.figma.com/img/67da/9fdd/d372b1b5b44ffef41eed6ceb810ddf8a?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZtbgPu1XcPrkbLIseWNB4wXWbMBXqXRFAHl2pZNMSwTAwhNGApCoQ5sBlTIuTPuuwMMhmmWcpzOW0WYdbNBre~tR4xiGLzbbeXGTJOWfGJzoFkKvzTG0RaE9jCnIOchLHaCcaI6gkFQRMzW1NYtRnjNJBMsTHsUXBbxV98l4LWX-cBiH~v9wj5UFrBUk80zg6P-YUnm9RqO7qmL8OAgoB52GOAFq9KmjpWpNdzwJjiZ52t3lmnz0TbPLYeZoRH4tggKxK1dFOpd497rrMo8tRFCIYccrGDPT3Xv3uAeaM4d9RM4YxSxfow5Oi6WIRBj51h~DQTpn5sUw2Q3QK12ayw__"
                alt="About-Img"
                width={200}
                height={200}
                layout="responsive"
              />
              <h2 className="mt-3 font-semibold">Olivia Rhye</h2>
              <span className="text-sm text-primary">Founder & CEO</span>
            </Link>
            <Link href="#">
              <Image
                src="https://s3-alpha-sig.figma.com/img/67da/9fdd/d372b1b5b44ffef41eed6ceb810ddf8a?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZtbgPu1XcPrkbLIseWNB4wXWbMBXqXRFAHl2pZNMSwTAwhNGApCoQ5sBlTIuTPuuwMMhmmWcpzOW0WYdbNBre~tR4xiGLzbbeXGTJOWfGJzoFkKvzTG0RaE9jCnIOchLHaCcaI6gkFQRMzW1NYtRnjNJBMsTHsUXBbxV98l4LWX-cBiH~v9wj5UFrBUk80zg6P-YUnm9RqO7qmL8OAgoB52GOAFq9KmjpWpNdzwJjiZ52t3lmnz0TbPLYeZoRH4tggKxK1dFOpd497rrMo8tRFCIYccrGDPT3Xv3uAeaM4d9RM4YxSxfow5Oi6WIRBj51h~DQTpn5sUw2Q3QK12ayw__"
                alt="About-Img"
                width={200}
                height={200}
                layout="responsive"
              />
              <h2 className="mt-3 font-semibold">Olivia Rhye</h2>
              <span className="text-sm text-primary">Founder & CEO</span>
            </Link>
            <Link href="#">
              <Image
                src="https://s3-alpha-sig.figma.com/img/67da/9fdd/d372b1b5b44ffef41eed6ceb810ddf8a?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZtbgPu1XcPrkbLIseWNB4wXWbMBXqXRFAHl2pZNMSwTAwhNGApCoQ5sBlTIuTPuuwMMhmmWcpzOW0WYdbNBre~tR4xiGLzbbeXGTJOWfGJzoFkKvzTG0RaE9jCnIOchLHaCcaI6gkFQRMzW1NYtRnjNJBMsTHsUXBbxV98l4LWX-cBiH~v9wj5UFrBUk80zg6P-YUnm9RqO7qmL8OAgoB52GOAFq9KmjpWpNdzwJjiZ52t3lmnz0TbPLYeZoRH4tggKxK1dFOpd497rrMo8tRFCIYccrGDPT3Xv3uAeaM4d9RM4YxSxfow5Oi6WIRBj51h~DQTpn5sUw2Q3QK12ayw__"
                alt="About-Img"
                width={200}
                height={200}
                layout="responsive"
              />
              <h2 className="mt-3 font-semibold">Olivia Rhye</h2>
              <span className="text-sm text-primary">Founder & CEO</span>
            </Link>
            <Link href="#">
              <Image
                src="https://s3-alpha-sig.figma.com/img/67da/9fdd/d372b1b5b44ffef41eed6ceb810ddf8a?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZtbgPu1XcPrkbLIseWNB4wXWbMBXqXRFAHl2pZNMSwTAwhNGApCoQ5sBlTIuTPuuwMMhmmWcpzOW0WYdbNBre~tR4xiGLzbbeXGTJOWfGJzoFkKvzTG0RaE9jCnIOchLHaCcaI6gkFQRMzW1NYtRnjNJBMsTHsUXBbxV98l4LWX-cBiH~v9wj5UFrBUk80zg6P-YUnm9RqO7qmL8OAgoB52GOAFq9KmjpWpNdzwJjiZ52t3lmnz0TbPLYeZoRH4tggKxK1dFOpd497rrMo8tRFCIYccrGDPT3Xv3uAeaM4d9RM4YxSxfow5Oi6WIRBj51h~DQTpn5sUw2Q3QK12ayw__"
                alt="About-Img"
                width={200}
                height={200}
                layout="responsive"
              />
              <h2 className="mt-3 font-semibold">Olivia Rhye</h2>
              <span className="text-sm text-primary">Founder & CEO</span>
            </Link>
            <Link href="#">
              <Image
                src="https://s3-alpha-sig.figma.com/img/67da/9fdd/d372b1b5b44ffef41eed6ceb810ddf8a?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZtbgPu1XcPrkbLIseWNB4wXWbMBXqXRFAHl2pZNMSwTAwhNGApCoQ5sBlTIuTPuuwMMhmmWcpzOW0WYdbNBre~tR4xiGLzbbeXGTJOWfGJzoFkKvzTG0RaE9jCnIOchLHaCcaI6gkFQRMzW1NYtRnjNJBMsTHsUXBbxV98l4LWX-cBiH~v9wj5UFrBUk80zg6P-YUnm9RqO7qmL8OAgoB52GOAFq9KmjpWpNdzwJjiZ52t3lmnz0TbPLYeZoRH4tggKxK1dFOpd497rrMo8tRFCIYccrGDPT3Xv3uAeaM4d9RM4YxSxfow5Oi6WIRBj51h~DQTpn5sUw2Q3QK12ayw__"
                alt="About-Img"
                width={200}
                height={200}
                layout="responsive"
              />
              <h2 className="mt-3 font-semibold">Olivia Rhye</h2>
              <span className="text-sm text-primary">Founder & CEO</span>
            </Link>
            <Link href="#">
              <Image
                src="https://s3-alpha-sig.figma.com/img/67da/9fdd/d372b1b5b44ffef41eed6ceb810ddf8a?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZtbgPu1XcPrkbLIseWNB4wXWbMBXqXRFAHl2pZNMSwTAwhNGApCoQ5sBlTIuTPuuwMMhmmWcpzOW0WYdbNBre~tR4xiGLzbbeXGTJOWfGJzoFkKvzTG0RaE9jCnIOchLHaCcaI6gkFQRMzW1NYtRnjNJBMsTHsUXBbxV98l4LWX-cBiH~v9wj5UFrBUk80zg6P-YUnm9RqO7qmL8OAgoB52GOAFq9KmjpWpNdzwJjiZ52t3lmnz0TbPLYeZoRH4tggKxK1dFOpd497rrMo8tRFCIYccrGDPT3Xv3uAeaM4d9RM4YxSxfow5Oi6WIRBj51h~DQTpn5sUw2Q3QK12ayw__"
                alt="About-Img"
                width={200}
                height={200}
                layout="responsive"
              />
              <h2 className="mt-3 font-semibold">Olivia Rhye</h2>
              <span className="text-sm text-primary">Founder & CEO</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};
export default AboutUSPage;
