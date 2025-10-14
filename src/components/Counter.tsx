import CountUp from 'react-countup';

const incentives = [
  {
    name: 1234,
    end: 1234,
    description: 'MURID',
    suffix: '',
  },
  {
    name: 33,
    end: 33,
    description: 'KELAS',
    suffix: '',
  },
  {
    name: 65,
    end: 65,
    description: 'GURU',
    suffix: '',
  },
  {
    name: 8,
    end: 8,
    description: 'STAFF',
    suffix: '',
  },
];

export default function CounterRow() {
  return (
    <div className="bg-white py-16"> {/* Yellowish background */}
      <div className="mx-auto max-w-6xl px-6 text-center">

        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-[8%]">
          {incentives.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-duration="1000"
              className="group flex flex-col items-center justify-center rounded-3xl border border-white bg-white py-10 px-6 transition duration-500 hover:bg-white"
            >
              <h3 className="text-8xl font-black text-[#E9C051]">
                <CountUp start={0} end={item.end} duration={3} suffix={item.suffix} />
              </h3>
              <p className="mt-3 text-lg font-semibold text-[#4B4B4B]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
