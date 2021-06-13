import type { Community } from "./types"

const communities: Community[] = [
  {
    id: 0,
    urlName: "agora",
    name: "Agora Space",
    description:
      "Create tokenized, private communities on multiple platforms and blockchains.",
    imageUrl: "temporaryCommunityLogos/agora3.png",
    theme: {
      color: "#4F46E5",
    },
    ownerId: 0,
    chainData: {
      ropsten: {
        token: {
          address: "0xaD6D458402F60fD3Bd25163575031ACDce07538D",
          name: "DAI",
          symbol: "DAI",
          decimals: 18,
        },
        contract: {
          address: "0x363B85Ba2b042bc929E332541813252bc1cbc098",
        },
      },
    },
    platforms: {
      telegram: {
        active: true,
      },
      discord: {
        active: true,
        serverId: 0,
      },
    },
    levels: [
      {
        name: "Agora square",
        desc: "",
        imageUrl: "temporaryCommunityLogos/agora1.png",
        accessRequirement: {
          type: "open",
          amount: 0,
          timelockMs: 0,
        },
        membersCount: 0,
        platforms: {
          telegramGroups: [],
          discordChannels: [],
        },
      },
      {
        name: "Agora members",
        desc: "Basic group for the basic HODLers",
        imageUrl: "temporaryCommunityLogos/agora2.png",
        accessRequirement: {
          type: "hold",
          amount: 10,
          timelockMs: 0,
        },
        membersCount: 0,
        platforms: {
          telegramGroups: [],
          discordChannels: [],
        },
      },
      {
        name: "Agora community owners",
        desc: "Group for founders who tokenzied their communities",
        imageUrl: "temporaryCommunityLogos/agora3.png",
        accessRequirement: {
          type: "stake",
          amount: 50,
          timelockMs: 600000,
        },
        membersCount: 0,
        platforms: {
          telegramGroups: [],
          discordChannels: [],
        },
      },
    ],
  },
  {
    id: 1,
    urlName: "ethane",
    name: "Ethane",
    description: "something",
    imageUrl: "",
    theme: {
      color: "",
    },
    ownerId: 0,
    chainData: {
      ropsten: {
        token: {
          address: "0xaD6D458402F60fD3Bd25163575031ACDce07538D",
          name: "DAI",
          symbol: "DAI",
          decimals: 18,
        },
        contract: {
          address: "0x363B85Ba2b042bc929E332541813252bc1cbc098",
        },
      },
    },
    platforms: {
      telegram: {
        active: true,
      },
      discord: {
        active: true,
        serverId: 0,
      },
    },
    levels: [
      {
        name: "string",
        desc: "string",
        imageUrl: "string",
        accessRequirement: {
          type: "open",
          amount: 0,
          timelockMs: 0,
        },
        membersCount: 0,
        platforms: {
          telegramGroups: [
            {
              id: 0,
            },
          ],
          discordChannels: [
            {
              id: 0,
            },
          ],
        },
      },
    ],
  },
]

export type { Community }
export { communities }
