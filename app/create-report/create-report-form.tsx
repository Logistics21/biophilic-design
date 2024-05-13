export function CreateReportForm({
    action,
    children,
  }: {
    action: any;
    children: React.ReactNode;
  }) {
    return (
      <form
        action={action}
        className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 sm:px-16"
      >
        <div>
          <label
            htmlFor="reportName"
            className="block text-xs text-gray-600 uppercase"
            >
              Enter the name of the room for this report
          </label>
          <input
            type="text"
            id="reportName"
            name="reportName"
            required
            className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="airScore"
            className="block text-xs text-gray-600 uppercase"
          >
            Air: Natural ventilation (e.g., direct access to operable windows or exterior doors, inside/outside fresh air connections).
          </label>
          <input
            type="range"
            id="airScore"
            name="airScore"
            min={0}
            max={3}
            list="values"
            style={{
              width: '300px',
              // margin: 0,
            }}
          />
            <datalist id="values" style={{
            display: 'flex',
            // flexDirection: 'column',
            justifyContent: 'space-between',
            // writingMode: 'vertical-lr',
            width: '300px'
          }}>
            <option value="0" label="0"></option>
            <option value="1" label="1"></option>
            <option value="2" label="2"></option>
            <option value="3" label="3"></option>
          </datalist>
        </div>
        <div>
          <label
            htmlFor="animalsScore"
            className="block text-xs text-gray-600 uppercase"
          >
            Actual animals in any form (alive or preserved) in the interior (e.g., fish in a fish tank).
          </label>
          <input
            type="range"
            id="animalsScore"
            name="animalsScore"
            min={0}
            max={3}
            list="values"
            style={{
              width: '300px',
              // margin: 0,
            }}
          />
            <datalist id="values" style={{
            display: 'flex',
            // flexDirection: 'column',
            justifyContent: 'space-between',
            // writingMode: 'vertical-lr',
            width: '300px'
          }}>
            <option value="0" label="0"></option>
            <option value="1" label="1"></option>
            <option value="2" label="2"></option>
            <option value="3" label="3"></option>
          </datalist>
        </div>
        <div>
          <label
            htmlFor="fireScore"
            className="block text-xs text-gray-600 uppercase"
          >
            Controlled access to fire, including color, warmth & movement (e.g., fireplace)
          </label>
          <input
            type="range"
            id="fireScore"
            name="fireScore"
            min={0}
            max={3}
            list="values"
            style={{
              width: '300px',
              // margin: 0,
            }}
          />
            <datalist id="values" style={{
            display: 'flex',
            // flexDirection: 'column',
            justifyContent: 'space-between',
            // writingMode: 'vertical-lr',
            width: '300px'
          }}>
            <option value="0" label="0"></option>
            <option value="1" label="1"></option>
            <option value="2" label="2"></option>
            <option value="3" label="3"></option>
          </datalist>
        </div>
        <div>
          <label
            htmlFor="insideOutsideScore"
            className="block text-xs text-gray-600 uppercase"
          >
            Interior spaces that offer direct physical connection to the outside environment (e.g. open sliding glass doors)
          </label>
          <input
            type="range"
            id="insideOutsideScore"
            name="insideOutsideScore"
            min={0}
            max={3}
            list="values"
            style={{
              width: '300px',
              // margin: 0,
            }}
          />
            <datalist id="values" style={{
            display: 'flex',
            // flexDirection: 'column',
            justifyContent: 'space-between',
            // writingMode: 'vertical-lr',
            width: '300px'
          }}>
            <option value="0" label="0"></option>
            <option value="1" label="1"></option>
            <option value="2" label="2"></option>
            <option value="3" label="3"></option>
          </datalist>
        </div>
        <div>
          <label
            htmlFor="naturaLightScore"
            className="block text-xs text-gray-600 uppercase"
          >
            Sunlight access that can be modulated to reduce glare or manipulated to create stimulating, dynamic and/or sculptural forms (e.g., window, clearstory, skylight, tinted glazing, light shaft)
          </label>
          <input
            type="range"
            id="naturaLightScore"
            name="naturaLightScore"
            min={0}
            max={3}
            list="values"
            style={{
              width: '300px',
              // margin: 0,
            }}
          />
            <datalist id="values" style={{
            display: 'flex',
            // flexDirection: 'column',
            justifyContent: 'space-between',
            // writingMode: 'vertical-lr',
            width: '300px'
          }}>
            <option value="0" label="0"></option>
            <option value="1" label="1"></option>
            <option value="2" label="2"></option>
            <option value="3" label="3"></option>
          </datalist>
        </div>
        <div>
          <label
            htmlFor="naturalMaterialsScore"
            className="block text-xs text-gray-600 uppercase"
          >
            Materials recognizably coming from nature (e.g., wood, stone, cork).
          </label>
          <input
            type="range"
            id="naturalMaterialsScore"
            name="naturalMaterialsScore"
            min={0}
            max={3}
            list="values"
            style={{
              width: '300px',
              // margin: 0,
            }}
          />
            <datalist id="values" style={{
            display: 'flex',
            // flexDirection: 'column',
            justifyContent: 'space-between',
            // writingMode: 'vertical-lr',
            width: '300px'
          }}>
            <option value="0" label="0"></option>
            <option value="1" label="1"></option>
            <option value="2" label="2"></option>
            <option value="3" label="3"></option>
          </datalist>
        </div>
        <div>
          <label
            htmlFor="plantsScore"
            className="block text-xs text-gray-600 uppercase"
          >
            Actual plants in any form, alive or preserved (e.g., potted plants or dried leaves in a shadow box).
          </label>
          <input
            type="range"
            id="plantsScore"
            name="plantsScore"
            min={0}
            max={3}
            list="values"
            style={{
              width: '300px',
              // margin: 0,
            }}
          />
            <datalist id="values" style={{
            display: 'flex',
            // flexDirection: 'column',
            justifyContent: 'space-between',
            // writingMode: 'vertical-lr',
            width: '300px'
          }}>
            <option value="0" label="0"></option>
            <option value="1" label="1"></option>
            <option value="2" label="2"></option>
            <option value="3" label="3"></option>
          </datalist>
        </div>
        <div>
          <label
            htmlFor="viewsVistasScore"
            className="block text-xs text-gray-600 uppercase"
          >
            Exterior views of natural features that connect the interior to the outside environment (e.g., views to locally appropriate landscapes, window view of Central Park)
          </label>
          <input
            type="range"
            id="viewsVistasScore"
            name="viewsVistasScore"
            min={0}
            max={3}
            list="values"
            style={{
              width: '300px',
              // margin: 0,
            }}
          />
            <datalist id="values" style={{
            display: 'flex',
            // flexDirection: 'column',
            justifyContent: 'space-between',
            // writingMode: 'vertical-lr',
            width: '300px'
          }}>
            <option value="0" label="0"></option>
            <option value="1" label="1"></option>
            <option value="2" label="2"></option>
            <option value="3" label="3"></option>
          </datalist>
        </div>
        <div>
          <label
            htmlFor="waterScore"
            className="block text-xs text-gray-600 uppercase"
          >
            Water access or view (e.g., water fountain, sink, or fish tank).
          </label>
          <input
            type="range"
            id="waterScore"
            name="waterScore"
            min={0}
            defaultValue={0}
            max={3}
            list="values"
            style={{
              width: '300px',
              // margin: 0,
            }}
          />
          <datalist id="values" style={{
            display: 'flex',
            // flexDirection: 'column',
            justifyContent: 'space-between',
            // writingMode: 'vertical-lr',
            width: '300px'
          }}>
            <option value="0" label="0"></option>
            <option value="1" label="1"></option>
            <option value="2" label="2"></option>
            <option value="3" label="3"></option>
          </datalist>
        </div>

        {children}
      </form>
    );
  }
