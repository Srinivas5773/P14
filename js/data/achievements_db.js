/**
 * ============================================================================
 * CYBERPUNK RACER // ACHIEVEMENTS & PILOT REPUTATION SYSTEM
 * 250+ unlockable accolades, career milestones, speed challenges, and medals.
 * ============================================================================
 */

window.CyberpunkAchievementsDB = {
  achievements: [
    {
      id: "ACH_001",
      badgeTitle: "Zero Scratch Master Tier 1",
      category: "DRIFT",
      tier: "GOLD",
      experienceReward: 250,
      creditsReward: 150,
      criteria: {
        metricType: "driftDistancePx",
        targetValue: 125,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_002",
      badgeTitle: "Nitro Overcharge Fiend Tier 1",
      category: "COMBAT_SURVIVAL",
      tier: "SILVER",
      experienceReward: 500,
      creditsReward: 300,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 150,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_003",
      badgeTitle: "Traffic Weaver Elite Tier 1",
      category: "CIRCUIT_MASTERY",
      tier: "BRONZE",
      experienceReward: 750,
      creditsReward: 450,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 175,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_004",
      badgeTitle: "EMP Storm Defier Tier 1",
      category: "CREDIT_TYCOON",
      tier: "PLATINUM",
      experienceReward: 1000,
      creditsReward: 600,
      criteria: {
        metricType: "totalCoinsCollected",
        targetValue: 200,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_005",
      badgeTitle: "Credit Baron Supreme Tier 1",
      category: "SECTOR_EXPLORATION",
      tier: "GOLD",
      experienceReward: 1250,
      creditsReward: 750,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 225,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_006",
      badgeTitle: "Asphalt Kingpin Tier 1",
      category: "SPEED",
      tier: "SILVER",
      experienceReward: 1500,
      creditsReward: 900,
      criteria: {
        metricType: "topSpeedKmh",
        targetValue: 250,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_007",
      badgeTitle: "Night City Drifter Tier 1",
      category: "DRIFT",
      tier: "BRONZE",
      experienceReward: 1750,
      creditsReward: 1050,
      criteria: {
        metricType: "driftDistancePx",
        targetValue: 275,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_008",
      badgeTitle: "Sector 7 Legend Tier 1",
      category: "COMBAT_SURVIVAL",
      tier: "PLATINUM",
      experienceReward: 2000,
      creditsReward: 1200,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 300,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_009",
      badgeTitle: "High-Octane Pioneer Tier 1",
      category: "CIRCUIT_MASTERY",
      tier: "GOLD",
      experienceReward: 2250,
      creditsReward: 1350,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 325,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_010",
      badgeTitle: "Chrome Plated Survivor Tier 1",
      category: "CREDIT_TYCOON",
      tier: "SILVER",
      experienceReward: 2500,
      creditsReward: 1500,
      criteria: {
        metricType: "totalCoinsCollected",
        targetValue: 350,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_011",
      badgeTitle: "Cyber Grandmaster Tier 1",
      category: "SECTOR_EXPLORATION",
      tier: "BRONZE",
      experienceReward: 2750,
      creditsReward: 1650,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 375,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_012",
      badgeTitle: "Clean Lines Specialist Tier 1",
      category: "SPEED",
      tier: "PLATINUM",
      experienceReward: 3000,
      creditsReward: 1800,
      criteria: {
        metricType: "topSpeedKmh",
        targetValue: 400,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_013",
      badgeTitle: "Speed Demon Transcendence Tier 1",
      category: "DRIFT",
      tier: "GOLD",
      experienceReward: 3250,
      creditsReward: 1950,
      criteria: {
        metricType: "driftDistancePx",
        targetValue: 425,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_014",
      badgeTitle: "Turbo Charge Maestro Tier 1",
      category: "COMBAT_SURVIVAL",
      tier: "SILVER",
      experienceReward: 3500,
      creditsReward: 2100,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 450,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_015",
      badgeTitle: "Reactor Core Pilot Tier 1",
      category: "CIRCUIT_MASTERY",
      tier: "BRONZE",
      experienceReward: 3750,
      creditsReward: 2250,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 475,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_016",
      badgeTitle: "Sonic Boom Initializer Tier 2",
      category: "CREDIT_TYCOON",
      tier: "PLATINUM",
      experienceReward: 4000,
      creditsReward: 2400,
      criteria: {
        metricType: "totalCoinsCollected",
        targetValue: 500,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_017",
      badgeTitle: "Zero Scratch Master Tier 2",
      category: "SECTOR_EXPLORATION",
      tier: "GOLD",
      experienceReward: 4250,
      creditsReward: 2550,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 525,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_018",
      badgeTitle: "Nitro Overcharge Fiend Tier 2",
      category: "SPEED",
      tier: "SILVER",
      experienceReward: 4500,
      creditsReward: 2700,
      criteria: {
        metricType: "topSpeedKmh",
        targetValue: 550,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_019",
      badgeTitle: "Traffic Weaver Elite Tier 2",
      category: "DRIFT",
      tier: "BRONZE",
      experienceReward: 4750,
      creditsReward: 2850,
      criteria: {
        metricType: "driftDistancePx",
        targetValue: 575,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_020",
      badgeTitle: "EMP Storm Defier Tier 2",
      category: "COMBAT_SURVIVAL",
      tier: "PLATINUM",
      experienceReward: 5000,
      creditsReward: 3000,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 600,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_021",
      badgeTitle: "Credit Baron Supreme Tier 2",
      category: "CIRCUIT_MASTERY",
      tier: "GOLD",
      experienceReward: 5250,
      creditsReward: 3150,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 625,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_022",
      badgeTitle: "Asphalt Kingpin Tier 2",
      category: "CREDIT_TYCOON",
      tier: "SILVER",
      experienceReward: 5500,
      creditsReward: 3300,
      criteria: {
        metricType: "totalCoinsCollected",
        targetValue: 650,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_023",
      badgeTitle: "Night City Drifter Tier 2",
      category: "SECTOR_EXPLORATION",
      tier: "BRONZE",
      experienceReward: 5750,
      creditsReward: 3450,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 675,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_024",
      badgeTitle: "Sector 7 Legend Tier 2",
      category: "SPEED",
      tier: "PLATINUM",
      experienceReward: 6000,
      creditsReward: 3600,
      criteria: {
        metricType: "topSpeedKmh",
        targetValue: 700,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_025",
      badgeTitle: "High-Octane Pioneer Tier 2",
      category: "DRIFT",
      tier: "GOLD",
      experienceReward: 6250,
      creditsReward: 3750,
      criteria: {
        metricType: "driftDistancePx",
        targetValue: 725,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_026",
      badgeTitle: "Chrome Plated Survivor Tier 2",
      category: "COMBAT_SURVIVAL",
      tier: "SILVER",
      experienceReward: 6500,
      creditsReward: 3900,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 750,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_027",
      badgeTitle: "Cyber Grandmaster Tier 2",
      category: "CIRCUIT_MASTERY",
      tier: "BRONZE",
      experienceReward: 6750,
      creditsReward: 4050,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 775,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_028",
      badgeTitle: "Clean Lines Specialist Tier 2",
      category: "CREDIT_TYCOON",
      tier: "PLATINUM",
      experienceReward: 7000,
      creditsReward: 4200,
      criteria: {
        metricType: "totalCoinsCollected",
        targetValue: 800,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_029",
      badgeTitle: "Speed Demon Transcendence Tier 2",
      category: "SECTOR_EXPLORATION",
      tier: "GOLD",
      experienceReward: 7250,
      creditsReward: 4350,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 825,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_030",
      badgeTitle: "Turbo Charge Maestro Tier 2",
      category: "SPEED",
      tier: "SILVER",
      experienceReward: 7500,
      creditsReward: 4500,
      criteria: {
        metricType: "topSpeedKmh",
        targetValue: 850,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_031",
      badgeTitle: "Reactor Core Pilot Tier 2",
      category: "DRIFT",
      tier: "BRONZE",
      experienceReward: 7750,
      creditsReward: 4650,
      criteria: {
        metricType: "driftDistancePx",
        targetValue: 875,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_032",
      badgeTitle: "Sonic Boom Initializer Tier 3",
      category: "COMBAT_SURVIVAL",
      tier: "PLATINUM",
      experienceReward: 8000,
      creditsReward: 4800,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 900,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_033",
      badgeTitle: "Zero Scratch Master Tier 3",
      category: "CIRCUIT_MASTERY",
      tier: "GOLD",
      experienceReward: 8250,
      creditsReward: 4950,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 925,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_034",
      badgeTitle: "Nitro Overcharge Fiend Tier 3",
      category: "CREDIT_TYCOON",
      tier: "SILVER",
      experienceReward: 8500,
      creditsReward: 5100,
      criteria: {
        metricType: "totalCoinsCollected",
        targetValue: 950,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_035",
      badgeTitle: "Traffic Weaver Elite Tier 3",
      category: "SECTOR_EXPLORATION",
      tier: "BRONZE",
      experienceReward: 8750,
      creditsReward: 5250,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 975,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_036",
      badgeTitle: "EMP Storm Defier Tier 3",
      category: "SPEED",
      tier: "PLATINUM",
      experienceReward: 9000,
      creditsReward: 5400,
      criteria: {
        metricType: "topSpeedKmh",
        targetValue: 1000,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_037",
      badgeTitle: "Credit Baron Supreme Tier 3",
      category: "DRIFT",
      tier: "GOLD",
      experienceReward: 9250,
      creditsReward: 5550,
      criteria: {
        metricType: "driftDistancePx",
        targetValue: 1025,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_038",
      badgeTitle: "Asphalt Kingpin Tier 3",
      category: "COMBAT_SURVIVAL",
      tier: "SILVER",
      experienceReward: 9500,
      creditsReward: 5700,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 1050,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_039",
      badgeTitle: "Night City Drifter Tier 3",
      category: "CIRCUIT_MASTERY",
      tier: "BRONZE",
      experienceReward: 9750,
      creditsReward: 5850,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 1075,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_040",
      badgeTitle: "Sector 7 Legend Tier 3",
      category: "CREDIT_TYCOON",
      tier: "PLATINUM",
      experienceReward: 10000,
      creditsReward: 6000,
      criteria: {
        metricType: "totalCoinsCollected",
        targetValue: 1100,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_041",
      badgeTitle: "High-Octane Pioneer Tier 3",
      category: "SECTOR_EXPLORATION",
      tier: "GOLD",
      experienceReward: 10250,
      creditsReward: 6150,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 1125,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_042",
      badgeTitle: "Chrome Plated Survivor Tier 3",
      category: "SPEED",
      tier: "SILVER",
      experienceReward: 10500,
      creditsReward: 6300,
      criteria: {
        metricType: "topSpeedKmh",
        targetValue: 1150,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_043",
      badgeTitle: "Cyber Grandmaster Tier 3",
      category: "DRIFT",
      tier: "BRONZE",
      experienceReward: 10750,
      creditsReward: 6450,
      criteria: {
        metricType: "driftDistancePx",
        targetValue: 1175,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_044",
      badgeTitle: "Clean Lines Specialist Tier 3",
      category: "COMBAT_SURVIVAL",
      tier: "PLATINUM",
      experienceReward: 11000,
      creditsReward: 6600,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 1200,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_045",
      badgeTitle: "Speed Demon Transcendence Tier 3",
      category: "CIRCUIT_MASTERY",
      tier: "GOLD",
      experienceReward: 11250,
      creditsReward: 6750,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 1225,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_046",
      badgeTitle: "Turbo Charge Maestro Tier 3",
      category: "CREDIT_TYCOON",
      tier: "SILVER",
      experienceReward: 11500,
      creditsReward: 6900,
      criteria: {
        metricType: "totalCoinsCollected",
        targetValue: 1250,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_047",
      badgeTitle: "Reactor Core Pilot Tier 3",
      category: "SECTOR_EXPLORATION",
      tier: "BRONZE",
      experienceReward: 11750,
      creditsReward: 7050,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 1275,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_048",
      badgeTitle: "Sonic Boom Initializer Tier 4",
      category: "SPEED",
      tier: "PLATINUM",
      experienceReward: 12000,
      creditsReward: 7200,
      criteria: {
        metricType: "topSpeedKmh",
        targetValue: 1300,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_049",
      badgeTitle: "Zero Scratch Master Tier 4",
      category: "DRIFT",
      tier: "GOLD",
      experienceReward: 12250,
      creditsReward: 7350,
      criteria: {
        metricType: "driftDistancePx",
        targetValue: 1325,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_050",
      badgeTitle: "Nitro Overcharge Fiend Tier 4",
      category: "COMBAT_SURVIVAL",
      tier: "SILVER",
      experienceReward: 12500,
      creditsReward: 7500,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 1350,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_051",
      badgeTitle: "Traffic Weaver Elite Tier 4",
      category: "CIRCUIT_MASTERY",
      tier: "BRONZE",
      experienceReward: 12750,
      creditsReward: 7650,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 1375,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_052",
      badgeTitle: "EMP Storm Defier Tier 4",
      category: "CREDIT_TYCOON",
      tier: "PLATINUM",
      experienceReward: 13000,
      creditsReward: 7800,
      criteria: {
        metricType: "totalCoinsCollected",
        targetValue: 1400,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_053",
      badgeTitle: "Credit Baron Supreme Tier 4",
      category: "SECTOR_EXPLORATION",
      tier: "GOLD",
      experienceReward: 13250,
      creditsReward: 7950,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 1425,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_054",
      badgeTitle: "Asphalt Kingpin Tier 4",
      category: "SPEED",
      tier: "SILVER",
      experienceReward: 13500,
      creditsReward: 8100,
      criteria: {
        metricType: "topSpeedKmh",
        targetValue: 1450,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_055",
      badgeTitle: "Night City Drifter Tier 4",
      category: "DRIFT",
      tier: "BRONZE",
      experienceReward: 13750,
      creditsReward: 8250,
      criteria: {
        metricType: "driftDistancePx",
        targetValue: 1475,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_056",
      badgeTitle: "Sector 7 Legend Tier 4",
      category: "COMBAT_SURVIVAL",
      tier: "PLATINUM",
      experienceReward: 14000,
      creditsReward: 8400,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 1500,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_057",
      badgeTitle: "High-Octane Pioneer Tier 4",
      category: "CIRCUIT_MASTERY",
      tier: "GOLD",
      experienceReward: 14250,
      creditsReward: 8550,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 1525,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_058",
      badgeTitle: "Chrome Plated Survivor Tier 4",
      category: "CREDIT_TYCOON",
      tier: "SILVER",
      experienceReward: 14500,
      creditsReward: 8700,
      criteria: {
        metricType: "totalCoinsCollected",
        targetValue: 1550,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_059",
      badgeTitle: "Cyber Grandmaster Tier 4",
      category: "SECTOR_EXPLORATION",
      tier: "BRONZE",
      experienceReward: 14750,
      creditsReward: 8850,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 1575,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_060",
      badgeTitle: "Clean Lines Specialist Tier 4",
      category: "SPEED",
      tier: "PLATINUM",
      experienceReward: 15000,
      creditsReward: 9000,
      criteria: {
        metricType: "topSpeedKmh",
        targetValue: 1600,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_061",
      badgeTitle: "Speed Demon Transcendence Tier 4",
      category: "DRIFT",
      tier: "GOLD",
      experienceReward: 15250,
      creditsReward: 9150,
      criteria: {
        metricType: "driftDistancePx",
        targetValue: 1625,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_062",
      badgeTitle: "Turbo Charge Maestro Tier 4",
      category: "COMBAT_SURVIVAL",
      tier: "SILVER",
      experienceReward: 15500,
      creditsReward: 9300,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 1650,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_063",
      badgeTitle: "Reactor Core Pilot Tier 4",
      category: "CIRCUIT_MASTERY",
      tier: "BRONZE",
      experienceReward: 15750,
      creditsReward: 9450,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 1675,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_064",
      badgeTitle: "Sonic Boom Initializer Tier 5",
      category: "CREDIT_TYCOON",
      tier: "PLATINUM",
      experienceReward: 16000,
      creditsReward: 9600,
      criteria: {
        metricType: "totalCoinsCollected",
        targetValue: 1700,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_065",
      badgeTitle: "Zero Scratch Master Tier 5",
      category: "SECTOR_EXPLORATION",
      tier: "GOLD",
      experienceReward: 16250,
      creditsReward: 9750,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 1725,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_066",
      badgeTitle: "Nitro Overcharge Fiend Tier 5",
      category: "SPEED",
      tier: "SILVER",
      experienceReward: 16500,
      creditsReward: 9900,
      criteria: {
        metricType: "topSpeedKmh",
        targetValue: 1750,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_067",
      badgeTitle: "Traffic Weaver Elite Tier 5",
      category: "DRIFT",
      tier: "BRONZE",
      experienceReward: 16750,
      creditsReward: 10050,
      criteria: {
        metricType: "driftDistancePx",
        targetValue: 1775,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_068",
      badgeTitle: "EMP Storm Defier Tier 5",
      category: "COMBAT_SURVIVAL",
      tier: "PLATINUM",
      experienceReward: 17000,
      creditsReward: 10200,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 1800,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_069",
      badgeTitle: "Credit Baron Supreme Tier 5",
      category: "CIRCUIT_MASTERY",
      tier: "GOLD",
      experienceReward: 17250,
      creditsReward: 10350,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 1825,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_070",
      badgeTitle: "Asphalt Kingpin Tier 5",
      category: "CREDIT_TYCOON",
      tier: "SILVER",
      experienceReward: 17500,
      creditsReward: 10500,
      criteria: {
        metricType: "totalCoinsCollected",
        targetValue: 1850,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_071",
      badgeTitle: "Night City Drifter Tier 5",
      category: "SECTOR_EXPLORATION",
      tier: "BRONZE",
      experienceReward: 17750,
      creditsReward: 10650,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 1875,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_072",
      badgeTitle: "Sector 7 Legend Tier 5",
      category: "SPEED",
      tier: "PLATINUM",
      experienceReward: 18000,
      creditsReward: 10800,
      criteria: {
        metricType: "topSpeedKmh",
        targetValue: 1900,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_073",
      badgeTitle: "High-Octane Pioneer Tier 5",
      category: "DRIFT",
      tier: "GOLD",
      experienceReward: 18250,
      creditsReward: 10950,
      criteria: {
        metricType: "driftDistancePx",
        targetValue: 1925,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_074",
      badgeTitle: "Chrome Plated Survivor Tier 5",
      category: "COMBAT_SURVIVAL",
      tier: "SILVER",
      experienceReward: 18500,
      creditsReward: 11100,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 1950,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_075",
      badgeTitle: "Cyber Grandmaster Tier 5",
      category: "CIRCUIT_MASTERY",
      tier: "BRONZE",
      experienceReward: 18750,
      creditsReward: 11250,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 1975,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_076",
      badgeTitle: "Clean Lines Specialist Tier 5",
      category: "CREDIT_TYCOON",
      tier: "PLATINUM",
      experienceReward: 19000,
      creditsReward: 11400,
      criteria: {
        metricType: "totalCoinsCollected",
        targetValue: 2000,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_077",
      badgeTitle: "Speed Demon Transcendence Tier 5",
      category: "SECTOR_EXPLORATION",
      tier: "GOLD",
      experienceReward: 19250,
      creditsReward: 11550,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 2025,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_078",
      badgeTitle: "Turbo Charge Maestro Tier 5",
      category: "SPEED",
      tier: "SILVER",
      experienceReward: 19500,
      creditsReward: 11700,
      criteria: {
        metricType: "topSpeedKmh",
        targetValue: 2050,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_079",
      badgeTitle: "Reactor Core Pilot Tier 5",
      category: "DRIFT",
      tier: "BRONZE",
      experienceReward: 19750,
      creditsReward: 11850,
      criteria: {
        metricType: "driftDistancePx",
        targetValue: 2075,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_080",
      badgeTitle: "Sonic Boom Initializer Tier 6",
      category: "COMBAT_SURVIVAL",
      tier: "PLATINUM",
      experienceReward: 20000,
      creditsReward: 12000,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 2100,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_081",
      badgeTitle: "Zero Scratch Master Tier 6",
      category: "CIRCUIT_MASTERY",
      tier: "GOLD",
      experienceReward: 20250,
      creditsReward: 12150,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 2125,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_082",
      badgeTitle: "Nitro Overcharge Fiend Tier 6",
      category: "CREDIT_TYCOON",
      tier: "SILVER",
      experienceReward: 20500,
      creditsReward: 12300,
      criteria: {
        metricType: "totalCoinsCollected",
        targetValue: 2150,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_083",
      badgeTitle: "Traffic Weaver Elite Tier 6",
      category: "SECTOR_EXPLORATION",
      tier: "BRONZE",
      experienceReward: 20750,
      creditsReward: 12450,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 2175,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_084",
      badgeTitle: "EMP Storm Defier Tier 6",
      category: "SPEED",
      tier: "PLATINUM",
      experienceReward: 21000,
      creditsReward: 12600,
      criteria: {
        metricType: "topSpeedKmh",
        targetValue: 2200,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_085",
      badgeTitle: "Credit Baron Supreme Tier 6",
      category: "DRIFT",
      tier: "GOLD",
      experienceReward: 21250,
      creditsReward: 12750,
      criteria: {
        metricType: "driftDistancePx",
        targetValue: 2225,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_086",
      badgeTitle: "Asphalt Kingpin Tier 6",
      category: "COMBAT_SURVIVAL",
      tier: "SILVER",
      experienceReward: 21500,
      creditsReward: 12900,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 2250,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_087",
      badgeTitle: "Night City Drifter Tier 6",
      category: "CIRCUIT_MASTERY",
      tier: "BRONZE",
      experienceReward: 21750,
      creditsReward: 13050,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 2275,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_088",
      badgeTitle: "Sector 7 Legend Tier 6",
      category: "CREDIT_TYCOON",
      tier: "PLATINUM",
      experienceReward: 22000,
      creditsReward: 13200,
      criteria: {
        metricType: "totalCoinsCollected",
        targetValue: 2300,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_089",
      badgeTitle: "High-Octane Pioneer Tier 6",
      category: "SECTOR_EXPLORATION",
      tier: "GOLD",
      experienceReward: 22250,
      creditsReward: 13350,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 2325,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_090",
      badgeTitle: "Chrome Plated Survivor Tier 6",
      category: "SPEED",
      tier: "SILVER",
      experienceReward: 22500,
      creditsReward: 13500,
      criteria: {
        metricType: "topSpeedKmh",
        targetValue: 2350,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_091",
      badgeTitle: "Cyber Grandmaster Tier 6",
      category: "DRIFT",
      tier: "BRONZE",
      experienceReward: 22750,
      creditsReward: 13650,
      criteria: {
        metricType: "driftDistancePx",
        targetValue: 2375,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_092",
      badgeTitle: "Clean Lines Specialist Tier 6",
      category: "COMBAT_SURVIVAL",
      tier: "PLATINUM",
      experienceReward: 23000,
      creditsReward: 13800,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 2400,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_093",
      badgeTitle: "Speed Demon Transcendence Tier 6",
      category: "CIRCUIT_MASTERY",
      tier: "GOLD",
      experienceReward: 23250,
      creditsReward: 13950,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 2425,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_094",
      badgeTitle: "Turbo Charge Maestro Tier 6",
      category: "CREDIT_TYCOON",
      tier: "SILVER",
      experienceReward: 23500,
      creditsReward: 14100,
      criteria: {
        metricType: "totalCoinsCollected",
        targetValue: 2450,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_095",
      badgeTitle: "Reactor Core Pilot Tier 6",
      category: "SECTOR_EXPLORATION",
      tier: "BRONZE",
      experienceReward: 23750,
      creditsReward: 14250,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 2475,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_096",
      badgeTitle: "Sonic Boom Initializer Tier 7",
      category: "SPEED",
      tier: "PLATINUM",
      experienceReward: 24000,
      creditsReward: 14400,
      criteria: {
        metricType: "topSpeedKmh",
        targetValue: 2500,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_097",
      badgeTitle: "Zero Scratch Master Tier 7",
      category: "DRIFT",
      tier: "GOLD",
      experienceReward: 24250,
      creditsReward: 14550,
      criteria: {
        metricType: "driftDistancePx",
        targetValue: 2525,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_098",
      badgeTitle: "Nitro Overcharge Fiend Tier 7",
      category: "COMBAT_SURVIVAL",
      tier: "SILVER",
      experienceReward: 24500,
      creditsReward: 14700,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 2550,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_099",
      badgeTitle: "Traffic Weaver Elite Tier 7",
      category: "CIRCUIT_MASTERY",
      tier: "BRONZE",
      experienceReward: 24750,
      creditsReward: 14850,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 2575,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_100",
      badgeTitle: "EMP Storm Defier Tier 7",
      category: "CREDIT_TYCOON",
      tier: "PLATINUM",
      experienceReward: 25000,
      creditsReward: 15000,
      criteria: {
        metricType: "totalCoinsCollected",
        targetValue: 2600,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_101",
      badgeTitle: "Credit Baron Supreme Tier 7",
      category: "SECTOR_EXPLORATION",
      tier: "GOLD",
      experienceReward: 25250,
      creditsReward: 15150,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 2625,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_102",
      badgeTitle: "Asphalt Kingpin Tier 7",
      category: "SPEED",
      tier: "SILVER",
      experienceReward: 25500,
      creditsReward: 15300,
      criteria: {
        metricType: "topSpeedKmh",
        targetValue: 2650,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_103",
      badgeTitle: "Night City Drifter Tier 7",
      category: "DRIFT",
      tier: "BRONZE",
      experienceReward: 25750,
      creditsReward: 15450,
      criteria: {
        metricType: "driftDistancePx",
        targetValue: 2675,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_104",
      badgeTitle: "Sector 7 Legend Tier 7",
      category: "COMBAT_SURVIVAL",
      tier: "PLATINUM",
      experienceReward: 26000,
      creditsReward: 15600,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 2700,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_105",
      badgeTitle: "High-Octane Pioneer Tier 7",
      category: "CIRCUIT_MASTERY",
      tier: "GOLD",
      experienceReward: 26250,
      creditsReward: 15750,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 2725,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_106",
      badgeTitle: "Chrome Plated Survivor Tier 7",
      category: "CREDIT_TYCOON",
      tier: "SILVER",
      experienceReward: 26500,
      creditsReward: 15900,
      criteria: {
        metricType: "totalCoinsCollected",
        targetValue: 2750,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_107",
      badgeTitle: "Cyber Grandmaster Tier 7",
      category: "SECTOR_EXPLORATION",
      tier: "BRONZE",
      experienceReward: 26750,
      creditsReward: 16050,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 2775,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_108",
      badgeTitle: "Clean Lines Specialist Tier 7",
      category: "SPEED",
      tier: "PLATINUM",
      experienceReward: 27000,
      creditsReward: 16200,
      criteria: {
        metricType: "topSpeedKmh",
        targetValue: 2800,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_109",
      badgeTitle: "Speed Demon Transcendence Tier 7",
      category: "DRIFT",
      tier: "GOLD",
      experienceReward: 27250,
      creditsReward: 16350,
      criteria: {
        metricType: "driftDistancePx",
        targetValue: 2825,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_110",
      badgeTitle: "Turbo Charge Maestro Tier 7",
      category: "COMBAT_SURVIVAL",
      tier: "SILVER",
      experienceReward: 27500,
      creditsReward: 16500,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 2850,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_111",
      badgeTitle: "Reactor Core Pilot Tier 7",
      category: "CIRCUIT_MASTERY",
      tier: "BRONZE",
      experienceReward: 27750,
      creditsReward: 16650,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 2875,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_112",
      badgeTitle: "Sonic Boom Initializer Tier 8",
      category: "CREDIT_TYCOON",
      tier: "PLATINUM",
      experienceReward: 28000,
      creditsReward: 16800,
      criteria: {
        metricType: "totalCoinsCollected",
        targetValue: 2900,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_113",
      badgeTitle: "Zero Scratch Master Tier 8",
      category: "SECTOR_EXPLORATION",
      tier: "GOLD",
      experienceReward: 28250,
      creditsReward: 16950,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 2925,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_114",
      badgeTitle: "Nitro Overcharge Fiend Tier 8",
      category: "SPEED",
      tier: "SILVER",
      experienceReward: 28500,
      creditsReward: 17100,
      criteria: {
        metricType: "topSpeedKmh",
        targetValue: 2950,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_115",
      badgeTitle: "Traffic Weaver Elite Tier 8",
      category: "DRIFT",
      tier: "BRONZE",
      experienceReward: 28750,
      creditsReward: 17250,
      criteria: {
        metricType: "driftDistancePx",
        targetValue: 2975,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_116",
      badgeTitle: "EMP Storm Defier Tier 8",
      category: "COMBAT_SURVIVAL",
      tier: "PLATINUM",
      experienceReward: 29000,
      creditsReward: 17400,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 3000,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_117",
      badgeTitle: "Credit Baron Supreme Tier 8",
      category: "CIRCUIT_MASTERY",
      tier: "GOLD",
      experienceReward: 29250,
      creditsReward: 17550,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 3025,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_118",
      badgeTitle: "Asphalt Kingpin Tier 8",
      category: "CREDIT_TYCOON",
      tier: "SILVER",
      experienceReward: 29500,
      creditsReward: 17700,
      criteria: {
        metricType: "totalCoinsCollected",
        targetValue: 3050,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_119",
      badgeTitle: "Night City Drifter Tier 8",
      category: "SECTOR_EXPLORATION",
      tier: "BRONZE",
      experienceReward: 29750,
      creditsReward: 17850,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 3075,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_120",
      badgeTitle: "Sector 7 Legend Tier 8",
      category: "SPEED",
      tier: "PLATINUM",
      experienceReward: 30000,
      creditsReward: 18000,
      criteria: {
        metricType: "topSpeedKmh",
        targetValue: 3100,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_121",
      badgeTitle: "High-Octane Pioneer Tier 8",
      category: "DRIFT",
      tier: "GOLD",
      experienceReward: 30250,
      creditsReward: 18150,
      criteria: {
        metricType: "driftDistancePx",
        targetValue: 3125,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_122",
      badgeTitle: "Chrome Plated Survivor Tier 8",
      category: "COMBAT_SURVIVAL",
      tier: "SILVER",
      experienceReward: 30500,
      creditsReward: 18300,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 3150,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_123",
      badgeTitle: "Cyber Grandmaster Tier 8",
      category: "CIRCUIT_MASTERY",
      tier: "BRONZE",
      experienceReward: 30750,
      creditsReward: 18450,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 3175,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_124",
      badgeTitle: "Clean Lines Specialist Tier 8",
      category: "CREDIT_TYCOON",
      tier: "PLATINUM",
      experienceReward: 31000,
      creditsReward: 18600,
      criteria: {
        metricType: "totalCoinsCollected",
        targetValue: 3200,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_125",
      badgeTitle: "Speed Demon Transcendence Tier 8",
      category: "SECTOR_EXPLORATION",
      tier: "GOLD",
      experienceReward: 31250,
      creditsReward: 18750,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 3225,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_126",
      badgeTitle: "Turbo Charge Maestro Tier 8",
      category: "SPEED",
      tier: "SILVER",
      experienceReward: 31500,
      creditsReward: 18900,
      criteria: {
        metricType: "topSpeedKmh",
        targetValue: 3250,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_127",
      badgeTitle: "Reactor Core Pilot Tier 8",
      category: "DRIFT",
      tier: "BRONZE",
      experienceReward: 31750,
      creditsReward: 19050,
      criteria: {
        metricType: "driftDistancePx",
        targetValue: 3275,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_128",
      badgeTitle: "Sonic Boom Initializer Tier 9",
      category: "COMBAT_SURVIVAL",
      tier: "PLATINUM",
      experienceReward: 32000,
      creditsReward: 19200,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 3300,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_129",
      badgeTitle: "Zero Scratch Master Tier 9",
      category: "CIRCUIT_MASTERY",
      tier: "GOLD",
      experienceReward: 32250,
      creditsReward: 19350,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 3325,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_130",
      badgeTitle: "Nitro Overcharge Fiend Tier 9",
      category: "CREDIT_TYCOON",
      tier: "SILVER",
      experienceReward: 32500,
      creditsReward: 19500,
      criteria: {
        metricType: "totalCoinsCollected",
        targetValue: 3350,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_131",
      badgeTitle: "Traffic Weaver Elite Tier 9",
      category: "SECTOR_EXPLORATION",
      tier: "BRONZE",
      experienceReward: 32750,
      creditsReward: 19650,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 3375,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_132",
      badgeTitle: "EMP Storm Defier Tier 9",
      category: "SPEED",
      tier: "PLATINUM",
      experienceReward: 33000,
      creditsReward: 19800,
      criteria: {
        metricType: "topSpeedKmh",
        targetValue: 3400,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_133",
      badgeTitle: "Credit Baron Supreme Tier 9",
      category: "DRIFT",
      tier: "GOLD",
      experienceReward: 33250,
      creditsReward: 19950,
      criteria: {
        metricType: "driftDistancePx",
        targetValue: 3425,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_134",
      badgeTitle: "Asphalt Kingpin Tier 9",
      category: "COMBAT_SURVIVAL",
      tier: "SILVER",
      experienceReward: 33500,
      creditsReward: 20100,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 3450,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_135",
      badgeTitle: "Night City Drifter Tier 9",
      category: "CIRCUIT_MASTERY",
      tier: "BRONZE",
      experienceReward: 33750,
      creditsReward: 20250,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 3475,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_136",
      badgeTitle: "Sector 7 Legend Tier 9",
      category: "CREDIT_TYCOON",
      tier: "PLATINUM",
      experienceReward: 34000,
      creditsReward: 20400,
      criteria: {
        metricType: "totalCoinsCollected",
        targetValue: 3500,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_137",
      badgeTitle: "High-Octane Pioneer Tier 9",
      category: "SECTOR_EXPLORATION",
      tier: "GOLD",
      experienceReward: 34250,
      creditsReward: 20550,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 3525,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_138",
      badgeTitle: "Chrome Plated Survivor Tier 9",
      category: "SPEED",
      tier: "SILVER",
      experienceReward: 34500,
      creditsReward: 20700,
      criteria: {
        metricType: "topSpeedKmh",
        targetValue: 3550,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_139",
      badgeTitle: "Cyber Grandmaster Tier 9",
      category: "DRIFT",
      tier: "BRONZE",
      experienceReward: 34750,
      creditsReward: 20850,
      criteria: {
        metricType: "driftDistancePx",
        targetValue: 3575,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_140",
      badgeTitle: "Clean Lines Specialist Tier 9",
      category: "COMBAT_SURVIVAL",
      tier: "PLATINUM",
      experienceReward: 35000,
      creditsReward: 21000,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 3600,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_141",
      badgeTitle: "Speed Demon Transcendence Tier 9",
      category: "CIRCUIT_MASTERY",
      tier: "GOLD",
      experienceReward: 35250,
      creditsReward: 21150,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 3625,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_142",
      badgeTitle: "Turbo Charge Maestro Tier 9",
      category: "CREDIT_TYCOON",
      tier: "SILVER",
      experienceReward: 35500,
      creditsReward: 21300,
      criteria: {
        metricType: "totalCoinsCollected",
        targetValue: 3650,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_143",
      badgeTitle: "Reactor Core Pilot Tier 9",
      category: "SECTOR_EXPLORATION",
      tier: "BRONZE",
      experienceReward: 35750,
      creditsReward: 21450,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 3675,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_144",
      badgeTitle: "Sonic Boom Initializer Tier 10",
      category: "SPEED",
      tier: "PLATINUM",
      experienceReward: 36000,
      creditsReward: 21600,
      criteria: {
        metricType: "topSpeedKmh",
        targetValue: 3700,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_145",
      badgeTitle: "Zero Scratch Master Tier 10",
      category: "DRIFT",
      tier: "GOLD",
      experienceReward: 36250,
      creditsReward: 21750,
      criteria: {
        metricType: "driftDistancePx",
        targetValue: 3725,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_146",
      badgeTitle: "Nitro Overcharge Fiend Tier 10",
      category: "COMBAT_SURVIVAL",
      tier: "SILVER",
      experienceReward: 36500,
      creditsReward: 21900,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 3750,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_147",
      badgeTitle: "Traffic Weaver Elite Tier 10",
      category: "CIRCUIT_MASTERY",
      tier: "BRONZE",
      experienceReward: 36750,
      creditsReward: 22050,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 3775,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_148",
      badgeTitle: "EMP Storm Defier Tier 10",
      category: "CREDIT_TYCOON",
      tier: "PLATINUM",
      experienceReward: 37000,
      creditsReward: 22200,
      criteria: {
        metricType: "totalCoinsCollected",
        targetValue: 3800,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_149",
      badgeTitle: "Credit Baron Supreme Tier 10",
      category: "SECTOR_EXPLORATION",
      tier: "GOLD",
      experienceReward: 37250,
      creditsReward: 22350,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 3825,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_150",
      badgeTitle: "Asphalt Kingpin Tier 10",
      category: "SPEED",
      tier: "SILVER",
      experienceReward: 37500,
      creditsReward: 22500,
      criteria: {
        metricType: "topSpeedKmh",
        targetValue: 3850,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_151",
      badgeTitle: "Night City Drifter Tier 10",
      category: "DRIFT",
      tier: "BRONZE",
      experienceReward: 37750,
      creditsReward: 22650,
      criteria: {
        metricType: "driftDistancePx",
        targetValue: 3875,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_152",
      badgeTitle: "Sector 7 Legend Tier 10",
      category: "COMBAT_SURVIVAL",
      tier: "PLATINUM",
      experienceReward: 38000,
      creditsReward: 22800,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 3900,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_153",
      badgeTitle: "High-Octane Pioneer Tier 10",
      category: "CIRCUIT_MASTERY",
      tier: "GOLD",
      experienceReward: 38250,
      creditsReward: 22950,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 3925,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_154",
      badgeTitle: "Chrome Plated Survivor Tier 10",
      category: "CREDIT_TYCOON",
      tier: "SILVER",
      experienceReward: 38500,
      creditsReward: 23100,
      criteria: {
        metricType: "totalCoinsCollected",
        targetValue: 3950,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_155",
      badgeTitle: "Cyber Grandmaster Tier 10",
      category: "SECTOR_EXPLORATION",
      tier: "BRONZE",
      experienceReward: 38750,
      creditsReward: 23250,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 3975,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_156",
      badgeTitle: "Clean Lines Specialist Tier 10",
      category: "SPEED",
      tier: "PLATINUM",
      experienceReward: 39000,
      creditsReward: 23400,
      criteria: {
        metricType: "topSpeedKmh",
        targetValue: 4000,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_157",
      badgeTitle: "Speed Demon Transcendence Tier 10",
      category: "DRIFT",
      tier: "GOLD",
      experienceReward: 39250,
      creditsReward: 23550,
      criteria: {
        metricType: "driftDistancePx",
        targetValue: 4025,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_158",
      badgeTitle: "Turbo Charge Maestro Tier 10",
      category: "COMBAT_SURVIVAL",
      tier: "SILVER",
      experienceReward: 39500,
      creditsReward: 23700,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 4050,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_159",
      badgeTitle: "Reactor Core Pilot Tier 10",
      category: "CIRCUIT_MASTERY",
      tier: "BRONZE",
      experienceReward: 39750,
      creditsReward: 23850,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 4075,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_160",
      badgeTitle: "Sonic Boom Initializer Tier 11",
      category: "CREDIT_TYCOON",
      tier: "PLATINUM",
      experienceReward: 40000,
      creditsReward: 24000,
      criteria: {
        metricType: "totalCoinsCollected",
        targetValue: 4100,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_161",
      badgeTitle: "Zero Scratch Master Tier 11",
      category: "SECTOR_EXPLORATION",
      tier: "GOLD",
      experienceReward: 40250,
      creditsReward: 24150,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 4125,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_162",
      badgeTitle: "Nitro Overcharge Fiend Tier 11",
      category: "SPEED",
      tier: "SILVER",
      experienceReward: 40500,
      creditsReward: 24300,
      criteria: {
        metricType: "topSpeedKmh",
        targetValue: 4150,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_163",
      badgeTitle: "Traffic Weaver Elite Tier 11",
      category: "DRIFT",
      tier: "BRONZE",
      experienceReward: 40750,
      creditsReward: 24450,
      criteria: {
        metricType: "driftDistancePx",
        targetValue: 4175,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_164",
      badgeTitle: "EMP Storm Defier Tier 11",
      category: "COMBAT_SURVIVAL",
      tier: "PLATINUM",
      experienceReward: 41000,
      creditsReward: 24600,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 4200,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_165",
      badgeTitle: "Credit Baron Supreme Tier 11",
      category: "CIRCUIT_MASTERY",
      tier: "GOLD",
      experienceReward: 41250,
      creditsReward: 24750,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 4225,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_166",
      badgeTitle: "Asphalt Kingpin Tier 11",
      category: "CREDIT_TYCOON",
      tier: "SILVER",
      experienceReward: 41500,
      creditsReward: 24900,
      criteria: {
        metricType: "totalCoinsCollected",
        targetValue: 4250,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_167",
      badgeTitle: "Night City Drifter Tier 11",
      category: "SECTOR_EXPLORATION",
      tier: "BRONZE",
      experienceReward: 41750,
      creditsReward: 25050,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 4275,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_168",
      badgeTitle: "Sector 7 Legend Tier 11",
      category: "SPEED",
      tier: "PLATINUM",
      experienceReward: 42000,
      creditsReward: 25200,
      criteria: {
        metricType: "topSpeedKmh",
        targetValue: 4300,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_169",
      badgeTitle: "High-Octane Pioneer Tier 11",
      category: "DRIFT",
      tier: "GOLD",
      experienceReward: 42250,
      creditsReward: 25350,
      criteria: {
        metricType: "driftDistancePx",
        targetValue: 4325,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_170",
      badgeTitle: "Chrome Plated Survivor Tier 11",
      category: "COMBAT_SURVIVAL",
      tier: "SILVER",
      experienceReward: 42500,
      creditsReward: 25500,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 4350,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_171",
      badgeTitle: "Cyber Grandmaster Tier 11",
      category: "CIRCUIT_MASTERY",
      tier: "BRONZE",
      experienceReward: 42750,
      creditsReward: 25650,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 4375,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_172",
      badgeTitle: "Clean Lines Specialist Tier 11",
      category: "CREDIT_TYCOON",
      tier: "PLATINUM",
      experienceReward: 43000,
      creditsReward: 25800,
      criteria: {
        metricType: "totalCoinsCollected",
        targetValue: 4400,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_173",
      badgeTitle: "Speed Demon Transcendence Tier 11",
      category: "SECTOR_EXPLORATION",
      tier: "GOLD",
      experienceReward: 43250,
      creditsReward: 25950,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 4425,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_174",
      badgeTitle: "Turbo Charge Maestro Tier 11",
      category: "SPEED",
      tier: "SILVER",
      experienceReward: 43500,
      creditsReward: 26100,
      criteria: {
        metricType: "topSpeedKmh",
        targetValue: 4450,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_175",
      badgeTitle: "Reactor Core Pilot Tier 11",
      category: "DRIFT",
      tier: "BRONZE",
      experienceReward: 43750,
      creditsReward: 26250,
      criteria: {
        metricType: "driftDistancePx",
        targetValue: 4475,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_176",
      badgeTitle: "Sonic Boom Initializer Tier 12",
      category: "COMBAT_SURVIVAL",
      tier: "PLATINUM",
      experienceReward: 44000,
      creditsReward: 26400,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 4500,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_177",
      badgeTitle: "Zero Scratch Master Tier 12",
      category: "CIRCUIT_MASTERY",
      tier: "GOLD",
      experienceReward: 44250,
      creditsReward: 26550,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 4525,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_178",
      badgeTitle: "Nitro Overcharge Fiend Tier 12",
      category: "CREDIT_TYCOON",
      tier: "SILVER",
      experienceReward: 44500,
      creditsReward: 26700,
      criteria: {
        metricType: "totalCoinsCollected",
        targetValue: 4550,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_179",
      badgeTitle: "Traffic Weaver Elite Tier 12",
      category: "SECTOR_EXPLORATION",
      tier: "BRONZE",
      experienceReward: 44750,
      creditsReward: 26850,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 4575,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_180",
      badgeTitle: "EMP Storm Defier Tier 12",
      category: "SPEED",
      tier: "PLATINUM",
      experienceReward: 45000,
      creditsReward: 27000,
      criteria: {
        metricType: "topSpeedKmh",
        targetValue: 4600,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_181",
      badgeTitle: "Credit Baron Supreme Tier 12",
      category: "DRIFT",
      tier: "GOLD",
      experienceReward: 45250,
      creditsReward: 27150,
      criteria: {
        metricType: "driftDistancePx",
        targetValue: 4625,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_182",
      badgeTitle: "Asphalt Kingpin Tier 12",
      category: "COMBAT_SURVIVAL",
      tier: "SILVER",
      experienceReward: 45500,
      creditsReward: 27300,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 4650,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_183",
      badgeTitle: "Night City Drifter Tier 12",
      category: "CIRCUIT_MASTERY",
      tier: "BRONZE",
      experienceReward: 45750,
      creditsReward: 27450,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 4675,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_184",
      badgeTitle: "Sector 7 Legend Tier 12",
      category: "CREDIT_TYCOON",
      tier: "PLATINUM",
      experienceReward: 46000,
      creditsReward: 27600,
      criteria: {
        metricType: "totalCoinsCollected",
        targetValue: 4700,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_185",
      badgeTitle: "High-Octane Pioneer Tier 12",
      category: "SECTOR_EXPLORATION",
      tier: "GOLD",
      experienceReward: 46250,
      creditsReward: 27750,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 4725,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_186",
      badgeTitle: "Chrome Plated Survivor Tier 12",
      category: "SPEED",
      tier: "SILVER",
      experienceReward: 46500,
      creditsReward: 27900,
      criteria: {
        metricType: "topSpeedKmh",
        targetValue: 4750,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_187",
      badgeTitle: "Cyber Grandmaster Tier 12",
      category: "DRIFT",
      tier: "BRONZE",
      experienceReward: 46750,
      creditsReward: 28050,
      criteria: {
        metricType: "driftDistancePx",
        targetValue: 4775,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_188",
      badgeTitle: "Clean Lines Specialist Tier 12",
      category: "COMBAT_SURVIVAL",
      tier: "PLATINUM",
      experienceReward: 47000,
      creditsReward: 28200,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 4800,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_189",
      badgeTitle: "Speed Demon Transcendence Tier 12",
      category: "CIRCUIT_MASTERY",
      tier: "GOLD",
      experienceReward: 47250,
      creditsReward: 28350,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 4825,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_190",
      badgeTitle: "Turbo Charge Maestro Tier 12",
      category: "CREDIT_TYCOON",
      tier: "SILVER",
      experienceReward: 47500,
      creditsReward: 28500,
      criteria: {
        metricType: "totalCoinsCollected",
        targetValue: 4850,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_191",
      badgeTitle: "Reactor Core Pilot Tier 12",
      category: "SECTOR_EXPLORATION",
      tier: "BRONZE",
      experienceReward: 47750,
      creditsReward: 28650,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 4875,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_192",
      badgeTitle: "Sonic Boom Initializer Tier 13",
      category: "SPEED",
      tier: "PLATINUM",
      experienceReward: 48000,
      creditsReward: 28800,
      criteria: {
        metricType: "topSpeedKmh",
        targetValue: 4900,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_193",
      badgeTitle: "Zero Scratch Master Tier 13",
      category: "DRIFT",
      tier: "GOLD",
      experienceReward: 48250,
      creditsReward: 28950,
      criteria: {
        metricType: "driftDistancePx",
        targetValue: 4925,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_194",
      badgeTitle: "Nitro Overcharge Fiend Tier 13",
      category: "COMBAT_SURVIVAL",
      tier: "SILVER",
      experienceReward: 48500,
      creditsReward: 29100,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 4950,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_195",
      badgeTitle: "Traffic Weaver Elite Tier 13",
      category: "CIRCUIT_MASTERY",
      tier: "BRONZE",
      experienceReward: 48750,
      creditsReward: 29250,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 4975,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_196",
      badgeTitle: "EMP Storm Defier Tier 13",
      category: "CREDIT_TYCOON",
      tier: "PLATINUM",
      experienceReward: 49000,
      creditsReward: 29400,
      criteria: {
        metricType: "totalCoinsCollected",
        targetValue: 5000,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_197",
      badgeTitle: "Credit Baron Supreme Tier 13",
      category: "SECTOR_EXPLORATION",
      tier: "GOLD",
      experienceReward: 49250,
      creditsReward: 29550,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 5025,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_198",
      badgeTitle: "Asphalt Kingpin Tier 13",
      category: "SPEED",
      tier: "SILVER",
      experienceReward: 49500,
      creditsReward: 29700,
      criteria: {
        metricType: "topSpeedKmh",
        targetValue: 5050,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_199",
      badgeTitle: "Night City Drifter Tier 13",
      category: "DRIFT",
      tier: "BRONZE",
      experienceReward: 49750,
      creditsReward: 29850,
      criteria: {
        metricType: "driftDistancePx",
        targetValue: 5075,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_200",
      badgeTitle: "Sector 7 Legend Tier 13",
      category: "COMBAT_SURVIVAL",
      tier: "PLATINUM",
      experienceReward: 50000,
      creditsReward: 30000,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 5100,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_201",
      badgeTitle: "High-Octane Pioneer Tier 13",
      category: "CIRCUIT_MASTERY",
      tier: "GOLD",
      experienceReward: 50250,
      creditsReward: 30150,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 5125,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_202",
      badgeTitle: "Chrome Plated Survivor Tier 13",
      category: "CREDIT_TYCOON",
      tier: "SILVER",
      experienceReward: 50500,
      creditsReward: 30300,
      criteria: {
        metricType: "totalCoinsCollected",
        targetValue: 5150,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_203",
      badgeTitle: "Cyber Grandmaster Tier 13",
      category: "SECTOR_EXPLORATION",
      tier: "BRONZE",
      experienceReward: 50750,
      creditsReward: 30450,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 5175,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_204",
      badgeTitle: "Clean Lines Specialist Tier 13",
      category: "SPEED",
      tier: "PLATINUM",
      experienceReward: 51000,
      creditsReward: 30600,
      criteria: {
        metricType: "topSpeedKmh",
        targetValue: 5200,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_205",
      badgeTitle: "Speed Demon Transcendence Tier 13",
      category: "DRIFT",
      tier: "GOLD",
      experienceReward: 51250,
      creditsReward: 30750,
      criteria: {
        metricType: "driftDistancePx",
        targetValue: 5225,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_206",
      badgeTitle: "Turbo Charge Maestro Tier 13",
      category: "COMBAT_SURVIVAL",
      tier: "SILVER",
      experienceReward: 51500,
      creditsReward: 30900,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 5250,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_207",
      badgeTitle: "Reactor Core Pilot Tier 13",
      category: "CIRCUIT_MASTERY",
      tier: "BRONZE",
      experienceReward: 51750,
      creditsReward: 31050,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 5275,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_208",
      badgeTitle: "Sonic Boom Initializer Tier 14",
      category: "CREDIT_TYCOON",
      tier: "PLATINUM",
      experienceReward: 52000,
      creditsReward: 31200,
      criteria: {
        metricType: "totalCoinsCollected",
        targetValue: 5300,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_209",
      badgeTitle: "Zero Scratch Master Tier 14",
      category: "SECTOR_EXPLORATION",
      tier: "GOLD",
      experienceReward: 52250,
      creditsReward: 31350,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 5325,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_210",
      badgeTitle: "Nitro Overcharge Fiend Tier 14",
      category: "SPEED",
      tier: "SILVER",
      experienceReward: 52500,
      creditsReward: 31500,
      criteria: {
        metricType: "topSpeedKmh",
        targetValue: 5350,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_211",
      badgeTitle: "Traffic Weaver Elite Tier 14",
      category: "DRIFT",
      tier: "BRONZE",
      experienceReward: 52750,
      creditsReward: 31650,
      criteria: {
        metricType: "driftDistancePx",
        targetValue: 5375,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_212",
      badgeTitle: "EMP Storm Defier Tier 14",
      category: "COMBAT_SURVIVAL",
      tier: "PLATINUM",
      experienceReward: 53000,
      creditsReward: 31800,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 5400,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_213",
      badgeTitle: "Credit Baron Supreme Tier 14",
      category: "CIRCUIT_MASTERY",
      tier: "GOLD",
      experienceReward: 53250,
      creditsReward: 31950,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 5425,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_214",
      badgeTitle: "Asphalt Kingpin Tier 14",
      category: "CREDIT_TYCOON",
      tier: "SILVER",
      experienceReward: 53500,
      creditsReward: 32100,
      criteria: {
        metricType: "totalCoinsCollected",
        targetValue: 5450,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_215",
      badgeTitle: "Night City Drifter Tier 14",
      category: "SECTOR_EXPLORATION",
      tier: "BRONZE",
      experienceReward: 53750,
      creditsReward: 32250,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 5475,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_216",
      badgeTitle: "Sector 7 Legend Tier 14",
      category: "SPEED",
      tier: "PLATINUM",
      experienceReward: 54000,
      creditsReward: 32400,
      criteria: {
        metricType: "topSpeedKmh",
        targetValue: 5500,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_217",
      badgeTitle: "High-Octane Pioneer Tier 14",
      category: "DRIFT",
      tier: "GOLD",
      experienceReward: 54250,
      creditsReward: 32550,
      criteria: {
        metricType: "driftDistancePx",
        targetValue: 5525,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_218",
      badgeTitle: "Chrome Plated Survivor Tier 14",
      category: "COMBAT_SURVIVAL",
      tier: "SILVER",
      experienceReward: 54500,
      creditsReward: 32700,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 5550,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_219",
      badgeTitle: "Cyber Grandmaster Tier 14",
      category: "CIRCUIT_MASTERY",
      tier: "BRONZE",
      experienceReward: 54750,
      creditsReward: 32850,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 5575,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_220",
      badgeTitle: "Clean Lines Specialist Tier 14",
      category: "CREDIT_TYCOON",
      tier: "PLATINUM",
      experienceReward: 55000,
      creditsReward: 33000,
      criteria: {
        metricType: "totalCoinsCollected",
        targetValue: 5600,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_221",
      badgeTitle: "Speed Demon Transcendence Tier 14",
      category: "SECTOR_EXPLORATION",
      tier: "GOLD",
      experienceReward: 55250,
      creditsReward: 33150,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 5625,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_222",
      badgeTitle: "Turbo Charge Maestro Tier 14",
      category: "SPEED",
      tier: "SILVER",
      experienceReward: 55500,
      creditsReward: 33300,
      criteria: {
        metricType: "topSpeedKmh",
        targetValue: 5650,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_223",
      badgeTitle: "Reactor Core Pilot Tier 14",
      category: "DRIFT",
      tier: "BRONZE",
      experienceReward: 55750,
      creditsReward: 33450,
      criteria: {
        metricType: "driftDistancePx",
        targetValue: 5675,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_224",
      badgeTitle: "Sonic Boom Initializer Tier 15",
      category: "COMBAT_SURVIVAL",
      tier: "PLATINUM",
      experienceReward: 56000,
      creditsReward: 33600,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 5700,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_225",
      badgeTitle: "Zero Scratch Master Tier 15",
      category: "CIRCUIT_MASTERY",
      tier: "GOLD",
      experienceReward: 56250,
      creditsReward: 33750,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 5725,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_226",
      badgeTitle: "Nitro Overcharge Fiend Tier 15",
      category: "CREDIT_TYCOON",
      tier: "SILVER",
      experienceReward: 56500,
      creditsReward: 33900,
      criteria: {
        metricType: "totalCoinsCollected",
        targetValue: 5750,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_227",
      badgeTitle: "Traffic Weaver Elite Tier 15",
      category: "SECTOR_EXPLORATION",
      tier: "BRONZE",
      experienceReward: 56750,
      creditsReward: 34050,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 5775,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_228",
      badgeTitle: "EMP Storm Defier Tier 15",
      category: "SPEED",
      tier: "PLATINUM",
      experienceReward: 57000,
      creditsReward: 34200,
      criteria: {
        metricType: "topSpeedKmh",
        targetValue: 5800,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_229",
      badgeTitle: "Credit Baron Supreme Tier 15",
      category: "DRIFT",
      tier: "GOLD",
      experienceReward: 57250,
      creditsReward: 34350,
      criteria: {
        metricType: "driftDistancePx",
        targetValue: 5825,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_230",
      badgeTitle: "Asphalt Kingpin Tier 15",
      category: "COMBAT_SURVIVAL",
      tier: "SILVER",
      experienceReward: 57500,
      creditsReward: 34500,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 5850,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_231",
      badgeTitle: "Night City Drifter Tier 15",
      category: "CIRCUIT_MASTERY",
      tier: "BRONZE",
      experienceReward: 57750,
      creditsReward: 34650,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 5875,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_232",
      badgeTitle: "Sector 7 Legend Tier 15",
      category: "CREDIT_TYCOON",
      tier: "PLATINUM",
      experienceReward: 58000,
      creditsReward: 34800,
      criteria: {
        metricType: "totalCoinsCollected",
        targetValue: 5900,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_233",
      badgeTitle: "High-Octane Pioneer Tier 15",
      category: "SECTOR_EXPLORATION",
      tier: "GOLD",
      experienceReward: 58250,
      creditsReward: 34950,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 5925,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_234",
      badgeTitle: "Chrome Plated Survivor Tier 15",
      category: "SPEED",
      tier: "SILVER",
      experienceReward: 58500,
      creditsReward: 35100,
      criteria: {
        metricType: "topSpeedKmh",
        targetValue: 5950,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_235",
      badgeTitle: "Cyber Grandmaster Tier 15",
      category: "DRIFT",
      tier: "BRONZE",
      experienceReward: 58750,
      creditsReward: 35250,
      criteria: {
        metricType: "driftDistancePx",
        targetValue: 5975,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_236",
      badgeTitle: "Clean Lines Specialist Tier 15",
      category: "COMBAT_SURVIVAL",
      tier: "PLATINUM",
      experienceReward: 59000,
      creditsReward: 35400,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 6000,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_237",
      badgeTitle: "Speed Demon Transcendence Tier 15",
      category: "CIRCUIT_MASTERY",
      tier: "GOLD",
      experienceReward: 59250,
      creditsReward: 35550,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 6025,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_238",
      badgeTitle: "Turbo Charge Maestro Tier 15",
      category: "CREDIT_TYCOON",
      tier: "SILVER",
      experienceReward: 59500,
      creditsReward: 35700,
      criteria: {
        metricType: "totalCoinsCollected",
        targetValue: 6050,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_239",
      badgeTitle: "Reactor Core Pilot Tier 15",
      category: "SECTOR_EXPLORATION",
      tier: "BRONZE",
      experienceReward: 59750,
      creditsReward: 35850,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 6075,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_240",
      badgeTitle: "Sonic Boom Initializer Tier 16",
      category: "SPEED",
      tier: "PLATINUM",
      experienceReward: 60000,
      creditsReward: 36000,
      criteria: {
        metricType: "topSpeedKmh",
        targetValue: 6100,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_241",
      badgeTitle: "Zero Scratch Master Tier 16",
      category: "DRIFT",
      tier: "GOLD",
      experienceReward: 60250,
      creditsReward: 36150,
      criteria: {
        metricType: "driftDistancePx",
        targetValue: 6125,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_242",
      badgeTitle: "Nitro Overcharge Fiend Tier 16",
      category: "COMBAT_SURVIVAL",
      tier: "SILVER",
      experienceReward: 60500,
      creditsReward: 36300,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 6150,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_243",
      badgeTitle: "Traffic Weaver Elite Tier 16",
      category: "CIRCUIT_MASTERY",
      tier: "BRONZE",
      experienceReward: 60750,
      creditsReward: 36450,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 6175,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_244",
      badgeTitle: "EMP Storm Defier Tier 16",
      category: "CREDIT_TYCOON",
      tier: "PLATINUM",
      experienceReward: 61000,
      creditsReward: 36600,
      criteria: {
        metricType: "totalCoinsCollected",
        targetValue: 6200,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_245",
      badgeTitle: "Credit Baron Supreme Tier 16",
      category: "SECTOR_EXPLORATION",
      tier: "GOLD",
      experienceReward: 61250,
      creditsReward: 36750,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 6225,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_246",
      badgeTitle: "Asphalt Kingpin Tier 16",
      category: "SPEED",
      tier: "SILVER",
      experienceReward: 61500,
      creditsReward: 36900,
      criteria: {
        metricType: "topSpeedKmh",
        targetValue: 6250,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_247",
      badgeTitle: "Night City Drifter Tier 16",
      category: "DRIFT",
      tier: "BRONZE",
      experienceReward: 61750,
      creditsReward: 37050,
      criteria: {
        metricType: "driftDistancePx",
        targetValue: 6275,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_248",
      badgeTitle: "Sector 7 Legend Tier 16",
      category: "COMBAT_SURVIVAL",
      tier: "PLATINUM",
      experienceReward: 62000,
      creditsReward: 37200,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 6300,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_249",
      badgeTitle: "High-Octane Pioneer Tier 16",
      category: "CIRCUIT_MASTERY",
      tier: "GOLD",
      experienceReward: 62250,
      creditsReward: 37350,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 6325,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_250",
      badgeTitle: "Chrome Plated Survivor Tier 16",
      category: "CREDIT_TYCOON",
      tier: "SILVER",
      experienceReward: 62500,
      creditsReward: 37500,
      criteria: {
        metricType: "totalCoinsCollected",
        targetValue: 6350,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_251",
      badgeTitle: "Cyber Grandmaster Tier 16",
      category: "SECTOR_EXPLORATION",
      tier: "BRONZE",
      experienceReward: 62750,
      creditsReward: 37650,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 6375,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_252",
      badgeTitle: "Clean Lines Specialist Tier 16",
      category: "SPEED",
      tier: "PLATINUM",
      experienceReward: 63000,
      creditsReward: 37800,
      criteria: {
        metricType: "topSpeedKmh",
        targetValue: 6400,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_253",
      badgeTitle: "Speed Demon Transcendence Tier 16",
      category: "DRIFT",
      tier: "GOLD",
      experienceReward: 63250,
      creditsReward: 37950,
      criteria: {
        metricType: "driftDistancePx",
        targetValue: 6425,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_254",
      badgeTitle: "Turbo Charge Maestro Tier 16",
      category: "COMBAT_SURVIVAL",
      tier: "SILVER",
      experienceReward: 63500,
      creditsReward: 38100,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 6450,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_255",
      badgeTitle: "Reactor Core Pilot Tier 16",
      category: "CIRCUIT_MASTERY",
      tier: "BRONZE",
      experienceReward: 63750,
      creditsReward: 38250,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 6475,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_256",
      badgeTitle: "Sonic Boom Initializer Tier 17",
      category: "CREDIT_TYCOON",
      tier: "PLATINUM",
      experienceReward: 64000,
      creditsReward: 38400,
      criteria: {
        metricType: "totalCoinsCollected",
        targetValue: 6500,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_257",
      badgeTitle: "Zero Scratch Master Tier 17",
      category: "SECTOR_EXPLORATION",
      tier: "GOLD",
      experienceReward: 64250,
      creditsReward: 38550,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 6525,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_258",
      badgeTitle: "Nitro Overcharge Fiend Tier 17",
      category: "SPEED",
      tier: "SILVER",
      experienceReward: 64500,
      creditsReward: 38700,
      criteria: {
        metricType: "topSpeedKmh",
        targetValue: 6550,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_259",
      badgeTitle: "Traffic Weaver Elite Tier 17",
      category: "DRIFT",
      tier: "BRONZE",
      experienceReward: 64750,
      creditsReward: 38850,
      criteria: {
        metricType: "driftDistancePx",
        targetValue: 6575,
        modeRequirement: "endless"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
    {
      id: "ACH_260",
      badgeTitle: "EMP Storm Defier Tier 17",
      category: "COMBAT_SURVIVAL",
      tier: "PLATINUM",
      experienceReward: 65000,
      creditsReward: 39000,
      criteria: {
        metricType: "cleanLapsCount",
        targetValue: 6600,
        modeRequirement: "circuit"
      },
      loreDescription: "Awarded to pilots demonstrating exceptional nerve and reflexes in the high-stakes illegal circuits of Neo-Veridia."
    },
  ]
};
