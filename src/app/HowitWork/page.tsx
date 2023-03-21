"use client";
import Steps from "@/component/Steps";
import { Heading } from "@chakra-ui/react";
import React from "react";

export default function page() {
  return (
    <div>
      <Heading mt={24} color="teal" textAlign={"center"}>
        How it work
      </Heading>
      <Steps
        num="1"
        stepnum="Step 1"
        text="PIAIC will launch classes in the following locations, one city at a time, in the following order"
        text1="1- Islamabad"
        text2="2- Lahore"
        text3="3- Peshawar"
        text4="4- Karachi"
      />
      <Steps
        num="2"
        stepnum="Step 2"
        text="To participate in the program and become eligible for the most prestigious credentials for AI, Cloud and Blockchain technologies in the world, students must complete the following process"
        text1="1- Signup at PIAIC Portal"
        text2="2- Submit the online application"
        text3="3- Pass the entrance exam which consists of multiple choice English and Mathematics questions. Results are determined based on percentile."
        text4="4- Pass all PIAIC exams with an average score of at least 70%."
      />
      <Steps
        num="3"
        stepnum="Step 3"
        text="All programs are one year long in duration. Each program is divided into four quarters (12 weeks each)."
        text1="1- One class in a week"
        text2="2- All classes are on sunday"
        text3="3- 3 hour per week"
        text4="4- 144 hour over the year."
      />
      <Steps
        num="4"
        stepnum="Step 4"
        text="Those students who wish to participate in the program online can check the distance learning option in the application form. Please note that distance learning students must also take proctored exams on site, just like the onsite students."
        text1="1- The fee structure for onsite students is PKR 1,000 per month for 12 months, payable in 4 installments of PKR 3,000, before the start of each quarter.
        "
        text2="2- The fee structure for distance learning students is PKR 500 per month for 12 months, payable in 4 installments of PKR 1,500, before the start of each quarter."
      />
      <Steps
        num="5"
        stepnum="Step 5"
        text="Please note, all fees will be collected by Saylani Welfare Trust, the most trusted NGO in Pakistan. Saylani has strict audit processes already in place to ensure proper accountability of funds."
       
      />
      <Steps
        num="6"
        stepnum="Step 6"
        text="Please note, this is a highly prestigious program. Due to the high level of difficulty, only 10% of students will be awarded the PIAIC certifications"
       
      />
    </div>
  );
}
