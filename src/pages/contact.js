import { fetchApi } from "@/lib/api";
import { GlobalContext } from "./_app";
import { useContext, useState } from "react";
import CTA from "@/components/cta";
import Container from "@/components/container";
import Seo from "@/components/seo";
import PrimaryImage from "@/components/primaryImage";
import Content from "@/components/content";
import { AtSymbolIcon, IdentificationIcon } from "@heroicons/react/solid";
import ShortInput from "@/components/shortInput";
import TextArea from "@/components/textArea";
import Checkbox from "@/components/checkbox";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { useRouter } from "next/router";

function Contact({ contact }) {
  const { header, footer } = useContext(GlobalContext);

  const router = useRouter();

  const [captchaValid, setCaptchaValid] = useState(false);

  // form validation rules
  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3).max(64),
    email: Yup.string().email().required(),
    message: Yup.string().min(3).max(300),
    privacy: Yup.bool().oneOf([true], "Accept Ts & Cs is required"),
  });

  const {
    register,
    handleSubmit,
    errors,
    formState: { isSubmitting, isDirty, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Seo seo={contact.seo} />
      <Container header={header} footer={footer}>
        <CTA cta={contact.cta} style={{ backgroundColor: "#000" }} />
        <PrimaryImage primaryImage={contact.landing[0]} />
        {contact.content && <Content items={contact.content} />}

        <form
          className="container py-5 space-y-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <ShortInput
            id="name"
            label="Name"
            placeholder="John Doe"
            icon={<IdentificationIcon className="h-5 w-5" aria-hidden="true" />}
            {...register("name")}
          />
          <ShortInput
            id="email"
            label="email"
            placeholder="you@example.com"
            icon={<AtSymbolIcon className="h-5 w-5" aria-hidden="true" />}
            {...register("email")}
          />
          <TextArea
            id="message"
            label="Message"
            {...register("message")}
            className="ring-primary"
          />
          <div className="flex flex-col sm:flex-none sm:grid space-y-3 xl:space-y-0 xl:grid-cols-3 xl:space-x-2">
            <Checkbox
              id="privacy"
              label="I have read and agree to the Privacy Policy."
              //   className="md:col-span-4 xl:col-span-5"
              {...register("privacy")}
            />
            <HCaptcha
              languageOverride={router.locale}
              sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_KEY}
              onVerify={() => setCaptchaValid(true)}
              onExpire={() => setCaptchaValid(false)}
            />
            <input
              disabled={captchaValid ? !isDirty || !isValid : true}
              type="submit"
              className="disabled:bg-gray-500 shadow xl:col-span-1 px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark md:py-4 md:text-lg md:px-10"
            />
          </div>
        </form>
        {contact.contentAfter && <Content items={contact.contentAfter} />}
      </Container>
    </>
  );
}

export async function getServerSideProps({ locale }) {
  const [contact] = await Promise.all([fetchApi(`/contact?_locale=${locale}`)]);

  return {
    props: { contact },
  };
}

export default Contact;
