const Staff = () => {
  const developers = [
    {
      name: 'Soumodeep Roy',
      role: 'Administrator, Chief Developer',
      profilePic: 'https://cdn.discordapp.com/attachments/1355848500180422687/1400766786974257203/Screenshot_2025-08-01_at_5.04.53_PM.png?ex=688dd53b&is=688c83bb&hm=861664938587311c07cb1a3784d347469253227433120840dddcb38b029732f2&',
    },
    {
      name: 'Ridhan Anbazhagan',
      role: 'Adminis      trator, Core Developer',
      profilePic: 'https://cdn.discordapp.com/attachments/1355848500180422687/1400762043891580939/Screenshot_2025-08-01_at_4.43.14_PM.png?ex=688dd0d0&is=688c7f50&hm=446f3f7641a42bf41262a6d2e290af0b34fbd9eb1caf3e66342ef310866f4233&',
    },
    {
      name: 'Shaurya Singh',
      role: 'Administrator, Core Developer',
      profilePic: 'https://cdn.discordapp.com/attachments/1355848500180422687/1400763412576735362/Screenshot_2025-08-01_at_4.53.30_PM.png?ex=688dd216&is=688c8096&hm=c5c98d6f0a54f4eb74054aa93683137ef547b716b84c0eeb4309d837bad63c91&',
    },
  ];

  return (
    <div className="bg-blue-200 flex flex-col mt-6 mb-">
      <h2 className="text-4xl font-bold text-center text-green-900">Includr - The Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-blue-200">
        {developers.map((developer, index) => (
          <div key={index} className="rounded-lg shadow-lg p-6 bg-blue-300 h-full mt-5 ml-4 mr-4">
            <div className="flex items-center justify-center">
              <img
                src={developer.profilePic}
                alt={`${developer.name}'s Profile`}
                className="w-24 h-26 rounded-full mb-4"
              />
            </div>
            <h3 className="text-lg font-bold mb-2 text-blue-900">{developer.name}</h3>
            <p className="text-white mb-4">{developer.role}</p>
            <p className="text-white">{developer.about}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Staff;
