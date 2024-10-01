ServerEvents.tags('item', event => {

  event.add('forge:dimdungeon_artifacts', 'dimdungeons:item_trophy_1')
  
  event.add('forge:dimdungeon_artifacts', 'dimdungeons:item_trophy_2')
  
  event.add('forge:dimdungeon_artifacts', 'dimdungeons:item_trophy_3')
  
  event.add('forge:dimdungeon_artifacts', 'dimdungeons:item_trophy_4')  
  
  event.add('forge:dimdungeon_artifacts', 'dimdungeons:item_trophy_5')
  
  event.add('forge:dimdungeon_artifacts', 'dimdungeons:item_trophy_6')
  
  event.add('forge:dimdungeon_artifacts', 'dimdungeons:item_trophy_7')
  
  event.add('forge:dimdungeon_artifacts', 'dimdungeons:item_trophy_8')  
})
ServerEvents.tags('item', event => {

  event.add('forge:archwood_leaves', 'ars_nouveau:blue_archwood_leaves')
  
  event.add('forge:archwood_leaves', 'ars_nouveau:purple_archwood_leaves')
  
  event.add('forge:archwood_leaves', 'ars_nouveau:green_archwood_leaves')
  
  event.add('forge:archwood_leaves', 'ars_nouveau:red_archwood_leaves')  
})
ServerEvents.tags('item', event => {

  event.add('forge:gavels', 'forbidden_arcanus:wooden_blacksmith_gavel')
  
  event.add('forge:gavels', 'forbidden_arcanus:stone_blacksmith_gavel')
  
  event.add('forge:gavels', 'forbidden_arcanus:iron_blacksmith_gavel')
  
  event.add('forge:gavels', 'forbidden_arcanus:golden_blacksmith_gavel')  
  
  event.add('forge:gavels', 'forbidden_arcanus:diamond_blacksmith_gavel')
  
  event.add('forge:gavels', 'forbidden_arcanus:netherite_blacksmith_gavel')
  
  event.add('forge:gavels', 'forbidden_arcanus:deorum_blacksmith_gavel')
  
  event.add('forge:gavels', 'forbidden_arcanus:reinforced_deorum_blacksmith_gavel')  
})


ServerEvents.recipes(event => {
    event.recipes.farmersdelight.cutting(
        "undergarden:catalyst",
        "hexerei:warhammer", 
        [ 
            "2x kubejs:fractured_catalyst",
        ],
		"minecraft:block.beacon.deactivate",
    )
})
ServerEvents.recipes(event => {
    event.recipes.farmersdelight.cutting(
        "create:andesite_alloy",
        "#forge:gavels", 
        [ 
            "kubejs:andesite_cladding_plate"
        ],
		"minecraft:item.lodestone_compass.lock",
    )
})
ServerEvents.recipes(event => {
    event.recipes.farmersdelight.cutting(
        "minecraft:iron_ingot",
        "#forge:gavels", 
        [ 
            "kubejs:iron_plate"
        ],
		"minecraft:item.lodestone_compass.lock",
    )
})
ServerEvents.recipes(event => {
    event.recipes.farmersdelight.cutting(
        "minecraft:gold_ingot",
        "#forge:gavels", 
        [ 
            "kubejs:golden_plate"
        ],
		"minecraft:item.lodestone_compass.lock",
    )
})
ServerEvents.recipes(event => {
    event.recipes.farmersdelight.cutting(
        "create:brass_ingot",
        "#forge:gavels", 
        [ 
            "kubejs:brass_plate"
        ],
		"minecraft:item.lodestone_compass.lock",
    )
})
ServerEvents.recipes(event => {
    event.recipes.farmersdelight.cutting(
        "minecraft:copper_ingot",
        "#forge:gavels", 
        [ 
            "kubejs:copper_plate"
        ],
		"minecraft:item.lodestone_compass.lock",
    )
})


ServerEvents.recipes(event => {
    event.recipes.farmersdelight.cutting(
        "kubejs:wood_bast",
        "undergarden:depthrock_pebble", 
        [ 
            Item.of("minecraft:stick")
                .withChance(0.75),
            Item.of("farmersdelight:tree_bark")
                .withChance(0.5)
        ],
		"minecraft:item.axe.strip",
    )
})
ServerEvents.recipes(event => {
    event.recipes.farmersdelight.cutting(
        "minecraft:dragon_head",
        "forbidden_arcanus:mystical_dagger", 
        [ 
            "2x forbidden_arcanus:dragon_scale",
            Item.of("forbidden_arcanus:dragon_scale")
                .withChance(0.5)
        ],
		"minecraft:block.conduit.deactivate",
    )
})


BlockEvents.rightClicked('undergarden:smogstem_log', event => {
    if (event.item.id == 'undergarden:depthrock_pebble') 
	{
		event.player.swing()
        event.block.popItemFromFace('kubejs:wood_bast', event.getFacing())
        event.block.set('undergarden:stripped_smogstem_log')
        event.player.attack('generic', 2)
    }
})
BlockEvents.rightClicked('undergarden:wigglewood_log', event => {
    if (event.item.id == 'undergarden:depthrock_pebble') 
	{
		event.player.swing()
        event.block.popItemFromFace('kubejs:wood_bast', event.getFacing())
        event.block.set('undergarden:stripped_wigglewood_log')
        event.player.attack('generic', 2)
    }
})
BlockEvents.rightClicked('undergarden:grongle_log', event => {
    if (event.item.id == 'undergarden:depthrock_pebble') 
	{
		event.player.swing()
        event.block.popItemFromFace('kubejs:wood_bast', event.getFacing())
        event.block.set('undergarden:stripped_grongle_log')
        event.player.attack('generic', 2)
    }
})

ServerEvents.tags('item', event => {
  event.add('forge:paper', 'create_bic_bit:dirty_paper')
})


