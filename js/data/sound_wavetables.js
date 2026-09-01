/**
 * ============================================================================
 * CYBERPUNK RACER // PROCEDURAL SYNTHESIS WAVETABLES & HARMONICS
 * Musical frequency lookup tables, FM modulation indices, scale presets,
 * and envelope curves for pure procedural Web Audio sound synthesis.
 * ============================================================================
 */

window.CyberpunkSoundWavetables = {
  engineHarmonicProfiles: [
    {
      profileId: "ENG-HARM-001",
      engineType: "Plasma Core Rotary",
      baseFrequencyHz: 41,
      maxFrequencyHz: 221,
      harmonicWeights: [
        1.0000, 0.6480, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 3.0,
      resonanceQ: 2.00
    },
    {
      profileId: "ENG-HARM-002",
      engineType: "Quad-Flux Inductor",
      baseFrequencyHz: 42,
      maxFrequencyHz: 222,
      harmonicWeights: [
        1.0000, 0.6460, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 4.0,
      resonanceQ: 2.50
    },
    {
      profileId: "ENG-HARM-003",
      engineType: "V8 Twin-Turbine",
      baseFrequencyHz: 43,
      maxFrequencyHz: 223,
      harmonicWeights: [
        1.0000, 0.6440, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 5.0,
      resonanceQ: 3.00
    },
    {
      profileId: "ENG-HARM-004",
      engineType: "Plasma Core Rotary",
      baseFrequencyHz: 44,
      maxFrequencyHz: 224,
      harmonicWeights: [
        1.0000, 0.6420, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 6.0,
      resonanceQ: 1.50
    },
    {
      profileId: "ENG-HARM-005",
      engineType: "Quad-Flux Inductor",
      baseFrequencyHz: 45,
      maxFrequencyHz: 225,
      harmonicWeights: [
        1.0000, 0.6400, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 7.0,
      resonanceQ: 2.00
    },
    {
      profileId: "ENG-HARM-006",
      engineType: "V8 Twin-Turbine",
      baseFrequencyHz: 46,
      maxFrequencyHz: 226,
      harmonicWeights: [
        1.0000, 0.6380, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 2.0,
      resonanceQ: 2.50
    },
    {
      profileId: "ENG-HARM-007",
      engineType: "Plasma Core Rotary",
      baseFrequencyHz: 47,
      maxFrequencyHz: 227,
      harmonicWeights: [
        1.0000, 0.6360, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 3.0,
      resonanceQ: 3.00
    },
    {
      profileId: "ENG-HARM-008",
      engineType: "Quad-Flux Inductor",
      baseFrequencyHz: 48,
      maxFrequencyHz: 228,
      harmonicWeights: [
        1.0000, 0.6340, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 4.0,
      resonanceQ: 1.50
    },
    {
      profileId: "ENG-HARM-009",
      engineType: "V8 Twin-Turbine",
      baseFrequencyHz: 49,
      maxFrequencyHz: 229,
      harmonicWeights: [
        1.0000, 0.6320, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 5.0,
      resonanceQ: 2.00
    },
    {
      profileId: "ENG-HARM-010",
      engineType: "Plasma Core Rotary",
      baseFrequencyHz: 50,
      maxFrequencyHz: 230,
      harmonicWeights: [
        1.0000, 0.6300, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 6.0,
      resonanceQ: 2.50
    },
    {
      profileId: "ENG-HARM-011",
      engineType: "Quad-Flux Inductor",
      baseFrequencyHz: 51,
      maxFrequencyHz: 231,
      harmonicWeights: [
        1.0000, 0.6280, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 7.0,
      resonanceQ: 3.00
    },
    {
      profileId: "ENG-HARM-012",
      engineType: "V8 Twin-Turbine",
      baseFrequencyHz: 52,
      maxFrequencyHz: 232,
      harmonicWeights: [
        1.0000, 0.6260, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 2.0,
      resonanceQ: 1.50
    },
    {
      profileId: "ENG-HARM-013",
      engineType: "Plasma Core Rotary",
      baseFrequencyHz: 53,
      maxFrequencyHz: 233,
      harmonicWeights: [
        1.0000, 0.6240, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 3.0,
      resonanceQ: 2.00
    },
    {
      profileId: "ENG-HARM-014",
      engineType: "Quad-Flux Inductor",
      baseFrequencyHz: 54,
      maxFrequencyHz: 234,
      harmonicWeights: [
        1.0000, 0.6220, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 4.0,
      resonanceQ: 2.50
    },
    {
      profileId: "ENG-HARM-015",
      engineType: "V8 Twin-Turbine",
      baseFrequencyHz: 55,
      maxFrequencyHz: 235,
      harmonicWeights: [
        1.0000, 0.6200, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 5.0,
      resonanceQ: 3.00
    },
    {
      profileId: "ENG-HARM-016",
      engineType: "Plasma Core Rotary",
      baseFrequencyHz: 56,
      maxFrequencyHz: 236,
      harmonicWeights: [
        1.0000, 0.6180, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 6.0,
      resonanceQ: 1.50
    },
    {
      profileId: "ENG-HARM-017",
      engineType: "Quad-Flux Inductor",
      baseFrequencyHz: 57,
      maxFrequencyHz: 237,
      harmonicWeights: [
        1.0000, 0.6160, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 7.0,
      resonanceQ: 2.00
    },
    {
      profileId: "ENG-HARM-018",
      engineType: "V8 Twin-Turbine",
      baseFrequencyHz: 58,
      maxFrequencyHz: 238,
      harmonicWeights: [
        1.0000, 0.6140, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 2.0,
      resonanceQ: 2.50
    },
    {
      profileId: "ENG-HARM-019",
      engineType: "Plasma Core Rotary",
      baseFrequencyHz: 59,
      maxFrequencyHz: 239,
      harmonicWeights: [
        1.0000, 0.6120, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 3.0,
      resonanceQ: 3.00
    },
    {
      profileId: "ENG-HARM-020",
      engineType: "Quad-Flux Inductor",
      baseFrequencyHz: 60,
      maxFrequencyHz: 240,
      harmonicWeights: [
        1.0000, 0.6100, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 4.0,
      resonanceQ: 1.50
    },
    {
      profileId: "ENG-HARM-021",
      engineType: "V8 Twin-Turbine",
      baseFrequencyHz: 61,
      maxFrequencyHz: 241,
      harmonicWeights: [
        1.0000, 0.6080, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 5.0,
      resonanceQ: 2.00
    },
    {
      profileId: "ENG-HARM-022",
      engineType: "Plasma Core Rotary",
      baseFrequencyHz: 62,
      maxFrequencyHz: 242,
      harmonicWeights: [
        1.0000, 0.6060, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 6.0,
      resonanceQ: 2.50
    },
    {
      profileId: "ENG-HARM-023",
      engineType: "Quad-Flux Inductor",
      baseFrequencyHz: 63,
      maxFrequencyHz: 243,
      harmonicWeights: [
        1.0000, 0.6040, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 7.0,
      resonanceQ: 3.00
    },
    {
      profileId: "ENG-HARM-024",
      engineType: "V8 Twin-Turbine",
      baseFrequencyHz: 64,
      maxFrequencyHz: 244,
      harmonicWeights: [
        1.0000, 0.6020, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 2.0,
      resonanceQ: 1.50
    },
    {
      profileId: "ENG-HARM-025",
      engineType: "Plasma Core Rotary",
      baseFrequencyHz: 40,
      maxFrequencyHz: 245,
      harmonicWeights: [
        1.0000, 0.6000, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 3.0,
      resonanceQ: 2.00
    },
    {
      profileId: "ENG-HARM-026",
      engineType: "Quad-Flux Inductor",
      baseFrequencyHz: 41,
      maxFrequencyHz: 246,
      harmonicWeights: [
        1.0000, 0.5980, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 4.0,
      resonanceQ: 2.50
    },
    {
      profileId: "ENG-HARM-027",
      engineType: "V8 Twin-Turbine",
      baseFrequencyHz: 42,
      maxFrequencyHz: 247,
      harmonicWeights: [
        1.0000, 0.5960, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 5.0,
      resonanceQ: 3.00
    },
    {
      profileId: "ENG-HARM-028",
      engineType: "Plasma Core Rotary",
      baseFrequencyHz: 43,
      maxFrequencyHz: 248,
      harmonicWeights: [
        1.0000, 0.5940, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 6.0,
      resonanceQ: 1.50
    },
    {
      profileId: "ENG-HARM-029",
      engineType: "Quad-Flux Inductor",
      baseFrequencyHz: 44,
      maxFrequencyHz: 249,
      harmonicWeights: [
        1.0000, 0.5920, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 7.0,
      resonanceQ: 2.00
    },
    {
      profileId: "ENG-HARM-030",
      engineType: "V8 Twin-Turbine",
      baseFrequencyHz: 45,
      maxFrequencyHz: 250,
      harmonicWeights: [
        1.0000, 0.5900, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 2.0,
      resonanceQ: 2.50
    },
    {
      profileId: "ENG-HARM-031",
      engineType: "Plasma Core Rotary",
      baseFrequencyHz: 46,
      maxFrequencyHz: 251,
      harmonicWeights: [
        1.0000, 0.5880, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 3.0,
      resonanceQ: 3.00
    },
    {
      profileId: "ENG-HARM-032",
      engineType: "Quad-Flux Inductor",
      baseFrequencyHz: 47,
      maxFrequencyHz: 252,
      harmonicWeights: [
        1.0000, 0.5860, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 4.0,
      resonanceQ: 1.50
    },
    {
      profileId: "ENG-HARM-033",
      engineType: "V8 Twin-Turbine",
      baseFrequencyHz: 48,
      maxFrequencyHz: 253,
      harmonicWeights: [
        1.0000, 0.5840, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 5.0,
      resonanceQ: 2.00
    },
    {
      profileId: "ENG-HARM-034",
      engineType: "Plasma Core Rotary",
      baseFrequencyHz: 49,
      maxFrequencyHz: 254,
      harmonicWeights: [
        1.0000, 0.5820, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 6.0,
      resonanceQ: 2.50
    },
    {
      profileId: "ENG-HARM-035",
      engineType: "Quad-Flux Inductor",
      baseFrequencyHz: 50,
      maxFrequencyHz: 255,
      harmonicWeights: [
        1.0000, 0.5800, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 7.0,
      resonanceQ: 3.00
    },
    {
      profileId: "ENG-HARM-036",
      engineType: "V8 Twin-Turbine",
      baseFrequencyHz: 51,
      maxFrequencyHz: 256,
      harmonicWeights: [
        1.0000, 0.5780, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 2.0,
      resonanceQ: 1.50
    },
    {
      profileId: "ENG-HARM-037",
      engineType: "Plasma Core Rotary",
      baseFrequencyHz: 52,
      maxFrequencyHz: 257,
      harmonicWeights: [
        1.0000, 0.5760, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 3.0,
      resonanceQ: 2.00
    },
    {
      profileId: "ENG-HARM-038",
      engineType: "Quad-Flux Inductor",
      baseFrequencyHz: 53,
      maxFrequencyHz: 258,
      harmonicWeights: [
        1.0000, 0.5740, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 4.0,
      resonanceQ: 2.50
    },
    {
      profileId: "ENG-HARM-039",
      engineType: "V8 Twin-Turbine",
      baseFrequencyHz: 54,
      maxFrequencyHz: 259,
      harmonicWeights: [
        1.0000, 0.5720, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 5.0,
      resonanceQ: 3.00
    },
    {
      profileId: "ENG-HARM-040",
      engineType: "Plasma Core Rotary",
      baseFrequencyHz: 55,
      maxFrequencyHz: 260,
      harmonicWeights: [
        1.0000, 0.5700, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 6.0,
      resonanceQ: 1.50
    },
    {
      profileId: "ENG-HARM-041",
      engineType: "Quad-Flux Inductor",
      baseFrequencyHz: 56,
      maxFrequencyHz: 261,
      harmonicWeights: [
        1.0000, 0.5680, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 7.0,
      resonanceQ: 2.00
    },
    {
      profileId: "ENG-HARM-042",
      engineType: "V8 Twin-Turbine",
      baseFrequencyHz: 57,
      maxFrequencyHz: 262,
      harmonicWeights: [
        1.0000, 0.5660, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 2.0,
      resonanceQ: 2.50
    },
    {
      profileId: "ENG-HARM-043",
      engineType: "Plasma Core Rotary",
      baseFrequencyHz: 58,
      maxFrequencyHz: 263,
      harmonicWeights: [
        1.0000, 0.5640, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 3.0,
      resonanceQ: 3.00
    },
    {
      profileId: "ENG-HARM-044",
      engineType: "Quad-Flux Inductor",
      baseFrequencyHz: 59,
      maxFrequencyHz: 264,
      harmonicWeights: [
        1.0000, 0.5620, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 4.0,
      resonanceQ: 1.50
    },
    {
      profileId: "ENG-HARM-045",
      engineType: "V8 Twin-Turbine",
      baseFrequencyHz: 60,
      maxFrequencyHz: 265,
      harmonicWeights: [
        1.0000, 0.5600, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 5.0,
      resonanceQ: 2.00
    },
    {
      profileId: "ENG-HARM-046",
      engineType: "Plasma Core Rotary",
      baseFrequencyHz: 61,
      maxFrequencyHz: 266,
      harmonicWeights: [
        1.0000, 0.5580, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 6.0,
      resonanceQ: 2.50
    },
    {
      profileId: "ENG-HARM-047",
      engineType: "Quad-Flux Inductor",
      baseFrequencyHz: 62,
      maxFrequencyHz: 267,
      harmonicWeights: [
        1.0000, 0.5560, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 7.0,
      resonanceQ: 3.00
    },
    {
      profileId: "ENG-HARM-048",
      engineType: "V8 Twin-Turbine",
      baseFrequencyHz: 63,
      maxFrequencyHz: 268,
      harmonicWeights: [
        1.0000, 0.5540, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 2.0,
      resonanceQ: 1.50
    },
    {
      profileId: "ENG-HARM-049",
      engineType: "Plasma Core Rotary",
      baseFrequencyHz: 64,
      maxFrequencyHz: 269,
      harmonicWeights: [
        1.0000, 0.5520, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 3.0,
      resonanceQ: 2.00
    },
    {
      profileId: "ENG-HARM-050",
      engineType: "Quad-Flux Inductor",
      baseFrequencyHz: 40,
      maxFrequencyHz: 270,
      harmonicWeights: [
        1.0000, 0.5500, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 4.0,
      resonanceQ: 2.50
    },
    {
      profileId: "ENG-HARM-051",
      engineType: "V8 Twin-Turbine",
      baseFrequencyHz: 41,
      maxFrequencyHz: 271,
      harmonicWeights: [
        1.0000, 0.5480, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 5.0,
      resonanceQ: 3.00
    },
    {
      profileId: "ENG-HARM-052",
      engineType: "Plasma Core Rotary",
      baseFrequencyHz: 42,
      maxFrequencyHz: 272,
      harmonicWeights: [
        1.0000, 0.5460, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 6.0,
      resonanceQ: 1.50
    },
    {
      profileId: "ENG-HARM-053",
      engineType: "Quad-Flux Inductor",
      baseFrequencyHz: 43,
      maxFrequencyHz: 273,
      harmonicWeights: [
        1.0000, 0.5440, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 7.0,
      resonanceQ: 2.00
    },
    {
      profileId: "ENG-HARM-054",
      engineType: "V8 Twin-Turbine",
      baseFrequencyHz: 44,
      maxFrequencyHz: 274,
      harmonicWeights: [
        1.0000, 0.5420, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 2.0,
      resonanceQ: 2.50
    },
    {
      profileId: "ENG-HARM-055",
      engineType: "Plasma Core Rotary",
      baseFrequencyHz: 45,
      maxFrequencyHz: 275,
      harmonicWeights: [
        1.0000, 0.5400, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 3.0,
      resonanceQ: 3.00
    },
    {
      profileId: "ENG-HARM-056",
      engineType: "Quad-Flux Inductor",
      baseFrequencyHz: 46,
      maxFrequencyHz: 276,
      harmonicWeights: [
        1.0000, 0.5380, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 4.0,
      resonanceQ: 1.50
    },
    {
      profileId: "ENG-HARM-057",
      engineType: "V8 Twin-Turbine",
      baseFrequencyHz: 47,
      maxFrequencyHz: 277,
      harmonicWeights: [
        1.0000, 0.5360, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 5.0,
      resonanceQ: 2.00
    },
    {
      profileId: "ENG-HARM-058",
      engineType: "Plasma Core Rotary",
      baseFrequencyHz: 48,
      maxFrequencyHz: 278,
      harmonicWeights: [
        1.0000, 0.5340, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 6.0,
      resonanceQ: 2.50
    },
    {
      profileId: "ENG-HARM-059",
      engineType: "Quad-Flux Inductor",
      baseFrequencyHz: 49,
      maxFrequencyHz: 279,
      harmonicWeights: [
        1.0000, 0.5320, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 7.0,
      resonanceQ: 3.00
    },
    {
      profileId: "ENG-HARM-060",
      engineType: "V8 Twin-Turbine",
      baseFrequencyHz: 50,
      maxFrequencyHz: 280,
      harmonicWeights: [
        1.0000, 0.5300, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 2.0,
      resonanceQ: 1.50
    },
    {
      profileId: "ENG-HARM-061",
      engineType: "Plasma Core Rotary",
      baseFrequencyHz: 51,
      maxFrequencyHz: 281,
      harmonicWeights: [
        1.0000, 0.5280, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 3.0,
      resonanceQ: 2.00
    },
    {
      profileId: "ENG-HARM-062",
      engineType: "Quad-Flux Inductor",
      baseFrequencyHz: 52,
      maxFrequencyHz: 282,
      harmonicWeights: [
        1.0000, 0.5260, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 4.0,
      resonanceQ: 2.50
    },
    {
      profileId: "ENG-HARM-063",
      engineType: "V8 Twin-Turbine",
      baseFrequencyHz: 53,
      maxFrequencyHz: 283,
      harmonicWeights: [
        1.0000, 0.5240, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 5.0,
      resonanceQ: 3.00
    },
    {
      profileId: "ENG-HARM-064",
      engineType: "Plasma Core Rotary",
      baseFrequencyHz: 54,
      maxFrequencyHz: 284,
      harmonicWeights: [
        1.0000, 0.5220, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 6.0,
      resonanceQ: 1.50
    },
    {
      profileId: "ENG-HARM-065",
      engineType: "Quad-Flux Inductor",
      baseFrequencyHz: 55,
      maxFrequencyHz: 285,
      harmonicWeights: [
        1.0000, 0.5200, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 7.0,
      resonanceQ: 2.00
    },
    {
      profileId: "ENG-HARM-066",
      engineType: "V8 Twin-Turbine",
      baseFrequencyHz: 56,
      maxFrequencyHz: 286,
      harmonicWeights: [
        1.0000, 0.5180, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 2.0,
      resonanceQ: 2.50
    },
    {
      profileId: "ENG-HARM-067",
      engineType: "Plasma Core Rotary",
      baseFrequencyHz: 57,
      maxFrequencyHz: 287,
      harmonicWeights: [
        1.0000, 0.5160, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 3.0,
      resonanceQ: 3.00
    },
    {
      profileId: "ENG-HARM-068",
      engineType: "Quad-Flux Inductor",
      baseFrequencyHz: 58,
      maxFrequencyHz: 288,
      harmonicWeights: [
        1.0000, 0.5140, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 4.0,
      resonanceQ: 1.50
    },
    {
      profileId: "ENG-HARM-069",
      engineType: "V8 Twin-Turbine",
      baseFrequencyHz: 59,
      maxFrequencyHz: 289,
      harmonicWeights: [
        1.0000, 0.5120, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 5.0,
      resonanceQ: 2.00
    },
    {
      profileId: "ENG-HARM-070",
      engineType: "Plasma Core Rotary",
      baseFrequencyHz: 60,
      maxFrequencyHz: 290,
      harmonicWeights: [
        1.0000, 0.5100, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 6.0,
      resonanceQ: 2.50
    },
    {
      profileId: "ENG-HARM-071",
      engineType: "Quad-Flux Inductor",
      baseFrequencyHz: 61,
      maxFrequencyHz: 291,
      harmonicWeights: [
        1.0000, 0.5080, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 7.0,
      resonanceQ: 3.00
    },
    {
      profileId: "ENG-HARM-072",
      engineType: "V8 Twin-Turbine",
      baseFrequencyHz: 62,
      maxFrequencyHz: 292,
      harmonicWeights: [
        1.0000, 0.5060, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 2.0,
      resonanceQ: 1.50
    },
    {
      profileId: "ENG-HARM-073",
      engineType: "Plasma Core Rotary",
      baseFrequencyHz: 63,
      maxFrequencyHz: 293,
      harmonicWeights: [
        1.0000, 0.5040, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 3.0,
      resonanceQ: 2.00
    },
    {
      profileId: "ENG-HARM-074",
      engineType: "Quad-Flux Inductor",
      baseFrequencyHz: 64,
      maxFrequencyHz: 294,
      harmonicWeights: [
        1.0000, 0.5020, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 4.0,
      resonanceQ: 2.50
    },
    {
      profileId: "ENG-HARM-075",
      engineType: "V8 Twin-Turbine",
      baseFrequencyHz: 40,
      maxFrequencyHz: 295,
      harmonicWeights: [
        1.0000, 0.5000, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 5.0,
      resonanceQ: 3.00
    },
    {
      profileId: "ENG-HARM-076",
      engineType: "Plasma Core Rotary",
      baseFrequencyHz: 41,
      maxFrequencyHz: 296,
      harmonicWeights: [
        1.0000, 0.4980, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 6.0,
      resonanceQ: 1.50
    },
    {
      profileId: "ENG-HARM-077",
      engineType: "Quad-Flux Inductor",
      baseFrequencyHz: 42,
      maxFrequencyHz: 297,
      harmonicWeights: [
        1.0000, 0.4960, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 7.0,
      resonanceQ: 2.00
    },
    {
      profileId: "ENG-HARM-078",
      engineType: "V8 Twin-Turbine",
      baseFrequencyHz: 43,
      maxFrequencyHz: 298,
      harmonicWeights: [
        1.0000, 0.4940, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 2.0,
      resonanceQ: 2.50
    },
    {
      profileId: "ENG-HARM-079",
      engineType: "Plasma Core Rotary",
      baseFrequencyHz: 44,
      maxFrequencyHz: 299,
      harmonicWeights: [
        1.0000, 0.4920, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 3.0,
      resonanceQ: 3.00
    },
    {
      profileId: "ENG-HARM-080",
      engineType: "Quad-Flux Inductor",
      baseFrequencyHz: 45,
      maxFrequencyHz: 300,
      harmonicWeights: [
        1.0000, 0.4900, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 4.0,
      resonanceQ: 1.50
    },
    {
      profileId: "ENG-HARM-081",
      engineType: "V8 Twin-Turbine",
      baseFrequencyHz: 46,
      maxFrequencyHz: 301,
      harmonicWeights: [
        1.0000, 0.4880, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 5.0,
      resonanceQ: 2.00
    },
    {
      profileId: "ENG-HARM-082",
      engineType: "Plasma Core Rotary",
      baseFrequencyHz: 47,
      maxFrequencyHz: 302,
      harmonicWeights: [
        1.0000, 0.4860, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 6.0,
      resonanceQ: 2.50
    },
    {
      profileId: "ENG-HARM-083",
      engineType: "Quad-Flux Inductor",
      baseFrequencyHz: 48,
      maxFrequencyHz: 303,
      harmonicWeights: [
        1.0000, 0.4840, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 7.0,
      resonanceQ: 3.00
    },
    {
      profileId: "ENG-HARM-084",
      engineType: "V8 Twin-Turbine",
      baseFrequencyHz: 49,
      maxFrequencyHz: 304,
      harmonicWeights: [
        1.0000, 0.4820, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 2.0,
      resonanceQ: 1.50
    },
    {
      profileId: "ENG-HARM-085",
      engineType: "Plasma Core Rotary",
      baseFrequencyHz: 50,
      maxFrequencyHz: 305,
      harmonicWeights: [
        1.0000, 0.4800, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 3.0,
      resonanceQ: 2.00
    },
    {
      profileId: "ENG-HARM-086",
      engineType: "Quad-Flux Inductor",
      baseFrequencyHz: 51,
      maxFrequencyHz: 306,
      harmonicWeights: [
        1.0000, 0.4780, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 4.0,
      resonanceQ: 2.50
    },
    {
      profileId: "ENG-HARM-087",
      engineType: "V8 Twin-Turbine",
      baseFrequencyHz: 52,
      maxFrequencyHz: 307,
      harmonicWeights: [
        1.0000, 0.4760, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 5.0,
      resonanceQ: 3.00
    },
    {
      profileId: "ENG-HARM-088",
      engineType: "Plasma Core Rotary",
      baseFrequencyHz: 53,
      maxFrequencyHz: 308,
      harmonicWeights: [
        1.0000, 0.4740, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 6.0,
      resonanceQ: 1.50
    },
    {
      profileId: "ENG-HARM-089",
      engineType: "Quad-Flux Inductor",
      baseFrequencyHz: 54,
      maxFrequencyHz: 309,
      harmonicWeights: [
        1.0000, 0.4720, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 7.0,
      resonanceQ: 2.00
    },
    {
      profileId: "ENG-HARM-090",
      engineType: "V8 Twin-Turbine",
      baseFrequencyHz: 55,
      maxFrequencyHz: 220,
      harmonicWeights: [
        1.0000, 0.4700, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 2.0,
      resonanceQ: 2.50
    },
    {
      profileId: "ENG-HARM-091",
      engineType: "Plasma Core Rotary",
      baseFrequencyHz: 56,
      maxFrequencyHz: 221,
      harmonicWeights: [
        1.0000, 0.4680, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 3.0,
      resonanceQ: 3.00
    },
    {
      profileId: "ENG-HARM-092",
      engineType: "Quad-Flux Inductor",
      baseFrequencyHz: 57,
      maxFrequencyHz: 222,
      harmonicWeights: [
        1.0000, 0.4660, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 4.0,
      resonanceQ: 1.50
    },
    {
      profileId: "ENG-HARM-093",
      engineType: "V8 Twin-Turbine",
      baseFrequencyHz: 58,
      maxFrequencyHz: 223,
      harmonicWeights: [
        1.0000, 0.4640, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 5.0,
      resonanceQ: 2.00
    },
    {
      profileId: "ENG-HARM-094",
      engineType: "Plasma Core Rotary",
      baseFrequencyHz: 59,
      maxFrequencyHz: 224,
      harmonicWeights: [
        1.0000, 0.4620, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 6.0,
      resonanceQ: 2.50
    },
    {
      profileId: "ENG-HARM-095",
      engineType: "Quad-Flux Inductor",
      baseFrequencyHz: 60,
      maxFrequencyHz: 225,
      harmonicWeights: [
        1.0000, 0.4600, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 7.0,
      resonanceQ: 3.00
    },
    {
      profileId: "ENG-HARM-096",
      engineType: "V8 Twin-Turbine",
      baseFrequencyHz: 61,
      maxFrequencyHz: 226,
      harmonicWeights: [
        1.0000, 0.4580, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 2.0,
      resonanceQ: 1.50
    },
    {
      profileId: "ENG-HARM-097",
      engineType: "Plasma Core Rotary",
      baseFrequencyHz: 62,
      maxFrequencyHz: 227,
      harmonicWeights: [
        1.0000, 0.4560, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 3.0,
      resonanceQ: 2.00
    },
    {
      profileId: "ENG-HARM-098",
      engineType: "Quad-Flux Inductor",
      baseFrequencyHz: 63,
      maxFrequencyHz: 228,
      harmonicWeights: [
        1.0000, 0.4540, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 4.0,
      resonanceQ: 2.50
    },
    {
      profileId: "ENG-HARM-099",
      engineType: "V8 Twin-Turbine",
      baseFrequencyHz: 64,
      maxFrequencyHz: 229,
      harmonicWeights: [
        1.0000, 0.4520, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 5.0,
      resonanceQ: 3.00
    },
    {
      profileId: "ENG-HARM-100",
      engineType: "Plasma Core Rotary",
      baseFrequencyHz: 40,
      maxFrequencyHz: 230,
      harmonicWeights: [
        1.0000, 0.4500, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 6.0,
      resonanceQ: 1.50
    },
    {
      profileId: "ENG-HARM-101",
      engineType: "Quad-Flux Inductor",
      baseFrequencyHz: 41,
      maxFrequencyHz: 231,
      harmonicWeights: [
        1.0000, 0.4480, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 7.0,
      resonanceQ: 2.00
    },
    {
      profileId: "ENG-HARM-102",
      engineType: "V8 Twin-Turbine",
      baseFrequencyHz: 42,
      maxFrequencyHz: 232,
      harmonicWeights: [
        1.0000, 0.4460, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 2.0,
      resonanceQ: 2.50
    },
    {
      profileId: "ENG-HARM-103",
      engineType: "Plasma Core Rotary",
      baseFrequencyHz: 43,
      maxFrequencyHz: 233,
      harmonicWeights: [
        1.0000, 0.4440, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 3.0,
      resonanceQ: 3.00
    },
    {
      profileId: "ENG-HARM-104",
      engineType: "Quad-Flux Inductor",
      baseFrequencyHz: 44,
      maxFrequencyHz: 234,
      harmonicWeights: [
        1.0000, 0.4420, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 4.0,
      resonanceQ: 1.50
    },
    {
      profileId: "ENG-HARM-105",
      engineType: "V8 Twin-Turbine",
      baseFrequencyHz: 45,
      maxFrequencyHz: 235,
      harmonicWeights: [
        1.0000, 0.4400, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 5.0,
      resonanceQ: 2.00
    },
    {
      profileId: "ENG-HARM-106",
      engineType: "Plasma Core Rotary",
      baseFrequencyHz: 46,
      maxFrequencyHz: 236,
      harmonicWeights: [
        1.0000, 0.4380, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 6.0,
      resonanceQ: 2.50
    },
    {
      profileId: "ENG-HARM-107",
      engineType: "Quad-Flux Inductor",
      baseFrequencyHz: 47,
      maxFrequencyHz: 237,
      harmonicWeights: [
        1.0000, 0.4360, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 7.0,
      resonanceQ: 3.00
    },
    {
      profileId: "ENG-HARM-108",
      engineType: "V8 Twin-Turbine",
      baseFrequencyHz: 48,
      maxFrequencyHz: 238,
      harmonicWeights: [
        1.0000, 0.4340, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 2.0,
      resonanceQ: 1.50
    },
    {
      profileId: "ENG-HARM-109",
      engineType: "Plasma Core Rotary",
      baseFrequencyHz: 49,
      maxFrequencyHz: 239,
      harmonicWeights: [
        1.0000, 0.4320, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 3.0,
      resonanceQ: 2.00
    },
    {
      profileId: "ENG-HARM-110",
      engineType: "Quad-Flux Inductor",
      baseFrequencyHz: 50,
      maxFrequencyHz: 240,
      harmonicWeights: [
        1.0000, 0.4300, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 4.0,
      resonanceQ: 2.50
    },
    {
      profileId: "ENG-HARM-111",
      engineType: "V8 Twin-Turbine",
      baseFrequencyHz: 51,
      maxFrequencyHz: 241,
      harmonicWeights: [
        1.0000, 0.4280, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 5.0,
      resonanceQ: 3.00
    },
    {
      profileId: "ENG-HARM-112",
      engineType: "Plasma Core Rotary",
      baseFrequencyHz: 52,
      maxFrequencyHz: 242,
      harmonicWeights: [
        1.0000, 0.4260, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 6.0,
      resonanceQ: 1.50
    },
    {
      profileId: "ENG-HARM-113",
      engineType: "Quad-Flux Inductor",
      baseFrequencyHz: 53,
      maxFrequencyHz: 243,
      harmonicWeights: [
        1.0000, 0.4240, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 7.0,
      resonanceQ: 2.00
    },
    {
      profileId: "ENG-HARM-114",
      engineType: "V8 Twin-Turbine",
      baseFrequencyHz: 54,
      maxFrequencyHz: 244,
      harmonicWeights: [
        1.0000, 0.4220, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 2.0,
      resonanceQ: 2.50
    },
    {
      profileId: "ENG-HARM-115",
      engineType: "Plasma Core Rotary",
      baseFrequencyHz: 55,
      maxFrequencyHz: 245,
      harmonicWeights: [
        1.0000, 0.4200, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 3.0,
      resonanceQ: 3.00
    },
    {
      profileId: "ENG-HARM-116",
      engineType: "Quad-Flux Inductor",
      baseFrequencyHz: 56,
      maxFrequencyHz: 246,
      harmonicWeights: [
        1.0000, 0.4180, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 4.0,
      resonanceQ: 1.50
    },
    {
      profileId: "ENG-HARM-117",
      engineType: "V8 Twin-Turbine",
      baseFrequencyHz: 57,
      maxFrequencyHz: 247,
      harmonicWeights: [
        1.0000, 0.4160, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 5.0,
      resonanceQ: 2.00
    },
    {
      profileId: "ENG-HARM-118",
      engineType: "Plasma Core Rotary",
      baseFrequencyHz: 58,
      maxFrequencyHz: 248,
      harmonicWeights: [
        1.0000, 0.4140, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 6.0,
      resonanceQ: 2.50
    },
    {
      profileId: "ENG-HARM-119",
      engineType: "Quad-Flux Inductor",
      baseFrequencyHz: 59,
      maxFrequencyHz: 249,
      harmonicWeights: [
        1.0000, 0.4120, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 7.0,
      resonanceQ: 3.00
    },
    {
      profileId: "ENG-HARM-120",
      engineType: "V8 Twin-Turbine",
      baseFrequencyHz: 60,
      maxFrequencyHz: 250,
      harmonicWeights: [
        1.0000, 0.4100, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 2.0,
      resonanceQ: 1.50
    },
    {
      profileId: "ENG-HARM-121",
      engineType: "Plasma Core Rotary",
      baseFrequencyHz: 61,
      maxFrequencyHz: 251,
      harmonicWeights: [
        1.0000, 0.4080, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 3.0,
      resonanceQ: 2.00
    },
    {
      profileId: "ENG-HARM-122",
      engineType: "Quad-Flux Inductor",
      baseFrequencyHz: 62,
      maxFrequencyHz: 252,
      harmonicWeights: [
        1.0000, 0.4060, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 4.0,
      resonanceQ: 2.50
    },
    {
      profileId: "ENG-HARM-123",
      engineType: "V8 Twin-Turbine",
      baseFrequencyHz: 63,
      maxFrequencyHz: 253,
      harmonicWeights: [
        1.0000, 0.4040, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 5.0,
      resonanceQ: 3.00
    },
    {
      profileId: "ENG-HARM-124",
      engineType: "Plasma Core Rotary",
      baseFrequencyHz: 64,
      maxFrequencyHz: 254,
      harmonicWeights: [
        1.0000, 0.4020, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 6.0,
      resonanceQ: 1.50
    },
    {
      profileId: "ENG-HARM-125",
      engineType: "Quad-Flux Inductor",
      baseFrequencyHz: 40,
      maxFrequencyHz: 255,
      harmonicWeights: [
        1.0000, 0.4000, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 7.0,
      resonanceQ: 2.00
    },
    {
      profileId: "ENG-HARM-126",
      engineType: "V8 Twin-Turbine",
      baseFrequencyHz: 41,
      maxFrequencyHz: 256,
      harmonicWeights: [
        1.0000, 0.3980, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 2.0,
      resonanceQ: 2.50
    },
    {
      profileId: "ENG-HARM-127",
      engineType: "Plasma Core Rotary",
      baseFrequencyHz: 42,
      maxFrequencyHz: 257,
      harmonicWeights: [
        1.0000, 0.3960, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 3.0,
      resonanceQ: 3.00
    },
    {
      profileId: "ENG-HARM-128",
      engineType: "Quad-Flux Inductor",
      baseFrequencyHz: 43,
      maxFrequencyHz: 258,
      harmonicWeights: [
        1.0000, 0.3940, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 4.0,
      resonanceQ: 1.50
    },
    {
      profileId: "ENG-HARM-129",
      engineType: "V8 Twin-Turbine",
      baseFrequencyHz: 44,
      maxFrequencyHz: 259,
      harmonicWeights: [
        1.0000, 0.3920, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 5.0,
      resonanceQ: 2.00
    },
    {
      profileId: "ENG-HARM-130",
      engineType: "Plasma Core Rotary",
      baseFrequencyHz: 45,
      maxFrequencyHz: 260,
      harmonicWeights: [
        1.0000, 0.3900, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 6.0,
      resonanceQ: 2.50
    },
    {
      profileId: "ENG-HARM-131",
      engineType: "Quad-Flux Inductor",
      baseFrequencyHz: 46,
      maxFrequencyHz: 261,
      harmonicWeights: [
        1.0000, 0.3880, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 7.0,
      resonanceQ: 3.00
    },
    {
      profileId: "ENG-HARM-132",
      engineType: "V8 Twin-Turbine",
      baseFrequencyHz: 47,
      maxFrequencyHz: 262,
      harmonicWeights: [
        1.0000, 0.3860, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 2.0,
      resonanceQ: 1.50
    },
    {
      profileId: "ENG-HARM-133",
      engineType: "Plasma Core Rotary",
      baseFrequencyHz: 48,
      maxFrequencyHz: 263,
      harmonicWeights: [
        1.0000, 0.3840, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 3.0,
      resonanceQ: 2.00
    },
    {
      profileId: "ENG-HARM-134",
      engineType: "Quad-Flux Inductor",
      baseFrequencyHz: 49,
      maxFrequencyHz: 264,
      harmonicWeights: [
        1.0000, 0.3820, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 4.0,
      resonanceQ: 2.50
    },
    {
      profileId: "ENG-HARM-135",
      engineType: "V8 Twin-Turbine",
      baseFrequencyHz: 50,
      maxFrequencyHz: 265,
      harmonicWeights: [
        1.0000, 0.3800, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 5.0,
      resonanceQ: 3.00
    },
    {
      profileId: "ENG-HARM-136",
      engineType: "Plasma Core Rotary",
      baseFrequencyHz: 51,
      maxFrequencyHz: 266,
      harmonicWeights: [
        1.0000, 0.3780, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 6.0,
      resonanceQ: 1.50
    },
    {
      profileId: "ENG-HARM-137",
      engineType: "Quad-Flux Inductor",
      baseFrequencyHz: 52,
      maxFrequencyHz: 267,
      harmonicWeights: [
        1.0000, 0.3760, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 7.0,
      resonanceQ: 2.00
    },
    {
      profileId: "ENG-HARM-138",
      engineType: "V8 Twin-Turbine",
      baseFrequencyHz: 53,
      maxFrequencyHz: 268,
      harmonicWeights: [
        1.0000, 0.3740, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 2.0,
      resonanceQ: 2.50
    },
    {
      profileId: "ENG-HARM-139",
      engineType: "Plasma Core Rotary",
      baseFrequencyHz: 54,
      maxFrequencyHz: 269,
      harmonicWeights: [
        1.0000, 0.3720, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 3.0,
      resonanceQ: 3.00
    },
    {
      profileId: "ENG-HARM-140",
      engineType: "Quad-Flux Inductor",
      baseFrequencyHz: 55,
      maxFrequencyHz: 270,
      harmonicWeights: [
        1.0000, 0.3700, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 4.0,
      resonanceQ: 1.50
    },
    {
      profileId: "ENG-HARM-141",
      engineType: "V8 Twin-Turbine",
      baseFrequencyHz: 56,
      maxFrequencyHz: 271,
      harmonicWeights: [
        1.0000, 0.3680, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 5.0,
      resonanceQ: 2.00
    },
    {
      profileId: "ENG-HARM-142",
      engineType: "Plasma Core Rotary",
      baseFrequencyHz: 57,
      maxFrequencyHz: 272,
      harmonicWeights: [
        1.0000, 0.3660, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 6.0,
      resonanceQ: 2.50
    },
    {
      profileId: "ENG-HARM-143",
      engineType: "Quad-Flux Inductor",
      baseFrequencyHz: 58,
      maxFrequencyHz: 273,
      harmonicWeights: [
        1.0000, 0.3640, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 7.0,
      resonanceQ: 3.00
    },
    {
      profileId: "ENG-HARM-144",
      engineType: "V8 Twin-Turbine",
      baseFrequencyHz: 59,
      maxFrequencyHz: 274,
      harmonicWeights: [
        1.0000, 0.3620, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 2.0,
      resonanceQ: 1.50
    },
    {
      profileId: "ENG-HARM-145",
      engineType: "Plasma Core Rotary",
      baseFrequencyHz: 60,
      maxFrequencyHz: 275,
      harmonicWeights: [
        1.0000, 0.3600, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 3.0,
      resonanceQ: 2.00
    },
    {
      profileId: "ENG-HARM-146",
      engineType: "Quad-Flux Inductor",
      baseFrequencyHz: 61,
      maxFrequencyHz: 276,
      harmonicWeights: [
        1.0000, 0.3580, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 4.0,
      resonanceQ: 2.50
    },
    {
      profileId: "ENG-HARM-147",
      engineType: "V8 Twin-Turbine",
      baseFrequencyHz: 62,
      maxFrequencyHz: 277,
      harmonicWeights: [
        1.0000, 0.3560, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 5.0,
      resonanceQ: 3.00
    },
    {
      profileId: "ENG-HARM-148",
      engineType: "Plasma Core Rotary",
      baseFrequencyHz: 63,
      maxFrequencyHz: 278,
      harmonicWeights: [
        1.0000, 0.3540, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 6.0,
      resonanceQ: 1.50
    },
    {
      profileId: "ENG-HARM-149",
      engineType: "Quad-Flux Inductor",
      baseFrequencyHz: 64,
      maxFrequencyHz: 279,
      harmonicWeights: [
        1.0000, 0.3520, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 7.0,
      resonanceQ: 2.00
    },
    {
      profileId: "ENG-HARM-150",
      engineType: "V8 Twin-Turbine",
      baseFrequencyHz: 40,
      maxFrequencyHz: 280,
      harmonicWeights: [
        1.0000, 0.3500, 0.4200, 0.2800, 0.1500, 0.0800
      ],
      subBassBoostDb: 2.0,
      resonanceQ: 2.50
    },
  ],
  musicalNoteFrequencies: {
    "C0": 16.352,
    "Cs0": 17.324,
    "D0": 18.354,
    "Ds0": 19.445,
    "E0": 20.602,
    "F0": 21.827,
    "Fs0": 23.125,
    "G0": 24.500,
    "Gs0": 25.957,
    "A0": 27.500,
    "As0": 29.135,
    "B0": 30.868,
    "C1": 32.703,
    "Cs1": 34.648,
    "D1": 36.708,
    "Ds1": 38.891,
    "E1": 41.203,
    "F1": 43.654,
    "Fs1": 46.249,
    "G1": 48.999,
    "Gs1": 51.913,
    "A1": 55.000,
    "As1": 58.270,
    "B1": 61.735,
    "C2": 65.406,
    "Cs2": 69.296,
    "D2": 73.416,
    "Ds2": 77.782,
    "E2": 82.407,
    "F2": 87.307,
    "Fs2": 92.499,
    "G2": 97.999,
    "Gs2": 103.826,
    "A2": 110.000,
    "As2": 116.541,
    "B2": 123.471,
    "C3": 130.813,
    "Cs3": 138.591,
    "D3": 146.832,
    "Ds3": 155.563,
    "E3": 164.814,
    "F3": 174.614,
    "Fs3": 184.997,
    "G3": 195.998,
    "Gs3": 207.652,
    "A3": 220.000,
    "As3": 233.082,
    "B3": 246.942,
    "C4": 261.626,
    "Cs4": 277.183,
    "D4": 293.665,
    "Ds4": 311.127,
    "E4": 329.628,
    "F4": 349.228,
    "Fs4": 369.994,
    "G4": 391.995,
    "Gs4": 415.305,
    "A4": 440.000,
    "As4": 466.164,
    "B4": 493.883,
    "C5": 523.251,
    "Cs5": 554.365,
    "D5": 587.330,
    "Ds5": 622.254,
    "E5": 659.255,
    "F5": 698.456,
    "Fs5": 739.989,
    "G5": 783.991,
    "Gs5": 830.609,
    "A5": 880.000,
    "As5": 932.328,
    "B5": 987.767,
    "C6": 1046.502,
    "Cs6": 1108.731,
    "D6": 1174.659,
    "Ds6": 1244.508,
    "E6": 1318.510,
    "F6": 1396.913,
    "Fs6": 1479.978,
    "G6": 1567.982,
    "Gs6": 1661.219,
    "A6": 1760.000,
    "As6": 1864.655,
    "B6": 1975.533,
    "C7": 2093.005,
    "Cs7": 2217.461,
    "D7": 2349.318,
    "Ds7": 2489.016,
    "E7": 2637.020,
    "F7": 2793.826,
    "Fs7": 2959.955,
    "G7": 3135.963,
    "Gs7": 3322.438,
    "A7": 3520.000,
    "As7": 3729.310,
    "B7": 3951.066,
    "C8": 4186.009,
    "Cs8": 4434.922,
    "D8": 4698.636,
    "Ds8": 4978.032,
    "E8": 5274.041,
    "F8": 5587.652,
    "Fs8": 5919.911,
    "G8": 6271.927,
    "Gs8": 6644.875,
    "A8": 7040.000,
    "As8": 7458.620,
    "B8": 7902.133,
    "C9": 8372.018,
    "Cs9": 8869.844,
    "D9": 9397.273,
    "Ds9": 9956.063,
    "E9": 10548.082,
    "F9": 11175.303,
    "Fs9": 11839.822,
    "G9": 12543.854,
    "Gs9": 13289.750,
    "A9": 14080.000,
    "As9": 14917.240,
    "B9": 15804.266,
  },
  fmModulationPresets: [
    {
      presetId: "FM-PRESET-001",
      label: "Synth Arp Voice 1",
      carrierWaveform: "sawtooth",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 1.50,
      modulationIndex: 2.80,
      attackSec: 0.030,
      decaySec: 0.200,
      sustainLevel: 0.50,
      releaseSec: 0.280
    },
    {
      presetId: "FM-PRESET-002",
      label: "Synth Arp Voice 2",
      carrierWaveform: "triangle",
      modulatorWaveform: "sine",
      harmonicityRatio: 2.00,
      modulationIndex: 3.60,
      attackSec: 0.050,
      decaySec: 0.250,
      sustainLevel: 0.60,
      releaseSec: 0.360
    },
    {
      presetId: "FM-PRESET-003",
      label: "Synth Arp Voice 3",
      carrierWaveform: "square",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 2.50,
      modulationIndex: 4.40,
      attackSec: 0.070,
      decaySec: 0.300,
      sustainLevel: 0.70,
      releaseSec: 0.440
    },
    {
      presetId: "FM-PRESET-004",
      label: "Synth Arp Voice 4",
      carrierWaveform: "sine",
      modulatorWaveform: "sine",
      harmonicityRatio: 3.00,
      modulationIndex: 5.20,
      attackSec: 0.090,
      decaySec: 0.350,
      sustainLevel: 0.40,
      releaseSec: 0.520
    },
    {
      presetId: "FM-PRESET-005",
      label: "Synth Arp Voice 5",
      carrierWaveform: "sawtooth",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 3.50,
      modulationIndex: 6.00,
      attackSec: 0.010,
      decaySec: 0.400,
      sustainLevel: 0.50,
      releaseSec: 0.600
    },
    {
      presetId: "FM-PRESET-006",
      label: "Synth Arp Voice 6",
      carrierWaveform: "triangle",
      modulatorWaveform: "sine",
      harmonicityRatio: 4.00,
      modulationIndex: 6.80,
      attackSec: 0.030,
      decaySec: 0.450,
      sustainLevel: 0.60,
      releaseSec: 0.200
    },
    {
      presetId: "FM-PRESET-007",
      label: "Synth Arp Voice 7",
      carrierWaveform: "square",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 4.50,
      modulationIndex: 7.60,
      attackSec: 0.050,
      decaySec: 0.500,
      sustainLevel: 0.70,
      releaseSec: 0.280
    },
    {
      presetId: "FM-PRESET-008",
      label: "Synth Arp Voice 8",
      carrierWaveform: "sine",
      modulatorWaveform: "sine",
      harmonicityRatio: 1.00,
      modulationIndex: 8.40,
      attackSec: 0.070,
      decaySec: 0.150,
      sustainLevel: 0.40,
      releaseSec: 0.360
    },
    {
      presetId: "FM-PRESET-009",
      label: "Synth Arp Voice 9",
      carrierWaveform: "sawtooth",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 1.50,
      modulationIndex: 9.20,
      attackSec: 0.090,
      decaySec: 0.200,
      sustainLevel: 0.50,
      releaseSec: 0.440
    },
    {
      presetId: "FM-PRESET-010",
      label: "Synth Arp Voice 10",
      carrierWaveform: "triangle",
      modulatorWaveform: "sine",
      harmonicityRatio: 2.00,
      modulationIndex: 2.00,
      attackSec: 0.010,
      decaySec: 0.250,
      sustainLevel: 0.60,
      releaseSec: 0.520
    },
    {
      presetId: "FM-PRESET-011",
      label: "Synth Arp Voice 11",
      carrierWaveform: "square",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 2.50,
      modulationIndex: 2.80,
      attackSec: 0.030,
      decaySec: 0.300,
      sustainLevel: 0.70,
      releaseSec: 0.600
    },
    {
      presetId: "FM-PRESET-012",
      label: "Synth Arp Voice 12",
      carrierWaveform: "sine",
      modulatorWaveform: "sine",
      harmonicityRatio: 3.00,
      modulationIndex: 3.60,
      attackSec: 0.050,
      decaySec: 0.350,
      sustainLevel: 0.40,
      releaseSec: 0.200
    },
    {
      presetId: "FM-PRESET-013",
      label: "Synth Arp Voice 13",
      carrierWaveform: "sawtooth",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 3.50,
      modulationIndex: 4.40,
      attackSec: 0.070,
      decaySec: 0.400,
      sustainLevel: 0.50,
      releaseSec: 0.280
    },
    {
      presetId: "FM-PRESET-014",
      label: "Synth Arp Voice 14",
      carrierWaveform: "triangle",
      modulatorWaveform: "sine",
      harmonicityRatio: 4.00,
      modulationIndex: 5.20,
      attackSec: 0.090,
      decaySec: 0.450,
      sustainLevel: 0.60,
      releaseSec: 0.360
    },
    {
      presetId: "FM-PRESET-015",
      label: "Synth Arp Voice 15",
      carrierWaveform: "square",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 4.50,
      modulationIndex: 6.00,
      attackSec: 0.010,
      decaySec: 0.500,
      sustainLevel: 0.70,
      releaseSec: 0.440
    },
    {
      presetId: "FM-PRESET-016",
      label: "Synth Arp Voice 16",
      carrierWaveform: "sine",
      modulatorWaveform: "sine",
      harmonicityRatio: 1.00,
      modulationIndex: 6.80,
      attackSec: 0.030,
      decaySec: 0.150,
      sustainLevel: 0.40,
      releaseSec: 0.520
    },
    {
      presetId: "FM-PRESET-017",
      label: "Synth Arp Voice 17",
      carrierWaveform: "sawtooth",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 1.50,
      modulationIndex: 7.60,
      attackSec: 0.050,
      decaySec: 0.200,
      sustainLevel: 0.50,
      releaseSec: 0.600
    },
    {
      presetId: "FM-PRESET-018",
      label: "Synth Arp Voice 18",
      carrierWaveform: "triangle",
      modulatorWaveform: "sine",
      harmonicityRatio: 2.00,
      modulationIndex: 8.40,
      attackSec: 0.070,
      decaySec: 0.250,
      sustainLevel: 0.60,
      releaseSec: 0.200
    },
    {
      presetId: "FM-PRESET-019",
      label: "Synth Arp Voice 19",
      carrierWaveform: "square",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 2.50,
      modulationIndex: 9.20,
      attackSec: 0.090,
      decaySec: 0.300,
      sustainLevel: 0.70,
      releaseSec: 0.280
    },
    {
      presetId: "FM-PRESET-020",
      label: "Synth Arp Voice 20",
      carrierWaveform: "sine",
      modulatorWaveform: "sine",
      harmonicityRatio: 3.00,
      modulationIndex: 2.00,
      attackSec: 0.010,
      decaySec: 0.350,
      sustainLevel: 0.40,
      releaseSec: 0.360
    },
    {
      presetId: "FM-PRESET-021",
      label: "Synth Arp Voice 21",
      carrierWaveform: "sawtooth",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 3.50,
      modulationIndex: 2.80,
      attackSec: 0.030,
      decaySec: 0.400,
      sustainLevel: 0.50,
      releaseSec: 0.440
    },
    {
      presetId: "FM-PRESET-022",
      label: "Synth Arp Voice 22",
      carrierWaveform: "triangle",
      modulatorWaveform: "sine",
      harmonicityRatio: 4.00,
      modulationIndex: 3.60,
      attackSec: 0.050,
      decaySec: 0.450,
      sustainLevel: 0.60,
      releaseSec: 0.520
    },
    {
      presetId: "FM-PRESET-023",
      label: "Synth Arp Voice 23",
      carrierWaveform: "square",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 4.50,
      modulationIndex: 4.40,
      attackSec: 0.070,
      decaySec: 0.500,
      sustainLevel: 0.70,
      releaseSec: 0.600
    },
    {
      presetId: "FM-PRESET-024",
      label: "Synth Arp Voice 24",
      carrierWaveform: "sine",
      modulatorWaveform: "sine",
      harmonicityRatio: 1.00,
      modulationIndex: 5.20,
      attackSec: 0.090,
      decaySec: 0.150,
      sustainLevel: 0.40,
      releaseSec: 0.200
    },
    {
      presetId: "FM-PRESET-025",
      label: "Synth Arp Voice 25",
      carrierWaveform: "sawtooth",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 1.50,
      modulationIndex: 6.00,
      attackSec: 0.010,
      decaySec: 0.200,
      sustainLevel: 0.50,
      releaseSec: 0.280
    },
    {
      presetId: "FM-PRESET-026",
      label: "Synth Arp Voice 26",
      carrierWaveform: "triangle",
      modulatorWaveform: "sine",
      harmonicityRatio: 2.00,
      modulationIndex: 6.80,
      attackSec: 0.030,
      decaySec: 0.250,
      sustainLevel: 0.60,
      releaseSec: 0.360
    },
    {
      presetId: "FM-PRESET-027",
      label: "Synth Arp Voice 27",
      carrierWaveform: "square",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 2.50,
      modulationIndex: 7.60,
      attackSec: 0.050,
      decaySec: 0.300,
      sustainLevel: 0.70,
      releaseSec: 0.440
    },
    {
      presetId: "FM-PRESET-028",
      label: "Synth Arp Voice 28",
      carrierWaveform: "sine",
      modulatorWaveform: "sine",
      harmonicityRatio: 3.00,
      modulationIndex: 8.40,
      attackSec: 0.070,
      decaySec: 0.350,
      sustainLevel: 0.40,
      releaseSec: 0.520
    },
    {
      presetId: "FM-PRESET-029",
      label: "Synth Arp Voice 29",
      carrierWaveform: "sawtooth",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 3.50,
      modulationIndex: 9.20,
      attackSec: 0.090,
      decaySec: 0.400,
      sustainLevel: 0.50,
      releaseSec: 0.600
    },
    {
      presetId: "FM-PRESET-030",
      label: "Synth Arp Voice 30",
      carrierWaveform: "triangle",
      modulatorWaveform: "sine",
      harmonicityRatio: 4.00,
      modulationIndex: 2.00,
      attackSec: 0.010,
      decaySec: 0.450,
      sustainLevel: 0.60,
      releaseSec: 0.200
    },
    {
      presetId: "FM-PRESET-031",
      label: "Synth Arp Voice 31",
      carrierWaveform: "square",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 4.50,
      modulationIndex: 2.80,
      attackSec: 0.030,
      decaySec: 0.500,
      sustainLevel: 0.70,
      releaseSec: 0.280
    },
    {
      presetId: "FM-PRESET-032",
      label: "Synth Arp Voice 32",
      carrierWaveform: "sine",
      modulatorWaveform: "sine",
      harmonicityRatio: 1.00,
      modulationIndex: 3.60,
      attackSec: 0.050,
      decaySec: 0.150,
      sustainLevel: 0.40,
      releaseSec: 0.360
    },
    {
      presetId: "FM-PRESET-033",
      label: "Synth Arp Voice 33",
      carrierWaveform: "sawtooth",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 1.50,
      modulationIndex: 4.40,
      attackSec: 0.070,
      decaySec: 0.200,
      sustainLevel: 0.50,
      releaseSec: 0.440
    },
    {
      presetId: "FM-PRESET-034",
      label: "Synth Arp Voice 34",
      carrierWaveform: "triangle",
      modulatorWaveform: "sine",
      harmonicityRatio: 2.00,
      modulationIndex: 5.20,
      attackSec: 0.090,
      decaySec: 0.250,
      sustainLevel: 0.60,
      releaseSec: 0.520
    },
    {
      presetId: "FM-PRESET-035",
      label: "Synth Arp Voice 35",
      carrierWaveform: "square",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 2.50,
      modulationIndex: 6.00,
      attackSec: 0.010,
      decaySec: 0.300,
      sustainLevel: 0.70,
      releaseSec: 0.600
    },
    {
      presetId: "FM-PRESET-036",
      label: "Synth Arp Voice 36",
      carrierWaveform: "sine",
      modulatorWaveform: "sine",
      harmonicityRatio: 3.00,
      modulationIndex: 6.80,
      attackSec: 0.030,
      decaySec: 0.350,
      sustainLevel: 0.40,
      releaseSec: 0.200
    },
    {
      presetId: "FM-PRESET-037",
      label: "Synth Arp Voice 37",
      carrierWaveform: "sawtooth",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 3.50,
      modulationIndex: 7.60,
      attackSec: 0.050,
      decaySec: 0.400,
      sustainLevel: 0.50,
      releaseSec: 0.280
    },
    {
      presetId: "FM-PRESET-038",
      label: "Synth Arp Voice 38",
      carrierWaveform: "triangle",
      modulatorWaveform: "sine",
      harmonicityRatio: 4.00,
      modulationIndex: 8.40,
      attackSec: 0.070,
      decaySec: 0.450,
      sustainLevel: 0.60,
      releaseSec: 0.360
    },
    {
      presetId: "FM-PRESET-039",
      label: "Synth Arp Voice 39",
      carrierWaveform: "square",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 4.50,
      modulationIndex: 9.20,
      attackSec: 0.090,
      decaySec: 0.500,
      sustainLevel: 0.70,
      releaseSec: 0.440
    },
    {
      presetId: "FM-PRESET-040",
      label: "Synth Arp Voice 40",
      carrierWaveform: "sine",
      modulatorWaveform: "sine",
      harmonicityRatio: 1.00,
      modulationIndex: 2.00,
      attackSec: 0.010,
      decaySec: 0.150,
      sustainLevel: 0.40,
      releaseSec: 0.520
    },
    {
      presetId: "FM-PRESET-041",
      label: "Synth Arp Voice 41",
      carrierWaveform: "sawtooth",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 1.50,
      modulationIndex: 2.80,
      attackSec: 0.030,
      decaySec: 0.200,
      sustainLevel: 0.50,
      releaseSec: 0.600
    },
    {
      presetId: "FM-PRESET-042",
      label: "Synth Arp Voice 42",
      carrierWaveform: "triangle",
      modulatorWaveform: "sine",
      harmonicityRatio: 2.00,
      modulationIndex: 3.60,
      attackSec: 0.050,
      decaySec: 0.250,
      sustainLevel: 0.60,
      releaseSec: 0.200
    },
    {
      presetId: "FM-PRESET-043",
      label: "Synth Arp Voice 43",
      carrierWaveform: "square",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 2.50,
      modulationIndex: 4.40,
      attackSec: 0.070,
      decaySec: 0.300,
      sustainLevel: 0.70,
      releaseSec: 0.280
    },
    {
      presetId: "FM-PRESET-044",
      label: "Synth Arp Voice 44",
      carrierWaveform: "sine",
      modulatorWaveform: "sine",
      harmonicityRatio: 3.00,
      modulationIndex: 5.20,
      attackSec: 0.090,
      decaySec: 0.350,
      sustainLevel: 0.40,
      releaseSec: 0.360
    },
    {
      presetId: "FM-PRESET-045",
      label: "Synth Arp Voice 45",
      carrierWaveform: "sawtooth",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 3.50,
      modulationIndex: 6.00,
      attackSec: 0.010,
      decaySec: 0.400,
      sustainLevel: 0.50,
      releaseSec: 0.440
    },
    {
      presetId: "FM-PRESET-046",
      label: "Synth Arp Voice 46",
      carrierWaveform: "triangle",
      modulatorWaveform: "sine",
      harmonicityRatio: 4.00,
      modulationIndex: 6.80,
      attackSec: 0.030,
      decaySec: 0.450,
      sustainLevel: 0.60,
      releaseSec: 0.520
    },
    {
      presetId: "FM-PRESET-047",
      label: "Synth Arp Voice 47",
      carrierWaveform: "square",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 4.50,
      modulationIndex: 7.60,
      attackSec: 0.050,
      decaySec: 0.500,
      sustainLevel: 0.70,
      releaseSec: 0.600
    },
    {
      presetId: "FM-PRESET-048",
      label: "Synth Arp Voice 48",
      carrierWaveform: "sine",
      modulatorWaveform: "sine",
      harmonicityRatio: 1.00,
      modulationIndex: 8.40,
      attackSec: 0.070,
      decaySec: 0.150,
      sustainLevel: 0.40,
      releaseSec: 0.200
    },
    {
      presetId: "FM-PRESET-049",
      label: "Synth Arp Voice 49",
      carrierWaveform: "sawtooth",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 1.50,
      modulationIndex: 9.20,
      attackSec: 0.090,
      decaySec: 0.200,
      sustainLevel: 0.50,
      releaseSec: 0.280
    },
    {
      presetId: "FM-PRESET-050",
      label: "Synth Arp Voice 50",
      carrierWaveform: "triangle",
      modulatorWaveform: "sine",
      harmonicityRatio: 2.00,
      modulationIndex: 2.00,
      attackSec: 0.010,
      decaySec: 0.250,
      sustainLevel: 0.60,
      releaseSec: 0.360
    },
    {
      presetId: "FM-PRESET-051",
      label: "Synth Arp Voice 51",
      carrierWaveform: "square",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 2.50,
      modulationIndex: 2.80,
      attackSec: 0.030,
      decaySec: 0.300,
      sustainLevel: 0.70,
      releaseSec: 0.440
    },
    {
      presetId: "FM-PRESET-052",
      label: "Synth Arp Voice 52",
      carrierWaveform: "sine",
      modulatorWaveform: "sine",
      harmonicityRatio: 3.00,
      modulationIndex: 3.60,
      attackSec: 0.050,
      decaySec: 0.350,
      sustainLevel: 0.40,
      releaseSec: 0.520
    },
    {
      presetId: "FM-PRESET-053",
      label: "Synth Arp Voice 53",
      carrierWaveform: "sawtooth",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 3.50,
      modulationIndex: 4.40,
      attackSec: 0.070,
      decaySec: 0.400,
      sustainLevel: 0.50,
      releaseSec: 0.600
    },
    {
      presetId: "FM-PRESET-054",
      label: "Synth Arp Voice 54",
      carrierWaveform: "triangle",
      modulatorWaveform: "sine",
      harmonicityRatio: 4.00,
      modulationIndex: 5.20,
      attackSec: 0.090,
      decaySec: 0.450,
      sustainLevel: 0.60,
      releaseSec: 0.200
    },
    {
      presetId: "FM-PRESET-055",
      label: "Synth Arp Voice 55",
      carrierWaveform: "square",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 4.50,
      modulationIndex: 6.00,
      attackSec: 0.010,
      decaySec: 0.500,
      sustainLevel: 0.70,
      releaseSec: 0.280
    },
    {
      presetId: "FM-PRESET-056",
      label: "Synth Arp Voice 56",
      carrierWaveform: "sine",
      modulatorWaveform: "sine",
      harmonicityRatio: 1.00,
      modulationIndex: 6.80,
      attackSec: 0.030,
      decaySec: 0.150,
      sustainLevel: 0.40,
      releaseSec: 0.360
    },
    {
      presetId: "FM-PRESET-057",
      label: "Synth Arp Voice 57",
      carrierWaveform: "sawtooth",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 1.50,
      modulationIndex: 7.60,
      attackSec: 0.050,
      decaySec: 0.200,
      sustainLevel: 0.50,
      releaseSec: 0.440
    },
    {
      presetId: "FM-PRESET-058",
      label: "Synth Arp Voice 58",
      carrierWaveform: "triangle",
      modulatorWaveform: "sine",
      harmonicityRatio: 2.00,
      modulationIndex: 8.40,
      attackSec: 0.070,
      decaySec: 0.250,
      sustainLevel: 0.60,
      releaseSec: 0.520
    },
    {
      presetId: "FM-PRESET-059",
      label: "Synth Arp Voice 59",
      carrierWaveform: "square",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 2.50,
      modulationIndex: 9.20,
      attackSec: 0.090,
      decaySec: 0.300,
      sustainLevel: 0.70,
      releaseSec: 0.600
    },
    {
      presetId: "FM-PRESET-060",
      label: "Synth Arp Voice 60",
      carrierWaveform: "sine",
      modulatorWaveform: "sine",
      harmonicityRatio: 3.00,
      modulationIndex: 2.00,
      attackSec: 0.010,
      decaySec: 0.350,
      sustainLevel: 0.40,
      releaseSec: 0.200
    },
    {
      presetId: "FM-PRESET-061",
      label: "Synth Arp Voice 61",
      carrierWaveform: "sawtooth",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 3.50,
      modulationIndex: 2.80,
      attackSec: 0.030,
      decaySec: 0.400,
      sustainLevel: 0.50,
      releaseSec: 0.280
    },
    {
      presetId: "FM-PRESET-062",
      label: "Synth Arp Voice 62",
      carrierWaveform: "triangle",
      modulatorWaveform: "sine",
      harmonicityRatio: 4.00,
      modulationIndex: 3.60,
      attackSec: 0.050,
      decaySec: 0.450,
      sustainLevel: 0.60,
      releaseSec: 0.360
    },
    {
      presetId: "FM-PRESET-063",
      label: "Synth Arp Voice 63",
      carrierWaveform: "square",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 4.50,
      modulationIndex: 4.40,
      attackSec: 0.070,
      decaySec: 0.500,
      sustainLevel: 0.70,
      releaseSec: 0.440
    },
    {
      presetId: "FM-PRESET-064",
      label: "Synth Arp Voice 64",
      carrierWaveform: "sine",
      modulatorWaveform: "sine",
      harmonicityRatio: 1.00,
      modulationIndex: 5.20,
      attackSec: 0.090,
      decaySec: 0.150,
      sustainLevel: 0.40,
      releaseSec: 0.520
    },
    {
      presetId: "FM-PRESET-065",
      label: "Synth Arp Voice 65",
      carrierWaveform: "sawtooth",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 1.50,
      modulationIndex: 6.00,
      attackSec: 0.010,
      decaySec: 0.200,
      sustainLevel: 0.50,
      releaseSec: 0.600
    },
    {
      presetId: "FM-PRESET-066",
      label: "Synth Arp Voice 66",
      carrierWaveform: "triangle",
      modulatorWaveform: "sine",
      harmonicityRatio: 2.00,
      modulationIndex: 6.80,
      attackSec: 0.030,
      decaySec: 0.250,
      sustainLevel: 0.60,
      releaseSec: 0.200
    },
    {
      presetId: "FM-PRESET-067",
      label: "Synth Arp Voice 67",
      carrierWaveform: "square",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 2.50,
      modulationIndex: 7.60,
      attackSec: 0.050,
      decaySec: 0.300,
      sustainLevel: 0.70,
      releaseSec: 0.280
    },
    {
      presetId: "FM-PRESET-068",
      label: "Synth Arp Voice 68",
      carrierWaveform: "sine",
      modulatorWaveform: "sine",
      harmonicityRatio: 3.00,
      modulationIndex: 8.40,
      attackSec: 0.070,
      decaySec: 0.350,
      sustainLevel: 0.40,
      releaseSec: 0.360
    },
    {
      presetId: "FM-PRESET-069",
      label: "Synth Arp Voice 69",
      carrierWaveform: "sawtooth",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 3.50,
      modulationIndex: 9.20,
      attackSec: 0.090,
      decaySec: 0.400,
      sustainLevel: 0.50,
      releaseSec: 0.440
    },
    {
      presetId: "FM-PRESET-070",
      label: "Synth Arp Voice 70",
      carrierWaveform: "triangle",
      modulatorWaveform: "sine",
      harmonicityRatio: 4.00,
      modulationIndex: 2.00,
      attackSec: 0.010,
      decaySec: 0.450,
      sustainLevel: 0.60,
      releaseSec: 0.520
    },
    {
      presetId: "FM-PRESET-071",
      label: "Synth Arp Voice 71",
      carrierWaveform: "square",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 4.50,
      modulationIndex: 2.80,
      attackSec: 0.030,
      decaySec: 0.500,
      sustainLevel: 0.70,
      releaseSec: 0.600
    },
    {
      presetId: "FM-PRESET-072",
      label: "Synth Arp Voice 72",
      carrierWaveform: "sine",
      modulatorWaveform: "sine",
      harmonicityRatio: 1.00,
      modulationIndex: 3.60,
      attackSec: 0.050,
      decaySec: 0.150,
      sustainLevel: 0.40,
      releaseSec: 0.200
    },
    {
      presetId: "FM-PRESET-073",
      label: "Synth Arp Voice 73",
      carrierWaveform: "sawtooth",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 1.50,
      modulationIndex: 4.40,
      attackSec: 0.070,
      decaySec: 0.200,
      sustainLevel: 0.50,
      releaseSec: 0.280
    },
    {
      presetId: "FM-PRESET-074",
      label: "Synth Arp Voice 74",
      carrierWaveform: "triangle",
      modulatorWaveform: "sine",
      harmonicityRatio: 2.00,
      modulationIndex: 5.20,
      attackSec: 0.090,
      decaySec: 0.250,
      sustainLevel: 0.60,
      releaseSec: 0.360
    },
    {
      presetId: "FM-PRESET-075",
      label: "Synth Arp Voice 75",
      carrierWaveform: "square",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 2.50,
      modulationIndex: 6.00,
      attackSec: 0.010,
      decaySec: 0.300,
      sustainLevel: 0.70,
      releaseSec: 0.440
    },
    {
      presetId: "FM-PRESET-076",
      label: "Synth Arp Voice 76",
      carrierWaveform: "sine",
      modulatorWaveform: "sine",
      harmonicityRatio: 3.00,
      modulationIndex: 6.80,
      attackSec: 0.030,
      decaySec: 0.350,
      sustainLevel: 0.40,
      releaseSec: 0.520
    },
    {
      presetId: "FM-PRESET-077",
      label: "Synth Arp Voice 77",
      carrierWaveform: "sawtooth",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 3.50,
      modulationIndex: 7.60,
      attackSec: 0.050,
      decaySec: 0.400,
      sustainLevel: 0.50,
      releaseSec: 0.600
    },
    {
      presetId: "FM-PRESET-078",
      label: "Synth Arp Voice 78",
      carrierWaveform: "triangle",
      modulatorWaveform: "sine",
      harmonicityRatio: 4.00,
      modulationIndex: 8.40,
      attackSec: 0.070,
      decaySec: 0.450,
      sustainLevel: 0.60,
      releaseSec: 0.200
    },
    {
      presetId: "FM-PRESET-079",
      label: "Synth Arp Voice 79",
      carrierWaveform: "square",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 4.50,
      modulationIndex: 9.20,
      attackSec: 0.090,
      decaySec: 0.500,
      sustainLevel: 0.70,
      releaseSec: 0.280
    },
    {
      presetId: "FM-PRESET-080",
      label: "Synth Arp Voice 80",
      carrierWaveform: "sine",
      modulatorWaveform: "sine",
      harmonicityRatio: 1.00,
      modulationIndex: 2.00,
      attackSec: 0.010,
      decaySec: 0.150,
      sustainLevel: 0.40,
      releaseSec: 0.360
    },
    {
      presetId: "FM-PRESET-081",
      label: "Synth Arp Voice 81",
      carrierWaveform: "sawtooth",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 1.50,
      modulationIndex: 2.80,
      attackSec: 0.030,
      decaySec: 0.200,
      sustainLevel: 0.50,
      releaseSec: 0.440
    },
    {
      presetId: "FM-PRESET-082",
      label: "Synth Arp Voice 82",
      carrierWaveform: "triangle",
      modulatorWaveform: "sine",
      harmonicityRatio: 2.00,
      modulationIndex: 3.60,
      attackSec: 0.050,
      decaySec: 0.250,
      sustainLevel: 0.60,
      releaseSec: 0.520
    },
    {
      presetId: "FM-PRESET-083",
      label: "Synth Arp Voice 83",
      carrierWaveform: "square",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 2.50,
      modulationIndex: 4.40,
      attackSec: 0.070,
      decaySec: 0.300,
      sustainLevel: 0.70,
      releaseSec: 0.600
    },
    {
      presetId: "FM-PRESET-084",
      label: "Synth Arp Voice 84",
      carrierWaveform: "sine",
      modulatorWaveform: "sine",
      harmonicityRatio: 3.00,
      modulationIndex: 5.20,
      attackSec: 0.090,
      decaySec: 0.350,
      sustainLevel: 0.40,
      releaseSec: 0.200
    },
    {
      presetId: "FM-PRESET-085",
      label: "Synth Arp Voice 85",
      carrierWaveform: "sawtooth",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 3.50,
      modulationIndex: 6.00,
      attackSec: 0.010,
      decaySec: 0.400,
      sustainLevel: 0.50,
      releaseSec: 0.280
    },
    {
      presetId: "FM-PRESET-086",
      label: "Synth Arp Voice 86",
      carrierWaveform: "triangle",
      modulatorWaveform: "sine",
      harmonicityRatio: 4.00,
      modulationIndex: 6.80,
      attackSec: 0.030,
      decaySec: 0.450,
      sustainLevel: 0.60,
      releaseSec: 0.360
    },
    {
      presetId: "FM-PRESET-087",
      label: "Synth Arp Voice 87",
      carrierWaveform: "square",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 4.50,
      modulationIndex: 7.60,
      attackSec: 0.050,
      decaySec: 0.500,
      sustainLevel: 0.70,
      releaseSec: 0.440
    },
    {
      presetId: "FM-PRESET-088",
      label: "Synth Arp Voice 88",
      carrierWaveform: "sine",
      modulatorWaveform: "sine",
      harmonicityRatio: 1.00,
      modulationIndex: 8.40,
      attackSec: 0.070,
      decaySec: 0.150,
      sustainLevel: 0.40,
      releaseSec: 0.520
    },
    {
      presetId: "FM-PRESET-089",
      label: "Synth Arp Voice 89",
      carrierWaveform: "sawtooth",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 1.50,
      modulationIndex: 9.20,
      attackSec: 0.090,
      decaySec: 0.200,
      sustainLevel: 0.50,
      releaseSec: 0.600
    },
    {
      presetId: "FM-PRESET-090",
      label: "Synth Arp Voice 90",
      carrierWaveform: "triangle",
      modulatorWaveform: "sine",
      harmonicityRatio: 2.00,
      modulationIndex: 2.00,
      attackSec: 0.010,
      decaySec: 0.250,
      sustainLevel: 0.60,
      releaseSec: 0.200
    },
    {
      presetId: "FM-PRESET-091",
      label: "Synth Arp Voice 91",
      carrierWaveform: "square",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 2.50,
      modulationIndex: 2.80,
      attackSec: 0.030,
      decaySec: 0.300,
      sustainLevel: 0.70,
      releaseSec: 0.280
    },
    {
      presetId: "FM-PRESET-092",
      label: "Synth Arp Voice 92",
      carrierWaveform: "sine",
      modulatorWaveform: "sine",
      harmonicityRatio: 3.00,
      modulationIndex: 3.60,
      attackSec: 0.050,
      decaySec: 0.350,
      sustainLevel: 0.40,
      releaseSec: 0.360
    },
    {
      presetId: "FM-PRESET-093",
      label: "Synth Arp Voice 93",
      carrierWaveform: "sawtooth",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 3.50,
      modulationIndex: 4.40,
      attackSec: 0.070,
      decaySec: 0.400,
      sustainLevel: 0.50,
      releaseSec: 0.440
    },
    {
      presetId: "FM-PRESET-094",
      label: "Synth Arp Voice 94",
      carrierWaveform: "triangle",
      modulatorWaveform: "sine",
      harmonicityRatio: 4.00,
      modulationIndex: 5.20,
      attackSec: 0.090,
      decaySec: 0.450,
      sustainLevel: 0.60,
      releaseSec: 0.520
    },
    {
      presetId: "FM-PRESET-095",
      label: "Synth Arp Voice 95",
      carrierWaveform: "square",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 4.50,
      modulationIndex: 6.00,
      attackSec: 0.010,
      decaySec: 0.500,
      sustainLevel: 0.70,
      releaseSec: 0.600
    },
    {
      presetId: "FM-PRESET-096",
      label: "Synth Arp Voice 96",
      carrierWaveform: "sine",
      modulatorWaveform: "sine",
      harmonicityRatio: 1.00,
      modulationIndex: 6.80,
      attackSec: 0.030,
      decaySec: 0.150,
      sustainLevel: 0.40,
      releaseSec: 0.200
    },
    {
      presetId: "FM-PRESET-097",
      label: "Synth Arp Voice 97",
      carrierWaveform: "sawtooth",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 1.50,
      modulationIndex: 7.60,
      attackSec: 0.050,
      decaySec: 0.200,
      sustainLevel: 0.50,
      releaseSec: 0.280
    },
    {
      presetId: "FM-PRESET-098",
      label: "Synth Arp Voice 98",
      carrierWaveform: "triangle",
      modulatorWaveform: "sine",
      harmonicityRatio: 2.00,
      modulationIndex: 8.40,
      attackSec: 0.070,
      decaySec: 0.250,
      sustainLevel: 0.60,
      releaseSec: 0.360
    },
    {
      presetId: "FM-PRESET-099",
      label: "Synth Arp Voice 99",
      carrierWaveform: "square",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 2.50,
      modulationIndex: 9.20,
      attackSec: 0.090,
      decaySec: 0.300,
      sustainLevel: 0.70,
      releaseSec: 0.440
    },
    {
      presetId: "FM-PRESET-100",
      label: "Synth Arp Voice 100",
      carrierWaveform: "sine",
      modulatorWaveform: "sine",
      harmonicityRatio: 3.00,
      modulationIndex: 2.00,
      attackSec: 0.010,
      decaySec: 0.350,
      sustainLevel: 0.40,
      releaseSec: 0.520
    },
    {
      presetId: "FM-PRESET-101",
      label: "Synth Arp Voice 101",
      carrierWaveform: "sawtooth",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 3.50,
      modulationIndex: 2.80,
      attackSec: 0.030,
      decaySec: 0.400,
      sustainLevel: 0.50,
      releaseSec: 0.600
    },
    {
      presetId: "FM-PRESET-102",
      label: "Synth Arp Voice 102",
      carrierWaveform: "triangle",
      modulatorWaveform: "sine",
      harmonicityRatio: 4.00,
      modulationIndex: 3.60,
      attackSec: 0.050,
      decaySec: 0.450,
      sustainLevel: 0.60,
      releaseSec: 0.200
    },
    {
      presetId: "FM-PRESET-103",
      label: "Synth Arp Voice 103",
      carrierWaveform: "square",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 4.50,
      modulationIndex: 4.40,
      attackSec: 0.070,
      decaySec: 0.500,
      sustainLevel: 0.70,
      releaseSec: 0.280
    },
    {
      presetId: "FM-PRESET-104",
      label: "Synth Arp Voice 104",
      carrierWaveform: "sine",
      modulatorWaveform: "sine",
      harmonicityRatio: 1.00,
      modulationIndex: 5.20,
      attackSec: 0.090,
      decaySec: 0.150,
      sustainLevel: 0.40,
      releaseSec: 0.360
    },
    {
      presetId: "FM-PRESET-105",
      label: "Synth Arp Voice 105",
      carrierWaveform: "sawtooth",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 1.50,
      modulationIndex: 6.00,
      attackSec: 0.010,
      decaySec: 0.200,
      sustainLevel: 0.50,
      releaseSec: 0.440
    },
    {
      presetId: "FM-PRESET-106",
      label: "Synth Arp Voice 106",
      carrierWaveform: "triangle",
      modulatorWaveform: "sine",
      harmonicityRatio: 2.00,
      modulationIndex: 6.80,
      attackSec: 0.030,
      decaySec: 0.250,
      sustainLevel: 0.60,
      releaseSec: 0.520
    },
    {
      presetId: "FM-PRESET-107",
      label: "Synth Arp Voice 107",
      carrierWaveform: "square",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 2.50,
      modulationIndex: 7.60,
      attackSec: 0.050,
      decaySec: 0.300,
      sustainLevel: 0.70,
      releaseSec: 0.600
    },
    {
      presetId: "FM-PRESET-108",
      label: "Synth Arp Voice 108",
      carrierWaveform: "sine",
      modulatorWaveform: "sine",
      harmonicityRatio: 3.00,
      modulationIndex: 8.40,
      attackSec: 0.070,
      decaySec: 0.350,
      sustainLevel: 0.40,
      releaseSec: 0.200
    },
    {
      presetId: "FM-PRESET-109",
      label: "Synth Arp Voice 109",
      carrierWaveform: "sawtooth",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 3.50,
      modulationIndex: 9.20,
      attackSec: 0.090,
      decaySec: 0.400,
      sustainLevel: 0.50,
      releaseSec: 0.280
    },
    {
      presetId: "FM-PRESET-110",
      label: "Synth Arp Voice 110",
      carrierWaveform: "triangle",
      modulatorWaveform: "sine",
      harmonicityRatio: 4.00,
      modulationIndex: 2.00,
      attackSec: 0.010,
      decaySec: 0.450,
      sustainLevel: 0.60,
      releaseSec: 0.360
    },
    {
      presetId: "FM-PRESET-111",
      label: "Synth Arp Voice 111",
      carrierWaveform: "square",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 4.50,
      modulationIndex: 2.80,
      attackSec: 0.030,
      decaySec: 0.500,
      sustainLevel: 0.70,
      releaseSec: 0.440
    },
    {
      presetId: "FM-PRESET-112",
      label: "Synth Arp Voice 112",
      carrierWaveform: "sine",
      modulatorWaveform: "sine",
      harmonicityRatio: 1.00,
      modulationIndex: 3.60,
      attackSec: 0.050,
      decaySec: 0.150,
      sustainLevel: 0.40,
      releaseSec: 0.520
    },
    {
      presetId: "FM-PRESET-113",
      label: "Synth Arp Voice 113",
      carrierWaveform: "sawtooth",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 1.50,
      modulationIndex: 4.40,
      attackSec: 0.070,
      decaySec: 0.200,
      sustainLevel: 0.50,
      releaseSec: 0.600
    },
    {
      presetId: "FM-PRESET-114",
      label: "Synth Arp Voice 114",
      carrierWaveform: "triangle",
      modulatorWaveform: "sine",
      harmonicityRatio: 2.00,
      modulationIndex: 5.20,
      attackSec: 0.090,
      decaySec: 0.250,
      sustainLevel: 0.60,
      releaseSec: 0.200
    },
    {
      presetId: "FM-PRESET-115",
      label: "Synth Arp Voice 115",
      carrierWaveform: "square",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 2.50,
      modulationIndex: 6.00,
      attackSec: 0.010,
      decaySec: 0.300,
      sustainLevel: 0.70,
      releaseSec: 0.280
    },
    {
      presetId: "FM-PRESET-116",
      label: "Synth Arp Voice 116",
      carrierWaveform: "sine",
      modulatorWaveform: "sine",
      harmonicityRatio: 3.00,
      modulationIndex: 6.80,
      attackSec: 0.030,
      decaySec: 0.350,
      sustainLevel: 0.40,
      releaseSec: 0.360
    },
    {
      presetId: "FM-PRESET-117",
      label: "Synth Arp Voice 117",
      carrierWaveform: "sawtooth",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 3.50,
      modulationIndex: 7.60,
      attackSec: 0.050,
      decaySec: 0.400,
      sustainLevel: 0.50,
      releaseSec: 0.440
    },
    {
      presetId: "FM-PRESET-118",
      label: "Synth Arp Voice 118",
      carrierWaveform: "triangle",
      modulatorWaveform: "sine",
      harmonicityRatio: 4.00,
      modulationIndex: 8.40,
      attackSec: 0.070,
      decaySec: 0.450,
      sustainLevel: 0.60,
      releaseSec: 0.520
    },
    {
      presetId: "FM-PRESET-119",
      label: "Synth Arp Voice 119",
      carrierWaveform: "square",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 4.50,
      modulationIndex: 9.20,
      attackSec: 0.090,
      decaySec: 0.500,
      sustainLevel: 0.70,
      releaseSec: 0.600
    },
    {
      presetId: "FM-PRESET-120",
      label: "Synth Arp Voice 120",
      carrierWaveform: "sine",
      modulatorWaveform: "sine",
      harmonicityRatio: 1.00,
      modulationIndex: 2.00,
      attackSec: 0.010,
      decaySec: 0.150,
      sustainLevel: 0.40,
      releaseSec: 0.200
    },
    {
      presetId: "FM-PRESET-121",
      label: "Synth Arp Voice 121",
      carrierWaveform: "sawtooth",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 1.50,
      modulationIndex: 2.80,
      attackSec: 0.030,
      decaySec: 0.200,
      sustainLevel: 0.50,
      releaseSec: 0.280
    },
    {
      presetId: "FM-PRESET-122",
      label: "Synth Arp Voice 122",
      carrierWaveform: "triangle",
      modulatorWaveform: "sine",
      harmonicityRatio: 2.00,
      modulationIndex: 3.60,
      attackSec: 0.050,
      decaySec: 0.250,
      sustainLevel: 0.60,
      releaseSec: 0.360
    },
    {
      presetId: "FM-PRESET-123",
      label: "Synth Arp Voice 123",
      carrierWaveform: "square",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 2.50,
      modulationIndex: 4.40,
      attackSec: 0.070,
      decaySec: 0.300,
      sustainLevel: 0.70,
      releaseSec: 0.440
    },
    {
      presetId: "FM-PRESET-124",
      label: "Synth Arp Voice 124",
      carrierWaveform: "sine",
      modulatorWaveform: "sine",
      harmonicityRatio: 3.00,
      modulationIndex: 5.20,
      attackSec: 0.090,
      decaySec: 0.350,
      sustainLevel: 0.40,
      releaseSec: 0.520
    },
    {
      presetId: "FM-PRESET-125",
      label: "Synth Arp Voice 125",
      carrierWaveform: "sawtooth",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 3.50,
      modulationIndex: 6.00,
      attackSec: 0.010,
      decaySec: 0.400,
      sustainLevel: 0.50,
      releaseSec: 0.600
    },
    {
      presetId: "FM-PRESET-126",
      label: "Synth Arp Voice 126",
      carrierWaveform: "triangle",
      modulatorWaveform: "sine",
      harmonicityRatio: 4.00,
      modulationIndex: 6.80,
      attackSec: 0.030,
      decaySec: 0.450,
      sustainLevel: 0.60,
      releaseSec: 0.200
    },
    {
      presetId: "FM-PRESET-127",
      label: "Synth Arp Voice 127",
      carrierWaveform: "square",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 4.50,
      modulationIndex: 7.60,
      attackSec: 0.050,
      decaySec: 0.500,
      sustainLevel: 0.70,
      releaseSec: 0.280
    },
    {
      presetId: "FM-PRESET-128",
      label: "Synth Arp Voice 128",
      carrierWaveform: "sine",
      modulatorWaveform: "sine",
      harmonicityRatio: 1.00,
      modulationIndex: 8.40,
      attackSec: 0.070,
      decaySec: 0.150,
      sustainLevel: 0.40,
      releaseSec: 0.360
    },
    {
      presetId: "FM-PRESET-129",
      label: "Synth Arp Voice 129",
      carrierWaveform: "sawtooth",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 1.50,
      modulationIndex: 9.20,
      attackSec: 0.090,
      decaySec: 0.200,
      sustainLevel: 0.50,
      releaseSec: 0.440
    },
    {
      presetId: "FM-PRESET-130",
      label: "Synth Arp Voice 130",
      carrierWaveform: "triangle",
      modulatorWaveform: "sine",
      harmonicityRatio: 2.00,
      modulationIndex: 2.00,
      attackSec: 0.010,
      decaySec: 0.250,
      sustainLevel: 0.60,
      releaseSec: 0.520
    },
    {
      presetId: "FM-PRESET-131",
      label: "Synth Arp Voice 131",
      carrierWaveform: "square",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 2.50,
      modulationIndex: 2.80,
      attackSec: 0.030,
      decaySec: 0.300,
      sustainLevel: 0.70,
      releaseSec: 0.600
    },
    {
      presetId: "FM-PRESET-132",
      label: "Synth Arp Voice 132",
      carrierWaveform: "sine",
      modulatorWaveform: "sine",
      harmonicityRatio: 3.00,
      modulationIndex: 3.60,
      attackSec: 0.050,
      decaySec: 0.350,
      sustainLevel: 0.40,
      releaseSec: 0.200
    },
    {
      presetId: "FM-PRESET-133",
      label: "Synth Arp Voice 133",
      carrierWaveform: "sawtooth",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 3.50,
      modulationIndex: 4.40,
      attackSec: 0.070,
      decaySec: 0.400,
      sustainLevel: 0.50,
      releaseSec: 0.280
    },
    {
      presetId: "FM-PRESET-134",
      label: "Synth Arp Voice 134",
      carrierWaveform: "triangle",
      modulatorWaveform: "sine",
      harmonicityRatio: 4.00,
      modulationIndex: 5.20,
      attackSec: 0.090,
      decaySec: 0.450,
      sustainLevel: 0.60,
      releaseSec: 0.360
    },
    {
      presetId: "FM-PRESET-135",
      label: "Synth Arp Voice 135",
      carrierWaveform: "square",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 4.50,
      modulationIndex: 6.00,
      attackSec: 0.010,
      decaySec: 0.500,
      sustainLevel: 0.70,
      releaseSec: 0.440
    },
    {
      presetId: "FM-PRESET-136",
      label: "Synth Arp Voice 136",
      carrierWaveform: "sine",
      modulatorWaveform: "sine",
      harmonicityRatio: 1.00,
      modulationIndex: 6.80,
      attackSec: 0.030,
      decaySec: 0.150,
      sustainLevel: 0.40,
      releaseSec: 0.520
    },
    {
      presetId: "FM-PRESET-137",
      label: "Synth Arp Voice 137",
      carrierWaveform: "sawtooth",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 1.50,
      modulationIndex: 7.60,
      attackSec: 0.050,
      decaySec: 0.200,
      sustainLevel: 0.50,
      releaseSec: 0.600
    },
    {
      presetId: "FM-PRESET-138",
      label: "Synth Arp Voice 138",
      carrierWaveform: "triangle",
      modulatorWaveform: "sine",
      harmonicityRatio: 2.00,
      modulationIndex: 8.40,
      attackSec: 0.070,
      decaySec: 0.250,
      sustainLevel: 0.60,
      releaseSec: 0.200
    },
    {
      presetId: "FM-PRESET-139",
      label: "Synth Arp Voice 139",
      carrierWaveform: "square",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 2.50,
      modulationIndex: 9.20,
      attackSec: 0.090,
      decaySec: 0.300,
      sustainLevel: 0.70,
      releaseSec: 0.280
    },
    {
      presetId: "FM-PRESET-140",
      label: "Synth Arp Voice 140",
      carrierWaveform: "sine",
      modulatorWaveform: "sine",
      harmonicityRatio: 3.00,
      modulationIndex: 2.00,
      attackSec: 0.010,
      decaySec: 0.350,
      sustainLevel: 0.40,
      releaseSec: 0.360
    },
    {
      presetId: "FM-PRESET-141",
      label: "Synth Arp Voice 141",
      carrierWaveform: "sawtooth",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 3.50,
      modulationIndex: 2.80,
      attackSec: 0.030,
      decaySec: 0.400,
      sustainLevel: 0.50,
      releaseSec: 0.440
    },
    {
      presetId: "FM-PRESET-142",
      label: "Synth Arp Voice 142",
      carrierWaveform: "triangle",
      modulatorWaveform: "sine",
      harmonicityRatio: 4.00,
      modulationIndex: 3.60,
      attackSec: 0.050,
      decaySec: 0.450,
      sustainLevel: 0.60,
      releaseSec: 0.520
    },
    {
      presetId: "FM-PRESET-143",
      label: "Synth Arp Voice 143",
      carrierWaveform: "square",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 4.50,
      modulationIndex: 4.40,
      attackSec: 0.070,
      decaySec: 0.500,
      sustainLevel: 0.70,
      releaseSec: 0.600
    },
    {
      presetId: "FM-PRESET-144",
      label: "Synth Arp Voice 144",
      carrierWaveform: "sine",
      modulatorWaveform: "sine",
      harmonicityRatio: 1.00,
      modulationIndex: 5.20,
      attackSec: 0.090,
      decaySec: 0.150,
      sustainLevel: 0.40,
      releaseSec: 0.200
    },
    {
      presetId: "FM-PRESET-145",
      label: "Synth Arp Voice 145",
      carrierWaveform: "sawtooth",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 1.50,
      modulationIndex: 6.00,
      attackSec: 0.010,
      decaySec: 0.200,
      sustainLevel: 0.50,
      releaseSec: 0.280
    },
    {
      presetId: "FM-PRESET-146",
      label: "Synth Arp Voice 146",
      carrierWaveform: "triangle",
      modulatorWaveform: "sine",
      harmonicityRatio: 2.00,
      modulationIndex: 6.80,
      attackSec: 0.030,
      decaySec: 0.250,
      sustainLevel: 0.60,
      releaseSec: 0.360
    },
    {
      presetId: "FM-PRESET-147",
      label: "Synth Arp Voice 147",
      carrierWaveform: "square",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 2.50,
      modulationIndex: 7.60,
      attackSec: 0.050,
      decaySec: 0.300,
      sustainLevel: 0.70,
      releaseSec: 0.440
    },
    {
      presetId: "FM-PRESET-148",
      label: "Synth Arp Voice 148",
      carrierWaveform: "sine",
      modulatorWaveform: "sine",
      harmonicityRatio: 3.00,
      modulationIndex: 8.40,
      attackSec: 0.070,
      decaySec: 0.350,
      sustainLevel: 0.40,
      releaseSec: 0.520
    },
    {
      presetId: "FM-PRESET-149",
      label: "Synth Arp Voice 149",
      carrierWaveform: "sawtooth",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 3.50,
      modulationIndex: 9.20,
      attackSec: 0.090,
      decaySec: 0.400,
      sustainLevel: 0.50,
      releaseSec: 0.600
    },
    {
      presetId: "FM-PRESET-150",
      label: "Synth Arp Voice 150",
      carrierWaveform: "triangle",
      modulatorWaveform: "sine",
      harmonicityRatio: 4.00,
      modulationIndex: 2.00,
      attackSec: 0.010,
      decaySec: 0.450,
      sustainLevel: 0.60,
      releaseSec: 0.200
    },
    {
      presetId: "FM-PRESET-151",
      label: "Synth Arp Voice 151",
      carrierWaveform: "square",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 4.50,
      modulationIndex: 2.80,
      attackSec: 0.030,
      decaySec: 0.500,
      sustainLevel: 0.70,
      releaseSec: 0.280
    },
    {
      presetId: "FM-PRESET-152",
      label: "Synth Arp Voice 152",
      carrierWaveform: "sine",
      modulatorWaveform: "sine",
      harmonicityRatio: 1.00,
      modulationIndex: 3.60,
      attackSec: 0.050,
      decaySec: 0.150,
      sustainLevel: 0.40,
      releaseSec: 0.360
    },
    {
      presetId: "FM-PRESET-153",
      label: "Synth Arp Voice 153",
      carrierWaveform: "sawtooth",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 1.50,
      modulationIndex: 4.40,
      attackSec: 0.070,
      decaySec: 0.200,
      sustainLevel: 0.50,
      releaseSec: 0.440
    },
    {
      presetId: "FM-PRESET-154",
      label: "Synth Arp Voice 154",
      carrierWaveform: "triangle",
      modulatorWaveform: "sine",
      harmonicityRatio: 2.00,
      modulationIndex: 5.20,
      attackSec: 0.090,
      decaySec: 0.250,
      sustainLevel: 0.60,
      releaseSec: 0.520
    },
    {
      presetId: "FM-PRESET-155",
      label: "Synth Arp Voice 155",
      carrierWaveform: "square",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 2.50,
      modulationIndex: 6.00,
      attackSec: 0.010,
      decaySec: 0.300,
      sustainLevel: 0.70,
      releaseSec: 0.600
    },
    {
      presetId: "FM-PRESET-156",
      label: "Synth Arp Voice 156",
      carrierWaveform: "sine",
      modulatorWaveform: "sine",
      harmonicityRatio: 3.00,
      modulationIndex: 6.80,
      attackSec: 0.030,
      decaySec: 0.350,
      sustainLevel: 0.40,
      releaseSec: 0.200
    },
    {
      presetId: "FM-PRESET-157",
      label: "Synth Arp Voice 157",
      carrierWaveform: "sawtooth",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 3.50,
      modulationIndex: 7.60,
      attackSec: 0.050,
      decaySec: 0.400,
      sustainLevel: 0.50,
      releaseSec: 0.280
    },
    {
      presetId: "FM-PRESET-158",
      label: "Synth Arp Voice 158",
      carrierWaveform: "triangle",
      modulatorWaveform: "sine",
      harmonicityRatio: 4.00,
      modulationIndex: 8.40,
      attackSec: 0.070,
      decaySec: 0.450,
      sustainLevel: 0.60,
      releaseSec: 0.360
    },
    {
      presetId: "FM-PRESET-159",
      label: "Synth Arp Voice 159",
      carrierWaveform: "square",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 4.50,
      modulationIndex: 9.20,
      attackSec: 0.090,
      decaySec: 0.500,
      sustainLevel: 0.70,
      releaseSec: 0.440
    },
    {
      presetId: "FM-PRESET-160",
      label: "Synth Arp Voice 160",
      carrierWaveform: "sine",
      modulatorWaveform: "sine",
      harmonicityRatio: 1.00,
      modulationIndex: 2.00,
      attackSec: 0.010,
      decaySec: 0.150,
      sustainLevel: 0.40,
      releaseSec: 0.520
    },
    {
      presetId: "FM-PRESET-161",
      label: "Synth Arp Voice 161",
      carrierWaveform: "sawtooth",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 1.50,
      modulationIndex: 2.80,
      attackSec: 0.030,
      decaySec: 0.200,
      sustainLevel: 0.50,
      releaseSec: 0.600
    },
    {
      presetId: "FM-PRESET-162",
      label: "Synth Arp Voice 162",
      carrierWaveform: "triangle",
      modulatorWaveform: "sine",
      harmonicityRatio: 2.00,
      modulationIndex: 3.60,
      attackSec: 0.050,
      decaySec: 0.250,
      sustainLevel: 0.60,
      releaseSec: 0.200
    },
    {
      presetId: "FM-PRESET-163",
      label: "Synth Arp Voice 163",
      carrierWaveform: "square",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 2.50,
      modulationIndex: 4.40,
      attackSec: 0.070,
      decaySec: 0.300,
      sustainLevel: 0.70,
      releaseSec: 0.280
    },
    {
      presetId: "FM-PRESET-164",
      label: "Synth Arp Voice 164",
      carrierWaveform: "sine",
      modulatorWaveform: "sine",
      harmonicityRatio: 3.00,
      modulationIndex: 5.20,
      attackSec: 0.090,
      decaySec: 0.350,
      sustainLevel: 0.40,
      releaseSec: 0.360
    },
    {
      presetId: "FM-PRESET-165",
      label: "Synth Arp Voice 165",
      carrierWaveform: "sawtooth",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 3.50,
      modulationIndex: 6.00,
      attackSec: 0.010,
      decaySec: 0.400,
      sustainLevel: 0.50,
      releaseSec: 0.440
    },
    {
      presetId: "FM-PRESET-166",
      label: "Synth Arp Voice 166",
      carrierWaveform: "triangle",
      modulatorWaveform: "sine",
      harmonicityRatio: 4.00,
      modulationIndex: 6.80,
      attackSec: 0.030,
      decaySec: 0.450,
      sustainLevel: 0.60,
      releaseSec: 0.520
    },
    {
      presetId: "FM-PRESET-167",
      label: "Synth Arp Voice 167",
      carrierWaveform: "square",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 4.50,
      modulationIndex: 7.60,
      attackSec: 0.050,
      decaySec: 0.500,
      sustainLevel: 0.70,
      releaseSec: 0.600
    },
    {
      presetId: "FM-PRESET-168",
      label: "Synth Arp Voice 168",
      carrierWaveform: "sine",
      modulatorWaveform: "sine",
      harmonicityRatio: 1.00,
      modulationIndex: 8.40,
      attackSec: 0.070,
      decaySec: 0.150,
      sustainLevel: 0.40,
      releaseSec: 0.200
    },
    {
      presetId: "FM-PRESET-169",
      label: "Synth Arp Voice 169",
      carrierWaveform: "sawtooth",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 1.50,
      modulationIndex: 9.20,
      attackSec: 0.090,
      decaySec: 0.200,
      sustainLevel: 0.50,
      releaseSec: 0.280
    },
    {
      presetId: "FM-PRESET-170",
      label: "Synth Arp Voice 170",
      carrierWaveform: "triangle",
      modulatorWaveform: "sine",
      harmonicityRatio: 2.00,
      modulationIndex: 2.00,
      attackSec: 0.010,
      decaySec: 0.250,
      sustainLevel: 0.60,
      releaseSec: 0.360
    },
    {
      presetId: "FM-PRESET-171",
      label: "Synth Arp Voice 171",
      carrierWaveform: "square",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 2.50,
      modulationIndex: 2.80,
      attackSec: 0.030,
      decaySec: 0.300,
      sustainLevel: 0.70,
      releaseSec: 0.440
    },
    {
      presetId: "FM-PRESET-172",
      label: "Synth Arp Voice 172",
      carrierWaveform: "sine",
      modulatorWaveform: "sine",
      harmonicityRatio: 3.00,
      modulationIndex: 3.60,
      attackSec: 0.050,
      decaySec: 0.350,
      sustainLevel: 0.40,
      releaseSec: 0.520
    },
    {
      presetId: "FM-PRESET-173",
      label: "Synth Arp Voice 173",
      carrierWaveform: "sawtooth",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 3.50,
      modulationIndex: 4.40,
      attackSec: 0.070,
      decaySec: 0.400,
      sustainLevel: 0.50,
      releaseSec: 0.600
    },
    {
      presetId: "FM-PRESET-174",
      label: "Synth Arp Voice 174",
      carrierWaveform: "triangle",
      modulatorWaveform: "sine",
      harmonicityRatio: 4.00,
      modulationIndex: 5.20,
      attackSec: 0.090,
      decaySec: 0.450,
      sustainLevel: 0.60,
      releaseSec: 0.200
    },
    {
      presetId: "FM-PRESET-175",
      label: "Synth Arp Voice 175",
      carrierWaveform: "square",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 4.50,
      modulationIndex: 6.00,
      attackSec: 0.010,
      decaySec: 0.500,
      sustainLevel: 0.70,
      releaseSec: 0.280
    },
    {
      presetId: "FM-PRESET-176",
      label: "Synth Arp Voice 176",
      carrierWaveform: "sine",
      modulatorWaveform: "sine",
      harmonicityRatio: 1.00,
      modulationIndex: 6.80,
      attackSec: 0.030,
      decaySec: 0.150,
      sustainLevel: 0.40,
      releaseSec: 0.360
    },
    {
      presetId: "FM-PRESET-177",
      label: "Synth Arp Voice 177",
      carrierWaveform: "sawtooth",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 1.50,
      modulationIndex: 7.60,
      attackSec: 0.050,
      decaySec: 0.200,
      sustainLevel: 0.50,
      releaseSec: 0.440
    },
    {
      presetId: "FM-PRESET-178",
      label: "Synth Arp Voice 178",
      carrierWaveform: "triangle",
      modulatorWaveform: "sine",
      harmonicityRatio: 2.00,
      modulationIndex: 8.40,
      attackSec: 0.070,
      decaySec: 0.250,
      sustainLevel: 0.60,
      releaseSec: 0.520
    },
    {
      presetId: "FM-PRESET-179",
      label: "Synth Arp Voice 179",
      carrierWaveform: "square",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 2.50,
      modulationIndex: 9.20,
      attackSec: 0.090,
      decaySec: 0.300,
      sustainLevel: 0.70,
      releaseSec: 0.600
    },
    {
      presetId: "FM-PRESET-180",
      label: "Synth Arp Voice 180",
      carrierWaveform: "sine",
      modulatorWaveform: "sine",
      harmonicityRatio: 3.00,
      modulationIndex: 2.00,
      attackSec: 0.010,
      decaySec: 0.350,
      sustainLevel: 0.40,
      releaseSec: 0.200
    },
    {
      presetId: "FM-PRESET-181",
      label: "Synth Arp Voice 181",
      carrierWaveform: "sawtooth",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 3.50,
      modulationIndex: 2.80,
      attackSec: 0.030,
      decaySec: 0.400,
      sustainLevel: 0.50,
      releaseSec: 0.280
    },
    {
      presetId: "FM-PRESET-182",
      label: "Synth Arp Voice 182",
      carrierWaveform: "triangle",
      modulatorWaveform: "sine",
      harmonicityRatio: 4.00,
      modulationIndex: 3.60,
      attackSec: 0.050,
      decaySec: 0.450,
      sustainLevel: 0.60,
      releaseSec: 0.360
    },
    {
      presetId: "FM-PRESET-183",
      label: "Synth Arp Voice 183",
      carrierWaveform: "square",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 4.50,
      modulationIndex: 4.40,
      attackSec: 0.070,
      decaySec: 0.500,
      sustainLevel: 0.70,
      releaseSec: 0.440
    },
    {
      presetId: "FM-PRESET-184",
      label: "Synth Arp Voice 184",
      carrierWaveform: "sine",
      modulatorWaveform: "sine",
      harmonicityRatio: 1.00,
      modulationIndex: 5.20,
      attackSec: 0.090,
      decaySec: 0.150,
      sustainLevel: 0.40,
      releaseSec: 0.520
    },
    {
      presetId: "FM-PRESET-185",
      label: "Synth Arp Voice 185",
      carrierWaveform: "sawtooth",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 1.50,
      modulationIndex: 6.00,
      attackSec: 0.010,
      decaySec: 0.200,
      sustainLevel: 0.50,
      releaseSec: 0.600
    },
    {
      presetId: "FM-PRESET-186",
      label: "Synth Arp Voice 186",
      carrierWaveform: "triangle",
      modulatorWaveform: "sine",
      harmonicityRatio: 2.00,
      modulationIndex: 6.80,
      attackSec: 0.030,
      decaySec: 0.250,
      sustainLevel: 0.60,
      releaseSec: 0.200
    },
    {
      presetId: "FM-PRESET-187",
      label: "Synth Arp Voice 187",
      carrierWaveform: "square",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 2.50,
      modulationIndex: 7.60,
      attackSec: 0.050,
      decaySec: 0.300,
      sustainLevel: 0.70,
      releaseSec: 0.280
    },
    {
      presetId: "FM-PRESET-188",
      label: "Synth Arp Voice 188",
      carrierWaveform: "sine",
      modulatorWaveform: "sine",
      harmonicityRatio: 3.00,
      modulationIndex: 8.40,
      attackSec: 0.070,
      decaySec: 0.350,
      sustainLevel: 0.40,
      releaseSec: 0.360
    },
    {
      presetId: "FM-PRESET-189",
      label: "Synth Arp Voice 189",
      carrierWaveform: "sawtooth",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 3.50,
      modulationIndex: 9.20,
      attackSec: 0.090,
      decaySec: 0.400,
      sustainLevel: 0.50,
      releaseSec: 0.440
    },
    {
      presetId: "FM-PRESET-190",
      label: "Synth Arp Voice 190",
      carrierWaveform: "triangle",
      modulatorWaveform: "sine",
      harmonicityRatio: 4.00,
      modulationIndex: 2.00,
      attackSec: 0.010,
      decaySec: 0.450,
      sustainLevel: 0.60,
      releaseSec: 0.520
    },
    {
      presetId: "FM-PRESET-191",
      label: "Synth Arp Voice 191",
      carrierWaveform: "square",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 4.50,
      modulationIndex: 2.80,
      attackSec: 0.030,
      decaySec: 0.500,
      sustainLevel: 0.70,
      releaseSec: 0.600
    },
    {
      presetId: "FM-PRESET-192",
      label: "Synth Arp Voice 192",
      carrierWaveform: "sine",
      modulatorWaveform: "sine",
      harmonicityRatio: 1.00,
      modulationIndex: 3.60,
      attackSec: 0.050,
      decaySec: 0.150,
      sustainLevel: 0.40,
      releaseSec: 0.200
    },
    {
      presetId: "FM-PRESET-193",
      label: "Synth Arp Voice 193",
      carrierWaveform: "sawtooth",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 1.50,
      modulationIndex: 4.40,
      attackSec: 0.070,
      decaySec: 0.200,
      sustainLevel: 0.50,
      releaseSec: 0.280
    },
    {
      presetId: "FM-PRESET-194",
      label: "Synth Arp Voice 194",
      carrierWaveform: "triangle",
      modulatorWaveform: "sine",
      harmonicityRatio: 2.00,
      modulationIndex: 5.20,
      attackSec: 0.090,
      decaySec: 0.250,
      sustainLevel: 0.60,
      releaseSec: 0.360
    },
    {
      presetId: "FM-PRESET-195",
      label: "Synth Arp Voice 195",
      carrierWaveform: "square",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 2.50,
      modulationIndex: 6.00,
      attackSec: 0.010,
      decaySec: 0.300,
      sustainLevel: 0.70,
      releaseSec: 0.440
    },
    {
      presetId: "FM-PRESET-196",
      label: "Synth Arp Voice 196",
      carrierWaveform: "sine",
      modulatorWaveform: "sine",
      harmonicityRatio: 3.00,
      modulationIndex: 6.80,
      attackSec: 0.030,
      decaySec: 0.350,
      sustainLevel: 0.40,
      releaseSec: 0.520
    },
    {
      presetId: "FM-PRESET-197",
      label: "Synth Arp Voice 197",
      carrierWaveform: "sawtooth",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 3.50,
      modulationIndex: 7.60,
      attackSec: 0.050,
      decaySec: 0.400,
      sustainLevel: 0.50,
      releaseSec: 0.600
    },
    {
      presetId: "FM-PRESET-198",
      label: "Synth Arp Voice 198",
      carrierWaveform: "triangle",
      modulatorWaveform: "sine",
      harmonicityRatio: 4.00,
      modulationIndex: 8.40,
      attackSec: 0.070,
      decaySec: 0.450,
      sustainLevel: 0.60,
      releaseSec: 0.200
    },
    {
      presetId: "FM-PRESET-199",
      label: "Synth Arp Voice 199",
      carrierWaveform: "square",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 4.50,
      modulationIndex: 9.20,
      attackSec: 0.090,
      decaySec: 0.500,
      sustainLevel: 0.70,
      releaseSec: 0.280
    },
    {
      presetId: "FM-PRESET-200",
      label: "Synth Arp Voice 200",
      carrierWaveform: "sine",
      modulatorWaveform: "sine",
      harmonicityRatio: 1.00,
      modulationIndex: 2.00,
      attackSec: 0.010,
      decaySec: 0.150,
      sustainLevel: 0.40,
      releaseSec: 0.360
    },
    {
      presetId: "FM-PRESET-201",
      label: "Synth Arp Voice 201",
      carrierWaveform: "sawtooth",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 1.50,
      modulationIndex: 2.80,
      attackSec: 0.030,
      decaySec: 0.200,
      sustainLevel: 0.50,
      releaseSec: 0.440
    },
    {
      presetId: "FM-PRESET-202",
      label: "Synth Arp Voice 202",
      carrierWaveform: "triangle",
      modulatorWaveform: "sine",
      harmonicityRatio: 2.00,
      modulationIndex: 3.60,
      attackSec: 0.050,
      decaySec: 0.250,
      sustainLevel: 0.60,
      releaseSec: 0.520
    },
    {
      presetId: "FM-PRESET-203",
      label: "Synth Arp Voice 203",
      carrierWaveform: "square",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 2.50,
      modulationIndex: 4.40,
      attackSec: 0.070,
      decaySec: 0.300,
      sustainLevel: 0.70,
      releaseSec: 0.600
    },
    {
      presetId: "FM-PRESET-204",
      label: "Synth Arp Voice 204",
      carrierWaveform: "sine",
      modulatorWaveform: "sine",
      harmonicityRatio: 3.00,
      modulationIndex: 5.20,
      attackSec: 0.090,
      decaySec: 0.350,
      sustainLevel: 0.40,
      releaseSec: 0.200
    },
    {
      presetId: "FM-PRESET-205",
      label: "Synth Arp Voice 205",
      carrierWaveform: "sawtooth",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 3.50,
      modulationIndex: 6.00,
      attackSec: 0.010,
      decaySec: 0.400,
      sustainLevel: 0.50,
      releaseSec: 0.280
    },
    {
      presetId: "FM-PRESET-206",
      label: "Synth Arp Voice 206",
      carrierWaveform: "triangle",
      modulatorWaveform: "sine",
      harmonicityRatio: 4.00,
      modulationIndex: 6.80,
      attackSec: 0.030,
      decaySec: 0.450,
      sustainLevel: 0.60,
      releaseSec: 0.360
    },
    {
      presetId: "FM-PRESET-207",
      label: "Synth Arp Voice 207",
      carrierWaveform: "square",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 4.50,
      modulationIndex: 7.60,
      attackSec: 0.050,
      decaySec: 0.500,
      sustainLevel: 0.70,
      releaseSec: 0.440
    },
    {
      presetId: "FM-PRESET-208",
      label: "Synth Arp Voice 208",
      carrierWaveform: "sine",
      modulatorWaveform: "sine",
      harmonicityRatio: 1.00,
      modulationIndex: 8.40,
      attackSec: 0.070,
      decaySec: 0.150,
      sustainLevel: 0.40,
      releaseSec: 0.520
    },
    {
      presetId: "FM-PRESET-209",
      label: "Synth Arp Voice 209",
      carrierWaveform: "sawtooth",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 1.50,
      modulationIndex: 9.20,
      attackSec: 0.090,
      decaySec: 0.200,
      sustainLevel: 0.50,
      releaseSec: 0.600
    },
    {
      presetId: "FM-PRESET-210",
      label: "Synth Arp Voice 210",
      carrierWaveform: "triangle",
      modulatorWaveform: "sine",
      harmonicityRatio: 2.00,
      modulationIndex: 2.00,
      attackSec: 0.010,
      decaySec: 0.250,
      sustainLevel: 0.60,
      releaseSec: 0.200
    },
    {
      presetId: "FM-PRESET-211",
      label: "Synth Arp Voice 211",
      carrierWaveform: "square",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 2.50,
      modulationIndex: 2.80,
      attackSec: 0.030,
      decaySec: 0.300,
      sustainLevel: 0.70,
      releaseSec: 0.280
    },
    {
      presetId: "FM-PRESET-212",
      label: "Synth Arp Voice 212",
      carrierWaveform: "sine",
      modulatorWaveform: "sine",
      harmonicityRatio: 3.00,
      modulationIndex: 3.60,
      attackSec: 0.050,
      decaySec: 0.350,
      sustainLevel: 0.40,
      releaseSec: 0.360
    },
    {
      presetId: "FM-PRESET-213",
      label: "Synth Arp Voice 213",
      carrierWaveform: "sawtooth",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 3.50,
      modulationIndex: 4.40,
      attackSec: 0.070,
      decaySec: 0.400,
      sustainLevel: 0.50,
      releaseSec: 0.440
    },
    {
      presetId: "FM-PRESET-214",
      label: "Synth Arp Voice 214",
      carrierWaveform: "triangle",
      modulatorWaveform: "sine",
      harmonicityRatio: 4.00,
      modulationIndex: 5.20,
      attackSec: 0.090,
      decaySec: 0.450,
      sustainLevel: 0.60,
      releaseSec: 0.520
    },
    {
      presetId: "FM-PRESET-215",
      label: "Synth Arp Voice 215",
      carrierWaveform: "square",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 4.50,
      modulationIndex: 6.00,
      attackSec: 0.010,
      decaySec: 0.500,
      sustainLevel: 0.70,
      releaseSec: 0.600
    },
    {
      presetId: "FM-PRESET-216",
      label: "Synth Arp Voice 216",
      carrierWaveform: "sine",
      modulatorWaveform: "sine",
      harmonicityRatio: 1.00,
      modulationIndex: 6.80,
      attackSec: 0.030,
      decaySec: 0.150,
      sustainLevel: 0.40,
      releaseSec: 0.200
    },
    {
      presetId: "FM-PRESET-217",
      label: "Synth Arp Voice 217",
      carrierWaveform: "sawtooth",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 1.50,
      modulationIndex: 7.60,
      attackSec: 0.050,
      decaySec: 0.200,
      sustainLevel: 0.50,
      releaseSec: 0.280
    },
    {
      presetId: "FM-PRESET-218",
      label: "Synth Arp Voice 218",
      carrierWaveform: "triangle",
      modulatorWaveform: "sine",
      harmonicityRatio: 2.00,
      modulationIndex: 8.40,
      attackSec: 0.070,
      decaySec: 0.250,
      sustainLevel: 0.60,
      releaseSec: 0.360
    },
    {
      presetId: "FM-PRESET-219",
      label: "Synth Arp Voice 219",
      carrierWaveform: "square",
      modulatorWaveform: "sawtooth",
      harmonicityRatio: 2.50,
      modulationIndex: 9.20,
      attackSec: 0.090,
      decaySec: 0.300,
      sustainLevel: 0.70,
      releaseSec: 0.440
    },
    {
      presetId: "FM-PRESET-220",
      label: "Synth Arp Voice 220",
      carrierWaveform: "sine",
      modulatorWaveform: "sine",
      harmonicityRatio: 3.00,
      modulationIndex: 2.00,
      attackSec: 0.010,
      decaySec: 0.350,
      sustainLevel: 0.40,
      releaseSec: 0.520
    },
  ]
};
