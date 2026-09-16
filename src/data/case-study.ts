export const satellite = {
  slug: 'satellite-sos',
  title: 'Pixel 衛星 SOS',
  titleEn: 'Pixel Satellite SOS',
  subtitle: '透過衛星將任何人連接至緊急服務',
  subtitleEn: 'Connecting anyone to emergency services via satellite',
  intro: [
    'In 2024, Satellite SOS was introduced on the Pixel 9 series at Made by Google, which lets users message and send their location to emergency services via satellites when they do not have network coverage.',
    'As UX lead, I defined and led 4+ workstreams, driving the 0→1 design of emergency satellite messaging. I also established the UX strategy and foundation for satellite connectivity on Android for all OEMs moving forward.',
  ],
  links: [
    { label: 'Google Blog', href: 'https://blog.google/products-and-platforms/devices/pixel/google-pixel-9-pro-xl/' },
    { label: 'The Verge', href: 'https://www.theverge.com/2024/8/13/24219583/google-pixel-9-satellite-satellite-sos-android' },
  ],
  metadata: [
    { label: 'Product', value: 'Android' },
    { label: 'My role', value: 'Design lead' },
    { label: 'Timeline', value: 'Q2 2023 - Q2 2024' },
    { label: 'Skills', value: 'Product design, Motion design, Stakeholder management, Interactive prototyping, User research & testing' },
    { label: 'Team', value: 'Maple Kuo, Vincent Xu, Jill Pfund, Beck Chiou, Martin Ottosson' },
  ],
  overview: [
    "Most of the world population is covered by a mobile-broadband signal, but blind spots remain. Being a top priority for Android in 2024, the project's goal was to enable people to reach emergency services via satellite even when there's no cellular coverage.",
    "It isn't every day that you get to work with satellites. This was a highly technical and fast-paced project that involved many product areas and external stakeholders. As this was an unprecedented territory for Google, our team had to create entirely new UX patterns and interaction models from the ground up.",
  ],
  stats: [
    { icon: 'signal', text: '14% of the US has zero cell coverage.' },
    { icon: 'tree', text: 'Over 10,000 search and rescue incidents in national parks alone each year.' },
    { icon: null, text: 'The average phone is only reliably connected about 85% of the time.' },
  ],
  constraints: [
    { title: 'Antenna alignment', body: 'The phone needs to constantly aim its antenna carefully towards a satellite to form a connection, in order for the message to get through' },
    { title: 'Low bandwidth transmission', body: 'The low bandwidth transmission means that we could only transmit text messages, and sending it can take longer than what users are used to' },
    { title: 'Clear view of the sky', body: 'The device needs a clear line of sight to the satellite. No trees, buildings, or mountains can be blocking the way, otherwise the signal could be cut off.' },
    { title: 'Radio interference', body: 'All other radios on the device – Wi-Fi, cellular, Bluetooth – need to be turned off to avoid interference with the satellite antenna' },
    { title: 'Battery Consumption', body: 'Communicating with a satellite requires a lot of power, which can eat away at the device’s battery life very quickly, which is obviously very precious in an emergency situation' },
  ],
  prototype: 'One of the challenges from the get-go was figuring out how to create a realistic prototype to test with users. With some clever hacks, I created an interactive prototype with Protopie that uses the actual accelerometers on the device to simulate the pointing experience.',
  workshop: [
    'To solve the unprecedented challenge of guiding users to connect with satellites, I organized a cross-functional ideation workshop bringing together engineers, product managers, and motion designers.',
    'While I cannot share the specific concepts we explored and rejected due to confidentiality, the process was crucial for balancing complex technical constraints (like antenna physics and line-of-sight requirements) with the high-stress emotional state of a user in an emergency. We explored various visual metaphors to guide alignment before arriving at the final solution.',
  ],
  collaboration: [
    'The project required close collaboration with internal product teams and external emergency providers, to ensure handoffs between different surfaces felt seamless, ensuring continuity and trust throughout the experience.',
    'The final design introduces a subtly gamified experience that guides users to point their device in the optimal direction by matching shapes on the screen. This approach abstracts away technical complexities, making the process intuitive and approachable for users.',
  ],
  steps: [
    { type: 'video', src: '/assets/media/emergency-call.mp4', text: "When an emergency call won't connect, users can use Satellite SOS to report an emergency", title: 'Report an emergency', scale: 1.25 },
    { type: 'image', src: '/assets/media/emergency-questions.png', text: 'Answer a couple of emergency questions to best describe their situation', title: 'Describe the situation', scale: 1.17 },
    { type: 'video', src: '/assets/media/satellite.mp4', text: 'Follow directions to orientate their device to connect with a satellite', title: 'Connect to a satellite', scale: 1.17 },
    { type: 'video', src: '/assets/media/emergency-response.mp4', text: 'And continue messaging with emergency services', title: 'Message emergency services', scale: 1.25 },
  ],
  impact: [
    "Satellite SOS was unveiled at Made by Google '24 as a feature on the Pixel 9 series, becoming the first Android device to integrate satellite connectivity.",
    'During the country-wide power outage in Spain, Satellite SOS was utilized during 8 separate emergency sessions.',
  ],
  source: 'https://dousanmiao.com/#/satellite-sos',
};
