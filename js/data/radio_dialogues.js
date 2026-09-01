/**
 * ============================================================================
 * CYBERPUNK RACER // RADIO DISPATCH & SCANNER BROADCAST DATABASE
 * Dynamic radio chatter, highway patrol intercept transmissions,
 * and pilot communication banter triggered during live races.
 * ============================================================================
 */

window.CyberpunkRadioDB = {
  transmissions: [
    {
      transmissionId: "RADIO-0001",
      channel: "STREET_RACER_CB",
      sender: "Control",
      frequencyMhz: 104.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 2. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0002",
      channel: "GRID_WEATHER_ALERT",
      sender: "Dispatcher Reyes",
      frequencyMhz: 104.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 3. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0003",
      channel: "PIT_CREW_CREW",
      sender: "Ghost-Lead",
      frequencyMhz: 105.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 4. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0004",
      channel: "EMERGENCY_BROADCAST",
      sender: "Mechanic Sal",
      frequencyMhz: 105.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 5. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0005",
      channel: "PATROL_DISPATCH",
      sender: "Street-Eye-9",
      frequencyMhz: 105.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 6. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0006",
      channel: "STREET_RACER_CB",
      sender: "Interceptor-01",
      frequencyMhz: 105.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 7. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0007",
      channel: "GRID_WEATHER_ALERT",
      sender: "Highway-Core",
      frequencyMhz: 105.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 8. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0008",
      channel: "PIT_CREW_CREW",
      sender: "Unit-404",
      frequencyMhz: 106.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 9. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0009",
      channel: "EMERGENCY_BROADCAST",
      sender: "Control",
      frequencyMhz: 106.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 10. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0010",
      channel: "PATROL_DISPATCH",
      sender: "Dispatcher Reyes",
      frequencyMhz: 106.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 11. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0011",
      channel: "STREET_RACER_CB",
      sender: "Ghost-Lead",
      frequencyMhz: 106.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 12. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0012",
      channel: "GRID_WEATHER_ALERT",
      sender: "Mechanic Sal",
      frequencyMhz: 106.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 1. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0013",
      channel: "PIT_CREW_CREW",
      sender: "Street-Eye-9",
      frequencyMhz: 107.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 2. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0014",
      channel: "EMERGENCY_BROADCAST",
      sender: "Interceptor-01",
      frequencyMhz: 107.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 3. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0015",
      channel: "PATROL_DISPATCH",
      sender: "Highway-Core",
      frequencyMhz: 107.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 4. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0016",
      channel: "STREET_RACER_CB",
      sender: "Unit-404",
      frequencyMhz: 107.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 5. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0017",
      channel: "GRID_WEATHER_ALERT",
      sender: "Control",
      frequencyMhz: 107.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 6. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0018",
      channel: "PIT_CREW_CREW",
      sender: "Dispatcher Reyes",
      frequencyMhz: 108.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 7. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0019",
      channel: "EMERGENCY_BROADCAST",
      sender: "Ghost-Lead",
      frequencyMhz: 108.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 8. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0020",
      channel: "PATROL_DISPATCH",
      sender: "Mechanic Sal",
      frequencyMhz: 108.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 9. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0021",
      channel: "STREET_RACER_CB",
      sender: "Street-Eye-9",
      frequencyMhz: 108.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 10. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0022",
      channel: "GRID_WEATHER_ALERT",
      sender: "Interceptor-01",
      frequencyMhz: 108.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 11. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0023",
      channel: "PIT_CREW_CREW",
      sender: "Highway-Core",
      frequencyMhz: 109.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 12. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0024",
      channel: "EMERGENCY_BROADCAST",
      sender: "Unit-404",
      frequencyMhz: 109.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 1. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0025",
      channel: "PATROL_DISPATCH",
      sender: "Control",
      frequencyMhz: 109.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 2. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0026",
      channel: "STREET_RACER_CB",
      sender: "Dispatcher Reyes",
      frequencyMhz: 109.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 3. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0027",
      channel: "GRID_WEATHER_ALERT",
      sender: "Ghost-Lead",
      frequencyMhz: 109.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 4. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0028",
      channel: "PIT_CREW_CREW",
      sender: "Mechanic Sal",
      frequencyMhz: 110.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 5. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0029",
      channel: "EMERGENCY_BROADCAST",
      sender: "Street-Eye-9",
      frequencyMhz: 110.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 6. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0030",
      channel: "PATROL_DISPATCH",
      sender: "Interceptor-01",
      frequencyMhz: 110.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 7. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0031",
      channel: "STREET_RACER_CB",
      sender: "Highway-Core",
      frequencyMhz: 110.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 8. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0032",
      channel: "GRID_WEATHER_ALERT",
      sender: "Unit-404",
      frequencyMhz: 110.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 9. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0033",
      channel: "PIT_CREW_CREW",
      sender: "Control",
      frequencyMhz: 111.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 10. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0034",
      channel: "EMERGENCY_BROADCAST",
      sender: "Dispatcher Reyes",
      frequencyMhz: 111.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 11. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0035",
      channel: "PATROL_DISPATCH",
      sender: "Ghost-Lead",
      frequencyMhz: 111.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 12. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0036",
      channel: "STREET_RACER_CB",
      sender: "Mechanic Sal",
      frequencyMhz: 111.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 1. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0037",
      channel: "GRID_WEATHER_ALERT",
      sender: "Street-Eye-9",
      frequencyMhz: 111.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 2. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0038",
      channel: "PIT_CREW_CREW",
      sender: "Interceptor-01",
      frequencyMhz: 112.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 3. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0039",
      channel: "EMERGENCY_BROADCAST",
      sender: "Highway-Core",
      frequencyMhz: 112.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 4. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0040",
      channel: "PATROL_DISPATCH",
      sender: "Unit-404",
      frequencyMhz: 112.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 5. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0041",
      channel: "STREET_RACER_CB",
      sender: "Control",
      frequencyMhz: 112.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 6. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0042",
      channel: "GRID_WEATHER_ALERT",
      sender: "Dispatcher Reyes",
      frequencyMhz: 112.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 7. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0043",
      channel: "PIT_CREW_CREW",
      sender: "Ghost-Lead",
      frequencyMhz: 113.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 8. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0044",
      channel: "EMERGENCY_BROADCAST",
      sender: "Mechanic Sal",
      frequencyMhz: 113.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 9. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0045",
      channel: "PATROL_DISPATCH",
      sender: "Street-Eye-9",
      frequencyMhz: 113.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 10. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0046",
      channel: "STREET_RACER_CB",
      sender: "Interceptor-01",
      frequencyMhz: 113.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 11. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0047",
      channel: "GRID_WEATHER_ALERT",
      sender: "Highway-Core",
      frequencyMhz: 113.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 12. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0048",
      channel: "PIT_CREW_CREW",
      sender: "Unit-404",
      frequencyMhz: 114.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 1. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0049",
      channel: "EMERGENCY_BROADCAST",
      sender: "Control",
      frequencyMhz: 114.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 2. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0050",
      channel: "PATROL_DISPATCH",
      sender: "Dispatcher Reyes",
      frequencyMhz: 104.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 3. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0051",
      channel: "STREET_RACER_CB",
      sender: "Ghost-Lead",
      frequencyMhz: 104.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 4. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0052",
      channel: "GRID_WEATHER_ALERT",
      sender: "Mechanic Sal",
      frequencyMhz: 104.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 5. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0053",
      channel: "PIT_CREW_CREW",
      sender: "Street-Eye-9",
      frequencyMhz: 105.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 6. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0054",
      channel: "EMERGENCY_BROADCAST",
      sender: "Interceptor-01",
      frequencyMhz: 105.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 7. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0055",
      channel: "PATROL_DISPATCH",
      sender: "Highway-Core",
      frequencyMhz: 105.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 8. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0056",
      channel: "STREET_RACER_CB",
      sender: "Unit-404",
      frequencyMhz: 105.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 9. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0057",
      channel: "GRID_WEATHER_ALERT",
      sender: "Control",
      frequencyMhz: 105.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 10. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0058",
      channel: "PIT_CREW_CREW",
      sender: "Dispatcher Reyes",
      frequencyMhz: 106.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 11. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0059",
      channel: "EMERGENCY_BROADCAST",
      sender: "Ghost-Lead",
      frequencyMhz: 106.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 12. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0060",
      channel: "PATROL_DISPATCH",
      sender: "Mechanic Sal",
      frequencyMhz: 106.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 1. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0061",
      channel: "STREET_RACER_CB",
      sender: "Street-Eye-9",
      frequencyMhz: 106.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 2. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0062",
      channel: "GRID_WEATHER_ALERT",
      sender: "Interceptor-01",
      frequencyMhz: 106.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 3. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0063",
      channel: "PIT_CREW_CREW",
      sender: "Highway-Core",
      frequencyMhz: 107.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 4. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0064",
      channel: "EMERGENCY_BROADCAST",
      sender: "Unit-404",
      frequencyMhz: 107.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 5. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0065",
      channel: "PATROL_DISPATCH",
      sender: "Control",
      frequencyMhz: 107.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 6. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0066",
      channel: "STREET_RACER_CB",
      sender: "Dispatcher Reyes",
      frequencyMhz: 107.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 7. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0067",
      channel: "GRID_WEATHER_ALERT",
      sender: "Ghost-Lead",
      frequencyMhz: 107.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 8. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0068",
      channel: "PIT_CREW_CREW",
      sender: "Mechanic Sal",
      frequencyMhz: 108.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 9. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0069",
      channel: "EMERGENCY_BROADCAST",
      sender: "Street-Eye-9",
      frequencyMhz: 108.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 10. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0070",
      channel: "PATROL_DISPATCH",
      sender: "Interceptor-01",
      frequencyMhz: 108.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 11. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0071",
      channel: "STREET_RACER_CB",
      sender: "Highway-Core",
      frequencyMhz: 108.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 12. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0072",
      channel: "GRID_WEATHER_ALERT",
      sender: "Unit-404",
      frequencyMhz: 108.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 1. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0073",
      channel: "PIT_CREW_CREW",
      sender: "Control",
      frequencyMhz: 109.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 2. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0074",
      channel: "EMERGENCY_BROADCAST",
      sender: "Dispatcher Reyes",
      frequencyMhz: 109.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 3. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0075",
      channel: "PATROL_DISPATCH",
      sender: "Ghost-Lead",
      frequencyMhz: 109.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 4. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0076",
      channel: "STREET_RACER_CB",
      sender: "Mechanic Sal",
      frequencyMhz: 109.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 5. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0077",
      channel: "GRID_WEATHER_ALERT",
      sender: "Street-Eye-9",
      frequencyMhz: 109.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 6. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0078",
      channel: "PIT_CREW_CREW",
      sender: "Interceptor-01",
      frequencyMhz: 110.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 7. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0079",
      channel: "EMERGENCY_BROADCAST",
      sender: "Highway-Core",
      frequencyMhz: 110.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 8. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0080",
      channel: "PATROL_DISPATCH",
      sender: "Unit-404",
      frequencyMhz: 110.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 9. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0081",
      channel: "STREET_RACER_CB",
      sender: "Control",
      frequencyMhz: 110.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 10. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0082",
      channel: "GRID_WEATHER_ALERT",
      sender: "Dispatcher Reyes",
      frequencyMhz: 110.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 11. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0083",
      channel: "PIT_CREW_CREW",
      sender: "Ghost-Lead",
      frequencyMhz: 111.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 12. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0084",
      channel: "EMERGENCY_BROADCAST",
      sender: "Mechanic Sal",
      frequencyMhz: 111.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 1. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0085",
      channel: "PATROL_DISPATCH",
      sender: "Street-Eye-9",
      frequencyMhz: 111.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 2. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0086",
      channel: "STREET_RACER_CB",
      sender: "Interceptor-01",
      frequencyMhz: 111.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 3. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0087",
      channel: "GRID_WEATHER_ALERT",
      sender: "Highway-Core",
      frequencyMhz: 111.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 4. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0088",
      channel: "PIT_CREW_CREW",
      sender: "Unit-404",
      frequencyMhz: 112.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 5. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0089",
      channel: "EMERGENCY_BROADCAST",
      sender: "Control",
      frequencyMhz: 112.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 6. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0090",
      channel: "PATROL_DISPATCH",
      sender: "Dispatcher Reyes",
      frequencyMhz: 112.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 7. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0091",
      channel: "STREET_RACER_CB",
      sender: "Ghost-Lead",
      frequencyMhz: 112.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 8. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0092",
      channel: "GRID_WEATHER_ALERT",
      sender: "Mechanic Sal",
      frequencyMhz: 112.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 9. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0093",
      channel: "PIT_CREW_CREW",
      sender: "Street-Eye-9",
      frequencyMhz: 113.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 10. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0094",
      channel: "EMERGENCY_BROADCAST",
      sender: "Interceptor-01",
      frequencyMhz: 113.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 11. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0095",
      channel: "PATROL_DISPATCH",
      sender: "Highway-Core",
      frequencyMhz: 113.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 12. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0096",
      channel: "STREET_RACER_CB",
      sender: "Unit-404",
      frequencyMhz: 113.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 1. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0097",
      channel: "GRID_WEATHER_ALERT",
      sender: "Control",
      frequencyMhz: 113.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 2. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0098",
      channel: "PIT_CREW_CREW",
      sender: "Dispatcher Reyes",
      frequencyMhz: 114.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 3. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0099",
      channel: "EMERGENCY_BROADCAST",
      sender: "Ghost-Lead",
      frequencyMhz: 114.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 4. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0100",
      channel: "PATROL_DISPATCH",
      sender: "Mechanic Sal",
      frequencyMhz: 104.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 5. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0101",
      channel: "STREET_RACER_CB",
      sender: "Street-Eye-9",
      frequencyMhz: 104.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 6. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0102",
      channel: "GRID_WEATHER_ALERT",
      sender: "Interceptor-01",
      frequencyMhz: 104.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 7. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0103",
      channel: "PIT_CREW_CREW",
      sender: "Highway-Core",
      frequencyMhz: 105.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 8. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0104",
      channel: "EMERGENCY_BROADCAST",
      sender: "Unit-404",
      frequencyMhz: 105.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 9. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0105",
      channel: "PATROL_DISPATCH",
      sender: "Control",
      frequencyMhz: 105.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 10. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0106",
      channel: "STREET_RACER_CB",
      sender: "Dispatcher Reyes",
      frequencyMhz: 105.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 11. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0107",
      channel: "GRID_WEATHER_ALERT",
      sender: "Ghost-Lead",
      frequencyMhz: 105.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 12. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0108",
      channel: "PIT_CREW_CREW",
      sender: "Mechanic Sal",
      frequencyMhz: 106.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 1. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0109",
      channel: "EMERGENCY_BROADCAST",
      sender: "Street-Eye-9",
      frequencyMhz: 106.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 2. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0110",
      channel: "PATROL_DISPATCH",
      sender: "Interceptor-01",
      frequencyMhz: 106.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 3. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0111",
      channel: "STREET_RACER_CB",
      sender: "Highway-Core",
      frequencyMhz: 106.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 4. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0112",
      channel: "GRID_WEATHER_ALERT",
      sender: "Unit-404",
      frequencyMhz: 106.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 5. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0113",
      channel: "PIT_CREW_CREW",
      sender: "Control",
      frequencyMhz: 107.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 6. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0114",
      channel: "EMERGENCY_BROADCAST",
      sender: "Dispatcher Reyes",
      frequencyMhz: 107.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 7. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0115",
      channel: "PATROL_DISPATCH",
      sender: "Ghost-Lead",
      frequencyMhz: 107.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 8. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0116",
      channel: "STREET_RACER_CB",
      sender: "Mechanic Sal",
      frequencyMhz: 107.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 9. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0117",
      channel: "GRID_WEATHER_ALERT",
      sender: "Street-Eye-9",
      frequencyMhz: 107.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 10. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0118",
      channel: "PIT_CREW_CREW",
      sender: "Interceptor-01",
      frequencyMhz: 108.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 11. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0119",
      channel: "EMERGENCY_BROADCAST",
      sender: "Highway-Core",
      frequencyMhz: 108.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 12. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0120",
      channel: "PATROL_DISPATCH",
      sender: "Unit-404",
      frequencyMhz: 108.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 1. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0121",
      channel: "STREET_RACER_CB",
      sender: "Control",
      frequencyMhz: 108.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 2. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0122",
      channel: "GRID_WEATHER_ALERT",
      sender: "Dispatcher Reyes",
      frequencyMhz: 108.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 3. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0123",
      channel: "PIT_CREW_CREW",
      sender: "Ghost-Lead",
      frequencyMhz: 109.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 4. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0124",
      channel: "EMERGENCY_BROADCAST",
      sender: "Mechanic Sal",
      frequencyMhz: 109.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 5. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0125",
      channel: "PATROL_DISPATCH",
      sender: "Street-Eye-9",
      frequencyMhz: 109.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 6. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0126",
      channel: "STREET_RACER_CB",
      sender: "Interceptor-01",
      frequencyMhz: 109.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 7. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0127",
      channel: "GRID_WEATHER_ALERT",
      sender: "Highway-Core",
      frequencyMhz: 109.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 8. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0128",
      channel: "PIT_CREW_CREW",
      sender: "Unit-404",
      frequencyMhz: 110.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 9. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0129",
      channel: "EMERGENCY_BROADCAST",
      sender: "Control",
      frequencyMhz: 110.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 10. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0130",
      channel: "PATROL_DISPATCH",
      sender: "Dispatcher Reyes",
      frequencyMhz: 110.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 11. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0131",
      channel: "STREET_RACER_CB",
      sender: "Ghost-Lead",
      frequencyMhz: 110.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 12. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0132",
      channel: "GRID_WEATHER_ALERT",
      sender: "Mechanic Sal",
      frequencyMhz: 110.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 1. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0133",
      channel: "PIT_CREW_CREW",
      sender: "Street-Eye-9",
      frequencyMhz: 111.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 2. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0134",
      channel: "EMERGENCY_BROADCAST",
      sender: "Interceptor-01",
      frequencyMhz: 111.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 3. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0135",
      channel: "PATROL_DISPATCH",
      sender: "Highway-Core",
      frequencyMhz: 111.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 4. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0136",
      channel: "STREET_RACER_CB",
      sender: "Unit-404",
      frequencyMhz: 111.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 5. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0137",
      channel: "GRID_WEATHER_ALERT",
      sender: "Control",
      frequencyMhz: 111.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 6. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0138",
      channel: "PIT_CREW_CREW",
      sender: "Dispatcher Reyes",
      frequencyMhz: 112.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 7. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0139",
      channel: "EMERGENCY_BROADCAST",
      sender: "Ghost-Lead",
      frequencyMhz: 112.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 8. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0140",
      channel: "PATROL_DISPATCH",
      sender: "Mechanic Sal",
      frequencyMhz: 112.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 9. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0141",
      channel: "STREET_RACER_CB",
      sender: "Street-Eye-9",
      frequencyMhz: 112.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 10. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0142",
      channel: "GRID_WEATHER_ALERT",
      sender: "Interceptor-01",
      frequencyMhz: 112.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 11. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0143",
      channel: "PIT_CREW_CREW",
      sender: "Highway-Core",
      frequencyMhz: 113.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 12. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0144",
      channel: "EMERGENCY_BROADCAST",
      sender: "Unit-404",
      frequencyMhz: 113.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 1. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0145",
      channel: "PATROL_DISPATCH",
      sender: "Control",
      frequencyMhz: 113.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 2. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0146",
      channel: "STREET_RACER_CB",
      sender: "Dispatcher Reyes",
      frequencyMhz: 113.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 3. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0147",
      channel: "GRID_WEATHER_ALERT",
      sender: "Ghost-Lead",
      frequencyMhz: 113.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 4. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0148",
      channel: "PIT_CREW_CREW",
      sender: "Mechanic Sal",
      frequencyMhz: 114.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 5. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0149",
      channel: "EMERGENCY_BROADCAST",
      sender: "Street-Eye-9",
      frequencyMhz: 114.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 6. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0150",
      channel: "PATROL_DISPATCH",
      sender: "Interceptor-01",
      frequencyMhz: 104.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 7. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0151",
      channel: "STREET_RACER_CB",
      sender: "Highway-Core",
      frequencyMhz: 104.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 8. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0152",
      channel: "GRID_WEATHER_ALERT",
      sender: "Unit-404",
      frequencyMhz: 104.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 9. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0153",
      channel: "PIT_CREW_CREW",
      sender: "Control",
      frequencyMhz: 105.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 10. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0154",
      channel: "EMERGENCY_BROADCAST",
      sender: "Dispatcher Reyes",
      frequencyMhz: 105.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 11. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0155",
      channel: "PATROL_DISPATCH",
      sender: "Ghost-Lead",
      frequencyMhz: 105.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 12. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0156",
      channel: "STREET_RACER_CB",
      sender: "Mechanic Sal",
      frequencyMhz: 105.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 1. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0157",
      channel: "GRID_WEATHER_ALERT",
      sender: "Street-Eye-9",
      frequencyMhz: 105.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 2. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0158",
      channel: "PIT_CREW_CREW",
      sender: "Interceptor-01",
      frequencyMhz: 106.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 3. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0159",
      channel: "EMERGENCY_BROADCAST",
      sender: "Highway-Core",
      frequencyMhz: 106.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 4. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0160",
      channel: "PATROL_DISPATCH",
      sender: "Unit-404",
      frequencyMhz: 106.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 5. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0161",
      channel: "STREET_RACER_CB",
      sender: "Control",
      frequencyMhz: 106.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 6. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0162",
      channel: "GRID_WEATHER_ALERT",
      sender: "Dispatcher Reyes",
      frequencyMhz: 106.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 7. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0163",
      channel: "PIT_CREW_CREW",
      sender: "Ghost-Lead",
      frequencyMhz: 107.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 8. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0164",
      channel: "EMERGENCY_BROADCAST",
      sender: "Mechanic Sal",
      frequencyMhz: 107.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 9. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0165",
      channel: "PATROL_DISPATCH",
      sender: "Street-Eye-9",
      frequencyMhz: 107.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 10. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0166",
      channel: "STREET_RACER_CB",
      sender: "Interceptor-01",
      frequencyMhz: 107.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 11. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0167",
      channel: "GRID_WEATHER_ALERT",
      sender: "Highway-Core",
      frequencyMhz: 107.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 12. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0168",
      channel: "PIT_CREW_CREW",
      sender: "Unit-404",
      frequencyMhz: 108.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 1. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0169",
      channel: "EMERGENCY_BROADCAST",
      sender: "Control",
      frequencyMhz: 108.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 2. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0170",
      channel: "PATROL_DISPATCH",
      sender: "Dispatcher Reyes",
      frequencyMhz: 108.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 3. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0171",
      channel: "STREET_RACER_CB",
      sender: "Ghost-Lead",
      frequencyMhz: 108.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 4. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0172",
      channel: "GRID_WEATHER_ALERT",
      sender: "Mechanic Sal",
      frequencyMhz: 108.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 5. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0173",
      channel: "PIT_CREW_CREW",
      sender: "Street-Eye-9",
      frequencyMhz: 109.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 6. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0174",
      channel: "EMERGENCY_BROADCAST",
      sender: "Interceptor-01",
      frequencyMhz: 109.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 7. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0175",
      channel: "PATROL_DISPATCH",
      sender: "Highway-Core",
      frequencyMhz: 109.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 8. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0176",
      channel: "STREET_RACER_CB",
      sender: "Unit-404",
      frequencyMhz: 109.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 9. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0177",
      channel: "GRID_WEATHER_ALERT",
      sender: "Control",
      frequencyMhz: 109.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 10. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0178",
      channel: "PIT_CREW_CREW",
      sender: "Dispatcher Reyes",
      frequencyMhz: 110.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 11. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0179",
      channel: "EMERGENCY_BROADCAST",
      sender: "Ghost-Lead",
      frequencyMhz: 110.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 12. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0180",
      channel: "PATROL_DISPATCH",
      sender: "Mechanic Sal",
      frequencyMhz: 110.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 1. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0181",
      channel: "STREET_RACER_CB",
      sender: "Street-Eye-9",
      frequencyMhz: 110.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 2. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0182",
      channel: "GRID_WEATHER_ALERT",
      sender: "Interceptor-01",
      frequencyMhz: 110.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 3. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0183",
      channel: "PIT_CREW_CREW",
      sender: "Highway-Core",
      frequencyMhz: 111.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 4. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0184",
      channel: "EMERGENCY_BROADCAST",
      sender: "Unit-404",
      frequencyMhz: 111.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 5. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0185",
      channel: "PATROL_DISPATCH",
      sender: "Control",
      frequencyMhz: 111.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 6. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0186",
      channel: "STREET_RACER_CB",
      sender: "Dispatcher Reyes",
      frequencyMhz: 111.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 7. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0187",
      channel: "GRID_WEATHER_ALERT",
      sender: "Ghost-Lead",
      frequencyMhz: 111.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 8. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0188",
      channel: "PIT_CREW_CREW",
      sender: "Mechanic Sal",
      frequencyMhz: 112.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 9. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0189",
      channel: "EMERGENCY_BROADCAST",
      sender: "Street-Eye-9",
      frequencyMhz: 112.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 10. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0190",
      channel: "PATROL_DISPATCH",
      sender: "Interceptor-01",
      frequencyMhz: 112.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 11. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0191",
      channel: "STREET_RACER_CB",
      sender: "Highway-Core",
      frequencyMhz: 112.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 12. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0192",
      channel: "GRID_WEATHER_ALERT",
      sender: "Unit-404",
      frequencyMhz: 112.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 1. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0193",
      channel: "PIT_CREW_CREW",
      sender: "Control",
      frequencyMhz: 113.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 2. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0194",
      channel: "EMERGENCY_BROADCAST",
      sender: "Dispatcher Reyes",
      frequencyMhz: 113.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 3. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0195",
      channel: "PATROL_DISPATCH",
      sender: "Ghost-Lead",
      frequencyMhz: 113.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 4. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0196",
      channel: "STREET_RACER_CB",
      sender: "Mechanic Sal",
      frequencyMhz: 113.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 5. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0197",
      channel: "GRID_WEATHER_ALERT",
      sender: "Street-Eye-9",
      frequencyMhz: 113.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 6. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0198",
      channel: "PIT_CREW_CREW",
      sender: "Interceptor-01",
      frequencyMhz: 114.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 7. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0199",
      channel: "EMERGENCY_BROADCAST",
      sender: "Highway-Core",
      frequencyMhz: 114.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 8. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0200",
      channel: "PATROL_DISPATCH",
      sender: "Unit-404",
      frequencyMhz: 104.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 9. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0201",
      channel: "STREET_RACER_CB",
      sender: "Control",
      frequencyMhz: 104.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 10. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0202",
      channel: "GRID_WEATHER_ALERT",
      sender: "Dispatcher Reyes",
      frequencyMhz: 104.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 11. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0203",
      channel: "PIT_CREW_CREW",
      sender: "Ghost-Lead",
      frequencyMhz: 105.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 12. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0204",
      channel: "EMERGENCY_BROADCAST",
      sender: "Mechanic Sal",
      frequencyMhz: 105.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 1. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0205",
      channel: "PATROL_DISPATCH",
      sender: "Street-Eye-9",
      frequencyMhz: 105.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 2. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0206",
      channel: "STREET_RACER_CB",
      sender: "Interceptor-01",
      frequencyMhz: 105.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 3. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0207",
      channel: "GRID_WEATHER_ALERT",
      sender: "Highway-Core",
      frequencyMhz: 105.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 4. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0208",
      channel: "PIT_CREW_CREW",
      sender: "Unit-404",
      frequencyMhz: 106.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 5. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0209",
      channel: "EMERGENCY_BROADCAST",
      sender: "Control",
      frequencyMhz: 106.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 6. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0210",
      channel: "PATROL_DISPATCH",
      sender: "Dispatcher Reyes",
      frequencyMhz: 106.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 7. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0211",
      channel: "STREET_RACER_CB",
      sender: "Ghost-Lead",
      frequencyMhz: 106.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 8. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0212",
      channel: "GRID_WEATHER_ALERT",
      sender: "Mechanic Sal",
      frequencyMhz: 106.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 9. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0213",
      channel: "PIT_CREW_CREW",
      sender: "Street-Eye-9",
      frequencyMhz: 107.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 10. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0214",
      channel: "EMERGENCY_BROADCAST",
      sender: "Interceptor-01",
      frequencyMhz: 107.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 11. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0215",
      channel: "PATROL_DISPATCH",
      sender: "Highway-Core",
      frequencyMhz: 107.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 12. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0216",
      channel: "STREET_RACER_CB",
      sender: "Unit-404",
      frequencyMhz: 107.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 1. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0217",
      channel: "GRID_WEATHER_ALERT",
      sender: "Control",
      frequencyMhz: 107.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 2. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0218",
      channel: "PIT_CREW_CREW",
      sender: "Dispatcher Reyes",
      frequencyMhz: 108.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 3. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0219",
      channel: "EMERGENCY_BROADCAST",
      sender: "Ghost-Lead",
      frequencyMhz: 108.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 4. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0220",
      channel: "PATROL_DISPATCH",
      sender: "Mechanic Sal",
      frequencyMhz: 108.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 5. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0221",
      channel: "STREET_RACER_CB",
      sender: "Street-Eye-9",
      frequencyMhz: 108.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 6. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0222",
      channel: "GRID_WEATHER_ALERT",
      sender: "Interceptor-01",
      frequencyMhz: 108.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 7. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0223",
      channel: "PIT_CREW_CREW",
      sender: "Highway-Core",
      frequencyMhz: 109.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 8. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0224",
      channel: "EMERGENCY_BROADCAST",
      sender: "Unit-404",
      frequencyMhz: 109.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 9. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0225",
      channel: "PATROL_DISPATCH",
      sender: "Control",
      frequencyMhz: 109.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 10. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0226",
      channel: "STREET_RACER_CB",
      sender: "Dispatcher Reyes",
      frequencyMhz: 109.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 11. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0227",
      channel: "GRID_WEATHER_ALERT",
      sender: "Ghost-Lead",
      frequencyMhz: 109.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 12. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0228",
      channel: "PIT_CREW_CREW",
      sender: "Mechanic Sal",
      frequencyMhz: 110.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 1. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0229",
      channel: "EMERGENCY_BROADCAST",
      sender: "Street-Eye-9",
      frequencyMhz: 110.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 2. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0230",
      channel: "PATROL_DISPATCH",
      sender: "Interceptor-01",
      frequencyMhz: 110.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 3. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0231",
      channel: "STREET_RACER_CB",
      sender: "Highway-Core",
      frequencyMhz: 110.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 4. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0232",
      channel: "GRID_WEATHER_ALERT",
      sender: "Unit-404",
      frequencyMhz: 110.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 5. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0233",
      channel: "PIT_CREW_CREW",
      sender: "Control",
      frequencyMhz: 111.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 6. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0234",
      channel: "EMERGENCY_BROADCAST",
      sender: "Dispatcher Reyes",
      frequencyMhz: 111.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 7. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0235",
      channel: "PATROL_DISPATCH",
      sender: "Ghost-Lead",
      frequencyMhz: 111.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 8. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0236",
      channel: "STREET_RACER_CB",
      sender: "Mechanic Sal",
      frequencyMhz: 111.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 9. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0237",
      channel: "GRID_WEATHER_ALERT",
      sender: "Street-Eye-9",
      frequencyMhz: 111.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 10. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0238",
      channel: "PIT_CREW_CREW",
      sender: "Interceptor-01",
      frequencyMhz: 112.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 11. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0239",
      channel: "EMERGENCY_BROADCAST",
      sender: "Highway-Core",
      frequencyMhz: 112.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 12. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0240",
      channel: "PATROL_DISPATCH",
      sender: "Unit-404",
      frequencyMhz: 112.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 1. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0241",
      channel: "STREET_RACER_CB",
      sender: "Control",
      frequencyMhz: 112.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 2. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0242",
      channel: "GRID_WEATHER_ALERT",
      sender: "Dispatcher Reyes",
      frequencyMhz: 112.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 3. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0243",
      channel: "PIT_CREW_CREW",
      sender: "Ghost-Lead",
      frequencyMhz: 113.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 4. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0244",
      channel: "EMERGENCY_BROADCAST",
      sender: "Mechanic Sal",
      frequencyMhz: 113.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 5. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0245",
      channel: "PATROL_DISPATCH",
      sender: "Street-Eye-9",
      frequencyMhz: 113.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 6. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0246",
      channel: "STREET_RACER_CB",
      sender: "Interceptor-01",
      frequencyMhz: 113.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 7. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0247",
      channel: "GRID_WEATHER_ALERT",
      sender: "Highway-Core",
      frequencyMhz: 113.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 8. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0248",
      channel: "PIT_CREW_CREW",
      sender: "Unit-404",
      frequencyMhz: 114.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 9. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0249",
      channel: "EMERGENCY_BROADCAST",
      sender: "Control",
      frequencyMhz: 114.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 10. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0250",
      channel: "PATROL_DISPATCH",
      sender: "Dispatcher Reyes",
      frequencyMhz: 104.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 11. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0251",
      channel: "STREET_RACER_CB",
      sender: "Ghost-Lead",
      frequencyMhz: 104.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 12. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0252",
      channel: "GRID_WEATHER_ALERT",
      sender: "Mechanic Sal",
      frequencyMhz: 104.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 1. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0253",
      channel: "PIT_CREW_CREW",
      sender: "Street-Eye-9",
      frequencyMhz: 105.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 2. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0254",
      channel: "EMERGENCY_BROADCAST",
      sender: "Interceptor-01",
      frequencyMhz: 105.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 3. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0255",
      channel: "PATROL_DISPATCH",
      sender: "Highway-Core",
      frequencyMhz: 105.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 4. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0256",
      channel: "STREET_RACER_CB",
      sender: "Unit-404",
      frequencyMhz: 105.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 5. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0257",
      channel: "GRID_WEATHER_ALERT",
      sender: "Control",
      frequencyMhz: 105.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 6. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0258",
      channel: "PIT_CREW_CREW",
      sender: "Dispatcher Reyes",
      frequencyMhz: 106.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 7. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0259",
      channel: "EMERGENCY_BROADCAST",
      sender: "Ghost-Lead",
      frequencyMhz: 106.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 8. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0260",
      channel: "PATROL_DISPATCH",
      sender: "Mechanic Sal",
      frequencyMhz: 106.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 9. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0261",
      channel: "STREET_RACER_CB",
      sender: "Street-Eye-9",
      frequencyMhz: 106.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 10. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0262",
      channel: "GRID_WEATHER_ALERT",
      sender: "Interceptor-01",
      frequencyMhz: 106.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 11. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0263",
      channel: "PIT_CREW_CREW",
      sender: "Highway-Core",
      frequencyMhz: 107.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 12. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0264",
      channel: "EMERGENCY_BROADCAST",
      sender: "Unit-404",
      frequencyMhz: 107.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 1. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0265",
      channel: "PATROL_DISPATCH",
      sender: "Control",
      frequencyMhz: 107.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 2. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0266",
      channel: "STREET_RACER_CB",
      sender: "Dispatcher Reyes",
      frequencyMhz: 107.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 3. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0267",
      channel: "GRID_WEATHER_ALERT",
      sender: "Ghost-Lead",
      frequencyMhz: 107.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 4. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0268",
      channel: "PIT_CREW_CREW",
      sender: "Mechanic Sal",
      frequencyMhz: 108.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 5. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0269",
      channel: "EMERGENCY_BROADCAST",
      sender: "Street-Eye-9",
      frequencyMhz: 108.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 6. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0270",
      channel: "PATROL_DISPATCH",
      sender: "Interceptor-01",
      frequencyMhz: 108.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 7. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0271",
      channel: "STREET_RACER_CB",
      sender: "Highway-Core",
      frequencyMhz: 108.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 8. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0272",
      channel: "GRID_WEATHER_ALERT",
      sender: "Unit-404",
      frequencyMhz: 108.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 9. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0273",
      channel: "PIT_CREW_CREW",
      sender: "Control",
      frequencyMhz: 109.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 10. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0274",
      channel: "EMERGENCY_BROADCAST",
      sender: "Dispatcher Reyes",
      frequencyMhz: 109.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 11. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0275",
      channel: "PATROL_DISPATCH",
      sender: "Ghost-Lead",
      frequencyMhz: 109.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 12. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0276",
      channel: "STREET_RACER_CB",
      sender: "Mechanic Sal",
      frequencyMhz: 109.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 1. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0277",
      channel: "GRID_WEATHER_ALERT",
      sender: "Street-Eye-9",
      frequencyMhz: 109.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 2. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0278",
      channel: "PIT_CREW_CREW",
      sender: "Interceptor-01",
      frequencyMhz: 110.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 3. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0279",
      channel: "EMERGENCY_BROADCAST",
      sender: "Highway-Core",
      frequencyMhz: 110.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 4. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0280",
      channel: "PATROL_DISPATCH",
      sender: "Unit-404",
      frequencyMhz: 110.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 5. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0281",
      channel: "STREET_RACER_CB",
      sender: "Control",
      frequencyMhz: 110.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 6. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0282",
      channel: "GRID_WEATHER_ALERT",
      sender: "Dispatcher Reyes",
      frequencyMhz: 110.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 7. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0283",
      channel: "PIT_CREW_CREW",
      sender: "Ghost-Lead",
      frequencyMhz: 111.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 8. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0284",
      channel: "EMERGENCY_BROADCAST",
      sender: "Mechanic Sal",
      frequencyMhz: 111.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 9. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0285",
      channel: "PATROL_DISPATCH",
      sender: "Street-Eye-9",
      frequencyMhz: 111.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 10. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0286",
      channel: "STREET_RACER_CB",
      sender: "Interceptor-01",
      frequencyMhz: 111.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 11. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0287",
      channel: "GRID_WEATHER_ALERT",
      sender: "Highway-Core",
      frequencyMhz: 111.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 12. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0288",
      channel: "PIT_CREW_CREW",
      sender: "Unit-404",
      frequencyMhz: 112.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 1. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0289",
      channel: "EMERGENCY_BROADCAST",
      sender: "Control",
      frequencyMhz: 112.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 2. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0290",
      channel: "PATROL_DISPATCH",
      sender: "Dispatcher Reyes",
      frequencyMhz: 112.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 3. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0291",
      channel: "STREET_RACER_CB",
      sender: "Ghost-Lead",
      frequencyMhz: 112.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 4. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0292",
      channel: "GRID_WEATHER_ALERT",
      sender: "Mechanic Sal",
      frequencyMhz: 112.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 5. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0293",
      channel: "PIT_CREW_CREW",
      sender: "Street-Eye-9",
      frequencyMhz: 113.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 6. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0294",
      channel: "EMERGENCY_BROADCAST",
      sender: "Interceptor-01",
      frequencyMhz: 113.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 7. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0295",
      channel: "PATROL_DISPATCH",
      sender: "Highway-Core",
      frequencyMhz: 113.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 8. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0296",
      channel: "STREET_RACER_CB",
      sender: "Unit-404",
      frequencyMhz: 113.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 9. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0297",
      channel: "GRID_WEATHER_ALERT",
      sender: "Control",
      frequencyMhz: 113.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 10. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0298",
      channel: "PIT_CREW_CREW",
      sender: "Dispatcher Reyes",
      frequencyMhz: 114.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 11. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0299",
      channel: "EMERGENCY_BROADCAST",
      sender: "Ghost-Lead",
      frequencyMhz: 114.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 12. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0300",
      channel: "PATROL_DISPATCH",
      sender: "Mechanic Sal",
      frequencyMhz: 104.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 1. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0301",
      channel: "STREET_RACER_CB",
      sender: "Street-Eye-9",
      frequencyMhz: 104.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 2. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0302",
      channel: "GRID_WEATHER_ALERT",
      sender: "Interceptor-01",
      frequencyMhz: 104.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 3. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0303",
      channel: "PIT_CREW_CREW",
      sender: "Highway-Core",
      frequencyMhz: 105.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 4. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0304",
      channel: "EMERGENCY_BROADCAST",
      sender: "Unit-404",
      frequencyMhz: 105.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 5. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0305",
      channel: "PATROL_DISPATCH",
      sender: "Control",
      frequencyMhz: 105.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 6. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0306",
      channel: "STREET_RACER_CB",
      sender: "Dispatcher Reyes",
      frequencyMhz: 105.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 7. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0307",
      channel: "GRID_WEATHER_ALERT",
      sender: "Ghost-Lead",
      frequencyMhz: 105.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 8. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0308",
      channel: "PIT_CREW_CREW",
      sender: "Mechanic Sal",
      frequencyMhz: 106.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 9. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0309",
      channel: "EMERGENCY_BROADCAST",
      sender: "Street-Eye-9",
      frequencyMhz: 106.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 10. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0310",
      channel: "PATROL_DISPATCH",
      sender: "Interceptor-01",
      frequencyMhz: 106.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 11. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0311",
      channel: "STREET_RACER_CB",
      sender: "Highway-Core",
      frequencyMhz: 106.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 12. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0312",
      channel: "GRID_WEATHER_ALERT",
      sender: "Unit-404",
      frequencyMhz: 106.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 1. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0313",
      channel: "PIT_CREW_CREW",
      sender: "Control",
      frequencyMhz: 107.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 2. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0314",
      channel: "EMERGENCY_BROADCAST",
      sender: "Dispatcher Reyes",
      frequencyMhz: 107.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 3. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0315",
      channel: "PATROL_DISPATCH",
      sender: "Ghost-Lead",
      frequencyMhz: 107.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 4. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0316",
      channel: "STREET_RACER_CB",
      sender: "Mechanic Sal",
      frequencyMhz: 107.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 5. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0317",
      channel: "GRID_WEATHER_ALERT",
      sender: "Street-Eye-9",
      frequencyMhz: 107.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 6. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0318",
      channel: "PIT_CREW_CREW",
      sender: "Interceptor-01",
      frequencyMhz: 108.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 7. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0319",
      channel: "EMERGENCY_BROADCAST",
      sender: "Highway-Core",
      frequencyMhz: 108.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 8. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0320",
      channel: "PATROL_DISPATCH",
      sender: "Unit-404",
      frequencyMhz: 108.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 9. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0321",
      channel: "STREET_RACER_CB",
      sender: "Control",
      frequencyMhz: 108.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 10. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0322",
      channel: "GRID_WEATHER_ALERT",
      sender: "Dispatcher Reyes",
      frequencyMhz: 108.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 11. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0323",
      channel: "PIT_CREW_CREW",
      sender: "Ghost-Lead",
      frequencyMhz: 109.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 12. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0324",
      channel: "EMERGENCY_BROADCAST",
      sender: "Mechanic Sal",
      frequencyMhz: 109.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 1. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0325",
      channel: "PATROL_DISPATCH",
      sender: "Street-Eye-9",
      frequencyMhz: 109.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 2. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0326",
      channel: "STREET_RACER_CB",
      sender: "Interceptor-01",
      frequencyMhz: 109.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 3. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0327",
      channel: "GRID_WEATHER_ALERT",
      sender: "Highway-Core",
      frequencyMhz: 109.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 4. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0328",
      channel: "PIT_CREW_CREW",
      sender: "Unit-404",
      frequencyMhz: 110.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 5. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0329",
      channel: "EMERGENCY_BROADCAST",
      sender: "Control",
      frequencyMhz: 110.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 6. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0330",
      channel: "PATROL_DISPATCH",
      sender: "Dispatcher Reyes",
      frequencyMhz: 110.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 7. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0331",
      channel: "STREET_RACER_CB",
      sender: "Ghost-Lead",
      frequencyMhz: 110.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 8. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0332",
      channel: "GRID_WEATHER_ALERT",
      sender: "Mechanic Sal",
      frequencyMhz: 110.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 9. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0333",
      channel: "PIT_CREW_CREW",
      sender: "Street-Eye-9",
      frequencyMhz: 111.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 10. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0334",
      channel: "EMERGENCY_BROADCAST",
      sender: "Interceptor-01",
      frequencyMhz: 111.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 11. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0335",
      channel: "PATROL_DISPATCH",
      sender: "Highway-Core",
      frequencyMhz: 111.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 12. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0336",
      channel: "STREET_RACER_CB",
      sender: "Unit-404",
      frequencyMhz: 111.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 1. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0337",
      channel: "GRID_WEATHER_ALERT",
      sender: "Control",
      frequencyMhz: 111.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 2. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0338",
      channel: "PIT_CREW_CREW",
      sender: "Dispatcher Reyes",
      frequencyMhz: 112.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 3. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0339",
      channel: "EMERGENCY_BROADCAST",
      sender: "Ghost-Lead",
      frequencyMhz: 112.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 4. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0340",
      channel: "PATROL_DISPATCH",
      sender: "Mechanic Sal",
      frequencyMhz: 112.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 5. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0341",
      channel: "STREET_RACER_CB",
      sender: "Street-Eye-9",
      frequencyMhz: 112.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 6. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0342",
      channel: "GRID_WEATHER_ALERT",
      sender: "Interceptor-01",
      frequencyMhz: 112.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 7. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0343",
      channel: "PIT_CREW_CREW",
      sender: "Highway-Core",
      frequencyMhz: 113.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 8. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0344",
      channel: "EMERGENCY_BROADCAST",
      sender: "Unit-404",
      frequencyMhz: 113.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 9. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0345",
      channel: "PATROL_DISPATCH",
      sender: "Control",
      frequencyMhz: 113.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 10. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0346",
      channel: "STREET_RACER_CB",
      sender: "Dispatcher Reyes",
      frequencyMhz: 113.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 11. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0347",
      channel: "GRID_WEATHER_ALERT",
      sender: "Ghost-Lead",
      frequencyMhz: 113.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 12. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0348",
      channel: "PIT_CREW_CREW",
      sender: "Mechanic Sal",
      frequencyMhz: 114.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 1. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0349",
      channel: "EMERGENCY_BROADCAST",
      sender: "Street-Eye-9",
      frequencyMhz: 114.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 2. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0350",
      channel: "PATROL_DISPATCH",
      sender: "Interceptor-01",
      frequencyMhz: 104.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 3. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0351",
      channel: "STREET_RACER_CB",
      sender: "Highway-Core",
      frequencyMhz: 104.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 4. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0352",
      channel: "GRID_WEATHER_ALERT",
      sender: "Unit-404",
      frequencyMhz: 104.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 5. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0353",
      channel: "PIT_CREW_CREW",
      sender: "Control",
      frequencyMhz: 105.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 6. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0354",
      channel: "EMERGENCY_BROADCAST",
      sender: "Dispatcher Reyes",
      frequencyMhz: 105.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 7. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0355",
      channel: "PATROL_DISPATCH",
      sender: "Ghost-Lead",
      frequencyMhz: 105.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 8. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0356",
      channel: "STREET_RACER_CB",
      sender: "Mechanic Sal",
      frequencyMhz: 105.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 9. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0357",
      channel: "GRID_WEATHER_ALERT",
      sender: "Street-Eye-9",
      frequencyMhz: 105.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 10. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0358",
      channel: "PIT_CREW_CREW",
      sender: "Interceptor-01",
      frequencyMhz: 106.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 11. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0359",
      channel: "EMERGENCY_BROADCAST",
      sender: "Highway-Core",
      frequencyMhz: 106.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 12. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0360",
      channel: "PATROL_DISPATCH",
      sender: "Unit-404",
      frequencyMhz: 106.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 1. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0361",
      channel: "STREET_RACER_CB",
      sender: "Control",
      frequencyMhz: 106.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 2. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0362",
      channel: "GRID_WEATHER_ALERT",
      sender: "Dispatcher Reyes",
      frequencyMhz: 106.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 3. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0363",
      channel: "PIT_CREW_CREW",
      sender: "Ghost-Lead",
      frequencyMhz: 107.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 4. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0364",
      channel: "EMERGENCY_BROADCAST",
      sender: "Mechanic Sal",
      frequencyMhz: 107.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 5. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0365",
      channel: "PATROL_DISPATCH",
      sender: "Street-Eye-9",
      frequencyMhz: 107.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 6. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0366",
      channel: "STREET_RACER_CB",
      sender: "Interceptor-01",
      frequencyMhz: 107.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 7. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0367",
      channel: "GRID_WEATHER_ALERT",
      sender: "Highway-Core",
      frequencyMhz: 107.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 8. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0368",
      channel: "PIT_CREW_CREW",
      sender: "Unit-404",
      frequencyMhz: 108.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 9. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0369",
      channel: "EMERGENCY_BROADCAST",
      sender: "Control",
      frequencyMhz: 108.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 10. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0370",
      channel: "PATROL_DISPATCH",
      sender: "Dispatcher Reyes",
      frequencyMhz: 108.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 11. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0371",
      channel: "STREET_RACER_CB",
      sender: "Ghost-Lead",
      frequencyMhz: 108.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 12. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0372",
      channel: "GRID_WEATHER_ALERT",
      sender: "Mechanic Sal",
      frequencyMhz: 108.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 1. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0373",
      channel: "PIT_CREW_CREW",
      sender: "Street-Eye-9",
      frequencyMhz: 109.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 2. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0374",
      channel: "EMERGENCY_BROADCAST",
      sender: "Interceptor-01",
      frequencyMhz: 109.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 3. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0375",
      channel: "PATROL_DISPATCH",
      sender: "Highway-Core",
      frequencyMhz: 109.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 4. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0376",
      channel: "STREET_RACER_CB",
      sender: "Unit-404",
      frequencyMhz: 109.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 5. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0377",
      channel: "GRID_WEATHER_ALERT",
      sender: "Control",
      frequencyMhz: 109.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 6. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0378",
      channel: "PIT_CREW_CREW",
      sender: "Dispatcher Reyes",
      frequencyMhz: 110.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 7. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0379",
      channel: "EMERGENCY_BROADCAST",
      sender: "Ghost-Lead",
      frequencyMhz: 110.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 8. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0380",
      channel: "PATROL_DISPATCH",
      sender: "Mechanic Sal",
      frequencyMhz: 110.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 9. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0381",
      channel: "STREET_RACER_CB",
      sender: "Street-Eye-9",
      frequencyMhz: 110.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 10. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0382",
      channel: "GRID_WEATHER_ALERT",
      sender: "Interceptor-01",
      frequencyMhz: 110.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 11. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0383",
      channel: "PIT_CREW_CREW",
      sender: "Highway-Core",
      frequencyMhz: 111.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 12. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0384",
      channel: "EMERGENCY_BROADCAST",
      sender: "Unit-404",
      frequencyMhz: 111.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 1. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0385",
      channel: "PATROL_DISPATCH",
      sender: "Control",
      frequencyMhz: 111.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 2. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0386",
      channel: "STREET_RACER_CB",
      sender: "Dispatcher Reyes",
      frequencyMhz: 111.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 3. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0387",
      channel: "GRID_WEATHER_ALERT",
      sender: "Ghost-Lead",
      frequencyMhz: 111.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 4. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0388",
      channel: "PIT_CREW_CREW",
      sender: "Mechanic Sal",
      frequencyMhz: 112.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 5. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0389",
      channel: "EMERGENCY_BROADCAST",
      sender: "Street-Eye-9",
      frequencyMhz: 112.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 6. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0390",
      channel: "PATROL_DISPATCH",
      sender: "Interceptor-01",
      frequencyMhz: 112.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 7. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0391",
      channel: "STREET_RACER_CB",
      sender: "Highway-Core",
      frequencyMhz: 112.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 8. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0392",
      channel: "GRID_WEATHER_ALERT",
      sender: "Unit-404",
      frequencyMhz: 112.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 9. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0393",
      channel: "PIT_CREW_CREW",
      sender: "Control",
      frequencyMhz: 113.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 10. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0394",
      channel: "EMERGENCY_BROADCAST",
      sender: "Dispatcher Reyes",
      frequencyMhz: 113.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 11. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0395",
      channel: "PATROL_DISPATCH",
      sender: "Ghost-Lead",
      frequencyMhz: 113.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 12. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0396",
      channel: "STREET_RACER_CB",
      sender: "Mechanic Sal",
      frequencyMhz: 113.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 1. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0397",
      channel: "GRID_WEATHER_ALERT",
      sender: "Street-Eye-9",
      frequencyMhz: 113.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 2. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0398",
      channel: "PIT_CREW_CREW",
      sender: "Interceptor-01",
      frequencyMhz: 114.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 3. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0399",
      channel: "EMERGENCY_BROADCAST",
      sender: "Highway-Core",
      frequencyMhz: 114.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 4. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0400",
      channel: "PATROL_DISPATCH",
      sender: "Unit-404",
      frequencyMhz: 104.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 5. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0401",
      channel: "STREET_RACER_CB",
      sender: "Control",
      frequencyMhz: 104.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 6. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0402",
      channel: "GRID_WEATHER_ALERT",
      sender: "Dispatcher Reyes",
      frequencyMhz: 104.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 7. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0403",
      channel: "PIT_CREW_CREW",
      sender: "Ghost-Lead",
      frequencyMhz: 105.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 8. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0404",
      channel: "EMERGENCY_BROADCAST",
      sender: "Mechanic Sal",
      frequencyMhz: 105.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 9. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0405",
      channel: "PATROL_DISPATCH",
      sender: "Street-Eye-9",
      frequencyMhz: 105.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 10. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0406",
      channel: "STREET_RACER_CB",
      sender: "Interceptor-01",
      frequencyMhz: 105.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 11. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0407",
      channel: "GRID_WEATHER_ALERT",
      sender: "Highway-Core",
      frequencyMhz: 105.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 12. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0408",
      channel: "PIT_CREW_CREW",
      sender: "Unit-404",
      frequencyMhz: 106.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 1. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0409",
      channel: "EMERGENCY_BROADCAST",
      sender: "Control",
      frequencyMhz: 106.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 2. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0410",
      channel: "PATROL_DISPATCH",
      sender: "Dispatcher Reyes",
      frequencyMhz: 106.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 3. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0411",
      channel: "STREET_RACER_CB",
      sender: "Ghost-Lead",
      frequencyMhz: 106.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 4. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0412",
      channel: "GRID_WEATHER_ALERT",
      sender: "Mechanic Sal",
      frequencyMhz: 106.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 5. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0413",
      channel: "PIT_CREW_CREW",
      sender: "Street-Eye-9",
      frequencyMhz: 107.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 6. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0414",
      channel: "EMERGENCY_BROADCAST",
      sender: "Interceptor-01",
      frequencyMhz: 107.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 7. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0415",
      channel: "PATROL_DISPATCH",
      sender: "Highway-Core",
      frequencyMhz: 107.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 8. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0416",
      channel: "STREET_RACER_CB",
      sender: "Unit-404",
      frequencyMhz: 107.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 9. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0417",
      channel: "GRID_WEATHER_ALERT",
      sender: "Control",
      frequencyMhz: 107.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 10. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0418",
      channel: "PIT_CREW_CREW",
      sender: "Dispatcher Reyes",
      frequencyMhz: 108.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 11. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0419",
      channel: "EMERGENCY_BROADCAST",
      sender: "Ghost-Lead",
      frequencyMhz: 108.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 12. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0420",
      channel: "PATROL_DISPATCH",
      sender: "Mechanic Sal",
      frequencyMhz: 108.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 1. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0421",
      channel: "STREET_RACER_CB",
      sender: "Street-Eye-9",
      frequencyMhz: 108.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 2. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0422",
      channel: "GRID_WEATHER_ALERT",
      sender: "Interceptor-01",
      frequencyMhz: 108.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 3. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0423",
      channel: "PIT_CREW_CREW",
      sender: "Highway-Core",
      frequencyMhz: 109.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 4. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0424",
      channel: "EMERGENCY_BROADCAST",
      sender: "Unit-404",
      frequencyMhz: 109.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 5. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0425",
      channel: "PATROL_DISPATCH",
      sender: "Control",
      frequencyMhz: 109.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 6. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0426",
      channel: "STREET_RACER_CB",
      sender: "Dispatcher Reyes",
      frequencyMhz: 109.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 7. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0427",
      channel: "GRID_WEATHER_ALERT",
      sender: "Ghost-Lead",
      frequencyMhz: 109.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 8. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0428",
      channel: "PIT_CREW_CREW",
      sender: "Mechanic Sal",
      frequencyMhz: 110.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 9. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0429",
      channel: "EMERGENCY_BROADCAST",
      sender: "Street-Eye-9",
      frequencyMhz: 110.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 10. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0430",
      channel: "PATROL_DISPATCH",
      sender: "Interceptor-01",
      frequencyMhz: 110.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 11. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0431",
      channel: "STREET_RACER_CB",
      sender: "Highway-Core",
      frequencyMhz: 110.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 12. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0432",
      channel: "GRID_WEATHER_ALERT",
      sender: "Unit-404",
      frequencyMhz: 110.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 1. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0433",
      channel: "PIT_CREW_CREW",
      sender: "Control",
      frequencyMhz: 111.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 2. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0434",
      channel: "EMERGENCY_BROADCAST",
      sender: "Dispatcher Reyes",
      frequencyMhz: 111.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 3. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0435",
      channel: "PATROL_DISPATCH",
      sender: "Ghost-Lead",
      frequencyMhz: 111.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 4. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0436",
      channel: "STREET_RACER_CB",
      sender: "Mechanic Sal",
      frequencyMhz: 111.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 5. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0437",
      channel: "GRID_WEATHER_ALERT",
      sender: "Street-Eye-9",
      frequencyMhz: 111.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 6. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0438",
      channel: "PIT_CREW_CREW",
      sender: "Interceptor-01",
      frequencyMhz: 112.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 7. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0439",
      channel: "EMERGENCY_BROADCAST",
      sender: "Highway-Core",
      frequencyMhz: 112.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 8. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0440",
      channel: "PATROL_DISPATCH",
      sender: "Unit-404",
      frequencyMhz: 112.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 9. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0441",
      channel: "STREET_RACER_CB",
      sender: "Control",
      frequencyMhz: 112.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 10. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0442",
      channel: "GRID_WEATHER_ALERT",
      sender: "Dispatcher Reyes",
      frequencyMhz: 112.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 11. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0443",
      channel: "PIT_CREW_CREW",
      sender: "Ghost-Lead",
      frequencyMhz: 113.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 12. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0444",
      channel: "EMERGENCY_BROADCAST",
      sender: "Mechanic Sal",
      frequencyMhz: 113.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 1. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0445",
      channel: "PATROL_DISPATCH",
      sender: "Street-Eye-9",
      frequencyMhz: 113.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 2. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0446",
      channel: "STREET_RACER_CB",
      sender: "Interceptor-01",
      frequencyMhz: 113.7,
      triggerCondition: "COLLISION_IMPACT",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 3. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0447",
      channel: "GRID_WEATHER_ALERT",
      sender: "Highway-Core",
      frequencyMhz: 113.9,
      triggerCondition: "NITRO_ACTIVATION",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 4. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
    {
      transmissionId: "RADIO-0448",
      channel: "PIT_CREW_CREW",
      sender: "Unit-404",
      frequencyMhz: 114.1,
      triggerCondition: "LAP_RECORD",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 5. Deploying electromagnetic perimeter barriers.",
      priority: "CRITICAL"
    },
    {
      transmissionId: "RADIO-0449",
      channel: "EMERGENCY_BROADCAST",
      sender: "Control",
      frequencyMhz: 114.3,
      triggerCondition: "HAZARD_SPOTTED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 6. Deploying electromagnetic perimeter barriers.",
      priority: "STANDARD"
    },
    {
      transmissionId: "RADIO-0450",
      channel: "PATROL_DISPATCH",
      sender: "Dispatcher Reyes",
      frequencyMhz: 104.5,
      triggerCondition: "HIGH_SPEED_EXCEED",
      message: "Attention all units, high-velocity unregistered hypercar detected in Sector 7. Deploying electromagnetic perimeter barriers.",
      priority: "HIGH"
    },
  ]
};
