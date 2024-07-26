"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

//Professional Information
const about = {
  title: "About me",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum exercitationem, assumenda saepe aut ab quisquam!",
  info: [
    { fieldName: "Name", fieldValue: "Vamsidhar TKVM" },
    { fieldName: "FRN", fieldValue: "019307S" },
    { fieldName: "Mem.Num", fieldValue: "239921" },
    {
      fieldName: "Email",
      fieldValue: "tkvm.vamsidhar.ca@gmail.com",
    },
    {
      fieldName: "Mobile",
      fieldValue: "9951585945",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Registered Office",
      fieldValue: "D.No.3-10, Kobbari Thota, Vuyyuru-521165",
    },
    {
      fieldName: "Branch Office",
      fieldValue:
        "D.no.24/469, Ramanaidupeta, opp. Ramana Sudhakar Homeo Clinic, Machilipatnam-521001",
    },
  ],
};
//Experience Information

const experience = {
  icon: "/assets/badge.svg",
  title: "My Experience",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit numquam facere laboriosam in similique alias.",
  items: [
    {
      company: "LVB to DBS bank Merge",
      position:
        "Concurrent auditor for 27 Andhra Pradesh branches of DBS bank ",
      duration: "Merge of LVB & DBS",
    },
    {
      company: "LIC Cooperative Bank Limited ",
      position: "Statutory auditor for three financial years",
      duration: "2017-18, 2018-19, 2019-20",
    },
    {
      company: "LIC Cooperative Bank Limited ",
      position: "Concurrent auditor for two financial years",
      duration: "2022-23, 2023-24",
    },
    {
      company: "Government College of Nursing, Machilipatnam",
      position: "Contractual auditor",
    },
    {
      company: "Kanakadurga Finance Limited, Vijayawada",
      position: "Internal auditor",
    },
  ],
};

//Education Information
const education = {
  icon: "/assets/cap.svg",
  title: "My Qualifications",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit numquam facere laboriosam in similique alias.",
  items: [
    {
      institution: "Phalana College",
      degree: "CA",
      duration: "Jariginappudu",
    },
    {
      institution: "Phalana Vere College",
      degree: "ICWA",
      duration: "Mundu",
    },
    {
      institution: "Phalana Super College",
      degree: "B. Com",
      duration: "Antakumundu",
    },
  ],
};

//Acts Information
const acts = {
  title: "Acts",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aliquid aspernatur tempora.",
  actsList: [
    { name: "Income Tax Act", year: 2016 },
    { name: "GST Act", year: 2016 },
    { name: "Companies Act", year: 2016 },
    { name: "Societies Registration Act", year: 2016 },
    { name: "Banking Regulation Act", year: 2016 },
    { name: "Partnership Act", year: 2016 },
    { name: "FEMA Act", year: 2016 },
    { name: "Customs Act", year: 2016 },
    { name: "Indian Contract Act", year: 2016 },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="acts">Acts</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-184px py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-184px py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* acts */}
            <TabsContent value="acts" className="w-full h-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{acts.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {acts.description}
                </p>
              </div>

              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                {acts.actsList.map((act, index) => {
                  return (
                    <li key={index}>
                      <TooltipProvider duration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <p className="text-2xl group-hover:text-accent transition-all duration-300">
                              {act.name}
                            </p>
                          </TooltipTrigger>
                          <TooltipContent>
                            <div>{act.year}</div>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  );
                })}
              </ul>
            </TabsContent>
            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-center"
            >
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>

                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};
export default Resume;
