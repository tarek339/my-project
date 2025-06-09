import Hero from "@/components/Hero";
import CustomStepper from "../components/CustomStepper";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <CustomStepper
        title="Custom Stepper Example"
        steps={[
          {
            label: "",
            children: <div className="p-4">Content for Step 1</div>,
          },
          {
            label: "",
            children: <div className="p-4">Content for Step 2</div>,
          },
          {
            label: "",
            children: <div className="p-4">Content for Step 3</div>,
          },
          {
            label: "",
            children: <div className="p-4">Content for Step 4</div>,
          },
          {
            label: "",
            children: <div className="p-4">Content for Step 5</div>,
          },
        ]}
      />
    </div>
  );
}
