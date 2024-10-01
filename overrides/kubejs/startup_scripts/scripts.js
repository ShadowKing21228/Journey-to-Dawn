Platform.mods.kubejs.name = 'Journey to Dawn'

ItemEvents.modification(event => {
  event.modify('tyafi:oprn_boots', item => {
    item.armorProtection = 20
  })
  event.modify('tyafi:shchz_boots', item => {
    item.armorProtection = 20
  })
  event.modify('tyafi:kam_boots', item => {
    item.armorProtection = 20
  })
  event.modify('tyafi:chr_boots', item => {
    item.armorProtection = 20
  })
  event.modify('tyafi:tyhb_boots', item => {
    item.armorProtection = 20
  })
})

ItemEvents.modification(event => {
  event.modify('undergarden:utherium_helmet', item => {
    item.armorProtection = 1.5
  })
  event.modify('undergarden:utherium_chestplate', item => {
    item.armorProtection = 5
  })
  event.modify('undergarden:utherium_leggings', item => {
    item.armorProtection = 4
  })
  event.modify('undergarden:utherium_boots', item => {
    item.armorProtection = 1.5
  })
})

ItemEvents.modification(event => {
    event.modify('undergarden:utherium_sword', item => {
    item.tier = tier => {
        tier.level = 1
    }
  })
	event.modify('undergarden:utherium_pickaxe', item => {
    item.tier = tier => {
        tier.level = 1
    }
  })
	event.modify('undergarden:utherium_axe', item => {
    item.tier = tier => {
        tier.level = 1
    }
  })
	event.modify('undergarden:utherium_shovel', item => {
    item.tier = tier => {
        tier.level = 1
    }
  })
	event.modify('undergarden:utherium_hoe', item => {
    item.tier = tier => {
        tier.level = 1
    }
  })
})

BlockEvents.modification(event => {
  event.modify("minecraft:spawner", (m) => {
    m.destroySpeed = 24.0
    m.explosionResistance = 1200.0
	})
})
	
BlockEvents.modification(event => {	
  event.modify("undergarden:smogstem_log", (m) => {
    m.requiresTool = true
	})
  event.modify("undergarden:stripped_smogstem_log", (m) => {
    m.requiresTool = true
	})
  event.modify("undergarden:smogstem_wood", (m) => {
    m.requiresTool = true
	})
  event.modify("undergarden:stripped_smogstem_wood", (m) => {
    m.requiresTool = true
	})
  event.modify("undergarden:wigglewood_log", (m) => {
    m.requiresTool = true
	})
  event.modify("undergarden:stripped_wigglewood_log", (m) => {
    m.requiresTool = true
	})
  event.modify("undergarden:wigglewood_wood", (m) => {
    m.requiresTool = true
	})
  event.modify("undergarden:stripped_wigglewood_wood", (m) => {
    m.requiresTool = true
	})
  event.modify("undergarden:grongle_log", (m) => {
    m.requiresTool = true
	})
  event.modify("undergarden:stripped_grongle_log", (m) => {
    m.requiresTool = true
	})
  event.modify("undergarden:grongle_wood", (m) => {
    m.requiresTool = true
	})
  event.modify("undergarden:stripped_grongle_wood", (m) => {
    m.requiresTool = true
	})
})
