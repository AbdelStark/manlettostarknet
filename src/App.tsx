import { ArrowRight, Play } from 'lucide-react';

type Link = {
  title: string;
  url: string;
  description: string;
};

const links: Link[] = [
  {
    title: "Getting Started Guide",
    url: "https://defi-ninja.medium.com/getting-started-with-starknet-setting-up-a-starknet-wallet-059c35849a9c",
    description: "Complete guide to setting up your Starknet wallet"
  },
  {
    title: "Starknet Apps",
    url: "https://www.starknet.io/dapps/",
    description: "Explore the Starknet ecosystem"
  },
  {
    title: "Tutorial on how to bridge from Solana to Starknet",
    url: "https://x.com/0xAsta/status/1858891876457476550",
    description: "A step-by-step guide to bridge your Solana assets to Starknet"
  },
];

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-indigo-900 text-white">
      <header className="p-8 text-center backdrop-blur-sm bg-black/30">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          Soylana Manlets
        </h1>
        <p className="text-xl text-gray-300">
          Here's to the Soylana manlets, all you degens, artists, and developers.
        </p>
      </header>

      <main className="max-w-4xl mx-auto px-4">
        <div className="flex justify-center items-center gap-12 my-16">
          <img 
            src="/solana-logo.png"
            alt="Solana Logo"
            className="w-32 h-32 drop-shadow-2xl hover:scale-110 transition-transform"
          />
          
          <ArrowRight className="w-16 h-16 text-purple-400 animate-spin" />
          
          <img 
            src="/starknet-logo.png"
            alt="Starknet Logo"
            className="w-32 h-32 drop-shadow-2xl hover:scale-110 transition-transform"
          />
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            The job is not finished;
          </h2>
          <p className="text-xl text-gray-300">
            now is time to join the STARK side and try Starknet.
          </p>
        </div>

        <a
          href="https://layerswap.io/app?from=solana_mainnet&to=starknet_mainnet&asset=usdc"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-4 p-8 mb-16 
            bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl 
            hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-105
            transition-all duration-300 mx-auto max-w-lg group"
        >
          <Play className="w-12 h-12 group-hover:scale-110 transition-transform" />
          <span className="text-2xl font-bold">BRIDGE NOW</span>
        </a>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {links.map((link) => (
            <a
              key={link.title}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-xl backdrop-blur-sm bg-white/5 hover:bg-white/10
                group relative overflow-hidden transition-all duration-300 hover:scale-102"
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-500/20 via-transparent to-pink-500/20 
                opacity-0 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r 
                from-purple-400 to-pink-600">{link.title}</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{link.description}</p>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
