"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  addForm,
  getVisitorAPIInfo,
  getCountryCode,
  getUrlParams,
} from "../utils/utils";
import PhoneInput from "react-phone-input-2";
import "../phone.css";
import Link from "next/link";

function ContactForm({ formName, setLoad, isLight }) {
  const router = useRouter();

  const initState = {
    name: "",
    email: "",
    phone: "",
    note: "",
    formName,
  };

  const [formData, setFormData] = useState(initState);
  const [countryCodeISO, setCountryCodeISO] = useState("");
  const [inputCountry, setInputCountry] = useState("");
  const [phoneData, setPhoneData] = useState();
  const [visitorInfo, setVisitorInfo] = useState("");

  useEffect(() => {
    getVisitorAPIInfo().then((data) => {
      const countryCode = data?.countryCode?.toLowerCase() || "uae";
      const visitorNotes = data?.notes || "";

      setCountryCodeISO(countryCode);
      setVisitorInfo(visitorNotes);

      const countryData = getCountryCode(countryCode);
      if (countryData && countryData.dial_code) {
        setPhoneData({
          dialCode: countryData.dial_code.replace("+", ""),
        });
      }
    });
  }, []);

  useEffect(() => {
    let x = getCountryCode(countryCodeISO);
    if (x && x.code) {
      setTimeout(() => {
        setPhoneData({
          dailCode: x?.dial_code.replace("+", ""),
        });
        setInputCountry(x.code.toLowerCase());
      }, 20);
    }
  }, [countryCodeISO]);

  const handleChange = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    let message = `Form Name : ${formName}\n-------\n\n`;
    message += getUrlParams();

    let note = message + visitorInfo;

    const phone = formData.phone ? formData.phone : "";
    const dialCode = phoneData.dialCode ? `+${phoneData.dialCode}` : "";

    let obj = {
      note,
      phoneData,
      countryCodeISO,
      name: formData.name,
      email: formData.email,
      mobile: `${dialCode}${phone}`,
    };

    setLoad(true);
    try {
      let doc = await addForm(obj);
      setLoad(false);
      let { ok } = doc;
      if (ok) {
        router.push(`/thank-you`);
        setLoad(false);
      } else {
        setLoad(false);
      }
    } catch (error) {
      console.error("Error while submitting form", error);
      setLoad(false);
    }
  };

  return (
    <div className={isLight ? "lightForm" : "formComp"}>
      <form
        method={"get"}
        action={"/submit"}
        name={formName}
        className="w-full py-[1rem] flex flex-col items-center"
        onSubmit={(e) => {
          if (e.target.checkValidity()) {
            onSubmit(e);
          } else {
            e.preventDefault();
            e.target.reportValidity();
          }
        }}
      >
        <div className="flex flex-col w-full gap-4">
          <input
            className="inputStyle"
            placeholder="Full Name *"
            name="name"
            id="name"
            autoComplete="name"
            onChange={(e) => handleChange(e)}
            required
            aria-label="Name"
          />
          <input
            className="inputStyle"
            type="email"
            placeholder="E-mail *"
            name="email"
            id="email"
            autoComplete={"email"}
            onChange={(e) => handleChange(e)}
            required
            aria-label="E-mail"
          />
          <div className="flex w-full tel-container inputStyle ">
            <div className="flex items-center">
              <PhoneInput
                countryCodeEditable={true}
                autoFormat={false}
                containerClass={"rti"}
                inputStyle={{
                  height: "50px",
                  width: "70px",
                  color: "grayText",
                  fontSize: "14px",
                  lineHeight: "16.94px",
                  fontWeight: "300",
                  background: "transparent",
                }}
                buttonStyle={{
                  height: "50px",
                  borderRight: "0px solid #BFBFBF",
                }}
                preferredCountries={["ae", "in", "uk", "de", "ru", "sg", "us"]}
                country={inputCountry}
                onChange={(value, data) => {
                  const countryCode = data?.countryCode || "";
                  setFormData((prev) => ({ ...prev }));
                  setPhoneData(data);
                  setCountryCodeISO(countryCode);
                }}
              />
            </div>
            <input
              className={` bg-transparent text-[14px] leading-[17px]   font-light text-[#747474] placeholder:text-[#747474]  placeholder:font-light outline-none `}
              type="tel"
              placeholder="07400 123456"
              name="phone"
              id="phone"
              autoComplete={"tel"}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
        </div>

        <input type="submit" id={`${formName}-submit`} className="hidden" />
      </form>
    </div>
  );
}

export function LinkButtonComp(props) {
  let x = props.href;

  if (props?.href) {
    x = props?.href.replace("/?", "");
  }

  const params1 = new URLSearchParams(x);
  const params2 = useSearchParams();

  for (let [key, value] of params2) {
    params1.append(key, value);
  }

  let furl = `/?${params1.toString()}`;

  return (
    <Link href={furl} className={props.className}>
      {props.children}
    </Link>
  );
}

export default ContactForm;
