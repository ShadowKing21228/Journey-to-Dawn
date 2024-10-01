StartupEvents.registry("block", (event) => {
    event.create("fragile_handicraft_alloy") // Create a new block
    .material("metal") // Set a material (affects the sounds and some properties)
    .hardness(4.0) // Set hardness (affects mining time)
    .resistance(5.0) // Set resistance (to explosions, etc)
    .requiresTool(true) // Requires a tool or it won't drop (see tags below)
    .tagBlock("mineable/pickaxe") // or a pickaxe
    .tagBlock('minecraft:needs_iron_tool') // the tool tier must be at least iron
	.textureAll('kubejs:block/fragile_handicraft_alloy')
})
StartupEvents.registry("block", (event) => {
    event.create("hardened_craft_alloy") // Create a new block
    .material("metal") // Set a material (affects the sounds and some properties)
    .hardness(9.0) // Set hardness (affects mining time)
    .resistance(5.0) // Set resistance (to explosions, etc)
    .requiresTool(true) // Requires a tool or it won't drop (see tags below)
    .tagBlock("mineable/pickaxe") // or a pickaxe
    .tagBlock('minecraft:needs_iron_tool') // the tool tier must be at least iron
	.textureAll('kubejs:block/hardened_handicraft_alloy')
})
StartupEvents.registry("block", (event) => {
    event.create("humus") // Create a new block
    .material("moss") // Set a material (affects the sounds and some properties)
    .hardness(0.125) // Set hardness (affects mining time)
    .resistance(1.0) // Set resistance (to explosions, etc)
    .requiresTool(false) // Requires a tool or it won't drop (see tags below)
    .tagBlock("mineable/hoe") // or a pickaxe
	.textureAll('kubejs:block/humus')
})
StartupEvents.registry("block", (event) => {
    event.create("compressed_stone") // Create a new block
    .material("stone") // Set a material (affects the sounds and some properties)
    .hardness(8.0) // Set hardness (affects mining time)
    .resistance(8.0) // Set resistance (to explosions, etc)
    .requiresTool(true) // Requires a tool or it won't drop (see tags below)
    .tagBlock("mineable/pickaxe") // or a pickaxe
    .tagBlock('minecraft:needs_iron_tool') // the tool tier must be at least iron
	.textureAll('kubejs:block/compressed_stone')
})
StartupEvents.registry("block", (event) => {
    event.create("highly_compressed_stone") // Create a new block
    .material("stone") // Set a material (affects the sounds and some properties)
    .hardness(16.0) // Set hardness (affects mining time)
    .resistance(16.0) // Set resistance (to explosions, etc)
    .requiresTool(true) // Requires a tool or it won't drop (see tags below)
    .tagBlock("mineable/pickaxe") // or a pickaxe
    .tagBlock('minecraft:needs_diamond_tool') // the tool tier must be at least iron
	.textureAll('kubejs:block/highly_compressed_stone')
})
StartupEvents.registry("block", (event) => {
    event.create("handicraft_planks") // Create a new block
    .material("wood") // Set a material (affects the sounds and some properties)
    .hardness(2.0) // Set hardness (affects mining time)
    .resistance(3.0) // Set resistance (to explosions, etc)
    .requiresTool(false) // Requires a tool or it won't drop (see tags below)
    .tagBlock("mineable/axe") // or a pickaxe
	.tagBlock('minecraft:planks')
	.textureAll('kubejs:block/handicraft_planks')
})