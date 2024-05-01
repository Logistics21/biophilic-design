import Link from 'next/link';

export default function CreateReportPage() {
  return (
    <div className="flex h-screen bg-black">
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <div className="text-left max-w-screen-sm mb-10">
          <h1 className="text-stone-200 text-4xl">
            Walk around the space you are evaluating and give a score to the following questions.
          </h1>
        </div>
        {/* the questionnaire (would be great if you only see 1 question at the time and when you choose a score it’ll go to the next question) */}
        <div className="flex flex-col space-x-10 gap-y-10 max-w-screen-sm mb-10">
            <ul>
                <li>
                    <p className="text-stone-200">
                        The score goes from 0 (none), 1 (weak), 2 (moderate), 3 (strong)
                    </p>
                    <input id="default-range" type="range" min={0} max={3} value="3" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
                </li>
                <li>
                    <p className="text-stone-200">
                        Air: Natural ventilation (e.g., direct access to operable windows or exterior doors, inside/outside fresh air connections).
                    </p>
                </li>
                <li>
                    <p className="text-stone-200">
                        Animals: Actual animals in any form (alive or preserved) in the interior (e.g., fish in a fish tank).
                    </p>
                </li>
                <li>
                    <p className="text-stone-200">
                        Fire: Controlled access to fire, including color, warmth & movement (e.g., fireplace)
                    </p>
                </li>
                <li>
                    <p className="text-stone-200">
                        Inside-Outside: Interior spaces that offer direct physical connection to the outside environment (e.g. open sliding glass doors)
                    </p>
                </li>
                <li>
                    <p className="text-stone-200">
                        Natural light: Sunlight access that can be modulated to reduce glare or manipulated to create stimulating, dynamic and/or sculptural forms (e.g., window, clearstory, skylight, tinted glazing, light shaft)
                    </p>
                </li>
                <li>
                    <p className="text-stone-200">
                        Natural materials: Materials recognizably coming from nature (e.g., wood, stone, cork).
                    </p>
                </li>
                <li>
                    <p className="text-stone-200">
                        Plants: Actual plants in any form, alive or preserved (e.g., potted plants or dried leaves in a shadow box).
                    </p>
                </li>
                <li>
                    <p className="text-stone-200">
                        Views & Vistas: Exterior views of natural features that connect the interior to the outside environment (e.g., views to locally appropriate landscapes, window view of Central Park)
                    </p>
                </li>
                <li>
                    <p className="text-stone-200">
                        Water: Water access or view (e.g., water fountain, sink, or fish tank).
                    </p>
                </li>
            </ul>
        </div>
      </div>
    </div>
  );
}
