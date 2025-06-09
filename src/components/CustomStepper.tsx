"use client";

import { JSX, useState } from "react";

interface CustomStepperProps {
  title: string;
  steps: {
    label: string;
    isActive?: boolean;
    children?: JSX.Element | JSX.Element[];
  }[];
}

const CustomStepper = ({ steps, title }: CustomStepperProps) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1);
    }
  };
  const handlePrev = () => {
    if (activeStep !== 0) {
      setActiveStep((prev) => prev - 1);
    }
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-full max-w-4xl p-6">
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>

        <div className="flex items-center justify-center sm:mb-2 mb-4 px-6 w-full">
          {steps.map((_step, i) => (
            <div
              key={i}
              className={`flex items-center  ${
                i === steps.length - 1 ? "w-auto" : "w-full"
              }`}
            >
              {/* Dots */}
              <button
                type="button"
                className={`w-4 h-4 text-sm rounded-full transition-colors duration-700 
                  ${
                    i <= activeStep
                      ? "bg-blue-500 text-white"
                      : i === 0
                      ? "bg-blue-500 text-white"
                      : "bg-white text-gray-300"
                  }
                `}
                aria-current={i === activeStep}
                onClick={() => setActiveStep(i)}
              ></button>

              {/* Lines */}
              {i < steps.length - 1 && (
                <div className="relative flex-1 mx-2">
                  <div className="h-0.5 bg-gray-300"></div>
                  <div
                    className={`absolute ${
                      i < activeStep ? "w-full" : "w-0"
                    } top-0 h-0.5 transition-all duration-700 ease-out bg-blue-500`}
                  ></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Step labels */}
        <div className="hidden sm:flex  items-center justify-between mb-4 px-2 w-full">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`text-md ${
                index <= activeStep ? "text-blue-500" : "text-gray-300"
              }`}
            >
              {step.label}
            </div>
          ))}
        </div>

        {/* Step content */}
        {steps.map((step, index) => (
          <div
            key={index}
            className={`${
              index === activeStep ? "block" : "hidden"
            } p-4 border rounded-lg mb-4`}
          >
            {step.children}
          </div>
        ))}

        {/* Navigation buttons */}
        <div
          className={`flex xs:flex-row gap-3 xs:gap-0 flex-col items-center 
             justify-between
         mt-6`}
        >
          <button
            disabled={activeStep === 0}
            className="bg-blue-500 xs:w-auto w-full rounded-md px-2 py-1 cursor-pointer text-white"
            onClick={() => handlePrev()}
          >
            Prev
          </button>

          <button
            disabled={activeStep === steps.length - 1}
            className="bg-blue-500 xs:w-auto w-full rounded-md px-2 py-1 cursor-pointer text-white"
            onClick={() => handleNext()}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomStepper;
