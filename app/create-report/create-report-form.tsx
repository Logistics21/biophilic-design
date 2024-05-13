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
          {/* <input
            id="airScore"
            name="airScore"
            type="range"
            min={0}
            max={3}
            required
            // className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
          /> */}
        </div>
        {children}
      </form>
    );
  }
