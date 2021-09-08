import { fetchApi, postApi } from "@/lib/api";
import { GlobalContext } from "./_app";
import { useContext, useState, useRef } from "react";
import CTA from "@/components/cta";
import Container from "@/components/container";
import Seo from "@/components/seo";
import PrimaryImage from "@/components/primaryImage";
import Content from "@/components/content";
import ShortInput from "@/components/shortInput";
import TextArea from "@/components/textArea";
import Checkbox from "@/components/checkbox";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { useRouter } from "next/router";
import MyDialog from "@/components/dialog";
import Md from "@/components/md";

function Contact({ contact }) {
  const { header, footer } = useContext(GlobalContext);

  const router = useRouter();

  const [captchaValid, setCaptchaValid] = useState(false);
  const captchaRef = useRef(null);

  // form validation rules
  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3).max(64),
    email: Yup.string().email().required(),
    message: Yup.string().min(32).max(300),
    privacy: Yup.bool().oneOf([true]),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { isDirty, isValid, errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) =>
    postApi("/messages", data).then(() => {
      setIsOpen(true);
      reset();
      setCaptchaValid(false);
      captchaRef.current.resetCaptcha();
    });

  let [isOpen, setIsOpen] = useState(false);

  const privacy = contact.form.find((value) => value.ref === "privacy");
  const submit = contact.form.find((value) => value.type === "submit");

  return (
    <>
      <Seo seo={contact.seo} />
      <Container header={header} footer={footer}>
        <CTA cta={contact.cta} style={{ backgroundColor: "#000" }} />
        <PrimaryImage primaryImage={contact.landing[0]} />
        {contact.content && <Content items={contact.content} />}

        <form
          className="container pb-14 space-y-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          {contact.form &&
            contact.form.map((field) => {
              switch (field.type) {
                case "text":
                  return (
                    <ShortInput
                      id={field.ref}
                      label={field.label}
                      placeholder={field.placeholder}
                      {...register(field.ref)}
                      className={
                        errors[field.ref] && "bg-red-50 ring-2 ring-red-500"
                      }
                    />
                  );
                case "textArea":
                  return (
                    <TextArea
                      id={field.ref}
                      label={field.label}
                      placeholder={field.placeholder}
                      {...register(field.ref)}
                      className={
                        errors[field.ref] && "bg-red-50 ring-2 ring-red-500"
                      }
                    />
                  );
                default:
                  break;
              }
            })}
          <div className="flex flex-col sm:flex-none sm:grid space-y-3 xl:space-y-0 xl:grid-cols-3 xl:space-x-2">
            <div className="">
              {privacy && (
                <Checkbox
                  id={privacy.ref}
                  label={privacy.label}
                  {...register(privacy.ref)}
                />
              )}
              <div className="text-sm text-red-500 px-7 -mt-1">
                {errors.privacy?.message && privacy?.errorMessage}
              </div>
            </div>

            <HCaptcha
              languageOverride={router.locale}
              sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_KEY}
              onVerify={() => setCaptchaValid(true)}
              onExpire={() => setCaptchaValid(false)}
              ref={captchaRef}
            />
            <input
              disabled={captchaValid ? !isDirty || !isValid : true}
              type="submit"
              value={submit?.label || "Submit"}
              className="disabled:bg-gray-500 shadow xl:col-span-1 px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark md:py-4 md:text-lg md:px-10"
            />
          </div>
        </form>
        {contact.contentAfter && <Content items={contact.contentAfter} />}
      </Container>
      {contact.dialog && (
        <MyDialog
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onPositive={() => setIsOpen(false)}
          title={contact.dialog.title}
          positiveText={contact.dialog.positiveText}
        >
          <Md
            className="text-sm text-gray-500"
            content={contact.dialog.description}
          />
        </MyDialog>
      )}
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
