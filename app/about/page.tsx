import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="flex h-screen bg-black">
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <div className="text-left max-w-screen-sm mb-10">
          <h1 className="text-stone-200 text-4xl">
            Biophilic Design is based on the principle that there is a natural, inherent link between humans and the environment.
          </h1>
        </div>
        <div className="flex flex-col space-x-10 gap-y-10 max-w-screen-sm mb-10">
          <p className="ml-10 text-stone-200">
            Sadly, many of today’s built environments fail to nurture our natural connection to the outdoors, often lacking in sunlight and sensory engagement. Only recently has the focus shifted toward creating more holistic spaces. However, without a clear framework to gauge progress, enhancing these spaces can be challenging. The Biophilic Design Matrix offers a straightforward way to assess your living areas and rate their overall well-being. Upon completion, you’ll receive tailored recommendations for enhancements to better harmonize your environment with nature.
          </p>
          <h4 className="text-stone-200">
            The time we spend indoors
          </h4>
          <h2 className="text-stone-200 text-5xl">
            22 hours a day
          </h2>
          <h4 className="text-stone-200">
            Spaces designed for well-being
          </h4>
          <h2 className="text-stone-200 text-5xl">
            less than 20%
          </h2>
        </div>
      </div>
    </div>
  );
}
